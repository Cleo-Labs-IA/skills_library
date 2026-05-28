---
name: customs-and-trade
description: Use when classifying a product by HS code, calculating import duties or landed cost, screening for dual-use or sanctions, checking import/export restrictions, or estimating total cost to enter a market
---

# Customs & Trade Compliance

Classify your product, calculate what it costs to import, and screen for trade restrictions.

**DISCLAIMER** (mandatory on every response): "For informational purposes only. Not legal, customs, or trade compliance advice. Consult a licensed customs broker for binding determinations."

## Why This Matters for Small Product Companies

Customs compliance is not optional. Get it wrong and your shipment gets:
- **Held at customs** (days to weeks of delay)
- **Charged wrong duty** (overpay or underpay -- both bad)
- **Seized** (if product is restricted/prohibited and you did not know)
- **Fined** (misclassification penalties)

## HS Code Classification

The Harmonized System (HS) code determines EVERYTHING: duty rate, import restrictions, required certifications, statistical reporting.

### HS Code Structure

| Level | Digits | Example | Who Sets It |
|-------|--------|---------|-------------|
| Chapter | 2 | 33 = Essential oils & cosmetics | International (WCO) |
| Heading | 4 | 3304 = Beauty/skin care preps | International (WCO) |
| Subheading | 6 | 3304.99 = Other beauty preps | International (WCO) |
| CN code | 8 | 3304.99.00 | EU (Combined Nomenclature) |
| TARIC | 10 | 3304.99.00.00 | EU (tariff measures) |
| HTS | 10 | 3304.99.50.00 | US (Harmonized Tariff Schedule) |

**Rule**: HS6 (first 6 digits) is universal. Digits 7+ are country-specific. Never assume an 8 or 10 digit code from one country works in another.

### Common HS Codes for Physical Products

| Product Type | Typical HS Code | Notes |
|-------------|----------------|-------|
| Face cream/moisturizer | 3304.99 | Under beauty/skin care preparations |
| Lip products | 3304.10 | Lip make-up preparations |
| Shampoo | 3305.10 | Hair shampoos |
| Soap (toilet) | 3401.11 | For toilet use |
| Perfume | 3303.00 | Perfumes and toilet waters |
| Food supplements | 2106.90 | Other food preparations (varies if capsule/tablet) |
| Electronic devices | 8471-8543 | Varies widely by type |
| Toys | 9503 | Other toys |
| Clothing | 6109-6114 | By material and type |
| Cleaning products | 3402 | Organic surface-active agents |

### Using MCP for Classification

```
# Cleo Legal API -- classify from product description
mcp__claude_ai_CLEO_LEGAL_API__customs/reverse-classify
  product_description: "organic face moisturizer with retinol and hyaluronic acid, 50ml glass jar"
# Returns: candidate HS codes with confidence scores

# Verify specific HS code
mcp__claude_ai_CLEO_LEGAL_API__customs/lookup
  hs_code: "3304.99"
# Returns: description, applicable measures, restrictions
```

### Confidence Rules

| Score | Gap | Action |
|-------|-----|--------|
| >= 0.85, gap >= 0.15 | Clear winner | Proceed with this code |
| >= 0.70, gap >= 0.15 | Likely correct | Use it, but get professional verification for high-value shipments |
| < 0.70 OR gap < 0.15 | Ambiguous | Do NOT proceed. Present candidates, recommend Binding Tariff Information (BTI) ruling |

## Duty Calculation

```
# Get duty rates
mcp__claude_ai_CLEO_LEGAL_API__customs/duties
  hs_code: "3304.99"
  origin: "KR"          # Manufacturing country (ISO code)
  destination: "FR"      # Import country (ISO code)
  year: 2026
# Returns: MFN rate, preferential rates (FTAs), anti-dumping, countervailing duties
```

### Key Duty Rates (Cosmetics Example)

