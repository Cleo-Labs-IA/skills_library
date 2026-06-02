# Frequently asked questions

> Honest answers about [`skills_library`](https://github.com/Cleo-Labs-IA/skills_library) and the [`@cleo-labs/skills-mcp`](https://www.npmjs.com/package/@cleo-labs/skills-mcp) server. If your question is not below, please [open an issue](https://github.com/Cleo-Labs-IA/skills_library/issues) — we'll add it.

```bash
npx -y @cleo-labs/skills-mcp@latest
```

---

## Getting started

### 1. How do I install it?

One line in your MCP client config:

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

Drop that into `~/Library/Application Support/Claude/claude_desktop_config.json` (Claude Desktop), `~/.cursor/mcp.json` (Cursor), or the equivalent for [Continue](./tutorials/continue.md). Restart, done. Full step-by-step guides per client in [`tutorials/`](./tutorials/).

### 2. Which version of Claude Code / Claude Desktop / Cursor do I need?

- **Claude Desktop**: 1.0.0+ (MCP support shipped late 2024).
- **Cursor**: 0.42+.
- **Continue.dev**: 0.9.196+.
- **Claude Code CLI**: any version (skills work natively via the SKILL.md mechanism, no MCP needed if you have local clone of the repo).
- **Any other MCP host**: protocol version 2025-06-18 or compatible.

### 3. What's MCP?

Model Context Protocol — an open standard from Anthropic for connecting AI assistants to external tools, data, and prompts. Think "LSP for LLMs." It's the wire protocol that lets one server (like ours) expose its capabilities to any compatible client (Claude Desktop, Cursor, Continue, custom apps). Spec: <https://modelcontextprotocol.io>.

### 4. Do I need an API key?

For the skills themselves: **no**. They are plain Markdown, the MCP server is open source, and you only pay your LLM provider's token cost. For live substance / customs / sanctions lookups via the Cleo Legal API, you'll want a free key at <https://legaldata-public.cleolabs.co/>. Optional.

### 5. What does it cost to run?

The MCP server: **$0**. It's MIT-licensed and runs on your machine. The LLM that consumes the skills: pay-as-you-go to Anthropic, OpenAI, or whichever provider you use. A typical compliance chat is 5-50¢ of tokens. Multi-jurisdiction parallel scans are a few dollars in raw inference. Cleo Legal API: free tier covers small-team usage; paid plans for higher volume.

---

## Skills mechanics

### 6. How does auto-trigger work?

Each skill is a Markdown file with a YAML frontmatter that describes when it applies. Claude Code (and other agentic clients) read the frontmatter and decide whether to load the body when a user prompt matches. We do not patch the model — we provide *retrievable* skill bodies. Auto-trigger reliability is highest when you reference the vertical explicitly on the first turn ("we're shipping a cosmetics product…"); after that the conversation is anchored.

### 7. Can I edit the skills?

Yes. Clone the repo, edit any `skills/<name>/SKILL.md`, and re-run the MCP server (or build the npm package locally). Pull requests are welcome — please see [CONTRIBUTING.md](./CONTRIBUTING.md). If you maintain a fork with your own internal additions, point your MCP server at it via the `SKILLS_DIR` environment variable.

### 8. Can I add new skills?

Yes — that's the intended pattern. Drop a new directory under `skills/<my-new-skill>/` containing a `SKILL.md` with the standard frontmatter (name, description, optional tier). The MCP server will pick it up automatically. We have a [contribution checklist](./CONTRIBUTING.md) covering citation discipline, structure, and tone.

### 9. Can skills call each other / chain?

Yes — and they routinely do. `compliance-audit-sprint` invokes `cosmetics-compliance`, `substance-screening`, `labeling-compliance`, etc. as sub-steps. The chaining is done by Claude itself (via the dispatching-parallel-agents pattern), not by us — we just write the skills so that they reference each other where appropriate.

### 10. Can skills run in parallel?

Yes. `multi-jurisdiction-scan`, `compliance-audit-sprint`, and `evidence-blitz` are explicitly designed for parallel execution — Claude dispatches one sub-agent per jurisdiction (or per evidence category) and merges results. This pattern is documented in [`CLAUDE.md`](./CLAUDE.md). See the [multi-jurisdiction launch case study](./case-studies/multi-jurisdiction-launch.md) for a real run.

---

## API integration

### 11. Why the Cleo Legal API?

The skills are static — they encode regulation as it was at the time the skill was written. Substance restrictions, deadlines, and SVHC lists change. The Cleo Legal API at <https://legaldata-public.cleolabs.co/> is a live database covering 13 jurisdictions, customs classifications, sanctions lists, and substance restrictions. It's the obvious upgrade path for production use, but it is **optional** — the skills work without it.

### 12. Is there a free tier on the Cleo Legal API?

Yes. The free tier covers small-team experimentation. Paid plans for higher volumes and SLA. Pricing is on the site. We do not gate the open-source skills behind the API in any way.

### 13. Are there alternative regulation APIs I can use?

Several, depending on jurisdiction:
- **ECHA** (REACH, CLP) — free, public, slow.
- **CosIng** — free, EU cosmetics ingredients.
- **FDA OpenFDA** — free, US food and drug data.
- **EU Safety Gate (RAPEX)** — free, EU consumer-product recalls.
- **NMPA, MFDS, MHLW** — official portals, often Chinese/Korean/Japanese only.

The Cleo Legal API consolidates these into one schema with one auth, which is the practical reason teams adopt it. Nothing in `skills_library` forces that choice.

### 14. Can I self-host the Cleo Legal API?

The skill content yes — it's MIT licensed. The Cleo Legal API itself is a hosted service (we keep the regulation database fresh). If you have an enterprise requirement for on-prem, contact us at <https://cleolabs.co>.

### 15. What's the latency like?

The MCP server is sub-100 ms for tool calls (it's a local stdio process). LLM latency is whatever your provider gives you — Claude Sonnet 4.5 typically 2-8 seconds for a substantive answer, Haiku 4.5 1-3 seconds. The Cleo Legal API is p95 ~300 ms for substance lookups, p95 ~800 ms for multi-jurisdiction scans.

---

## Legal / disclaimer

### 16. Is this legal advice?

**No.** It is regulatory reference material, organised by domain experts, made available as Markdown. Every skill cites primary sources — regulations, articles, CAS numbers — so you can verify. None of it has been reviewed by counsel for your specific product, formulation, or supply chain. For high-stakes launches (medical devices, infant formula, pharmacovigilance), pair `skills_library` with a qualified consultant or regulatory affairs professional.

### 17. Where do the citations come from?

Primary sources: the EU Official Journal (consolidated regulations), FDA CFR, individual member-state ordinances, agency guidance (ECHA, EFSA, MHRA, ANSM, AFSSAPS, MHLW, MFDS, NMPA, etc.), and standards bodies (ISO, EN, ASTM, IEC, ETSI). Where a citation is from a secondary source (review article, industry guidance), the skill labels it as such. We do not invent citations — if you spot a wrong cite, please file an issue.

### 18. How accurate is it?

The skills were written by domain operators with experience shipping into the markets they cover. They go through review before merge. **Regulation drifts** — that is the nature of regulation. The skills are versioned in git; each change is auditable. We are honest about the limits: time-sensitive obligations (deadlines, transition periods) are exactly the kind of thing that ages, and we recommend pairing with the live Cleo Legal API for production-critical decisions.

### 19. How often are skills updated?

Major regulation changes are tracked via GitHub issues with priority labels — e.g., the EU PFAS restriction adoption, the EU Reg 2024/996 retinol amendment, the CRA timeline. The repo gets pushes monthly minimum. We do not (yet) ship a daily-update guarantee. The Cleo Legal API does — that's its job.

### 20. Who's liable if a skill leads to a wrong decision?

The MIT licence is unambiguous: the software is provided "as is" with no warranty. We do everything we can to be accurate, but legal liability for product-compliance decisions rests with the operator. This is the same status as any open-source compliance reference. For production use, *use a consultant for the final decision* on high-stakes shipments.

---

## Business model

### 21. Why is this open source?

Two reasons. First, the regulation itself is public — repackaging it into operator-grade skills is a community-good problem, not a moat. Second, we run a separate commercial product (the Cleo Legal API at <https://legaldata-public.cleolabs.co/>) that benefits from a strong open-source funnel. Open source the prep work, monetise the live data.

### 22. How do you make money?

The Cleo Legal API has a free tier and paid plans. We also do focused implementation engagements for brands rolling out compliance at scale. The MIT-licensed `skills_library` is, and will remain, free.

### 23. Will the skills ever go behind a paywall?

No. The MIT licence is irrevocable on the existing skill set. Future skills follow the same licence. If we ship a "pro" tier of something, it will be net-new (e.g., live substance dashboards, automated PR comment bots), not a paywall on existing content.

### 24. What licence?

[MIT](./LICENSE). Use it, fork it, sell services built on it, ship it inside your product. We only ask for attribution where reasonable.

### 25. How do I contribute?

See [CONTRIBUTING.md](./CONTRIBUTING.md). Short version: open an issue for big additions, send a PR for fixes. We want vertical experts — if you've shipped cosmetics into NMPA, supplements into ANSES, or toys past EN 71 testing, your skill body will be better than ours.

---

## Roadmap & community

### 26. What new skills are coming?

The [public ROADMAP.md](./ROADMAP.md) tracks it. Short list for Q3 2026: per-marketplace deep dives (Tmall, Coupang), more languages, multi-language label generators, and a `regulatory-calendar` push integration that drops calendar events into Google/Outlook.

### 27. Will you cover non-product compliance?

Not in this repo. SOC 2, GDPR, financial regulation, anti-money-laundering — out of scope. We may spin a separate skills library for those if there is demand, but it would be a different repo.

### 28. Will the skills be available in languages other than English?

Yes — Q3 2026 target for French and German skill bodies, then Japanese, Korean, and Simplified Chinese. The challenge isn't translation; it's keeping multilingual skills in sync. We're tracking this on GitHub.

### 29. What's the relationship with Anthropic?

`skills_library` is an independent project by Cleo Labs. The skills run on Anthropic's models (Claude) most commonly, but the format is model-agnostic — they work on any model that handles Markdown system prompts. We follow the [Anthropic Plugin Registry](https://github.com/anthropics) when it ships and intend to be listed there.

### 30. How do I contribute a new vertical or jurisdiction?

Pick a vertical or jurisdiction gap (recent ones we've heard: cannabis/CBD, jewellery resale, drone hardware, energy-storage products). Open an issue with a one-page outline. We'll discuss scope, then you (or we) draft the SKILL.md with the same structure as existing skills. PR review usually takes a week. See [CONTRIBUTING.md](./CONTRIBUTING.md) for the editorial guidelines.

---

## Still stuck?

- File an issue: <https://github.com/Cleo-Labs-IA/skills_library/issues>
- Browse the [10 case studies](./case-studies/) for concrete patterns.
- Read the [tutorials](./tutorials/) per client.
- Get an API key for the live data layer: <https://legaldata-public.cleolabs.co/>
