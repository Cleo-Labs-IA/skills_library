# Compliance Product Guidance

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Skills](https://img.shields.io/badge/skills-40-blue)](./skills)
![GitHub stars](https://img.shields.io/github/stars/Cleo-Labs-IA/skills_library?style=social)
[![Cleo Labs](https://img.shields.io/badge/built%20by-Cleo%20Labs-0008CF)](https://cleolabs.co)
[![Powered by Cleo Legal API](https://img.shields.io/badge/powered%20by-Cleo%20Legal%20API-0008CF)](https://legaldata-public.cleolabs.co)

AI compliance copilot for physical products — REACH, FDA, CE, customs, and 24 more regulations, inside your Claude Code / Cursor / Codex.

## What is this?

Selling a physical product across borders means navigating 25,000+ regulations spread across 49 countries: substance bans you've never heard of, labels that change every quarter, customs codes that move duty rates by 12%, marketplace rules that delist you overnight. Most small brands learn this the expensive way — at the border, or after Amazon takes the listing down.

Compliance Product Guidance is **40 production-grade skills + 2 MCP servers** that teach an AI agent how to answer one question: *"What do I actually need to do to sell this product in this market?"*

The hero skill is `product-compliance`. You paste an ingredient list (or BOM, or formula), pick your target markets, and it runs:

```
ingredients  →  CAS resolution  →  13 regulatory databases  →
verdict per substance per market  →  Revenue-at-Risk calculation
```

Sample output:

```
Retinol 0.4%   EU: BLOCKED (Annex III cap 0.3% face products, eff. Nov 2025)   €/year at risk: ~€180k
Retinol 0.4%   US: OK (no federal cap; CA Prop 65 warning not required at this dose)
Retinol 0.4%   UK: BLOCKED (UK Cosmetics Reg mirrors EU Annex III)
Retinol 0.4%   JP: REVIEW (quasi-drug threshold — needs MHLW review)
```

Same pattern works for an electronics BOM (RoHS, REACH SVHC, CE/FCC, battery reg), a food recipe (allergens, novel foods, FDA FSMA), a textile (PFAS, fiber labeling, OEKO-TEX), or any of the 18 product verticals below.

## Install

### Recommended (Claude Code)

```bash
git clone https://github.com/Cleo-Labs-IA/skills_library.git ~/.claude/skills/comply
```

That's it. The skills auto-trigger when you ask Claude Code about substances, labels, customs, markets, or recalls. No manual invocation.

### Manual copy

```bash
git clone https://github.com/Cleo-Labs-IA/skills_library.git
cp -r skills_library/skills/* ~/.claude/skills/
```

### Cursor / Codex / other Claude-skills-compatible runtimes

Point your skills directory at `skills_library/skills/`. Each skill is a self-contained folder with a `SKILL.md` plus references — runtime-agnostic by design.

### Coming soon

```bash
npx skills add Cleo-Labs-IA/skills_library
```

We're tracking the community `npx skills` installer. Once it stabilizes for multi-skill repos, this will be the one-liner.

See [INSTALL.md](./INSTALL.md) for the 30-second version and [EXAMPLES.md](./EXAMPLES.md) for real prompts.

## The 40 skills

### Core compliance engine (6)

The skills that touch your actual product.

| Skill | What it does |
|-------|--------------|
| `product-compliance` | **Hero skill.** Full substance check across 13 databases, verdict per market, Revenue-at-Risk. |
| `substance-screening` | Deep ingredient/material screening: INCI→CAS, concentration margins, per-jurisdiction verdicts. |
| `labeling-compliance` | Country-specific labels: INCI, allergens, warnings, CE/UKCA marks, multi-language rules. |
| `testing-certification` | Required tests/certs per product per market (CPSR, CE, FCC, UL, EN 71, HACCP). Lab selection, cost, timeline. |
| `claims-substantiation` | Validate marketing claims: EU 655/2013, FDA drug-vs-cosmetic, FTC, green claims. |
| `market-entry-checklist` | Step-by-step: classify → regulations → substances → labels → certs → customs → notification. |

### Cross-market intelligence & action (13)

The skills that move you from "we have a problem" to "we shipped it."

| Skill | What it does |
|-------|--------------|
| `regulatory-intelligence` | Signal monitoring: substance bans, labeling changes, recalls, enforcement dates. |
| `multi-jurisdiction-scan` | Parallel scan across all target markets. RED/ORANGE/YELLOW/GREEN per market. One agent per jurisdiction. |
| `customs-and-trade` | HS code, duty, landed cost, dual-use, sanctions. |
| `compliance-audit-sprint` | Pre-launch sprint: identify → map → check → verify → estimate cost. Dispatches parallel agents. |
| `compliance-remediation` | Fix issues to unblock market entry: reformulate, relabel, test, certify. |
| `evidence-blitz` | Parallel gather of compliance evidence for audit, certification, or marketplace listing. |
| `responsible-person` | Set up EU RP, UK RP, US Agent, EAEU AR, China NMPA holder. Mandate letters, costs, obligations. |
| `packaging-compliance` | EPR per EU member state, PPWR transition, SUP, plastic tax, US state EPR. |
| `recall-response` | Severity assessment, authority notification (EU 10 days, US 24h, UK 3 days), close-out. |
| `product-safety-incident` | CPSC 24h, EU Safety Gate 10-day, risk matrix, root cause, consumer comms. |
| `import-export-docs` | Commercial invoice, packing list, EUR.1/REX/USMCA, DG declarations, Incoterms 2020. |
| `marketplace-compliance` | Required docs per platform per category: Amazon EU GPSR+EPR, Walmart, Shopify, Etsy, TikTok Shop. |
| `regulatory-calendar` | Notification renewals, cert expiry, upcoming enforcement (GPSR, CRA, MoCRA GMP, EUDR, ESPR). |

### 18 industry verticals

Deep, regulation-specific playbooks per product category:

`cosmetics-compliance` · `food-compliance` · `electronics-compliance` · `textile-compliance` · `toy-compliance` · `alcohol-spirits-compliance` · `supplement-compliance` · `jewelry-compliance` · `medical-device-compliance` · `pet-product-compliance` · `automotive-aftermarket-compliance` · `agricultural-compliance` · `tobacco-vape-compliance` · `sporting-goods-compliance` · `baby-children-products-compliance` · `household-chemicals-compliance` · `candle-fragrance-compliance` · `sustainability-compliance`

Each vertical covers the full regulatory stack for that category across EU, US, UK, Canada, Japan, Korea, China, ASEAN — not a summary, the actual articles, fee structures, notification portals, and transition dates.

### Reference & integration (3)

`compliance-frameworks-ref` (regulation reference index) · `compliance-mcp-tools` (Cleo Legal API + Cleo Insight integration patterns) · `compliance-reporting` (per-product per-market matrix, exportable).

## The MCP moat

Most skill libraries are static knowledge — they age the day they ship. This one is wired to live data via two MCP servers:

- **Cleo Legal API** — customs classification, substance lookups, duty calculation, landed cost, sanctions screening. The data backbone for `product-compliance`, `customs-and-trade`, and `substance-screening`.
- **Cleo Insight** — live regulatory signals across **25,000+ regulations in 49 countries**. The signal feed for `regulatory-intelligence`, `multi-jurisdiction-scan`, and `regulatory-calendar`.

**The skills work standalone** — without MCP, they fall back to web search and file-based evidence with the same prompt structure. With MCP enabled, the same prompts get back current data instead of best-effort lookups.

## Multi-agent by default

The Tier 3 action skills dispatch parallel agents via `superpowers:dispatching-parallel-agents`:

- `compliance-audit-sprint` — one agent per target market
- `multi-jurisdiction-scan` — one agent per jurisdiction cluster
- `evidence-blitz` — one agent per document category

A multi-market launch audit that took a regulatory consultant 3 weeks runs in ~12 minutes.

## Built for

- Indie founders and small product teams (1–10 people) launching physical goods
- D2C brands expanding from one market to three, five, or ten
- Marketplace sellers fighting delisting (Amazon GPSR, EPR, MoCRA)
- Operators handling REACH, CLP, FDA MoCRA, Prop 65, GPSR, CRA, EUDR, CE/UKCA/FCC, EN 71, and the long tail
- Regulatory consultants who want first-pass screening done in minutes, not days

## Not built for

We're not trying to replace your specialists. **We get you 80% of the way there so your specialist can focus on the hard 20%.**

- We don't replace a **CE Notified Body** audit (Class IIa+ medical devices, Cat III PPE, etc.)
- We don't replace a **Cosmetic Product Safety Assessor** signing your CPSR
- We don't replace a **licensed customs broker** for actual border clearance
- We don't replace **legal counsel** for litigation, enforcement defense, or product liability
- We don't give legal advice. Always verify against official sources before a shipping decision.

## Why we built this

We're Anaëlle (CEO) and Naomie (CDO), the cofounders of [Cleo Labs](https://cleolabs.co). We started compliance work because we kept watching the same scene repeat: a small brand spends 14 months building a beautiful product, ships their first container into Rotterdam or Felixstowe, and gets it held at customs over a missing REACH dossier or an Annex III substance they didn't know was capped last quarter. A 40-foot container blocked at the EU border costs €15–40k in storage, demurrage, and rework before anyone touches the product itself.

The knowledge to prevent that exists. It just isn't where the founder is — it's locked in €800/hour consultant decks and 4,000-page regulation PDFs. So we put it where the founder is: in their AI agent. That's this repo.

## Examples

See [EXAMPLES.md](./EXAMPLES.md) for full walkthroughs (face cream in EU+UK, Bluetooth speaker in US+EU, chocolate to Japan, toy safety, Amazon EU evidence pack).

## Contributing

PRs welcome — especially new vertical playbooks, jurisdiction updates, and corrections to substance limits. Start with [CONTRIBUTING.md](./CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md). Security issues: see [SECURITY.md](./SECURITY.md).

## License

MIT. See [LICENSE](./LICENSE).

## Disclaimer

> **This is compliance guidance, not legal advice.**
>
> The skills provide a starting point based on publicly available regulations. They do not replace a qualified regulatory consultant, Notified Body, safety assessor, customs broker, or legal counsel.
>
> Regulatory data (substance limits, enforcement dates, fee amounts, classification rules) changes constantly. Always verify critical information against the official source (EUR-Lex, FDA, gov.uk, MHLW, etc.) before making a business decision. Cleo Labs is not liable for decisions made on the basis of these skills.

---

Built by [Cleo Labs](https://cleolabs.co). Backed by the MARIA engine — 25,000 regulations, 49 countries, live.
