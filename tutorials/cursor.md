# Cursor integration

> Bring the 45 product-compliance skills from [`skills_library`](https://github.com/Cleo-Labs-IA/skills_library) into Cursor's chat panel and agent mode. Useful when your IDE is already where the product-spec, ingredient lists, BOMs, or labelling copy live.

```bash
npx -y @cleo-labs/skills-mcp@latest
```

You will not run that command directly — Cursor will spawn it on demand. Cursor 0.42+ supports MCP servers natively.

---

## 1. Add the server to `~/.cursor/mcp.json`

Cursor reads a single MCP config file per user. Create or open it:

```bash
mkdir -p ~/.cursor && touch ~/.cursor/mcp.json
```

Add the `cleo-skills` entry:

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

If you already have other MCP servers (Linear, Notion, Postgres, etc.), add `cleo-skills` as a sibling key under `mcpServers`. Cursor merges all of them at startup.

**Restart Cursor** (Cmd+Q on macOS, full quit). On relaunch, open the chat panel — the MCP tools indicator at the bottom of the chat shows `cleo-skills · 3 tools · 45 prompts · 45 resources`.

## 2. Tell Cursor when to use the skills

By default the model will pick a skill on natural prompts, but you get much higher hit rates if you nudge it via `.cursorrules` (project-level) or your global Cursor system prompt.

Drop this into the root of any project where compliance matters — `.cursorrules` (or `cursor.rules`, or `.cursor/rules` depending on your Cursor version):

```
This repository is for a physical product.

When the user asks about compliance, regulations, substances, labelling,
testing, certifications, recalls, market entry, or customs, prefer using
the cleo-skills MCP server. The skill names follow `*-compliance` (one
per vertical: cosmetics-compliance, food-compliance, electronics-compliance,
textile-compliance, toy-compliance, supplement-compliance, etc.) and
cross-cutting skills like `multi-jurisdiction-scan`, `substance-screening`,
`market-entry-checklist`, `responsible-person`, and `recall-response`.

Always cite the regulation references the skill returns (e.g. EU 1223/2009
Art 19, FDA MoCRA, REACH Annex XVII entry N) — do not paraphrase legal text.

If you cannot find a regulation in the skill body, say so — do not invent
references.
```

## 3. Real prompts that work in Cursor

Open Cursor's chat (`Cmd+L`) — these have all been tested:

> *"Read `formula.json` in this repo and tell me which substances would block sale of this serum in the EU under Reg 1223/2009."*
> Cursor reads the file, the model picks `cosmetics-compliance` + `substance-screening`, returns a per-ingredient verdict.

> *"We're shipping the `bom.csv` electronics BOM to a US distributor. Check RoHS, REACH, and FCC implications."*
> Triggers `electronics-compliance`, `substance-screening`, `customs-and-trade`.

> *"Generate the customer-facing GPSR-compliant safety notice for the product described in `product-spec.md`."*
> Triggers `labeling-compliance`, `marketplace-compliance`.

In Cursor's agent mode (`Cmd+I`), the same prompts work but the agent can also write files — useful when you want the output saved as `compliance/eu-substance-report.md`.

## 4. Use the JSON tools directly

Cursor exposes the three MCP tools (`list_skills`, `find_skill`, `read_skill`) as tool calls in agent mode. You can ask:

> *"Use the `find_skill` tool to find the best skill for 'EPR registration in Germany' and then read it."*

The model will call `find_skill({"question": "EPR registration in Germany"})`, get `packaging-compliance` as the top result, then `read_skill({"name": "packaging-compliance"})`, and answer with the relevant section. This is the highest-fidelity workflow and beats writing the skill name yourself when you don't know the catalogue.

## 5. Pin to a project, not the user profile

If you'd rather scope the MCP server to a single repo (e.g. you only want it for the cosmetics monorepo), use Cursor's project-local config at `.cursor/mcp.json` instead of `~/.cursor/mcp.json`. Same JSON, different scope. Project config wins over user config for that workspace.

---

## Troubleshooting

**`cleo-skills` shows 0 tools / 0 prompts.**
The server failed to start. Run `npx -y @cleo-labs/skills-mcp@latest` in a terminal; it should emit one line on stderr and then go quiet. If it crashes, [open an issue](https://github.com/Cleo-Labs-IA/skills_library/issues) with the stack trace.

**Cursor uses an old version after a `@latest` update.**
The npm cache for `npx` can pin a stale tarball. Clear it: `rm -rf ~/.npm/_npx` and restart Cursor.

**The model keeps inventing regulations.**
Add the `.cursorrules` snippet above. The model needs to be told *to use* the skill — Cursor surfaces it but won't always reach for it.

**I want to pass a Cleo Legal API key.**
The MCP server itself does not need one. The `compliance-mcp-tools` skill explains how to wire the live Cleo Legal API into a downstream agent. Get a key at <https://legaldata-public.cleolabs.co/>.

---

## Pair with other tutorials

- [Claude Desktop](./claude-desktop.md) — same skills, in the desktop app.
- [Continue.dev](./continue.md) — open-source alternative to Cursor.
- [Headless / CI](./headless.md) — run the compliance checks in your pipeline.
- [Custom MCP client](./custom-client.md) — build a Python or Node client that talks straight to the server.

---

Repo: <https://github.com/Cleo-Labs-IA/skills_library>
Live regulation + substance database: <https://legaldata-public.cleolabs.co/>
