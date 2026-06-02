# MCP Server API Reference

Auto-generated from `mcp-server/src/handlers/{resources,prompts,tools}.ts` and `mcp-server/src/tools/*.ts`.

The Cleo Skills MCP server (`cleo-skills-mcp`, currently `0.1.0`) exposes **45 compliance skills** through three MCP primitives:

1. **Resources** — one per skill, addressable by URI
2. **Prompts** — one per skill, parameterized by an optional user query
3. **Tools** — three top-level tools to list / find / read skills

This document is the canonical API reference. The server is transport-agnostic but is shipped wired to **stdio** for the npm package.

## Server metadata

| Field | Value |
|-------|-------|
| Name | `cleo-skills-mcp` |
| Title | `Cleo Skills MCP` |
| Version | `0.1.0` |
| Protocol | Model Context Protocol (MCP) |
| Transport (default) | stdio |
| Capabilities | `resources`, `prompts`, `tools`, `logging` |

The server announces itself with the following `instructions` payload:

> This server exposes product-compliance skills. Use `list_skills` to discover skills, `find_skill` to map a user question to the right skill, and `read_skill` to pull full content. Each skill is also available as an MCP resource (`skill://<name>`) and as a parameterized prompt.

---

## Resources

Each of the 45 skills is registered as a **static MCP resource** with `text/markdown` mime type. The URI is built by `skillUri(name)` and follows the canonical pattern below.

### URI pattern

```
skill://<skill-name>
```

`<skill-name>` is the exact skill name as declared in the skill's `SKILL.md` frontmatter — e.g. `cosmetics-compliance`, `product-compliance`, `customs-and-trade`. Use `list_skills` (see below) to enumerate them.

### Resource shape

```ts
{
  title: string;          // skill.name
  description: string;    // skill.description (from frontmatter)
  mimeType: 'text/markdown';
}
```

When read, the resource returns the full SKILL.md content (frontmatter + Markdown body):

```ts
{
  contents: [
    {
      uri: 'skill://<name>',
      mimeType: 'text/markdown',
      text: '<full SKILL.md text>',
    },
  ],
}
```

### Example — listing resources

JSON-RPC request:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "resources/list"
}
```

JSON-RPC response (truncated):

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "resources": [
      {
        "uri": "skill://product-compliance",
        "name": "product-compliance",
        "title": "product-compliance",
        "description": "Full substance check across 13 regulatory databases…",
        "mimeType": "text/markdown"
      },
      {
        "uri": "skill://cosmetics-compliance",
        "name": "cosmetics-compliance",
        "title": "cosmetics-compliance",
        "description": "Complete cosmetics compliance across 8 markets…",
        "mimeType": "text/markdown"
      }
    ]
  }
}
```

### Example — reading a resource

JSON-RPC request:

```json
{
  "jsonrpc": "2.0",
  "id": 2,
  "method": "resources/read",
  "params": { "uri": "skill://cosmetics-compliance" }
}
```

curl over stdio (using a helper like `mcp-cli`):

```bash
npx -y @cleo-labs/skills-mcp@latest <<'EOF'
{"jsonrpc":"2.0","id":2,"method":"resources/read","params":{"uri":"skill://cosmetics-compliance"}}
EOF
```

---

## Prompts

Each skill is also registered as a **parameterized MCP prompt**. Prompts let MCP-aware clients (Claude Desktop, Cursor, Continue, Zed) inject a skill into the model context with a single slash command.

### Prompt shape

| Field | Value |
|-------|-------|
| Name | `<skill-name>` (matches the resource name) |
| Title | `<skill-name>` |
| Description | The skill's frontmatter `description` |
| Argument | `user_query` (optional `string`) |

### Argument: `user_query`

| Type | Required | Description |
|------|----------|-------------|
| `string` | No | Optional user question to append after the skill content. If omitted, the skill is loaded standalone. |

### Returned messages

The prompt returns a `messages` array with one or two `user`-role messages:

1. A **preamble + skill content** message, formatted as:

   ```
   You have been given access to the following compliance skill: `<name>`.

   Follow the workflow described below. Cite the regulations it references. Use the Cleo Legal API or other compliance tools when available.

   ---

   <full SKILL.md content>
   ```

