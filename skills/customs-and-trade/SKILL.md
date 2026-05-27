---
name: customs-and-trade
description: Use when classifying products by HS code, calculating duties or landed costs, screening for dual-use or sanctions, checking import/export restrictions, or handling any customs and trade compliance question
---

# Customs & Trade Compliance

Classification, duties, dual-use, and sanctions via Cleo Legal API v2 customs module.

**DISCLAIMER** (mandatory on every response): "For informational purposes only. Not legal, customs, or trade compliance advice. Consult a licensed customs broker for binding determinations."

## HS Code Hierarchy

HS is international to 6 digits only. Beyond that, national extensions apply.

| Level | Digits | Example |
|-------|--------|---------|
| Chapter (HS2) | 2 | 85 = Electrical machinery |
| Heading (HS4) | 4 | 8517 = Telephones |
| Subheading (HS6) | 6 | 8517.12 = Smartphones |
| CN8 (EU) | 8 | 8517.12.00 |
| HTS (US) | 10 | 8517.12.00.50 |

HS6 is the international limit. Digits 7+ are country-specific -- never assume transferability.

## Sanctions Authorities (8 covered)

| Code | List |
|------|------|
| UN_SC | Consolidated List |
| US_OFAC | SDN (Specially Designated Nationals) |
| UK_FCDO | UK Sanctions CSV |
| AU_DFAT | Consolidated List |
| CA_GAC | Consolidated Autonomous |
| JP_MOF | End-User + Entity Lists |
| CH_SECO | SECO Sanctions (EU-aligned) |
| KZ_MFA | National List |

**Gap**: EU Consolidated List not direct; CH_SECO is EU-aligned proxy.

## Landed Cost Formula

```
landed_cost = product_value + shipping + insurance + duty + special_duty + VAT + handling
  duty         = product_value * duty_rate
  special_duty = anti-dumping + countervailing + safeguard
  VAT          = (product_value + duty + special_duty) * VAT_rate
  handling     = broker fees + port charges + customs processing
```

Always check FTA preferential rates first -- can reduce duty to 0%.

## API Endpoints

| Endpoint | Purpose |
|----------|---------|
| `customs/lookup` | Classify by HS code |
| `customs/reverse-classify` | Product description to candidate HS codes |
| `customs/obligations` | Duties + restrictions per HS+destination |
| `customs/duties` | Tariff rates by origin/destination/year |
| `customs/landed-cost` | Full delivered cost breakdown |
| `customs/dual-use-check` | Wassenaar + EU 2021/821 + US CCL |
| `compliance/check` | Composite (5 units): classify+obligations+dual-use+alternatives+parallel |
| `sanctions/search` | Entity screening across 8 authorities |

## Workflows

**New product**: `reverse-classify` -> `obligations` per market -> `dual-use-check` if sensitive.
**Landed cost**: `lookup` -> `duties` (check FTA) -> `landed-cost`.
**Entity screening**: `sanctions/search` -> hits: authority+list+date+basis. Clean: caveat point-in-time. Monthly re-screen.
**Pre-export**: `dual-use-check` -> flagged: control list+ECCN+license. Clear+sensitive: note spec thresholds.

## Confidence Rules

- **>=0.85, gap>=0.15**: Proceed.
- **>=0.70, gap>=0.15**: Likely. Professional verification for high-value.
- **<0.70 OR gap<0.15**: Ambiguous. Present candidates, do NOT proceed. Recommend binding ruling.

## Red Flags

- **Missing disclaimer**: Non-negotiable on every response.
- **HS >6 digits assumed universal**: Digits 7+ are country-specific.
- **Ignoring FTAs**: Preferential rates can zero out duties.
- **Stale sanctions**: Lists update multiple times/month. Never reuse old results.
- **Coverage gaps**: 8 authorities, not all. Flag missing jurisdictions.
