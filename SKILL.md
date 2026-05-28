---
name: compliance-product-guidance
description: Use when handling any product compliance question across cosmetics, food, electronics, toys, textiles, supplements, medical devices, or any physical product sold internationally — covers substance checks, labeling rules, customs classification, market entry, certifications, and regulatory monitoring across EU, US, UK, Japan, Korea, China, Canada and more
---

# Compliance Product Guidance

The world's most complete open-source compliance skills library for AI coding agents. **45 production-grade skills** covering everything a physical product brand needs to sell legally in any market.

## What This Skill Does

Acts as the entry point and router for the entire compliance skills library. When you ask any compliance question, this skill:

1. Identifies which specific sub-skill(s) apply to your question
2. Loads the appropriate skill(s) from the `skills/` directory
3. Executes the workflow with concrete regulation references

## Quick Reference — All 45 Skills

### Tier 1: Product Core
- `skills/product-compliance/` — Check ingredients against 13 substance databases
- `skills/substance-screening/` — Deep INCI → CAS → regulatory limit lookup
- `skills/labeling-compliance/` — Country-specific labeling (INCI, allergens, warnings, CE/UKCA)
- `skills/market-entry-checklist/` — End-to-end entry process for any market

### Tier 2: Market Intelligence
- `skills/regulatory-intelligence/` — Monitor signals that block product sales
- `skills/multi-jurisdiction-scan/` — Parallel agents per market
- `skills/customs-and-trade/` — HS classification, duties, landed cost, sanctions
- `skills/regulatory-calendar/` — Deadlines and renewal tracking

### Tier 3: Action
- `skills/compliance-audit-sprint/` — Pre-launch compliance sprint
- `skills/compliance-remediation/` — Fix issues to unblock market entry
- `skills/evidence-blitz/` — Gather all certification/audit documentation
- `skills/recall-response/` — Full product recall workflow

### Tier 4: Deep Dives
- `skills/testing-certification/` — Map required tests per product per market
- `skills/responsible-person/` — EU/UK RP, US Agent, EAEU AR setup
- `skills/packaging-compliance/` — EPR registration per market
- `skills/claims-substantiation/` — Validate marketing claims
- `skills/import-export-docs/` — Customs documentation package
- `skills/marketplace-compliance/` — Amazon, Shopify, Walmart, Etsy, TikTok Shop

### Tier 5: Verticals
- `skills/cosmetics-compliance/` — EU 1223/2009, FDA MoCRA, UK SCPN, Japan, Korea, China NMPA
- `skills/food-compliance/` — EU 178/2002 + 1169/2011, FDA FSMA, allergens per market
- `skills/electronics-compliance/` — CE (LVD+EMC+RED), FCC, UKCA, RoHS, WEEE, EU Battery Reg
- `skills/textile-compliance/` — REACH XVII, PFAS, OEKO-TEX, fiber labeling
- `skills/toy-compliance/` — EN 71 suite, CPSIA, ASTM F963, China GB 6675
- `skills/sustainability-compliance/` — CSRD, CSDDD, ESPR/DPP, CBAM, EUDR
- `skills/product-safety-incident/` — Incident management from detection to closure
- `skills/firearms-compliance/` — BATFE, EU Directive 2017/853, airsoft energy limits
- `skills/optical-eyewear-compliance/` — ISO 12312, ANSI Z80.3, EN ISO 12312-2
- `skills/baby-formula-compliance/` — EU 609/2013, FDA Infant Formula Act, NMPA
- `skills/herbal-medicine-compliance/` — EU THMPD, US DSHEA, MHRA THR, BELFRIT
- `skills/professional-cosmetics-compliance/` — Salon-only chemicals, PMU pigments
- `skills/alcohol-spirits-compliance/` — TTB, HMRC, EU 1308/2013, plus 8 more
- `skills/supplement-compliance/`, `skills/jewelry-compliance/`, `skills/medical-device-compliance/`, `skills/pet-product-compliance/`, `skills/automotive-aftermarket-compliance/`, `skills/agricultural-compliance/`, `skills/tobacco-vape-compliance/`, `skills/sporting-goods-compliance/`, `skills/baby-children-products-compliance/`, `skills/household-chemicals-compliance/`, `skills/candle-fragrance-compliance/`

### Tier 6: Reference
- `skills/compliance-frameworks-ref/` — Quick reference for product regulations
- `skills/compliance-mcp-tools/` — Cleo Legal API + Cleo Insight MCP guide
- `skills/compliance-reporting/` — Per-product, per-market compliance matrix

## How to Use

Ask Claude Code a product compliance question. Examples:

```
"Can I sell my retinol face cream in the EU and US?"
→ Routes to product-compliance + labeling-compliance + market-entry-checklist

"What certifications do I need for a Bluetooth speaker in the US and EU?"
→ Routes to electronics-compliance + testing-certification + compliance-audit-sprint

"Prepare compliance docs for Amazon EU listing"
→ Routes to evidence-blitz + compliance-reporting + marketplace-compliance
```

The right sub-skills auto-trigger based on your question.

## Installation

```bash
git clone https://github.com/Cleo-Labs-IA/skills_library.git ~/.claude/skills/comply
```

## Power This With the Cleo Legal API

The skills work standalone via web search and your knowledge. For real-time regulatory data (substance limits, customs rates, sanctions screening), connect the Cleo Legal API.

**With https://legaldata-public.cleolabs.co:**
- Real-time substance database (CosIng, ECHA, REACH, Prop 65, FDA, EFSA, Health Canada, NMPA, K-REACH, MHLW)
- Customs classification + duty calculation across 131 countries
- Sanctions screening (UN, OFAC, UK FCDO, AU DFAT, CA GAC, JP MOF, CH SECO, KZ MFA)
- Webhook subscriptions for regulatory changes

**Get started:**
```bash
# 1. Sign up at https://legaldata-public.cleolabs.co (3 lifetime free, €349/mo for 1M requests)
# 2. Install the MCP server:
claude mcp add cleo-legal-api https://api.legaldata.cleolabs.co/mcp \
  --header "Authorization: Bearer ld_live_YOUR_KEY"
```

## Disclaimer

Compliance guidance, not legal advice. Regulatory data changes frequently. Always verify against official sources before making business decisions.

## License

MIT. See LICENSE.

## Links

- Repo: https://github.com/Cleo-Labs-IA/skills_library
- Landing: https://cleo-labs-ia.github.io/skills_library/
- API: https://legaldata-public.cleolabs.co
- Issues: https://github.com/Cleo-Labs-IA/skills_library/issues