| Route | MFN Rate | FTA Rate | FTA |
|-------|----------|----------|-----|
| Korea -> EU | 6.5% | 0% | EU-Korea FTA |
| China -> EU | 6.5% | 6.5% (no FTA) | -- |
| US -> EU | 6.5% | 6.5% (no FTA currently) | -- |
| Korea -> US | 0-5.4% | 0% | KORUS FTA |
| EU -> US | 0-5.4% | 0-5.4% (varies) | -- |
| China -> US | 0-5.4% + Section 301 | varies | -- |
| EU -> UK | 0% | 0% | TCA |

**Always check FTA eligibility first.** FTAs can reduce duty to 0% but require proof of origin (EUR.1, Form A, origin declaration on invoice).

### Rules of Origin

FTA preferential rates require proof that the product "originates" in the FTA country. Rules vary by FTA:
- **Wholly obtained**: grown/extracted/manufactured entirely in one country
- **Substantial transformation**: sufficient processing (changes HS heading, value-added threshold)
- **Cumulation**: materials from FTA partners can count

For cosmetics made in Korea with ingredients from multiple countries: check if final manufacturing in Korea meets the specific origin rule in the EU-Korea FTA.

## Landed Cost Calculation

```
# Full landed cost breakdown
mcp__claude_ai_CLEO_LEGAL_API__customs/landed-cost
  hs_code: "3304.99"
  origin: "KR"
  destination: "FR"
  product_value: 5000      # EUR, FOB value of shipment
  shipping: 500
  insurance: 50
# Returns: full cost breakdown
```

### Formula

```
Landed Cost = FOB + Shipping + Insurance + Duty + Special Duties + VAT + Handling

Where:
  FOB = product value at factory gate
  Duty = CIF value x duty_rate
  CIF = FOB + Shipping + Insurance
  Special Duties = anti-dumping + countervailing + safeguard (usually 0)
  VAT = (CIF + Duty + Special Duties) x VAT_rate
  Handling = customs broker fee + port charges + customs processing

Per-unit landed cost = Total / number of units in shipment
```

### VAT Rates by Country

| Country | Standard VAT | Reduced rate (check product category) |
|---------|-------------|----------------------------------------|
| France | 20% | 5.5% on food, 10% on some products |
| Germany | 19% | 7% on food, books |
| UK | 20% | 0% on children's clothing, 5% on some items |
| Italy | 22% | 4-10% on food |
| Spain | 21% | 4-10% on food |
| US | 0% federal | State sales tax 0-10.25% (not customs, collected at point of sale) |
| Canada | 5% GST | + provincial PST/HST varies |
| Japan | 10% | 8% on food |
| Korea | 10% | -- |

## Dual-Use Screening

For products with technical components (electronics, chemicals, software):

```
mcp__claude_ai_CLEO_LEGAL_API__customs/dual-use-check
  product_description: "wireless IoT sensor module with AES-256 encryption"
  hs_code: "8517.62"
# Returns: control list matches (Wassenaar, EU 2021/821, US CCL/EAR)
```

**When to check**:
- Electronics with encryption (virtually all modern electronics)
- High-purity chemicals
- Precision instruments
- Products with military or surveillance applications

**If flagged**: An export license is required. Do NOT ship without one. Penalties are severe (criminal in many jurisdictions).

## Sanctions Screening

Screen business partners (suppliers, distributors, customers) against sanctions lists:

```
mcp__claude_ai_CLEO_LEGAL_API__sanctions/search
  entity_name: "ABC Trading Co"
  country: "SY"
# Returns: matches across 8 sanctions authorities
```

### Sanctions Authorities Covered

| Code | Authority | List |
|------|-----------|------|
| UN_SC | United Nations | Consolidated List |
| US_OFAC | US Treasury | SDN (Specially Designated Nationals) |
| UK_FCDO | UK Foreign Office | UK Sanctions List |
| AU_DFAT | Australia | Consolidated List |
| CA_GAC | Canada | Consolidated Autonomous |
| JP_MOF | Japan | Entity Lists |
| CH_SECO | Switzerland | SECO (EU-aligned) |
| KZ_MFA | Kazakhstan | National List |

