# Roadmap

> Public roadmap for [`skills_library`](https://github.com/Cleo-Labs-IA/skills_library) and the [`@cleo-labs/skills-mcp`](https://www.npmjs.com/package/@cleo-labs/skills-mcp) server. Honest about what ships, what's in flight, and what's aspirational.

Status legend:
- ✅ Shipped
- 🔜 In flight, target window committed
- 💡 On the table, no commitment yet
- ❌ Will not ship (explicitly out of scope)

```bash
npx -y @cleo-labs/skills-mcp@latest
```

---

## Q2 2026 — what's live now

This is the state at the time of writing. Every item here is in `main` and on npm.

- ✅ **45 production-grade compliance skills** — cosmetics, food, electronics, toys, textiles, supplements, medical devices, customs, recalls, marketplaces, and more. Full list in [`CLAUDE.md`](./CLAUDE.md) and the [README](./README.md).
- ✅ **MCP server (`@cleo-labs/skills-mcp` v0.1.x)** — exposes the 45 skills as resources, prompts, and three tools (`list_skills`, `find_skill`, `read_skill`). Stdio transport. Vitest test suite. [npm](https://www.npmjs.com/package/@cleo-labs/skills-mcp).
- ✅ **npm publishing pipeline** — versioned, signed, with the skills bundled at publish time via `scripts/sync-skills.mjs`.
- ✅ **Docker image** — `ghcr.io/cleo-labs-ia/skills-mcp:latest`, multi-stage build on node:20-alpine. Submitted to Glama MCP registry.
- ✅ **Claude Code plugin manifest** — `.claude-plugin/plugin.json` for direct installation via Claude Code's plugin mechanism.
- ✅ **Five client integration tutorials** — [Claude Desktop](./tutorials/claude-desktop.md), [Cursor](./tutorials/cursor.md), [Continue](./tutorials/continue.md), [headless / CI](./tutorials/headless.md), [custom client](./tutorials/custom-client.md).
- ✅ **Ten case studies** — concrete before-and-after numbers across verticals. See [`case-studies/`](./case-studies/).
- ✅ **Public comparison + 30-question FAQ + this roadmap** — [`comparison.md`](./comparison.md), [`FAQ.md`](./FAQ.md), this file.
- ✅ **Press kit** — see [`press-kit/`](./press-kit/) — logos, screenshots, OG image, founder bio.
- ✅ **MIT licence + CITATION.cff** — repo-level commitments to open source.

---

## Q3 2026 — in flight

Committed targets for the next quarter. Each item maps to a tracked GitHub issue or a PR in progress.

- 🔜 **More verticals (target +10 skills).** Specific candidates: drone hardware (EASA + FAA Part 107 + EU Reg 2019/947), e-bike L-category vs EPAC compliance, energy storage residential (UL 9540 + IEC 62619 + EU Reg 2023/1542), cannabis-derived cosmetics (CBD/CBG/THC borderline), nicotine pouches (vs TPD2 + vape regulation), kitchenware food-contact materials (Reg 1935/2004 + 2023/2006 GMP), refurbished electronics (WEEE + GPSR + warranty), ag drones, second-hand textiles (waste hierarchy + EU Waste Framework Directive). Track: [#feature/new-verticals](https://github.com/Cleo-Labs-IA/skills_library/issues?q=label%3Anew-vertical).
- 🔜 **Marketplace deep-dives.** New skill bodies for Tmall Global, Coupang (Korea), Mercado Libre, Tiki/Shopee/Lazada (SEA). Track: [#feature/marketplaces](https://github.com/Cleo-Labs-IA/skills_library/issues?q=label%3Amarketplaces).
- 🔜 **Multilingual skills (FR + DE first).** Same skills, translated and culturally adapted. Critical for European operators who want to keep the chat in their working language. Translation drift is the engineering challenge — we are tracking it with a parallel YAML structure that pins each EN paragraph to a FR/DE translation. Track: [#feature/multilingual](https://github.com/Cleo-Labs-IA/skills_library/issues?q=label%3Amultilingual).
- 🔜 **GitHub Action: `compliance-gate`.** Drop-in workflow that runs `substance-screening` on diff and posts PR comments. Builds on the [headless tutorial](./tutorials/headless.md). Track: [#feature/github-action](https://github.com/Cleo-Labs-IA/skills_library/issues?q=label%3Ahg-action).
- 🔜 **Examples package on npm.** A `@cleo-labs/skills-mcp-examples` companion package with the runnable Node + Python clients from [`examples/`](./examples/). Track: [#feature/examples-pkg](https://github.com/Cleo-Labs-IA/skills_library/issues?q=label%3Aexamples).
- 🔜 **Test coverage to 90%.** The MCP server is currently around 78% line coverage. Push for 90% on the handler + tool surface. Track: [#chore/coverage](https://github.com/Cleo-Labs-IA/skills_library/issues?q=label%3Acoverage).

---

## Q4 2026 — aspirational

Things we want to ship, but with less certainty. Promotion to Q3-in-flight depends on community pull and our own bandwidth.

- 💡 **Anthropic Plugin Registry listing.** When Anthropic ships their public plugin registry, we intend to be listed there day one. The manifest is already in place — this depends on Anthropic's launch timing.
- 💡 **Partner integrations.** Conversations are open with two notification-portal providers (one for EU CPNP, one for NMPA filings) to surface their workflows directly from the skills. Pre-product, no commitment.
- 💡 **Push integration for `regulatory-calendar`.** Drop calendar events into Google / Outlook / iCal directly. Webhook + ICS endpoint. Probably driven by the Cleo Legal API.
- 💡 **Skill explorer web UI.** A static site at <https://skills.cleolabs.co/> (placeholder) that lets non-engineers browse the 45 skills, search by vertical, and copy specific subsections. Not a chat UI — chat happens in the agents.
- 💡 **Per-skill versioning.** Today the whole repo is versioned together. We're exploring per-skill semver so consumers can pin specific skill versions for reproducibility (e.g., audit reports anchored to `cosmetics-compliance@2.1.0`).
- 💡 **Audit-trail mode in the MCP server.** Log every `read_skill` / `find_skill` call with timestamp + question + result to a local JSONL file, for organisations that want defensible records of which skill content guided which decision.

---

## 2027+ — vision

The bigger picture. No promises, but where we're heading.

- **The skills become the de facto reference for product-compliance LLM use.** When someone says "compliance skills for an AI assistant," `skills_library` is the answer — like `dotenv` for env vars or `lodash` for utility functions. Free, omnipresent, MIT.
- **A live-data pairing pattern.** Skills + Cleo Legal API + your MCP host = an operator-grade compliance loop. Other live-data providers can plug in too — we are not the only API that will ever exist.
- **Community-driven vertical depth.** Tactical knowledge from RAs, customs brokers, lab specialists, and product founders ends up in the skill bodies — not in PDFs that nobody reads. Citations stay primary-source.
- **A small, sustainable team behind it.** Cleo Labs stays independent. The open-source repo stays the canonical entry point.
- **Multilingual at scale.** EN + FR + DE + JA + KO + ZH-CN. Auto-update from a single canonical source so translations don't drift.

What we are explicitly **not** doing in 2027+:

- ❌ Becoming a SOC 2 / GRC platform. Drata and Vanta are excellent at that — we don't compete.
- ❌ Becoming a regulation news aggregator. Compliance.ai and a dozen others do that — we serve operators, not stakeholders.
- ❌ Walling off the skills behind a paid tier. The free, MIT'd skills are a commitment, not a marketing tactic.

---

## How to influence the roadmap

- **Open an issue** — feature requests, missing verticals, broken citations, jurisdiction gaps. <https://github.com/Cleo-Labs-IA/skills_library/issues>.
- **Open a PR** — contribute a skill body for a vertical you know better than us. See [`CONTRIBUTING.md`](./CONTRIBUTING.md).
- **Talk to us** — email <contact@cleolabs.co> for partner integrations, sponsorships, and enterprise use cases.

---

## Live now

```bash
npx -y @cleo-labs/skills-mcp@latest
```

Try a [tutorial](./tutorials/) and a [case study](./case-studies/). Grab a Cleo Legal API key at <https://legaldata-public.cleolabs.co/> for the live regulation layer.

Repo: <https://github.com/Cleo-Labs-IA/skills_library>
