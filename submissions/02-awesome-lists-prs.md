# Submission #2 — Awesome List Pull Requests

**Goal:** Open 10 PRs in a single 2-hour block, adding `skills_library` to high-DA awesome lists.
**When:** Wed May 30 (top 3 lists) and Fri Jun 1 (remaining 7), per Week 1 plan.
**Canonical description (80 chars target):**
> `skills_library — 28 Claude Code skills for product compliance (EU, US, UK, intl) — by Cleo Labs`

**Tracking spreadsheet columns to add later:** PR URL, opened date, status, last-followed-up.

---

## Universal PR title template

```
Add skills_library: 28 Claude Code skills for global product compliance
```

## Universal PR body template (copy, adjust per list category)

```markdown
## Adding skills_library to <CATEGORY>

This PR adds [skills_library](https://github.com/Cleo-Labs-IA/skills_library) — an MIT-licensed bundle of 28 Claude Code skills for product compliance (EU, US, UK, international).

**Why it fits this list:** <ONE-LINE REASON — see per-list section below>

**About the project:**
- 28 skills covering cosmetics, food, supplements, electronics, toys, textiles, packaging
- Auto-triggers when a user asks a compliance question — no manual invocation
- MIT licensed. Free forever
- Maintained by Cleo Labs (https://cleolabs.co), a funded SAS with a 24-month maintenance commitment
- Optional Cleo Legal API backend (free tier: 50 calls/day at https://legaldata-public.cleolabs.co)

Repo: https://github.com/Cleo-Labs-IA/skills_library
Landing: https://cleo-labs-ia.github.io/skills_library/

Happy to revise the entry if the format isn't quite right.
```

---

## List 1 — awesome-claude (hannesrudolph/awesome-claude)

**List URL:** https://github.com/hannesrudolph/awesome-claude
**Priority:** P0
**Owner responsiveness:** High (weekly merges)
**File to edit:** `README.md`
**Likely section:** `## Skills` or `## Tools` (verify before editing)

**Exact markdown line to add:**

```markdown
- [skills_library](https://github.com/Cleo-Labs-IA/skills_library) — 28 Claude Code skills for product compliance (EU, US, UK, intl). Cosmetics, food, electronics, toys, textiles. MIT licensed, by Cleo Labs.
```

**PR title:**

```
Add skills_library — 28 Claude Code skills for product compliance
```

**PR body:**

```markdown
## Adding skills_library to awesome-claude

This PR adds [skills_library](https://github.com/Cleo-Labs-IA/skills_library) — an MIT-licensed bundle of 28 Claude Code skills for product compliance.

**Why it fits this list:** It's a substantial, end-user-facing Claude Code skill bundle (28 skills, all production-tested), with a real use case (physical product brands selling internationally). The other entries in the Skills section are either single skills or smaller bundles — this is the most comprehensive open-source compliance skill set we know of for Claude Code.

**Quick stats:**
- 28 skills across 6 tiers (core, market intel, action, deep dives, vertical, reference)
- Three skills use `superpowers:dispatching-parallel-agents` for parallel jurisdiction scans
- Optional MCP backend (Cleo Legal API) with free tier
- Auto-triggers — no manual `/skill` invocation required

Repo: https://github.com/Cleo-Labs-IA/skills_library
Landing: https://cleo-labs-ia.github.io/skills_library/

Thanks for maintaining the list. Happy to adjust placement or wording.
```

---

## List 2 — awesome-claude-code (hesreallyhim/awesome-claude-code)

**List URL:** https://github.com/hesreallyhim/awesome-claude-code
**Priority:** P0
**Owner responsiveness:** High
**File to edit:** `README.md`
**Likely section:** `## Skills` or `## Plugins` (verify)

**Exact markdown line to add:**

```markdown
- [skills_library](https://github.com/Cleo-Labs-IA/skills_library) — 28 Claude Code skills bundle for product compliance across EU, US, UK and international markets. Cosmetics, food, electronics, toys, textiles, packaging. MIT licensed.
```

**PR title:**

```
Add skills_library to Skills section
```

**PR body:** use universal template with this "Why it fits":

> **Why it fits this list:** awesome-claude-code is the canonical index for Claude Code resources. skills_library is the largest open-source skill bundle for a vertical use case (compliance) and demonstrates the auto-trigger pattern at scale. Should help builders looking for skill structure inspiration.

