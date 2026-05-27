---
name: compliance-reporting
description: Use when generating compliance status reports for a product portfolio, preparing documentation for retail buyers or distributors, creating compliance matrices for marketplace listings, or summarizing compliance posture per product per market
---

# Compliance Reporting

Generate per-product, per-market compliance reports. Exportable for retail buyers, distributors, marketplace listings, and internal tracking.

## Report Types

| Audience | What they need | Format |
|----------|---------------|--------|
| **You (founder)** | Where am I at? What is blocking me? | Dashboard: product x market matrix |
| **Retail buyer** (Sephora, Target, Whole Foods) | Proof your product is compliant | Compliance certificate package |
| **Distributor** | Can they sell your product in their market? | Per-market compliance summary |
| **Marketplace** (Amazon, Shopify) | Product safety documentation | Specific document uploads |
| **Regulatory authority** | Full Product Information File on demand | Complete technical documentation |
| **Investor / board** | Regulatory risk exposure | Risk heatmap + revenue-at-risk |

## Data Collection

### From MCP Tools

```
# Product substance compliance
mcp__claude_ai_CLEO_LEGAL_API__compliance/check
  product_description: "..."
  ingredients: [...]
  target_markets: ["EU", "US", "UK", ...]

# Regulatory signals (recent changes)
mcp__claude_ai_Cleo_Insight__search_signals
  product_id: "<product-id>"
  risk_level: "critical"

# Customs & costs (per market)
mcp__claude_ai_CLEO_LEGAL_API__customs/duties
  hs_code: "..."
  origin: "..."
  destination: "..."

# ISO 27001 posture (if applicable)
mcp__bastion__get-frameworks-stats
```

### From User (manual input)

- Product list with ingredients and CAS numbers
- Target market list
- Existing certifications and their expiry dates
- Existing test reports and their dates
- Sales data per market (for revenue-at-risk)

## Report Templates

### Template 1: Product x Market Compliance Matrix (Founder Dashboard)

```
COMPLIANCE DASHBOARD -- [Date]

PRODUCT PORTFOLIO:
| Product | Category | Markets | Overall Status |
|---------|----------|---------|---------------|
| Glow Serum | Cosmetics | EU, US, UK | ORANGE (2 actions needed) |
| Night Cream | Cosmetics | EU, US | GREEN (compliant) |
| Baby Lotion | Cosmetics | EU, US, UK, CA | RED (CPSIA testing needed) |

DETAILED MATRIX:
| Product | EU-Sub | EU-Label | EU-Cert | US-Sub | US-Label | US-Cert | UK-Sub | UK-Label | UK-Cert |
|---------|--------|---------|---------|--------|---------|---------|--------|---------|---------|
| Glow Serum | G | G | G | G | O | G | G | O | R |
| Night Cream | G | G | G | G | G | G | -- | -- | -- |
| Baby Lotion | G | G | G | R | O | R | G | O | R |

G=GREEN (compliant)  O=ORANGE (action needed)  R=RED (blocked)  --=not targeting

BLOCKERS:
1. Baby Lotion / US: CPSIA third-party testing not done -- USD 3,000, 6 weeks
2. Baby Lotion / UK: UKCA certification needed -- GBP 4,000, 10 weeks
3. Glow Serum / UK: UK Responsible Person not appointed -- GBP 500/year, 1 week

UPCOMING DEADLINES:
1. [date]: [regulation change] affects [product] in [market]
2. [date]: [certification] expires for [product]

REVENUE AT RISK:
| Product | Market | 90d Sales | Issue | RAR |
|---------|--------|-----------|-------|------|
| Baby Lotion | US | USD 15,000 | Missing CPSIA | USD 15,000 |
| Glow Serum | UK | GBP 8,000 | No UK RP | GBP 8,000 |
Total: ~EUR 25,000
```

### Template 2: Retail Buyer Package

```
PRODUCT COMPLIANCE CERTIFICATE -- [Product Name]
Prepared for: [Buyer Name] -- [Date]
Manufacturer: [Company Name]
Contact: [Name, Email]

PRODUCT INFORMATION:
  Name: [product name]
  Category: [cosmetics / food / ...]
  HS Code: [code]
  Country of origin: [country]
  EU Responsible Person: [name + address]

COMPLIANCE STATUS:
  EU Cosmetics Regulation 1223/2009: COMPLIANT
    - CPNP notification: [reference number]
    - CPSR: completed [date] by [assessor]
    - GMP: ISO 22716 compliant

  REACH: COMPLIANT
    - SVHC screening: no SVHCs above 0.1% w/w
    - Date: [screening date]

  CLP: COMPLIANT (not classified as hazardous)

  GPSR 2023/988: COMPLIANT
    - Risk assessment: completed [date]
    - Safety contact: [contact info]

TESTING DOCUMENTATION:
  | Test | Lab | Report # | Date | Result |
  |------|-----|----------|------|--------|
  | Stability (accelerated) | [lab] | [#] | [date] | PASS |
  | Microbiological | [lab] | [#] | [date] | PASS |
  | Preservative efficacy | [lab] | [#] | [date] | PASS |
  | Heavy metals | [lab] | [#] | [date] | Below limits |

ALLERGEN DECLARATION:
  Contains: [list allergens present above threshold]
  Free from: [list common allergens NOT present]

CERTIFICATIONS:
  | Certification | Body | Valid until |
  |---------------|------|-------------|
  | [cert] | [body] | [date] |

INSURANCE:
  Product liability: [insurer], policy [#], valid until [date]
  Coverage: EUR [amount]

This certificate confirms that [product name] meets all applicable regulatory requirements for sale in [market(s)] as of [date].
Signed: [name, title]
```