2. *(Optional)* The raw `user_query` as a second user message, if a non-empty `user_query` was provided.

### Example — listing prompts

```json
{
  "jsonrpc": "2.0",
  "id": 3,
  "method": "prompts/list"
}
```

### Example — getting a prompt

```json
{
  "jsonrpc": "2.0",
  "id": 4,
  "method": "prompts/get",
  "params": {
    "name": "cosmetics-compliance",
    "arguments": {
      "user_query": "Can I sell a 0.4% retinol serum in the EU?"
    }
  }
}
```

Response (abbreviated):

```json
{
  "jsonrpc": "2.0",
  "id": 4,
  "result": {
    "description": "Complete cosmetics compliance across 8 markets…",
    "messages": [
      {
        "role": "user",
        "content": {
          "type": "text",
          "text": "You have been given access to the following compliance skill: `cosmetics-compliance`.\n\nFollow the workflow described below. Cite the regulations it references. Use the Cleo Legal API or other compliance tools when available.\n\n---\n\n<SKILL.md content>"
        }
      },
      {
        "role": "user",
        "content": {
          "type": "text",
          "text": "Can I sell a 0.4% retinol serum in the EU?"
        }
      }
    ]
  }
}
```

---

## Tools

Three top-level tools backed by the in-memory skill registry. Each returns both a structured JSON payload (`structuredContent`) and a stringified text representation (`content[].text`) for backward compatibility with older MCP clients.

### `list_skills`

List the available product compliance skills. Optionally filter by `vertical` (e.g. "cosmetics", "food") or a free-text `query` over name and description.

#### Input schema

```ts
{
  vertical?: string;   // optional; e.g. "cosmetics", "food", "textile"
  query?: string;      // optional; case-insensitive substring over name + description
  limit?: number;      // optional; positive integer ≤ 100
}
```

| Field | Type | Required | Constraints | Description |
|-------|------|----------|-------------|-------------|
| `vertical` | string | No | `min(1)` | Filter to skills in a single vertical. Omit to list all. |
| `query` | string | No | `min(1)` | Free-text substring filter against the skill name and description (case-insensitive). |
| `limit` | integer | No | `> 0`, `≤ 100` | Maximum number of skills to return (default: all matches). |

#### Output schema

```ts
{
  count: number;
  total: number;
  skills: Array<{
    name: string;
    description: string;
    vertical: string;
  }>;
}
```

#### Example

JSON-RPC request:

```json
{
  "jsonrpc": "2.0",
  "id": 5,
  "method": "tools/call",
  "params": {
    "name": "list_skills",
    "arguments": { "vertical": "cosmetics", "limit": 3 }
  }
}
```

curl over stdio:

```bash
npx -y @cleo-labs/skills-mcp@latest <<'EOF'
{"jsonrpc":"2.0","id":5,"method":"tools/call","params":{"name":"list_skills","arguments":{"vertical":"cosmetics","limit":3}}}
EOF
```

Example output:

```json
{
  "count": 3,
  "total": 45,
  "skills": [
    {
      "name": "cosmetics-compliance",
      "description": "Complete cosmetics compliance across 8 markets…",
      "vertical": "cosmetics"
    },
    {
      "name": "professional-cosmetics-compliance",
      "description": "Salon-only hair color + smoothing + skincare + nail + PMU…",
      "vertical": "cosmetics"
    },
    {
      "name": "candle-fragrance-compliance",
      "description": "Candles + diffusers + room sprays + fragrance oils…",
      "vertical": "cosmetics"
    }
  ]
}
```

---

### `find_skill`

Given a natural-language question or task, return the top compliance skills most likely to help. Use this before pulling skill content with `read_skill`.

Implementation note: the matcher uses a deterministic keyword scorer (no embeddings) so the server stays dependency-free and works offline.

#### Input schema

```ts
{
  question: string;   // required; min 3 characters
  limit?: number;     // optional; positive integer ≤ 10 (default 3)
}
```

| Field | Type | Required | Constraints | Description |
|-------|------|----------|-------------|-------------|
| `question` | string | **Yes** | `min(3)` | A natural-language question or task, e.g. `"Can I sell my sunscreen in the EU?"` or `"How do I label a children's toy?"`. |
| `limit` | integer | No | `> 0`, `≤ 10` | Number of top matches to return (default `3`). |