---

## List 3 — awesome-mcp-servers (punkpeye/awesome-mcp-servers)

**List URL:** https://github.com/punkpeye/awesome-mcp-servers
**Priority:** P0
**Owner responsiveness:** High
**File to edit:** `README.md`
**Likely section:** `## Compliance` or `## Legal` — likely doesn't exist; add under `## Other Tools` or propose a new "Compliance & Regulatory" section.

**Exact markdown line to add (use existing format conventions of the list — verify capitalization, emoji, country flag):**

```markdown
- [Cleo Legal MCP](https://github.com/Cleo-Labs-IA/skills_library) 🏛️ ☁️ - Compliance & regulatory data MCP server. Substance checks, customs HS codes, sanctions screening, regulatory citations across EU/US/UK/intl. Free tier at legaldata-public.cleolabs.co. Companion: 28 Claude Code skills.
```

**PR title:**

```
Add Cleo Legal MCP (compliance / regulatory data) — new Compliance category
```

**PR body:**

```markdown
## Adding Cleo Legal MCP + companion skill bundle

This PR adds the Cleo Legal MCP server to the list, under a new **Compliance & Regulatory** category (or wherever you prefer to place it).

**What it does:**
- Substance / ingredient checks (CAS resolution → 13 regulatory databases → per-jurisdiction verdict)
- Customs HS code classification + duty calculation
- Sanctions + dual-use screening
- Regulatory citations (cosmetics, food, electronics, toys, textiles, packaging) for EU, US, UK, JP, KR, CN, CA

**Companion:** `skills_library` — 28 Claude Code skills that wrap the MCP and provide auto-triggered compliance workflows. https://github.com/Cleo-Labs-IA/skills_library

**Why this category is missing:** Compliance is a $300B/year industry; MCP servers for it are nascent. We'd love to seed a Compliance category here. Happy to propose other entries to populate it (we know of 4–5 we could surface).

**Hosting / availability:**
- Cloud MCP at https://legaldata-public.cleolabs.co (free tier: 50 calls/day, then €349/mo Pro)
- Open-source skill bundle: MIT
- Skills work in degraded mode without the MCP

Thanks for maintaining the canonical MCP list.
```

---

## List 4 — awesome-ai-agents (e2b-dev/awesome-ai-agents)

**List URL:** https://github.com/e2b-dev/awesome-ai-agents
**Priority:** P1
**Owner responsiveness:** Medium
**File to edit:** `README.md`
**Likely section:** `## Vertical AI Agents` or `## Tools & Skills`

**Exact markdown line to add:**

```markdown
- [skills_library](https://github.com/Cleo-Labs-IA/skills_library) — 28 Claude Code skills for product compliance. Vertical AI agent toolkit for physical-product brands selling internationally. MIT licensed. Cleo Legal API backend (free tier).
```

**PR title:**

```
Add skills_library — vertical compliance agent toolkit for Claude Code
```

**PR body:** use universal template with this "Why it fits":

> **Why it fits this list:** skills_library is a vertical agent toolkit — 28 skills focused on physical-product compliance — that demonstrates the agent-skills pattern beyond general-purpose chat. Notable: three of the skills dispatch parallel sub-agents (one per jurisdiction) which is one of the cleaner real-world examples of agent orchestration we've shipped.

---

## List 5 — awesome-llm-apps (Shubhamsaboo/awesome-llm-apps or shashankvemuri/awesome-llm-apps — verify)

**List URL:** https://github.com/Shubhamsaboo/awesome-llm-apps (verify before opening)
**Priority:** P1
**Owner responsiveness:** Medium
**File to edit:** `README.md`
**Likely section:** `## AI Agents` or `## Vertical Applications`

**Exact markdown line to add:**

```markdown
- [skills_library](https://github.com/Cleo-Labs-IA/skills_library) — 28 Claude Code skills for product compliance. Cosmetics, food, electronics, toys, textiles. EU/US/UK/intl regulatory citations via Cleo Legal API. MIT.
```

**PR title:**

```
Add skills_library to Vertical Applications
```

**PR body:** universal template. "Why it fits":

> **Why it fits this list:** It's a complete vertical-application example (compliance for physical-product brands) built on top of Claude Code skills + MCP, with a working business model behind the data layer. Useful as a reference for builders considering similar agent + data API plays.

