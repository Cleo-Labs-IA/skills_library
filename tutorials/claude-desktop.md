# Claude Desktop integration

> Wire the 45 product-compliance skills from [`skills_library`](https://github.com/Cleo-Labs-IA/skills_library) into Claude Desktop in about 60 seconds. No build step, no API key, no account — `npx` does the work.

```bash
npx -y @cleo-labs/skills-mcp@latest
```

That command will be the one Claude Desktop runs in the background. You will not invoke it manually after setup.

---

## 1. Locate your `claude_desktop_config.json`

Claude Desktop reads one JSON config file at startup:

| Platform | Path |
| -------- | ---- |
| macOS | `~/Library/Application Support/Claude/claude_desktop_config.json` |
| Windows | `%APPDATA%\Claude\claude_desktop_config.json` |
| Linux (unofficial builds) | `~/.config/Claude/claude_desktop_config.json` |

If the file does not exist yet, create it with `{}` as the contents. Claude Desktop creates the parent directory on first launch — open the app once if you cannot find the folder.

## 2. Add the `cleo-skills` server

Open the file in your editor and merge the following block. If `mcpServers` already exists, add `cleo-skills` as a new key alongside the existing entries.

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

Save the file. **Fully quit Claude Desktop** (Cmd+Q on macOS, not just close the window — the menu bar agent persists) and relaunch.

## 3. Verify the server loaded

Click the paper-clip icon in the chat input. You should see a "Cleo Skills MCP" group with 45 resources whose names match `skill://cosmetics-compliance`, `skill://food-compliance`, `skill://electronics-compliance`, and so on through the full list in [the repo README](https://github.com/Cleo-Labs-IA/skills_library#skills).

The slash-command menu (type `/`) also exposes each skill as a prompt — pick `food-compliance`, fill in the optional `user_query` argument, and Claude will load the skill body before answering.

---

## 4. Real example queries

Once loaded, the skills auto-trigger on natural prompts. You do not need to mention them by name. A few prompts that consistently route correctly:

> *"I'm launching a retinol night serum at 0.3% in the EU and US. What's blocking me?"*
> Triggers `cosmetics-compliance`, `substance-screening`, `multi-jurisdiction-scan`. Retinol (CAS 68-26-8) is now restricted in EU cosmetics to 0.3% in face products / 0.05% in body lotion under Reg 2024/996 — the model will tell you you're at the ceiling.

> *"Help me build a compliance matrix for our Bluetooth speaker in EU + UK + US + Canada."*
> Triggers `electronics-compliance`, `market-entry-checklist`, `testing-certification`. Expect CE (RED 2014/53/EU + RoHS), UKCA, FCC Part 15B + 15C, ISED RSS-247.

> *"What does GPSR mean for our Amazon EU listings after the December 2024 deadline?"*
> Triggers `marketplace-compliance`, `responsible-person`, `labeling-compliance`.

> *"Walk me through registering as a Responsible Person in France for a small skincare brand."*
> Triggers `responsible-person`, `cosmetics-compliance`.

For more starter prompts, see the [10 case studies](../case-studies/) — each one was tested in Claude Desktop with this exact setup.

## 5. Optional: feed it the Cleo Legal API

The skills work standalone (each `SKILL.md` already references the EU Cosmetics Regulation 1223/2009, REACH Annex XVII, FDA 21 CFR, etc.). To turn substance lookups from "ask Claude what it knows" into "query a live database of 13 jurisdictions", get a free API key at **<https://legaldata-public.cleolabs.co/>** and add the [`compliance-mcp-tools`](https://github.com/Cleo-Labs-IA/skills_library/tree/main/skills/compliance-mcp-tools) skill to your config — it bridges the skills to live customs, substance, and sanctions data.

---

## Troubleshooting

**The `cleo-skills` group doesn't appear in the paper-clip menu.**
Check Claude Desktop's logs — `~/Library/Logs/Claude/mcp.log` on macOS. The most common cause is a JSON syntax error in `claude_desktop_config.json`. Run `cat ~/Library/Application\ Support/Claude/claude_desktop_config.json | python3 -m json.tool` to validate.

**`npx` is not found.**
Install Node 20+ (`brew install node` on macOS, official installer on Windows). The MCP server needs Node, not just the browser.

**The server starts but then crashes.**
Run it manually to see stderr: `npx -y @cleo-labs/skills-mcp@latest` in a terminal. The expected behaviour is silence on stdout + a one-line startup message on stderr. If you see a stack trace, please file a [GitHub issue](https://github.com/Cleo-Labs-IA/skills_library/issues) with the output.

**Skills load but Claude ignores them.**
This is usually a prompt-engineering issue, not an integration issue. Reference the vertical explicitly the first time (e.g., "use the cosmetics-compliance skill") so the model picks the right one — subsequent turns will follow it automatically.

**I want to pin a version instead of `@latest`.**
Replace `@latest` with the version pin: `"@cleo-labs/skills-mcp@0.1.0"`. The full version history is on the [npm package page](https://www.npmjs.com/package/@cleo-labs/skills-mcp).

---

## Screenshot specs (for documentation builds)

If you are rebuilding this guide and want to reproduce the original screenshots, here are the framings:

1. **Hero screenshot — the paper-clip menu open.** Claude Desktop window, ~1400 × 900, light mode, chat empty, paper-clip menu expanded showing the "Cleo Skills MCP" section with 6-8 skill resources visible. Annotate the cleo-skills group with a thin red box.
2. **Slash menu with a skill prompt selected.** Same window, slash menu open after typing `/cosma…`, `cosmetics-compliance` highlighted, side panel showing the prompt's `user_query` argument input.
3. **Live answer.** Mid-conversation, a Claude turn showing a Revenue-at-Risk matrix for a sample retinol serum across EU/US/UK/JP. Crop to the answer block + the upstream user prompt.
4. **The config file.** A code-editor screenshot showing `claude_desktop_config.json` with the `cleo-skills` block. Dark editor theme, monospaced font, 14-16 pt.

---

## Next steps

- Try the [Cursor](./cursor.md) or [Continue](./continue.md) integration if you also code.
- Use the [headless tutorial](./headless.md) to drop the same compliance checks into CI.
- Pair this setup with the live database — grab a Cleo Legal API key at **<https://legaldata-public.cleolabs.co/>** for live substance + customs lookups.

Star the repo if it helped: <https://github.com/Cleo-Labs-IA/skills_library>.
