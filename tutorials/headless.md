# Headless / programmatic use

> Run the 45 [`skills_library`](https://github.com/Cleo-Labs-IA/skills_library) compliance skills from a Node.js script, a CI pipeline, or any backend service. No editor, no chat UI — just JSON-RPC over stdio.

```bash
npm install --save-dev @cleo-labs/skills-mcp @modelcontextprotocol/sdk
# or for one-off runs:
npx -y @cleo-labs/skills-mcp@latest
```

The MCP server is a stdio process: it reads JSON-RPC on stdin and writes responses on stdout. That makes it dead-simple to drive from any language, and ideal for CI.

---

## When to go headless

A few real reasons to skip the chat UI:

- **CI/CD compliance gate.** Block a release branch when a new SKU contains a substance restricted in any of your target markets.
- **Pre-publish marketplace check.** Run `marketplace-compliance` against a Shopify export every time the product feed is regenerated.
- **Substance diff on PRs.** When `formula.json` changes, post a PR comment listing which restrictions are newly triggered.
- **Nightly regulatory-calendar refresh.** Build an internal dashboard of compliance deadlines using `regulatory-calendar`.
- **Bulk audit.** Feed 5,000 SKUs through `substance-screening` once a quarter.

---

## 1. Minimal Node.js client

The cleanest way: use the official `@modelcontextprotocol/sdk` to spawn the server and call its tools.

```ts
// scripts/list-skills.ts
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

const transport = new StdioClientTransport({
  command: "npx",
  args: ["-y", "@cleo-labs/skills-mcp@latest"],
});

const client = new Client({ name: "ci-compliance-gate", version: "1.0.0" });
await client.connect(transport);

// 1. List all skills
const all = await client.callTool({ name: "list_skills", arguments: {} });
console.log(`Loaded ${all.structuredContent.skills.length} skills`);

// 2. Find the most relevant skill for a free-text question
const match = await client.callTool({
  name: "find_skill",
  arguments: { question: "selling a Bluetooth speaker in the EU and Canada", limit: 3 },
});
console.log(match.structuredContent.skills.map((s: any) => s.name));
// -> [ 'electronics-compliance', 'market-entry-checklist', 'customs-and-trade' ]

// 3. Read the body of a skill
const body = await client.callTool({
  name: "read_skill",
  arguments: { name: "electronics-compliance" },
});
console.log(body.structuredContent.body.slice(0, 200));

await client.close();
```

Run it with `tsx scripts/list-skills.ts` (or compile + `node`). The first invocation pays the npm cold-start cost (~3 s); subsequent ones from the same `npx` cache are ~300 ms.

## 2. CI/CD compliance gate

A practical GitHub Actions workflow that fails a PR when `substance-screening` flags a RED issue. Drop this in `.github/workflows/compliance.yml`:

```yaml
name: Compliance gate
on:
  pull_request:
    paths:
      - "products/**/formula.json"

jobs:
  substance-screen:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "20"
      - run: npm ci
      - name: Run substance screen
        env:
          ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
          CLEO_LEGAL_API_KEY: ${{ secrets.CLEO_LEGAL_API_KEY }}
        run: node scripts/compliance-gate.mjs
```

And the gate itself:

```js
// scripts/compliance-gate.mjs
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import Anthropic from "@anthropic-ai/sdk";
import { readFileSync } from "node:fs";
import { globSync } from "glob";

const mcp = new Client({ name: "compliance-gate", version: "1.0.0" });
await mcp.connect(new StdioClientTransport({
  command: "npx",
  args: ["-y", "@cleo-labs/skills-mcp@latest"],
}));

const { structuredContent } = await mcp.callTool({
  name: "read_skill",
  arguments: { name: "substance-screening" },
});
const skill = structuredContent.body;

const anthropic = new Anthropic();
let hasRed = false;

for (const file of globSync("products/**/formula.json")) {
  const formula = readFileSync(file, "utf8");

  const res = await anthropic.messages.create({
    model: "claude-sonnet-4-5",
    max_tokens: 4096,
    system: skill,
    messages: [{
      role: "user",
      content: `Check this formula against EU (Reg 1223/2009), US (MoCRA), UK, CA, JP for RED/ORANGE/YELLOW/GREEN substance issues. Return strict JSON: { "verdict": "RED"|"ORANGE"|"YELLOW"|"GREEN", "issues": [...] }.\n\nFormula:\n${formula}`,
    }],
  });

  const text = res.content.find(b => b.type === "text").text;
  const json = JSON.parse(text.match(/\{[\s\S]*\}/)[0]);
  console.log(`${file}: ${json.verdict}`);
  if (json.verdict === "RED") hasRed = true;
}

await mcp.close();
if (hasRed) process.exit(1);
```

Two things worth noting:

1. The MCP server is the *source of the skill content* — Anthropic is what does the reasoning. We separate concerns: MCP for catalogue + retrieval, the model API for inference. This is the typical headless pattern.
2. You can swap in any model. `claude-haiku-4-5` is dramatically cheaper for the per-SKU loop, and `claude-opus-4-7` is the right call for the quarterly bulk audit.

## 3. Automated PR comments

To make the CI gate useful, post the verdict back to the PR. Add a final step:

```yaml
      - name: Comment verdict
        if: always()
        uses: marocchino/sticky-pull-request-comment@v2
        with:
          path: compliance-report.md
```

…and have the script write `compliance-report.md` with a substance-by-substance table. The full pattern is covered in [`case-studies/multi-jurisdiction-launch.md`](../case-studies/multi-jurisdiction-launch.md).

## 4. Stay stateless

The MCP server keeps no per-request state. Spawn one per CI job, close it when done. If you have a long-running service that needs many calls, keep one server process alive and reuse the client connection — the SDK is concurrency-safe.

If you cannot use `npx` in your container (offline runners, locked-down clusters), pin the dependency:

```bash
npm install @cleo-labs/skills-mcp@0.1.0
node node_modules/@cleo-labs/skills-mcp/dist/index.js
```

…or use the Docker image: `ghcr.io/cleo-labs-ia/skills-mcp:latest`.

## 5. Combine with live data via Cleo Legal

The skill content is static (versioned with the repo). For substance / customs / sanctions queries that need to be *live*, pair the MCP server with the Cleo Legal API. Grab a free key at <https://legaldata-public.cleolabs.co/> — the `compliance-mcp-tools` skill documents the request shapes.

---

## Troubleshooting

**Server times out on the first call.**
The first `npx` run downloads the package. Either pre-warm the cache (`npx -y @cleo-labs/skills-mcp@latest --help` once at container build), or use the global install.

**`structuredContent` is `undefined`.**
You're on an old MCP SDK. Upgrade to `@modelcontextprotocol/sdk@>=1.0.0`. Old clients still get the data via `content[0].text` as a JSON string.

**Repeated calls leak processes.**
Always `await client.close()`. Wrap the script in a `try/finally`.

---

## Related tutorials

- [Custom MCP client](./custom-client.md) — speak the JSON-RPC wire protocol directly, no SDK.
- [Claude Desktop](./claude-desktop.md), [Cursor](./cursor.md), [Continue.dev](./continue.md) — the human-in-the-loop versions.

Repo: <https://github.com/Cleo-Labs-IA/skills_library>
Live regulation database & API: <https://legaldata-public.cleolabs.co/>
