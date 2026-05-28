# Compliance Product Guidance -- All-in-one compliance toolkit for physical product companies.

Help small businesses (1-10 people) sell physical products in multiple markets. Cosmetics, food, supplements, electronics, toys, textiles, cleaning products -- whatever you make, Compliance Product Guidance tells you what you need to do to sell it legally.

## Quick Start

These skills auto-trigger when you work on product compliance tasks. No manual invocation needed.

## Skill Index

### Tier 1 -- Product Compliance Core
- `product-compliance` -- **THE HERO SKILL**. Full substance check: ingredients -> CAS numbers -> 13 databases -> verdict per substance per market. Revenue-at-Risk calculation.
- `labeling-compliance` -- Country-specific labeling: INCI, allergens, warnings, responsible person, CE/UKCA marks, multi-language rules.
- `market-entry-checklist` -- Step-by-step checklist to enter a new market: classify -> regulations -> substances -> labels -> certs -> customs -> notification.

### Tier 2 -- Market Intelligence
- `regulatory-intelligence` -- Monitor signals that could block your product from sale: substance bans, labeling changes, recalls, deadlines.
- `multi-jurisdiction-scan` -- Parallel scan across all target markets. RED/ORANGE/YELLOW/GREEN per market. One agent per jurisdiction.
- `customs-and-trade` -- HS code classification, duty calculation, landed cost, dual-use screening, sanctions check.

### Tier 3 -- Action & Remediation
- `compliance-audit-sprint` -- Pre-launch compliance sprint: identify category -> map regulations -> check substances -> verify labels -> check certs -> estimate cost.
- `compliance-remediation` -- Fix compliance issues to unblock market entry: reformulate, relabel, test, certify.
- `evidence-blitz` -- Gather all compliance evidence for certification or audit: safety docs, labeling proof, substance docs, market certs.

### Tier 4 -- Deep Dives
- `substance-screening` -- Deep ingredient/material screening: INCI to CAS resolution, batch check against 13 databases, concentration margin calculations, per-substance per-jurisdiction verdicts.
- `testing-certification` -- Map required tests and certifications per product per market: cosmetics CPSR, electronics CE/FCC/UL, toys EN 71, food HACCP. Lab selection, costs, timelines, renewal schedules.
- `claims-substantiation` -- Validate marketing claims: EU 655/2013 six criteria, FDA drug vs cosmetic line, FTC substantiation, food health claims, green claims. Evidence requirements per claim type.
- `responsible-person` -- Set up Responsible Person / Legal Representative per market: EU RP, UK RP, US Agent, EAEU AR, China NMPA holder. Mandate letters, costs, obligations.
- `packaging-compliance` -- Packaging and environmental compliance: EPR registration per EU member state, PPWD to PPWR transition, recycling symbols, SUP restrictions, plastic tax, US state EPR.
- `recall-response` -- Handle product recall or safety alert: severity assessment, authority notification (EU 10 days, US 24h, UK 3 days), supply chain notification, consumer communication, corrective action, close-out.
- `import-export-docs` -- Generate import/export documentation: commercial invoice, packing list, certificates of origin (EUR.1, REX, USMCA), dangerous goods declarations, Incoterms 2020 document responsibility.
- `marketplace-compliance` -- Meet compliance requirements for Amazon (EU GPSR + EPR, US product safety), Walmart, Shopify, Etsy, TikTok Shop. Required documents per platform per category.

### Tier 5 -- Vertical Deep Dives (Industry-Specific)
- `cosmetics-compliance` -- Complete cosmetics compliance across 8 markets: EU 1223/2009 CPNP/PIF/CPSR, US FDA MoCRA, UK SCPN, Japan MHLW, Korea MFDS, China NMPA, Canada CNF, ASEAN. GMP ISO 22716.
- `food-compliance` -- Complete food/beverage compliance: EU General Food Law, FDA FSMA, allergen declarations (14 EU / 9 US / 8 JP), novel foods, HACCP, import health certificates, shelf life testing.
- `electronics-compliance` -- Complete electronics/IoT compliance: CE (LVD/EMC/RED/RoHS/ErP), FCC Part 15, UKCA, EU Battery Regulation, Cyber Resilience Act, WEEE, UL listing, CB Scheme.
- `textile-compliance` -- Textile/apparel/footwear compliance: REACH for textiles, PFAS, fiber labeling, care labeling, flammability, OEKO-TEX/GOTS, CPSIA children's textiles, EU Digital Product Passport.
- `toy-compliance` -- Toy safety compliance: EU Toy Safety Directive EN 71 suite, US CPSIA + ASTM F963, China CCC + GB 6675, Japan ST Mark, age grading, chemical migration, phthalates.
- `sustainability-compliance` -- Mandatory sustainability obligations: CSRD/ESRS, CSDDD, EUDR (deforestation), CBAM, EPR per country, French Loi AGEC, ESPR/DPP, Green Claims Directive.
- `product-safety-incident` -- Handle product safety incidents: detection to closure. CPSC 24h reporting, EU Safety Gate 10-day notification, risk assessment matrix, recall types, consumer notification, root cause analysis.
- `regulatory-calendar` -- Track all compliance deadlines and renewals: notification portal renewals, certificate expiry, upcoming regulation enforcement dates (GPSR, CRA, MoCRA GMP, EUDR, ESPR), calendar export.

### Tier 6 -- Reference & Integration
- `compliance-frameworks-ref` -- Product regulation reference: EU Cosmetics 1223/2009, REACH, FDA MoCRA, Prop 65, CE/UKCA, GPSR, EN 71, RoHS, WEEE, EPR.
- `compliance-mcp-tools` -- Cleo Legal API (customs, substances, sanctions) + Cleo Insight (signals, regulations).
- `compliance-reporting` -- Per-product, per-market compliance matrix. Exportable for buyers, distributors, marketplace listings.

## MCP Integration

Skills auto-detect available MCP servers:
- **Cleo Legal API** -- Customs classification, substance checks, duty calculation, landed cost, sanctions screening. Core for product compliance.
- **Cleo Insight** -- Regulatory signals, regulation tracking, authorities, products, countries. Core for monitoring.

Without MCP, skills fall back to manual workflows with web search and file-based evidence.

## Multi-Agent Patterns

Tier 3 skills use `superpowers:dispatching-parallel-agents` for parallel execution:
- `compliance-audit-sprint` dispatches one agent per target market
- `multi-jurisdiction-scan` dispatches one agent per jurisdiction cluster
- `evidence-blitz` dispatches parallel agents per document category
