# Glama submission — Server profile

Pre-filled metadata for submitting `@cleo-labs/skills-mcp` to https://glama.ai/mcp/servers as a Server-type listing.

## Basic info

| Field | Value |
| ----- | ----- |
| Server name | Cleo Skills MCP |
| Slug | cleo-skills-mcp |
| Tagline | 45 production-grade product-compliance skills as MCP resources, prompts, and tools. |
| Category | Compliance / Regulatory · Knowledge bases · Productivity |
| License | MIT |
| Pricing | Free, open source |

## Source & distribution

| Field | Value |
| ----- | ----- |
| Public repository | https://github.com/Cleo-Labs-IA/skills_library |
| Server subdirectory | `mcp-server/` |
| Dockerfile | `mcp-server/Dockerfile` |
| npm package | `@cleo-labs/skills-mcp` |
| Install command | `npx -y @cleo-labs/skills-mcp@latest` |
| Docker image | `ghcr.io/cleo-labs-ia/skills-mcp:latest` (after first publish) |
| Language | TypeScript (Node.js 20+) |
| SDK | `@modelcontextprotocol/sdk` ^1.29.0 |
| Transport | stdio |

## Capabilities (advertised on initialize)

- `resources` — 45 entries, `skill://<name>` URIs, `text/markdown`
- `prompts` — 45 entries, one optional `user_query` argument each
- `tools` — `list_skills`, `find_skill`, `read_skill`
- `logging`

## Tool catalog

```
list_skills(vertical?: string, query?: string, limit?: number)
  -> { count, total, skills: [{ name, description, vertical }] }

find_skill(question: string, limit?: number)
  -> { question, matches: [{ name, description, score }] }

read_skill(name: string)
  -> { name, description, content }
```

All tools return both `content[].text` (JSON-stringified) and `structuredContent` (typed object).

## Verification commands for Glama introspection

```bash
# 1. Install + build
git clone https://github.com/Cleo-Labs-IA/skills_library.git
cd skills_library/mcp-server
cp -R ../skills ./skills
npm install
npm run build

# 2. Initialize handshake
echo '{"jsonrpc":"2.0","method":"initialize","id":1,"params":{"protocolVersion":"2025-06-18","capabilities":{},"clientInfo":{"name":"glama","version":"1.0"}}}' \
  | node dist/index.js

# 3. Or Docker
docker build -t cleo-skills-mcp .
echo '{"jsonrpc":"2.0","method":"initialize","id":1,"params":{"protocolVersion":"2025-06-18","capabilities":{},"clientInfo":{"name":"glama","version":"1.0"}}}' \
  | docker run --rm -i cleo-skills-mcp
```

## Description for the listing

> Cleo Skills MCP turns the [skills_library](https://github.com/Cleo-Labs-IA/skills_library) into a native MCP server. Forty-five production-grade compliance skills — cosmetics, food, electronics, toys, textiles, supplements, medical devices, customs, recalls, claims, sustainability, and more — are exposed as MCP resources (`skill://`), parameterized prompts, and three structured tools (`list_skills`, `find_skill`, `read_skill`). Drop it into Claude Desktop, Cursor, or Continue and your agent immediately knows how to check substance limits, label a product, or run a multi-jurisdiction scan. MIT licensed. Powered by the Cleo Legal API.

## Tags

`compliance`, `regulatory`, `product-compliance`, `cosmetics`, `food`, `electronics`, `toys`, `textiles`, `supplements`, `medical-devices`, `EU`, `FDA`, `CE`, `REACH`, `knowledge-base`, `prompts`, `resources`, `tools`

## Maintainer

- Naomie Halioua — Cleo Labs
- contact@cleolabs.co
- https://cleolabs.co

## Status

- [x] Public source, MIT
- [x] Dockerfile in repo
- [x] CI builds + tests on every PR (`.github/workflows/mcp-server.yml`)
- [x] e2e tests using `@modelcontextprotocol/sdk` client over `InMemoryTransport`
- [x] Strict TypeScript, no `any`
- [ ] npm published (run `npm publish` after the first release tag is cut)
- [ ] Docker image pushed to GHCR (CI handles this on release)
- [ ] Glama listing approved