---

## List 6 — awesome-compliance (search GitHub topic — likely candidate: mxschmitt/awesome-compliance OR create a recommendation)

**Discovery note:** GitHub topic `compliance` lists exist but none are widely-starred. Best candidate to check first: https://github.com/mxschmitt/awesome-compliance (verify activity). If dead, fallback: search "awesome compliance" on https://github.com/sindresorhus/awesome and pick the most-starred non-archived fork.

**List URL (primary candidate):** https://github.com/mxschmitt/awesome-compliance
**Fallback candidate:** https://github.com/sbilly/awesome-security (compliance section)
**Priority:** P1
**File to edit:** `README.md`
**Likely section:** `## Product Compliance` (create if absent) or `## Tools`

**Exact markdown line to add:**

```markdown
- [skills_library](https://github.com/Cleo-Labs-IA/skills_library) — AI agent toolkit for product compliance. 28 Claude Code skills covering cosmetics, food, electronics, toys, textiles. Auto-generates compliance audits, substance checks, labeling reports across EU/US/UK/intl. MIT licensed.
```

**PR title:**

```
Add skills_library — AI-native product compliance toolkit
```

**PR body:** universal template. "Why it fits":

> **Why it fits this list:** Product compliance is underrepresented here vs financial/IT compliance. skills_library is the first MIT-licensed AI agent toolkit for physical-product compliance — substance checks, labeling, certifications, recall response. Should fill a real gap.

**Fallback action if no good list exists:** create `Cleo-Labs-IA/awesome-product-compliance` ourselves, seed it with 50 entries, then submit it to `sindresorhus/awesome` as a meta-list. That's a separate workstream worth scheduling for Q3.

---

## List 7 — awesome-regulatory (search; best candidate is likely empty)

**Discovery note:** No high-quality `awesome-regulatory` list exists as of 2026-05. Most matches are SecOps regulatory. Best candidate:

**List URL (search):** https://github.com/topics/regulatory
**Fallback:** https://github.com/bcongdon/awesome-legaltech (legal-tech adjacency)
**Priority:** P2

**Action:** Submit to `bcongdon/awesome-legaltech` instead with this line:

```markdown
- [skills_library](https://github.com/Cleo-Labs-IA/skills_library) — 28 Claude Code skills for product compliance and regulatory data. Cosmetics, food, electronics, toys. EU/US/UK/intl citations. MIT.
```

**PR title:**

```
Add skills_library — AI agent toolkit for product/regulatory compliance
```

**PR body:** universal template. "Why it fits":

> **Why it fits this list:** awesome-legaltech is the closest curated home for regulatory tooling. skills_library is regulatory-data-first (substance bans, labeling rules, certifications) wrapped in a Claude Code skill bundle. Fits naturally next to existing entries like Atrium and Casetext-adjacent tools.

**Secondary action:** If we want our own list, create `Cleo-Labs-IA/awesome-regtech` and seed it (Q3 task).

---

## List 8 — awesome-d2c-tools (search — candidate: dgilfoyle/awesome-d2c)

**List URL (candidate):** https://github.com/dgilfoyle/awesome-d2c (verify it exists and is maintained; if not, fallback below)
**Fallback:** https://github.com/topics/dtc OR submit to https://github.com/sindresorhus/awesome as a meta-suggestion
**Priority:** P2
**File to edit:** `README.md`
**Likely section:** `## Tools` or `## Operations`

**Exact markdown line to add:**

```markdown
- [skills_library](https://github.com/Cleo-Labs-IA/skills_library) — 28 Claude Code skills for D2C compliance. Substance checks, labeling, marketplace compliance (Amazon, Shopify, Etsy), GPSR, EPR, FDA MoCRA. Free forever. MIT.
```

**PR title:**

```
Add skills_library — compliance toolkit for D2C brands using Claude Code
```

**PR body:** universal template. "Why it fits":

> **Why it fits this list:** Compliance is the #1 unspoken D2C launch blocker — every brand selling internationally hits it. This is the only AI agent toolkit purpose-built for D2C compliance (Amazon EU GPSR, Shopify cross-border, Etsy EU buyers, etc.). Should be in any D2C-tools list.

---

## List 9 — awesome-shopify (search — candidate: pcfreak30/awesome-shopify OR similar)