### Template 3: Marketplace Compliance Summary

```
MARKETPLACE PRODUCT COMPLIANCE -- [Product Name]

FOR AMAZON / [MARKETPLACE]:

Product Safety:
  [ ] Safety data sheet (if applicable)
  [ ] Test reports from accredited laboratory
  [ ] Declaration of Conformity (CE / UKCA)
  [ ] Product liability insurance certificate

Category-Specific:
  [ ] CPSR / Safety Assessment (cosmetics)
  [ ] Nutritional analysis (food)
  [ ] CPSIA certificate (children's products)
  [ ] FCC certificate (electronics)

Labeling:
  [ ] Compliant label artwork
  [ ] INCI list (cosmetics)
  [ ] Allergen declarations (food)
  [ ] Warning statements (Prop 65 if CA)

Regulatory:
  [ ] CPNP notification (EU cosmetics)
  [ ] FDA registration (US cosmetics/food)
  [ ] UK SCPN (UK cosmetics)

All documents uploaded to: [location / link]
```

### Template 4: Investor / Risk Report

```
REGULATORY RISK REPORT -- [Company Name] -- [Date]

PORTFOLIO OVERVIEW:
  Products: [count]
  Active markets: [count]
  Overall compliance rate: [X]% of product-market combinations fully compliant

RISK HEATMAP:
| Market | Products Compliant | Products Flagged | Products Blocked | Revenue Exposed |
|--------|-------------------|-----------------|-----------------|-----------------|
| EU | 8 | 2 | 0 | EUR 0 |
| US | 7 | 2 | 1 | USD 15,000 |
| UK | 5 | 3 | 2 | GBP 20,000 |

TOTAL REVENUE AT RISK: ~EUR [X]

TOP REGULATORY RISKS:
1. [risk]: affects [products] in [markets] -- probability [H/M/L] -- impact EUR [X]
2. [risk]: ...

UPCOMING REGULATORY CHANGES:
1. [date]: [regulation] -- impact: [description] -- action: [what we are doing]

COMPLIANCE INVESTMENT (last 12 months):
  Testing & certification: EUR [X]
  Regulatory consulting: EUR [X]
  Labeling & packaging: EUR [X]
  Responsible person services: EUR [X]
  Total: EUR [X]
```

### Template 5: Session Delta (Internal)

```
COMPLIANCE SESSION DELTA -- [Date]

WHAT WAS DONE:
- [action completed]
- [action completed]

BEFORE → AFTER:
| Product | Market | Before | After |
|---------|--------|--------|-------|
| [product] | [market] | RED | ORANGE |
| [product] | [market] | ORANGE | GREEN |

REMAINING BLOCKERS:
1. [blocker] -- owner: [who] -- ETA: [when]

NEXT ACTIONS:
1. [ ] [action] -- priority: [P0-P4] -- deadline: [date]
```

## Compliance Rate Calculation

```
Per product per market:
  Status = worst verdict across all checks (substance, label, cert, registration)
  GREEN if all checks pass
  ORANGE if any check needs action but no blocker
  RED if any check is a blocker (banned substance, missing mandatory cert)

Portfolio compliance rate:
  = count(GREEN product-market pairs) / count(total product-market pairs) x 100
```

## Trend Tracking

Track compliance status over time:

```
COMPLIANCE TREND -- [Product Portfolio]
[Date 1]: 3/12 product-market pairs GREEN (25%)
[Date 2]: 7/12 GREEN (58%) -- +4 (US labeling fixed, EU CPSR completed)
[Date 3]: 10/12 GREEN (83%) -- +3 (UK RP appointed, certifications received)
Target: 12/12 GREEN (100%)
```

## Common Mistakes

- **Reporting without current data**: Always pull fresh substance checks and signals before generating reports. Regulations change.
- **Same report for all audiences**: A retail buyer needs proof of compliance, not your internal roadmap. An investor needs risk exposure, not test report numbers. Tailor.
- **Missing expiry dates**: Certifications, test reports, insurance -- all expire. Always include valid-until dates and flag upcoming expirations.
- **No revenue-at-risk for blockers**: "3 products blocked" is abstract. "EUR 45,000 in 90-day sales at risk" is actionable.
- **Ignoring the delta**: A snapshot is half the story. Always show what changed since last report.
- **Over-claiming compliance**: Saying "COMPLIANT" when substance data confidence is low, or when a certification is about to expire, creates legal risk. Be precise about what "compliant" means and its validity period.