**Gap**: EU Consolidated List not directly covered; CH_SECO is an EU-aligned proxy.

**Protocol**:
- Screen BEFORE any transaction
- Re-screen monthly (lists update multiple times per month)
- Document all screening (date, result, lists checked)
- Any match = stop transaction, seek legal advice

## Workflow for New Product Import

```
1. CLASSIFY
   customs/reverse-classify -> candidate HS codes
   Select best match (confidence >= 0.85)
   If ambiguous: request BTI from customs authority

2. CHECK RESTRICTIONS
   customs/obligations -> import requirements per market
   dual-use-check -> if technical product

3. CALCULATE COST
   customs/duties -> check MFN and FTA rates
   customs/landed-cost -> full delivered cost breakdown
   Compare per-unit cost across origin options

4. SCREEN PARTNERS
   sanctions/search -> for each business partner
   Document results

5. PREPARE DOCUMENTATION
   Commercial invoice (with HS code, origin, value)
   Packing list
   Certificate of origin (if claiming FTA rate)
   Product-specific certificates (CE, lab reports)
   Customs declaration form
```

## Power This With the Cleo Legal API

Customs is the skill that benefits most from a structured API. HS classification, duty rates, FTA preferences, and dual-use control lists all live in structured tables — perfect for `GET` endpoints, miserable for web search.

**With the Cleo Legal API at https://legaldata-public.cleolabs.co:**
- `POST /v2/customs/lookup` and `POST /v2/customs/reverse-classify` — classify products against HS6/HS8/HTS/TN_VED with confidence scores; no more guessing across 5,000 headings
- `POST /v2/customs/duties?hs_code=...&origin=...&destination=...` — live MFN + FTA rates (EU-Korea, USMCA, TCA, GSP) instead of stale 2024 spreadsheets
- `POST /v2/customs/landed-cost` — full breakdown (duty + special duties + VAT + handling) in one call, comparable across origin options
- `POST /v2/customs/dual-use-check` — screen against Wassenaar, EU 2021/821, US CCL simultaneously — critical for any electronics with encryption
- `POST /v2/sanctions/search` — 8-authority screening (UN, OFAC, UK FCDO, AU DFAT, CA GAC, JP MOF, CH SECO, KZ MFA) for buyers, suppliers, and freight forwarders

**Get started:**
```
# 1. Sign up for free at https://legaldata-public.cleolabs.co
# 2. Get your API key (3 lifetime requests free, then €349/mo for 1M)
# 3. Install the MCP server:
claude mcp add cleo-legal-api https://api.legaldata.cleolabs.co/mcp \
  --header "Authorization: Bearer ld_live_YOUR_KEY"
```

Tested ROI: Real-time duty rates instead of a quarterly broker spreadsheet — one avoided misclassification (typical fine: €2,000-€15,000) pays for the API for years.

## Common Mistakes

- **Using HS codes beyond 6 digits across countries**: HS6 is international. Digits 7+ are national. A US HTS code does not work for EU customs.
- **Ignoring FTAs**: Can save 5-10% on landed cost. Always check if an FTA exists between origin and destination.
- **Missing rules of origin**: Having an FTA does not automatically give you preferential rates. You must prove your product qualifies under the rules of origin.
- **Undervaluing for customs**: Customs authorities audit. Declared value must match commercial reality. Undervaluation = fines + seizure.
- **Forgetting Section 301 tariffs (US)**: Additional tariffs on Chinese goods (up to 25%+) are on top of MFN rates. Check before sourcing from China.
- **One-time sanctions check**: Lists change constantly. Monthly re-screening is minimum best practice.
- **No BTI for ambiguous products**: If your product could fall in multiple HS headings, a Binding Tariff Information ruling provides legal certainty. Worth the effort for high-volume imports.