#### Output schema

```ts
{
  question: string;
  matches: Array<{
    name: string;
    description: string;
    score: number;
  }>;
}
```

#### Example

JSON-RPC request:

```json
{
  "jsonrpc": "2.0",
  "id": 6,
  "method": "tools/call",
  "params": {
    "name": "find_skill",
    "arguments": {
      "question": "I need to ship a Bluetooth speaker to Germany and the US — what certifications do I need?",
      "limit": 3
    }
  }
}
```

curl over stdio:

```bash
npx -y @cleo-labs/skills-mcp@latest <<'EOF'
{"jsonrpc":"2.0","id":6,"method":"tools/call","params":{"name":"find_skill","arguments":{"question":"I need to ship a Bluetooth speaker to Germany and the US — what certifications do I need?","limit":3}}}
EOF
```

Example output:

```json
{
  "question": "I need to ship a Bluetooth speaker to Germany and the US — what certifications do I need?",
  "matches": [
    {
      "name": "electronics-compliance",
      "description": "Complete electronics/IoT compliance: CE (LVD/EMC/RED/RoHS/ErP), FCC Part 15…",
      "score": 0.71
    },
    {
      "name": "testing-certification",
      "description": "Required tests/certs per product per market…",
      "score": 0.58
    },
    {
      "name": "market-entry-checklist",
      "description": "Step-by-step: classify → regulations → substances → labels → certs → customs → notification.",
      "score": 0.42
    }
  ]
}
```

---

### `read_skill`

Return the full SKILL.md content (frontmatter + Markdown body) for a single skill identified by its exact name.

#### Input schema

```ts
{
  name: string;   // required; exact skill name
}
```

| Field | Type | Required | Constraints | Description |
|-------|------|----------|-------------|-------------|
| `name` | string | **Yes** | `min(1)` | Exact skill name, e.g. `"cosmetics-compliance"` or `"product-compliance"`. |

#### Output schema

```ts
{
  name: string;
  description: string;
  content: string;   // full SKILL.md text
}
```

Note: in the MCP response, `content[].text` carries the full Markdown body (for older clients), while `structuredContent` carries `{ name, description }` only (the body would otherwise be duplicated).

#### Errors

Throws if `name` does not match any registered skill:

```
Unknown skill "<name>". Use list_skills to discover available skills. Examples: <5 skill names>
```

#### Example

JSON-RPC request:

```json
{
  "jsonrpc": "2.0",
  "id": 7,
  "method": "tools/call",
  "params": {
    "name": "read_skill",
    "arguments": { "name": "product-compliance" }
  }
}
```

curl over stdio:

```bash
npx -y @cleo-labs/skills-mcp@latest <<'EOF'
{"jsonrpc":"2.0","id":7,"method":"tools/call","params":{"name":"read_skill","arguments":{"name":"product-compliance"}}}
EOF
```

Example output (abbreviated):

```json
{
  "name": "product-compliance",
  "description": "Full substance check across 13 regulatory databases…",
  "content": "---\nname: product-compliance\ndescription: …\n---\n\n# product-compliance\n\n…full Markdown body…"
}
```

---

## Recommended client integration

A typical client flow is:

1. Call `find_skill` with the user's natural-language question → get top 3 candidate skill names.
2. Decide which one to use (or let the model pick).
3. Either:
   - Call `read_skill` with that name and inject the content into the model context, **or**
   - Use the MCP **prompt** `<skill-name>` with `user_query` set to the original question — the server formats the preamble for you.
4. The model answers using the skill content and any other MCP tools (Cleo Legal API, Cleo Insight, web search, etc.).

For one-shot exploration use:

```bash
npx -y @cleo-labs/skills-mcp@latest
```

and point your MCP-compatible client at the stdio transport. See [`mcp-server/README.md`](../mcp-server/README.md) for per-client configuration snippets (Claude Desktop, Cursor, Continue, Zed).

---

_Last generated: 2026-06-02. This document is regenerated whenever the handler signatures change; the source of truth is `mcp-server/src/`._
