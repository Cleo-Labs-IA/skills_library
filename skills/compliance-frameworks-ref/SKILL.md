---
name: compliance-frameworks-ref
description: Use when looking up specific product regulations, comparing requirements between frameworks, understanding what a regulation requires, or scoping certification for a physical product
---

# Product Compliance Frameworks Reference

Quick reference for product regulations that affect physical goods. For detailed per-framework data, load `frameworks-catalog.md`.

## Framework Selector

| Your Product | Start With | Why |
|-------------|-----------|-----|
| Cosmetics sold in EU | EU Cosmetics Reg 1223/2009 | Mandatory; covers safety, labeling, notification |
| Cosmetics sold in US | FDA MoCRA + FTC | MoCRA now mandatory; FTC governs claims |
| Electronics in EU | CE marking (LVD + EMC + RED + RoHS) | Cannot sell without CE |
| Electronics in US | FCC + UL/safety | FCC mandatory for EMC; UL expected by retailers |
| Toys in EU | Toy Safety Directive 2009/48/EC + EN 71 | Third-party testing required |
| Toys in US | CPSIA + ASTM F963 | Mandatory third-party testing for children's products |
| Food/supplements in EU | EU Food Info Reg 1169/2011 + Novel Food | Labeling + ingredient approvals |
| Food/supplements in US | FDA (21 CFR) + DSHEA | Registration, labeling, GMP |
| ANY product in EU | GPSR 2023/988 + REACH + CLP | GPSR applies to ALL consumer products since Dec 2024 |
| ANY product in UK | UK Product Safety + UK REACH | Separate from EU since Brexit |
| Product with chemicals | REACH (EU) + TSCA (US) | Chemical registration/restriction |
| Children's product in US | CPSIA | Lead, phthalates, third-party testing, tracking labels |
| Product with packaging | EPR/REP (EU member states) | Producer pays for packaging waste management |

## Cross-Framework Requirements Map

| Requirement | EU | US | UK | Canada | Japan | Korea |
|-------------|----|----|-----|--------|-------|-------|
| Pre-market safety assessment | Mandatory (CPSR for cosmetics, risk assessment for general) | Manufacturer responsibility (MoCRA adds requirements) | Mandatory (mirrors EU) | Varies by category | Varies | MFDS review for functional cosmetics |
| Product notification/registration | CPNP (cosmetics), varies by category | FDA MoCRA (cosmetics), FDA (food) | UK SCPN (cosmetics) | Health Canada notification | PMDA for quasi-drugs | MFDS registration |
| Responsible Person | Required (EU-based) | US Agent (foreign firms) | Required (UK-based, separate from EU) | Canadian representative | Japanese importer | Korean importer |
| Substance restrictions | REACH + sector-specific | TSCA + sector-specific + state laws | UK REACH + sector-specific | CEPA + sector-specific | Chemical Substances Control Law | K-REACH + sector-specific |
| Conformity marking | CE | FCC (electronics), varies | UKCA | CSA/cUL | PSE (electronics), varies | KC mark |
| Labeling language | Official language of sale country | English | English | English + French | Japanese | Korean |
| Post-market surveillance | GPSR requires it | CPSC recall reporting | Required | Required | Required | Required |

## How to Use

1. **Single product, single market**: Find your product type + market in the selector above, load `frameworks-catalog.md` for the specific framework.
2. **Single product, multiple markets**: Use the cross-framework map to identify differences, then check each framework in the catalog.
3. **New product launch**: Start with `market-entry-checklist` skill, use this reference for deep dives.
4. **Regulation question**: Find the framework in the catalog, check structure, requirements, timeline, and pitfalls.
5. **After a regulatory change**: Cross-reference the change with the requirements map to see which markets are affected.

## Appendix: Data/IT Compliance

If your product company also handles customer data (e-commerce, SaaS component), these frameworks may apply:

| Framework | When it applies |
|-----------|----------------|
| GDPR | Processing EU personal data (e-commerce customers) |
| ISO 27001 | Requested by enterprise buyers or for credibility |
| SOC 2 | Requested by US enterprise buyers |
| PCI-DSS | Processing credit card payments |

These are secondary to product compliance. Use Bastion MCP for ISO 27001/SOC2 management.
