# Continue.dev integration

> Continue.dev is the open-source IDE assistant for VS Code and JetBrains. As of Continue 0.9.196+ it speaks MCP natively, which means the 45 compliance skills from [`skills_library`](https://github.com/Cleo-Labs-IA/skills_library) work in any editor Continue supports.

```bash
npx -y @cleo-labs/skills-mcp@latest
```

You will not invoke that command directly — Continue spawns it on demand.

---

## 1. Find your `config.yaml`

Continue switched from `config.json` to `config.yaml` in 2025. The file lives at:

| Platform | Path |
| -------- | ---- |
| macOS / Linux | `~/.continue/config.yaml` |
| Windows | `%USERPROFILE%\.continue\config.yaml` |

If the file doesn't exist, create it. If you still have a legacy `config.json`, Continue keeps it working — paste the JSON-style snippet from [the Claude Desktop tutorial](./claude-desktop.md) and adapt the keys (`mcpServers`). The rest of this guide assumes YAML.

## 2. Add the MCP server entry

Open `~/.continue/config.yaml` and add the `mcpServers` block (it sits at the top level, alongside `models`, `contextProviders`, `slashCommands`, etc.):

```yaml
mcpServers:
  - name: cleo-skills
    command: npx
    args:
      - "-y"
      - "@cleo-labs/skills-mcp@latest"
```

A complete minimal `config.yaml` looks like:

```yaml
name: My Continue config
version: 1.0.0
models:
  - name: Claude Sonnet 4.5
    provider: anthropic
    model: claude-sonnet-4-5
    apiKey: ${ANTHROPIC_API_KEY}
mcpServers:
  - name: cleo-skills
    command: npx
    args:
      - "-y"
      - "@cleo-labs/skills-mcp@latest"
```

Save the file. Continue reloads the config on save in VS Code; in JetBrains you may need to use the **Reload Config** button in the Continue sidebar.

## 3. Verify the server is up

In the Continue chat panel, type `@` — you should see a context provider list. The MCP server's resources surface here. Pick `@MCP` (or `@cleo-skills`, depending on Continue version) and you will get autocomplete on the 45 skill names (`cosmetics-compliance`, `food-compliance`, `electronics-compliance`, …).

Alternatively, the slash menu (`/`) exposes each skill as a prompt. Type `/` and you'll see `food-compliance`, `multi-jurisdiction-scan`, and the other 43 entries.

## 4. Example uses

Continue is most useful inline — highlight code or a spec file and chat about it. These prompts have been validated:

> **Inline on a `formula.yaml`:** *"Highlight every substance restricted under EU 1223/2009 Annex II/III in this formulation and tell me the max concentration."*
> Continue routes to `cosmetics-compliance` + `substance-screening`. It returns a per-row table.

> **Inline on a `package-spec.md`:** *"What EPR registrations do I need in Germany, France, and Spain for this packaging? Use the cleo-skills MCP."*
> Routes to `packaging-compliance` + `responsible-person`.

> **Slash command:** `/multi-jurisdiction-scan` with `user_query=launch our 0.05% retinol serum in EU, UK, US, JP, KR — RED/YELLOW/GREEN per market`.

> **Slash command:** `/recall-response` with `user_query=we had a customer report skin irritation from batch 2024-Q3, what's the EU 10-day notification path?`.

## 5. Combine with custom slash commands

If you find yourself running the same compliance flow daily (e.g., a Friday substance-screen on incoming SKUs), promote it to a Continue slash command. In `config.yaml`:

```yaml
slashCommands:
  - name: friday-substance-check
    description: Weekly EU + US substance screen on all new SKUs in /products
    prompt: |
      Use the cleo-skills MCP server. For every product file in /products
      modified this week, run substance-screening for EU (Reg 1223/2009),
      US (FDA MoCRA), and UK (UK Cosmetics Regulation). Return a markdown
      table sorted by Revenue-at-Risk descending. Cite every regulation.
mcpServers:
  - name: cleo-skills
    command: npx
    args:
      - "-y"
      - "@cleo-labs/skills-mcp@latest"
```

You can now type `/friday-substance-check` and Continue will use the MCP server under the hood.

## 6. Per-project config

Continue also supports a `.continue/config.yaml` inside a repo. Same schema, scoped to the workspace. Useful when only one of your projects is a physical-product project and the others are pure software.

---

## Troubleshooting

**`@cleo-skills` doesn't appear in the context picker.**
Continue silently skips MCP servers that fail to start. Open the Continue Output panel in VS Code (`View → Output → Continue`) and check for "MCP server cleo-skills" log lines. If you see `ENOENT npx`, install Node 20+.

**The MCP entry is ignored.**
Continue's YAML parser is strict. Make sure your indentation uses spaces, not tabs, and that `mcpServers` is at the document root (not nested under `models` or `contextProviders`).

**Inline edits don't trigger the skill.**
Continue's inline edit feature (Cmd+I) uses a tighter prompt budget. Reference the skill name explicitly the first time: *"using `cosmetics-compliance` skill, flag every restricted substance…"*.

**I'm on Continue 0.9.x without MCP support.**
Update to the latest version — `code --install-extension Continue.continue` on VS Code, or the marketplace in JetBrains. MCP support landed in 0.9.196.

---

## Next steps

- [Claude Desktop](./claude-desktop.md) — the same skills in the standalone app.
- [Cursor](./cursor.md) — if you've migrated off VS Code.
- [Headless / CI](./headless.md) — run compliance checks in your pipeline, not just the IDE.
- [Custom MCP client](./custom-client.md) — bypass Continue and build your own.

Get a Cleo Legal API key for live substance / customs / sanctions data: <https://legaldata-public.cleolabs.co/>.
Source repo: <https://github.com/Cleo-Labs-IA/skills_library>.
