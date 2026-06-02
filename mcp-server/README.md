# @cleo-labs/skills-mcp

[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![npm](https://img.shields.io/npm/v/@cleo-labs/skills-mcp.svg)](https://www.npmjs.com/package/@cleo-labs/skills-mcp)
[![MCP](https://img.shields.io/badge/MCP-compatible-7c3aed)](https://modelcontextprotocol.io)

> **MCP server exposing 45 production-grade product-compliance skills as native MCP resources, prompts, and tools.**

This is the MCP transport for the [skills_library](https://github.com/Cleo-Labs-IA/skills_library) repo. Each compliance skill (cosmetics, food, electronics, toys, textiles, supplements, medical devices, customs, recalls, and more) is surfaced to any MCP-aware client as:

- a **resource** — `skill://<name>` returning the full SKILL.md as `text/markdown`
- a **prompt** — `<name>` with an optional `{user_query}` parameter
- callable via three top-level **tools** — `list_skills`, `find_skill`, `read_skill`

Built on the official [`@modelcontextprotocol/sdk`](https://github.com/modelcontextprotocol/typescript-sdk). MIT licensed. Slim Docker image. Works out of the box with Claude Desktop, Cursor, Continue, Zed, and any other MCP client.

---

## Install

### Run via `npx`

```bash
npx -y @cleo-labs/skills-mcp@latest
```

### Install globally

```bash
npm install -g @cleo-labs/skills-mcp
skills-mcp
```

### Run via Docker

```bash
docker run --rm -i ghcr.io/cleo-labs-ia/skills-mcp:latest
```

The server speaks the MCP JSON-RPC protocol on stdio. It logs operational messages to stderr; stdout is reserved for MCP traffic.

---

## Wire it into your MCP client

### Claude Desktop

Add to `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS) or `%APPDATA%/Claude/claude_desktop_config.json` (Windows):

```json
{
  "mcpServers": {
    "cleo-skills": {
      "command": "npx",
      "args": ["-y", "@cleo-labs/skills-mcp@latest"]
    }
  }
}
```

Restart Claude Desktop. The 45 skills will appear under the resources picker (the paper-clip icon) and the slash-commands menu.

### Cursor

`~/.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "cleo-skills": {
      "command": "npx",
      "args": ["-y", "@cleo-labs/skills-mcp@latest"]
    }
  }
}
```

### Continue

`~/.continue/config.yaml`:

```yaml
mcpServers:
  - name: cleo-skills
    command: npx
    args:
      - "-y"
      - "@cleo-labs/skills-mcp@latest"
```

### Codex / Zed / generic MCP host

Any client that supports the `command + args` MCP launcher format works the same way. See [`examples/`](./examples) for ready-to-copy snippets.

---

## What the server exposes

### Resources

| Field | Value |
| ----- | ----- |
| Count | **45** (one per skill) |
| URI scheme | `skill://<name>` (e.g. `skill://cosmetics-compliance`) |
| Mime type | `text/markdown` |
| Body | The full `SKILL.md` including YAML frontmatter |

### Prompts

| Field | Value |
| ----- | ----- |
| Count | **45** (one per skill) |
| Name | The skill's name (e.g. `food-compliance`) |
| Argument | `user_query` *(optional)* — appended after the skill content as a follow-up user message |

Each prompt returns a two-message conversation: a system-style preamble that loads the skill content, followed by the user's question. This makes "load skill + ask question" a single slash command in Claude Desktop.

### Tools

| Tool | Args | Returns |
| ---- | ---- | ------- |
| `list_skills` | `vertical?`, `query?`, `limit?` | All skills matching the filters |
| `find_skill` | `question`, `limit?` | Top-N skills ranked by relevance to a free-text question |
| `read_skill` | `name` | Full `SKILL.md` body for one skill |

All tools return both `content[].text` (JSON-stringified) and `structuredContent` (parsed object) so they work with old and new MCP clients.

### Server info

```json
{
  "name": "cleo-skills-mcp",
  "title": "Cleo Skills MCP",
  "version": "0.1.0",
  "capabilities": { "resources": {}, "prompts": {}, "tools": {}, "logging": {} }
}
```

---

## Architecture

```
mcp-server/
├── src/
│   ├── index.ts          # bin entry point (stdio transport)
│   ├── server.ts         # createServer() factory
│   ├── handlers/         # resource / prompt / tool registration
│   ├── tools/            # list_skills / find_skill / read_skill
│   └── skills/           # loader, parser, registry
├── test/                 # vitest suites: unit + e2e via InMemoryTransport
├── examples/             # client config snippets
├── Dockerfile            # multi-stage, node:20-alpine
└── scripts/sync-skills.mjs   # copies ../skills/ into ./skills/ pre-publish
```

See [`ARCHITECTURE.md`](./ARCHITECTURE.md) for design notes.

---

## Develop

```bash
# Install deps
cd mcp-server
npm install

# Run the server in dev mode (reads from ../skills/)
npm run dev

# Type-check + tests
npm run typecheck
npm test

# Build
npm run build

# Validate via raw JSON-RPC
echo '{"jsonrpc":"2.0","method":"initialize","id":1,"params":{"protocolVersion":"2025-06-18","capabilities":{},"clientInfo":{"name":"smoke","version":"1.0"}}}' | node dist/index.js
```

### Environment

- `SKILLS_DIR` — override the auto-resolved skills directory.

---

## License

MIT. See [LICENSE](./LICENSE). The skills themselves are also MIT — see the [root repo](https://github.com/Cleo-Labs-IA/skills_library).

## Author

[Cleo Labs](https://cleolabs.co) · Naomie Halioua · `contact@cleolabs.co`
