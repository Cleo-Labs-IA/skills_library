# Architecture

## Goals

1. Expose all skills from `skills_library` as native MCP primitives without re-writing the source-of-truth Markdown files.
2. Ship as a self-contained, zero-config npm package and Docker image that pass automated introspection on listings like Glama.
3. Stay slim: only `@modelcontextprotocol/sdk`, `yaml`, and `zod` at runtime.

## Module map

```
src/index.ts                 # bin shim. Boots createServer + StdioServerTransport. Wires SIGTERM/SIGINT.
src/server.ts                # createServer() — loads skills, builds registry, registers handlers.
src/skills/parser.ts         # YAML frontmatter + Markdown body parser. Tolerates CRLF.
src/skills/loader.ts         # Walks the skills directory. Resolves the source location with explicit fallbacks.
src/skills/registry.ts       # In-memory store. Deterministic keyword search.
src/handlers/resources.ts    # 1 MCP resource per skill (skill:// URI scheme).
src/handlers/prompts.ts      # 1 MCP prompt per skill (param: user_query).
src/handlers/tools.ts        # 3 top-level tools (list/find/read).
src/tools/*.ts               # Pure functions implementing each tool. Tested directly.
```

## Skill resolution order

`createServer()` calls `resolveSkillsDir()` which checks, in order:

1. `SKILLS_DIR` env var (explicit override; used in Docker).
2. `<package>/skills/` — bundled in the npm tarball via `scripts/sync-skills.mjs`.
3. `<package>/../skills/` — repo checkout layout (this is what dev/test uses).
4. `process.cwd()/skills` and `process.cwd()/../skills` (last-resort, useful for one-off runs).

This means the same compiled JS works whether you run from the monorepo or from an unpacked npm tarball.

## Capabilities advertised

```ts
{
  resources: { listChanged: false },
  prompts: { listChanged: false },
  tools: { listChanged: false },
  logging: {}
}
```

We do not advertise sampling, completion, or roots; those are out of scope for a read-only skills registry.

## Search

The `find_skill` tool uses a deterministic keyword scorer:

- 4 points per token match in the skill name
- 2 points per token match in the description
- 1 point each for substring fallbacks (catches hyphenated forms)
- +3 bonus when the inferred vertical (`cosmetics`, `food`, …) appears in the question

Stopwords are filtered. Results with score 0 are dropped. Ties break alphabetically for stable output.

Why no embeddings? The skill descriptions are intentionally instruction-shaped ("Use when …"). For ~50 skills with rich keyword surfaces, vector search adds latency, a model dependency, and non-determinism without a measurable precision gain. We can revisit if the library grows past ~500 skills.

## Transport

Primary transport is stdio (per the spec, the only mandatory transport). The high-level `McpServer` is transport-agnostic, so adding `StreamableHTTPServerTransport` later is a one-file change in `index.ts`.

## Why the high-level SDK

The low-level `Server` API would require us to hand-register each `ListResourcesRequestSchema` / `ReadResourceRequestSchema` / etc. handler with explicit Zod schemas, and to manually maintain pagination cursors and capability advertisements. The high-level `McpServer` does all of that for us and is the SDK's recommended path for production servers. We retain access to `server.server` if we ever need a low-level escape hatch.

## Testing strategy

- **parser.test.ts**: malformed frontmatter, missing fields, CRLF, etc.
- **registry.test.ts**: in-memory, no FS, exercises filters and ranking.
- **server.test.ts**: real `createServer()` over the on-disk `skills/` directory, asserts the count is 45.
- **handlers.test.ts**: pure tool functions against the real registry.
- **e2e.test.ts**: `InMemoryTransport.createLinkedPair()` drives a real `Client` against a real `McpServer` — same code path as stdio, no network. Covers initialize → list → read → call across all primitive types.

## Versioning

Server version is sourced from `SERVER_INFO` (kept in lockstep with `package.json#version`). MCP protocol version is negotiated at handshake time by the SDK; we don't pin it ourselves.

## Performance

Startup work is bounded by `O(skills)` for the file read + parse. With 45 small Markdown files, cold start is ~50-80 ms on commodity hardware. After that everything is in-memory.

## Security

- No FS writes. The server is read-only.
- No network IO at runtime. (`find_skill` is local.)
- Docker image runs as the unprivileged `node` user.
- No secrets or env config required for basic operation.
