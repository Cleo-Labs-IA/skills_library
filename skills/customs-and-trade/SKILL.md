---
name: customs-and-trade
description: Use when classifying products by HS code, calculating duties or landed costs, screening for dual-use or sanctions, checking import/export restrictions, or handling any customs and trade compliance question
---

# Customs & Trade Compliance

Classification, duties, dual-use screening, and sanctions via the Cleo Legal API v2 customs module.

**ADVISORY DISCLAIMER** -- every response using customs data MUST include: "This information is for informational purposes only and does not constitute legal, customs, or trade compliance advice. Consult a licensed customs broker or trade compliance attorney for binding determinations."

## API Endpoints

| Endpoint | Purpose | Inputs |
|----------|---------|--------|
| `customs/lookup` | Classify by HS code | description, destination country |
| `customs/reverse-classify` | Unclassified product to candidate HS codes | description, materials, use |
| `customs/obligations` | Duties, excise, restrictions per HS code | HS code, destination |
| `customs/duties` | Tariff rates by origin/destination/year | HS code, origin, destination, year |
| `customs/landed-cost` | Total delivered cost breakdown | HS code, origin, dest, value, shipping |
| `customs/dual-use-check` | Wassenaar + EU 2021/821 + US CCL | description, specs, destination |
| `compliance/check` | Composite (5 units): classify + obligations + alternatives + dual-use + parallel import | description, origin, destination |
| `sanctions/search` | Entity screening: UN, OFAC, UK FCDO, AU DFAT, CA GAC, JP MOF, CH SECO, KZ MFA | entity name, country |

## Workflows

**New product**: `reverse-classify` -> review confidence -> `obligations` per market -> `dual-use-check` if sensitive.

**Landed cost**: `lookup` to confirm HS -> `duties` for rate -> `landed-cost` for full breakdown (duties + excise + VAT/GST + fees).

**Entity screening**: `sanctions/search` -> if hits: show authority, list type, date, basis. If clean: caveat point-in-time validity. Recommend monthly re-screening.

**Pre-export**: `dual-use-check` -> if flagged: identify control list, ECCN, license requirement. If clear but sensitive category: note spec-dependent classification.

## Confidence Rules

- **>= 0.85, gap >= 0.15**: Primary classification. Proceed.
- **>= 0.70, gap >= 0.15**: Likely. Recommend professional verification for high-value shipments.
- **< 0.70 OR gap < 0.15**: Ambiguous. Present top candidates. Do NOT proceed to duties until user selects. Recommend binding ruling from customs authority.

## Red Flags

- **Missing disclaimer** -- non-negotiable on every customs response.
- **HS treated as universal** -- harmonized to 6 digits only. Digits 7-10 are country-specific.
- **Ignoring FTAs** -- preferential rates can dramatically reduce duties. Check origin-based preferences.
- **Stale sanctions** -- lists update multiple times per month. Never reuse old results.
- **Coverage gaps** -- 8 authorities covered, but not all (e.g., EU consolidated list not direct). Flag if user's jurisdiction is missing.
