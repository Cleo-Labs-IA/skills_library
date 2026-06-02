# Build a custom MCP client

> Talk to [`@cleo-labs/skills-mcp`](https://github.com/Cleo-Labs-IA/skills_library/tree/main/mcp-server) directly with the JSON-RPC wire protocol — no SDK, no editor. Useful for embedded use cases, polyglot stacks, or when you want to understand exactly what the official SDKs do under the hood.

```bash
npx -y @cleo-labs/skills-mcp@latest
```

The server speaks **MCP 2025-06-18** over stdio. JSON-RPC 2.0 messages in, JSON-RPC 2.0 responses out. Each message is a single line of JSON terminated by `\n`. Stderr is for human logs and must be ignored by the client.

---

## The handshake

Every MCP session is three steps:

1. **`initialize`** — the client announces its capabilities; the server responds with its own.
2. **`notifications/initialized`** — a one-way notification (no `id`); marks the session ready.
3. **Normal calls** — `tools/list`, `tools/call`, `resources/list`, `resources/read`, `prompts/list`, `prompts/get`.

Here is the raw wire format. Try it in a shell:

```bash
{
  printf '%s\n' '{"jsonrpc":"2.0","method":"initialize","id":1,"params":{"protocolVersion":"2025-06-18","capabilities":{},"clientInfo":{"name":"smoke","version":"1.0"}}}'
  printf '%s\n' '{"jsonrpc":"2.0","method":"notifications/initialized"}'
  printf '%s\n' '{"jsonrpc":"2.0","method":"tools/list","id":2}'
  sleep 1
} | npx -y @cleo-labs/skills-mcp@latest
```

You should see two JSON responses on stdout — the `initialize` reply and the `tools/list` reply with three tools: `list_skills`, `find_skill`, `read_skill`. (`notifications/initialized` is a notification, so no response.)

---

## Minimal Python client (stdlib only)

This is around 90 lines and uses only `subprocess` + `json`. Save as `cleo_mcp.py`:

```python
"""Minimal MCP client for @cleo-labs/skills-mcp. Stdlib only."""
import json
import subprocess
import threading
from queue import Queue


class MCPClient:
    def __init__(self, command: list[str]):
        self.proc = subprocess.Popen(
            command,
            stdin=subprocess.PIPE,
            stdout=subprocess.PIPE,
            stderr=subprocess.DEVNULL,
            text=True,
            bufsize=1,
        )
        self._id = 0
        self._responses: dict[int, dict] = {}
        self._cv = threading.Condition()
        threading.Thread(target=self._reader, daemon=True).start()

    def _reader(self):
        for line in self.proc.stdout:
            try:
                msg = json.loads(line)
            except json.JSONDecodeError:
                continue
            if "id" in msg:
                with self._cv:
                    self._responses[msg["id"]] = msg
                    self._cv.notify_all()

    def _send(self, method: str, params: dict | None = None, notify: bool = False):
        payload = {"jsonrpc": "2.0", "method": method}
        if params is not None:
            payload["params"] = params
        if not notify:
            self._id += 1
            payload["id"] = self._id
        self.proc.stdin.write(json.dumps(payload) + "\n")
        self.proc.stdin.flush()
        if notify:
            return None
        with self._cv:
            self._cv.wait_for(lambda: self._id in self._responses)
            resp = self._responses.pop(self._id)
        if "error" in resp:
            raise RuntimeError(resp["error"])
        return resp["result"]

    def initialize(self):
        result = self._send("initialize", {
            "protocolVersion": "2025-06-18",
            "capabilities": {},
            "clientInfo": {"name": "py-cleo-client", "version": "1.0"},
        })
        self._send("notifications/initialized", notify=True)
        return result

    def list_tools(self):
        return self._send("tools/list")

    def call_tool(self, name: str, arguments: dict):
        return self._send("tools/call", {"name": name, "arguments": arguments})

    def list_resources(self):
        return self._send("resources/list")

    def read_resource(self, uri: str):
        return self._send("resources/read", {"uri": uri})

    def close(self):
        self.proc.terminate()
        self.proc.wait(timeout=5)


if __name__ == "__main__":
    c = MCPClient(["npx", "-y", "@cleo-labs/skills-mcp@latest"])
    info = c.initialize()
    print("Server:", info["serverInfo"]["name"], info["serverInfo"]["version"])

    skills = c.call_tool("list_skills", {"limit": 5})
    for s in skills["structuredContent"]["skills"]:
        print(f"  - {s['name']}")

    match = c.call_tool("find_skill", {
        "question": "selling vitamin supplements in Japan",
        "limit": 3,
    })
    print("\nTop matches:")
    for s in match["structuredContent"]["skills"]:
        print(f"  - {s['name']} (score {s.get('score', 'n/a')})")

    body = c.call_tool("read_skill", {"name": "supplement-compliance"})
    print("\nFirst 200 chars of supplement-compliance:")
    print(body["structuredContent"]["body"][:200])

    c.close()
```

Run it:

```bash
python3 cleo_mcp.py
```

Expected output:

```
Server: cleo-skills-mcp 0.1.0
  - agricultural-compliance
  - alcohol-spirits-compliance
  - automotive-aftermarket-compliance
  - baby-children-products-compliance
  - baby-formula-compliance

Top matches:
  - supplement-compliance (score 12.4)
  - market-entry-checklist (score 6.1)
  - labeling-compliance (score 4.3)

First 200 chars of supplement-compliance:
---
name: supplement-compliance
description: Dietary supplements: FDA DSHEA + NDI + 21 CFR 111 GMP, EU Directive 2002/46/EC ...
```

## Minimal Node.js client (no SDK)

Same shape, no `@modelcontextprotocol/sdk`. Useful for understanding the wire format:

```js
// cleo-mcp.mjs
import { spawn } from "node:child_process";
import readline from "node:readline";

class MCPClient {
  constructor(command, args) {
    this.proc = spawn(command, args, { stdio: ["pipe", "pipe", "inherit"] });
    this.id = 0;
    this.pending = new Map();
    const rl = readline.createInterface({ input: this.proc.stdout });
    rl.on("line", line => {
      try {
        const msg = JSON.parse(line);
        const r = this.pending.get(msg.id);
        if (!r) return;
        this.pending.delete(msg.id);
        msg.error ? r.reject(new Error(JSON.stringify(msg.error))) : r.resolve(msg.result);
      } catch {}
    });
  }
  _send(method, params, notify = false) {
    const payload = { jsonrpc: "2.0", method, ...(params && { params }) };
    if (!notify) payload.id = ++this.id;
    this.proc.stdin.write(JSON.stringify(payload) + "\n");
    if (notify) return Promise.resolve();
    return new Promise((resolve, reject) => this.pending.set(payload.id, { resolve, reject }));
  }
  async initialize() {
    const r = await this._send("initialize", {
      protocolVersion: "2025-06-18",
      capabilities: {},
      clientInfo: { name: "node-cleo", version: "1.0" },
    });
    await this._send("notifications/initialized", undefined, true);
    return r;
  }
  callTool(name, args) { return this._send("tools/call", { name, arguments: args }); }
  close() { this.proc.kill(); }
}

const c = new MCPClient("npx", ["-y", "@cleo-labs/skills-mcp@latest"]);
await c.initialize();
const skills = await c.callTool("list_skills", {});
console.log(`${skills.structuredContent.skills.length} skills`);
c.close();
```

Run with `node cleo-mcp.mjs`.

---

## Inspecting the resources & prompts

In addition to `tools/*`, the server exposes:

- **Resources** — `resources/list` returns 45 URIs like `skill://cosmetics-compliance`. `resources/read` returns the raw `SKILL.md`. Useful when you want to load a skill into a model's system prompt directly.
- **Prompts** — `prompts/list` returns the same 45 names, but as prompt templates. `prompts/get` with `{"name":"food-compliance","arguments":{"user_query":"..."}}` returns a two-message conversation ready to feed to a model.

Try this:

```python
res = c._send("resources/read", {"uri": "skill://food-compliance"})
print(res["contents"][0]["text"][:300])
```

## Things to know when rolling your own

1. **stdout is sacred.** The server speaks JSON-RPC on stdout — never write to it from your client. Server logs go to stderr; you can redirect or ignore them.
2. **One JSON message per line.** Do not pretty-print. `\n` is the framing.
3. **`notifications/initialized` is one-way.** No `id`, no response. Skipping it is the #1 cause of "the server hangs after initialize".
4. **Both shapes of tool result are valid.** `result.content[0].text` is JSON-stringified; `result.structuredContent` is the parsed object. Prefer the latter, fall back to the former for older servers.
5. **Concurrency.** You can pipeline requests — the server processes them in order but responses can interleave only by `id`. Track them by id.

---

## Related tutorials

- [Headless / programmatic use](./headless.md) — same idea but with the official SDK.
- [Claude Desktop](./claude-desktop.md) / [Cursor](./cursor.md) / [Continue](./continue.md) — chat-first integrations.

---

Source: <https://github.com/Cleo-Labs-IA/skills_library>
Live legal data + customs API: <https://legaldata-public.cleolabs.co/>