**List URL (candidate to verify):** https://github.com/pcfreak30/awesome-shopify
**Fallback:** https://github.com/topics/shopify-apps — find the most-starred awesome fork
**Priority:** P2
**File to edit:** `README.md`
**Likely section:** `## Tools` or `## Compliance & Legal`

**Exact markdown line to add:**

```markdown
- [skills_library](https://github.com/Cleo-Labs-IA/skills_library) — 28 Claude Code skills for Shopify sellers handling cross-border compliance. EU GPSR, EPR, INCI checks, marketplace docs. MIT licensed.
```

**PR title:**

```
Add skills_library — compliance toolkit for Shopify cross-border sellers
```

**PR body:** universal template. "Why it fits":

> **Why it fits this list:** Shopify sellers face EU GPSR enforcement (Dec 2024+), EPR per member state, and increasing marketplace compliance asks. skills_library auto-generates the compliance docs they need. Companion blog post on this exact angle: https://cleolabs.co/blog/gpsr-for-shopify-sellers (to publish Week 3).

---

## List 10 — awesome-product-management (dexters/awesome-product-management or similar)

**List URL (candidate):** https://github.com/dexters/awesome-product-management
**Fallback:** https://github.com/sindresorhus/awesome (search "product management" subsection)
**Priority:** P2
**File to edit:** `README.md`
**Likely section:** `## Tools` or `## Compliance`

**Exact markdown line to add:**

```markdown
- [skills_library](https://github.com/Cleo-Labs-IA/skills_library) — AI agent toolkit for product launches in regulated markets. 28 Claude Code skills covering substance checks, certifications, market entry checklists. MIT.
```

**PR title:**

```
Add skills_library — AI-native product launch compliance toolkit
```

**PR body:** universal template. "Why it fits":

> **Why it fits this list:** PMs at hardware/CPG/D2C companies own product launches into new markets and regularly need compliance answers (certifications, restricted substances, labeling). This is the only AI agent toolkit aimed squarely at that job-to-be-done. Useful for PMs evaluating AI tooling in their stack.

---

## Submission workflow (do all 10 in one 2-hour block)

1. **00:00–00:15** — Fork all 10 repos at once via `gh repo fork`.
2. **00:15–01:00** — For each repo: clone, find the right section, add line, commit, push.
3. **01:00–01:30** — Open all 10 PRs via `gh pr create`.
4. **01:30–02:00** — Tweet a single thread linking all 10 PRs. Tag list maintainers if @-handles are in repo.

### `gh` commands to run (replace `<your-fork>` etc.)

```bash
# Example for awesome-claude
gh repo fork hannesrudolph/awesome-claude --clone
cd awesome-claude
# Edit README.md, add the line
git add README.md
git commit -m "Add skills_library to Skills section"
git push origin HEAD
gh pr create \
  --repo hannesrudolph/awesome-claude \
  --title "Add skills_library — 28 Claude Code skills for product compliance" \
  --body-file ../pr-body-awesome-claude.md
```

(Stage all 10 `pr-body-*.md` files in advance — the bodies above are ready to paste.)

---

## Tracking spreadsheet — set up before opening any PR

Create Google Sheet `skills_library — Awesome PRs` with columns:
- List name
- List URL
- Priority (P0/P1/P2)
- PR URL (fill after open)
- Opened date
- Merged date
- Status (open / merged / closed-stale / rejected)
- Last followed-up
- Notes

Follow-up cadence: nudge owner after 14 days if no review. Polite single comment.

---

## Notes for Naomie

- **Verify each list still exists and is maintained before opening the PR.** Awesome-list maintainership turns over fast. If a list looks dead (last commit > 6 months), skip it and find a fork.
- **Match the list's existing format exactly.** Some lists use emoji, some use country flags, some use back-tick highlight. Look at the 5 entries above and below where you're inserting.
- **Order entries alphabetically if the list is alphabetical.** Most awesome lists are. Sort your insertion correctly or maintainers will close.
- **Personal voice:** the universal body is intentionally neutral. Add a one-line personal note at the end if you know the maintainer (e.g., "Saw your @-handle in the readme — thanks for keeping this list active").
- **If a PR is rejected as too commercial:** offer to remove the "Cleo Labs" attribution and the API mention from the list entry. The repo link alone is enough.
