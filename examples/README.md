# Examples — runnable code

> Drop-in code samples that talk to [`@cleo-labs/skills-mcp`](https://www.npmjs.com/package/@cleo-labs/skills-mcp). Each example is self-contained; copy, save, run.

```bash
npx -y @cleo-labs/skills-mcp@latest
```

All examples assume Node.js 20+ (or Python 3.10+ where indicated). The MCP server starts on demand via `npx`; no separate install step is required, though for production use you may want to pin the version.

---

## Table of contents

1. [Node.js: list all skills](#1-nodejs--list-all-skills) — official SDK
2. [Python: find the right skill for a question](#2-python--find-the-right-skill-for-a-question) — stdlib + `subprocess`
3. [curl / JSON-RPC](#3-curl--json-rpc) — raw wire protocol
4. [`package.json` script: compliance check on a sample product](#4-packagejson-script--compliance-check-on-a-sample-product) — npm-script integration
5. [TypeScript: read a skill body and use it as a system prompt](#5-typescript--read-a-skill-body-and-use-as-a-system-prompt)

---

## 1. Node.js — list all skills

The cleanest entry point. Uses the official `@modelcontextprotocol/sdk` client.

**File:** `list-skills.mjs`

```js
// node list-skills.mjs
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

const transport = new StdioClientTransport({
  command: "npx",
  args: ["-y", "@cleo-labs/skills-mcp@latest"],
});

const client = new Client({ name: "list-skills-example", version: "1.0.0" });
await client.connect(transport);

const result = await client.callTool({
  name: "list_skills",
  arguments: {}, // optional filters: { vertical: "cosmetics", query: "EU", limit: 10 }
});

const skills = result.structuredContent.skills;
console.log(`Loaded ${skills.length} skills:\n`);
for (const s of skills) {
  console.log(`  - ${s.name.padEnd(40)} ${s.description?.slice(0, 80) ?? ""}`);
}

await client.close();
```

**Install + run:**

```bash
npm install @modelcontextprotocol/sdk
node list-skills.mjs
```

**Expected output (truncated):**

```
Loaded 45 skills:

  - agricultural-compliance                EU CAP + fertilizers Reg 2019/1009 + pesticides Reg 1107/2009 + organic Reg 2018/848 ...
  - alcohol-spirits-compliance             Wine, beer, spirits, RTD compliance: TTB COLA + Federal Basic Permit ...
  - automotive-aftermarket-compliance      UN/ECE Regulations (R10, R30, R44/R129, R90, R100), DOT FMVSS ...
  ...
```

---

## 2. Python — find the right skill for a question

Stdlib only. No `pip install` required. Useful for environments where you cannot add dependencies.

**File:** `find_skill.py`

```python
#!/usr/bin/env python3
"""Find the most relevant skill for a free-text question."""
import json
import subprocess
import sys
import threading
from queue import Queue


def main(question: str):
    proc = subprocess.Popen(
        ["npx", "-y", "@cleo-labs/skills-mcp@latest"],
        stdin=subprocess.PIPE,
        stdout=subprocess.PIPE,
        stderr=subprocess.DEVNULL,
        text=True,
        bufsize=1,
    )

    responses = Queue()

    def reader():
        for line in proc.stdout:
            try:
                responses.put(json.loads(line))
            except json.JSONDecodeError:
                pass

    threading.Thread(target=reader, daemon=True).start()

    def send(msg):
        proc.stdin.write(json.dumps(msg) + "\n")
        proc.stdin.flush()

    # 1. initialize
    send({
        "jsonrpc": "2.0", "id": 1, "method": "initialize",
        "params": {
            "protocolVersion": "2025-06-18",
            "capabilities": {},
            "clientInfo": {"name": "py-find-skill", "version": "1.0"},
        },
    })
    responses.get(timeout=15)  # initialize response

    # 2. notifications/initialized (no id, no response)
    send({"jsonrpc": "2.0", "method": "notifications/initialized"})

    # 3. tools/call find_skill
    send({
        "jsonrpc": "2.0", "id": 2, "method": "tools/call",
        "params": {
            "name": "find_skill",
            "arguments": {"question": question, "limit": 5},
        },
    })
    res = responses.get(timeout=30)

    skills = res["result"]["structuredContent"]["skills"]
    print(f"\nTop {len(skills)} skills for: {question!r}\n")
    for s in skills:
        score = s.get("score", "—")
        print(f"  - {s['name']:<40} (score {score})")

    proc.terminate()
    proc.wait(timeout=5)


if __name__ == "__main__":
    q = " ".join(sys.argv[1:]) or "I want to sell a Bluetooth speaker in the EU"
    main(q)
```

**Run:**

```bash
python3 find_skill.py "selling a retinol night cream in the EU and US"
```

**Expected output:**

```
Top 5 skills for: 'selling a retinol night cream in the EU and US'

  - cosmetics-compliance                    (score 14.2)
  - substance-screening                     (score 8.9)
  - multi-jurisdiction-scan                 (score 6.7)
  - labeling-compliance                     (score 5.1)
  - claims-substantiation                   (score 4.3)
```

---

## 3. curl / JSON-RPC

Raw wire protocol. No SDK, no language runtime besides a shell. Helpful for debugging and for understanding what the SDKs do under the hood.

**File:** `smoke.sh`

```bash
#!/usr/bin/env bash
# Send three JSON-RPC frames to the MCP server and print responses.
{
  printf '%s\n' '{"jsonrpc":"2.0","method":"initialize","id":1,"params":{"protocolVersion":"2025-06-18","capabilities":{},"clientInfo":{"name":"curl-smoke","version":"1.0"}}}'
  printf '%s\n' '{"jsonrpc":"2.0","method":"notifications/initialized"}'
  printf '%s\n' '{"jsonrpc":"2.0","method":"tools/list","id":2}'
  printf '%s\n' '{"jsonrpc":"2.0","method":"tools/call","id":3,"params":{"name":"read_skill","arguments":{"name":"cosmetics-compliance"}}}'
  sleep 2  # let the server finish writing before EOF
} | npx -y @cleo-labs/skills-mcp@latest 2>/dev/null | python3 -m json.tool --json-lines
```

**Run:**

```bash
chmod +x smoke.sh
./smoke.sh
```

**Expected output:** three JSON responses on stdout — `initialize` (server info + capabilities), `tools/list` (the three tools), and `tools/call read_skill` (the full `cosmetics-compliance` SKILL.md body). The `notifications/initialized` is a one-way frame, no response.

---

## 4. `package.json` script — compliance check on a sample product

Drop the MCP-driven compliance check into your repo's npm scripts. Useful for CI gates (see the [headless tutorial](../tutorials/headless.md)) and for "did anyone break our compliance posture today" sanity runs.

**File:** `scripts/compliance-check.mjs`

```js
// node scripts/compliance-check.mjs <path-to-formula.json>
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import Anthropic from "@anthropic-ai/sdk";
import { readFileSync } from "node:fs";

const formulaPath = process.argv[2] ?? "products/sample/formula.json";
const formula = readFileSync(formulaPath, "utf8");

const mcp = new Client({ name: "compliance-check", version: "1.0.0" });
await mcp.connect(new StdioClientTransport({
  command: "npx",
  args: ["-y", "@cleo-labs/skills-mcp@latest"],
}));

const { structuredContent } = await mcp.callTool({
  name: "read_skill",
  arguments: { name: "substance-screening" },
});
const skill = structuredContent.body;

const anthropic = new Anthropic();  // requires ANTHROPIC_API_KEY
const res = await anthropic.messages.create({
  model: "claude-haiku-4-5",
  max_tokens: 2048,
  system: skill,
  messages: [{
    role: "user",
    content: `Screen this formulation against EU (Reg 1223/2009), US (MoCRA), and UK (UK Cosmetics Regulation) substance restrictions. Return strict JSON: { verdict: "RED"|"ORANGE"|"YELLOW"|"GREEN", issues: [{ substance, market, regulation, note }] }.\n\nFormulation:\n${formula}`,
  }],
});

const text = res.content.find(b => b.type === "text").text;
const match = text.match(/\{[\s\S]*\}/);
const result = match ? JSON.parse(match[0]) : { verdict: "UNKNOWN", issues: [] };

console.log(JSON.stringify(result, null, 2));
await mcp.close();
if (result.verdict === "RED") process.exit(1);
```

**`package.json` integration:**

```json
{
  "scripts": {
    "compliance:check": "node scripts/compliance-check.mjs",
    "compliance:check:all": "for f in products/*/formula.json; do echo \"=== $f ===\"; node scripts/compliance-check.mjs \"$f\"; done"
  },
  "dependencies": {
    "@anthropic-ai/sdk": "^0.65.0",
    "@cleo-labs/skills-mcp": "^0.1.0",
    "@modelcontextprotocol/sdk": "^1.0.0"
  }
}
```

**Sample `products/sample/formula.json`:**

```json
{
  "product": "Night Renewal Serum",
  "ingredients": [
    { "inci": "Aqua", "percent": 75 },
    { "inci": "Retinol", "percent": 0.3 },
    { "inci": "Niacinamide", "percent": 3.0 },
    { "inci": "Glycerin", "percent": 5.0 },
    { "inci": "Phenoxyethanol", "percent": 0.6 },
    { "inci": "Ethylhexylglycerin", "percent": 0.3 }
  ]
}
```

**Run:**

```bash
npm run compliance:check products/sample/formula.json
```

**Expected output:**

```json
{
  "verdict": "ORANGE",
  "issues": [
    {
      "substance": "Retinol",
      "market": "EU",
      "regulation": "Reg 2024/996",
      "note": "0.3% is the new maximum for face/other leave-on products since November 2025. Mandatory warning required: 'Contains Vitamin A. Consider your daily intake before use.'"
    }
  ]
}
```

---

## 5. TypeScript — read a skill body and use as a system prompt

The pattern that powers most production setups: MCP server is the catalogue, the model API does the inference.

**File:** `screen.ts`

```ts
// tsx screen.ts
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import Anthropic from "@anthropic-ai/sdk";

const mcp = new Client({ name: "screen-ts", version: "1.0.0" });
await mcp.connect(new StdioClientTransport({
  command: "npx",
  args: ["-y", "@cleo-labs/skills-mcp@latest"],
}));

// 1. Find the best skill for our question
const find = await mcp.callTool({
  name: "find_skill",
  arguments: { question: "GPSR compliance for Amazon EU sellers" },
});
const bestSkill = find.structuredContent.skills[0].name;
console.error(`Routing to skill: ${bestSkill}`);

// 2. Read its body
const read = await mcp.callTool({
  name: "read_skill",
  arguments: { name: bestSkill },
});
const skill = read.structuredContent.body;

// 3. Use as system prompt
const anthropic = new Anthropic();
const res = await anthropic.messages.create({
  model: "claude-sonnet-4-5",
  max_tokens: 2048,
  system: skill,
  messages: [{
    role: "user",
    content: "I'm a US-based Amazon EU seller with 120 SKUs. Walk me through GPSR readiness — what do I need to do this month?",
  }],
});

const answer = res.content.find(b => b.type === "text")!.text;
console.log(answer);

await mcp.close();
```

**Run:**

```bash
npm install tsx @modelcontextprotocol/sdk @anthropic-ai/sdk
ANTHROPIC_API_KEY=... tsx screen.ts
```

---

## What next

- Wire the server into your editor: [Claude Desktop](../tutorials/claude-desktop.md) · [Cursor](../tutorials/cursor.md) · [Continue](../tutorials/continue.md).
- Run it in CI: [headless / CI](../tutorials/headless.md).
- Build your own client: [custom MCP client](../tutorials/custom-client.md).
- Read [10 case studies](../case-studies/) for production patterns.
- Live regulation API: <https://legaldata-public.cleolabs.co/>.

Repo: <https://github.com/Cleo-Labs-IA/skills_library>
