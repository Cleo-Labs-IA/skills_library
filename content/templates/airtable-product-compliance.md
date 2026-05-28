# Airtable Base — Product Compliance Tracker

Airtable base schema for end-to-end product compliance management. Copy the structure into a fresh base or use as a blueprint for a Notion-to-Airtable migration.

## Base structure

```
Base: Product Compliance HQ
├── Products
├── Markets
├── ProductMarket (junction)
├── Substances
├── ProductSubstance (junction)
├── Documents
├── Tasks
├── Suppliers / Manufacturers
├── Responsible Persons
├── Regulations
└── Deadlines
```

## Table 1 — Products

| Field | Type | Notes |
|---|---|---|
| Name | Single line text | Primary |
| SKU code | Single line text | |
| Category | Single select | Cosmetics, Electronics, Toy, Food, Supplement, Textile, Other |
| Sub-category | Single select | Conditional on Category |
| Brand | Single line text | |
| Formula version | Number | Decimal |
| Status | Single select | Concept / In Dev / Pre-launch / Live / Discontinued |
| Manufacturer | Link → Suppliers | |
| BOM URL | URL | |
| HS code | Single line text | Customs classification |
| Cover image | Attachment | |
| Owner | User | |
| Created | Created time | |
| Last modified | Last modified time | |
| Linked PM pairs | Link → ProductMarket | |
| Linked substances | Link → ProductSubstance | |
| Total markets active | Count from ProductMarket where Status = Live | Lookup/Rollup |

## Table 2 — Markets

| Field | Type | Notes |
|---|---|---|
| Market name | Single line text | Primary |
| ISO code | Single line text | E.g. "EU27", "US", "JP" |
| Region | Single select | EU / EFTA / NA / APAC / MENA / LATAM / AF |
| Notification system | Single line text | "CPNP", "FDA Cosmetics Direct" |
| Authority | Single line text | "FDA", "MHLW + PMDA" |
| RP/Importer required | Checkbox | |
| Default labelling languages | Multi-select | EN/FR/DE/IT/ES/JA/KO/AR/PT |
| Linked PM pairs | Link → ProductMarket | |
| Linked Regulations | Link → Regulations | |
| Active SKUs | Count rollup from ProductMarket | |

## Table 3 — ProductMarket (the central junction)

| Field | Type | Notes |
|---|---|---|
| Pair | Formula | `{Product} & " — " & {Market}` |
| Product | Link → Products | |
| Market | Link → Markets | |
| Status | Single select | GREEN / YELLOW / ORANGE / RED |
| Classification confirmed | Checkbox | Step 1 |
| Substances checked | Checkbox | Step 2 |
| Label compliant | Checkbox | Step 3 |
| Certifications done | Checkbox | Step 4 |
| Notified / registered | Checkbox | Step 5 |
| Notification number | Single line text | |
| RP / Importer | Link → Responsible Persons | |
| Last test report date | Date | |
| Next renewal | Date | |
| Open issues | Multi-select | "Allergen labelling", "EPR France", "RP missing", "DoC outdated", "Stability data missing" |
| Linked documents | Link → Documents | |
| Linked tasks | Link → Tasks | |
| Estimated cost-to-launch | Currency | |
| Estimated revenue at risk | Currency | |
| Notes | Long text | |

### Suggested views
- **Kanban by Status** (GREEN / YELLOW / ORANGE / RED) — visual triage
- **Grid grouped by Product** — full per-product matrix
- **Grid grouped by Market** — per-market portfolio view
- **Renewal calendar** — Calendar view on Next renewal
- **Recently changed** — sort by last modified

## Table 4 — Substances

| Field | Type | Notes |
|---|---|---|
| Name (INCI / chemical) | Single line text | Primary |
| CAS number | Single line text | |
| Function | Single select | Preservative, UV filter, Solvent, Emollient, Surfactant, Pigment, Fragrance, API, Excipient |
| EU status | Single select | Allowed, Restricted, Banned Annex II |
| EU restriction | Long text | "Annex III ref. 165, max 1.0%" |
| US Prop 65 listed | Checkbox | |
| Japan status | Single select | Allowed / Quasi-drug active / Banned |
| Korea status | Single select | |
| China NMPA status | Single select | |
| Linked products | Link → ProductSubstance | |
| Last verified | Date | |

## Table 5 — ProductSubstance (junction)

| Field | Type | Notes |
|---|---|---|
| Product | Link → Products | |
| Substance | Link → Substances | |
| Concentration % w/w | Number (3 decimals) | |
| Lookup EU limit | Lookup from Substance | |
| Margin to limit % | Formula | `({EU_limit} - {Concentration}) / {EU_limit} * 100` |
| Risk indicator | Formula | `IF({Margin to limit} < 10, "🔴", IF({Margin to limit} < 30, "🟡", "🟢"))` |

## Table 6 — Documents

| Field | Type | Notes |
|---|---|---|
| Title | Single line text | Primary |
| Type | Single select | CPSR / PIF / DoC / Lab report / Mandate / Certificate / Insurance / Other |
| Linked Product | Link → Products | |
| Linked Market | Link → Markets | |
| Issuer | Single line text | |
| Issued date | Date | |
| Expiry date | Date | |
| Days until expiry | Formula | `DATETIME_DIFF({Expiry date}, NOW(), 'days')` |
| Status | Single select | Draft, Final, Active, Expired, Superseded |
| File | Attachment | |
| URL | URL | |

## Table 7 — Tasks

| Field | Type | Notes |
|---|---|---|
| Task | Single line text | |
| Owner | User | |
| Linked PM pair | Link → ProductMarket | |
| Due date | Date | |
| Priority | Single select | P0 / P1 / P2 / P3 |
| Status | Single select | Open / In progress / Blocked / Done |
| Dependencies | Link → Tasks (self) | |

## Table 8 — Suppliers / Manufacturers

| Field | Type | Notes |
|---|---|---|
| Name | Single line text | |
| Country | Country | |
| Type | Single select | Raw material, Contract manufacturer, Packager, 3PL |
| GMP certification | Single select | ISO 22716, ISO 13485, HACCP, GFSI, None |
| Audit last date | Date | |
| Audit next date | Date | |
| Active for products | Link → Products | |

## Table 9 — Responsible Persons / Importers

| Field | Type | Notes |
|---|---|---|
| Name | Single line text | |
| Role | Single select | EU RP, UK RP, US Agent, JP MAH, KR HMA, Importer, Distributor |
| Country | Country | |
| Service type | Single select | Internal, Agency, 3PL |
| Cost per month | Currency | |
| Contract start | Date | |
| Contract end | Date | |
| Markets covered | Multi-select | |
| Linked PM pairs | Link → ProductMarket | |

## Table 10 — Regulations

| Field | Type | Notes |
|---|---|---|
| Regulation | Single line text | "EU Reg 1223/2009" |
| Region | Single select | EU, US, UK, etc. |
| Category in scope | Multi-select | Cosmetics, Electronics, etc. |
| Source URL | URL | EUR-Lex link |
| Latest amendment | Date | |
| Linked markets | Link → Markets | |
| Linked deadlines | Link → Deadlines | |

## Table 11 — Deadlines

| Field | Type | Notes |
|---|---|---|
| Deadline | Single line text | "MoCRA GMP enforcement" |
| Date | Date | |
| Days remaining | Formula | `DATETIME_DIFF({Date}, NOW(), 'days')` |
| Status | Formula | `IF({Days remaining} < 0, "Missed", IF({Days remaining} < 30, "🚨 Imminent", IF({Days remaining} < 90, "⚠️ Soon", "On track")))` |
| Type | Single select | Regulation enforcement / Notification renewal / Lab cert renewal / EPR declaration |
| Affected products | Link → Products | |
| Source | URL | |

## Suggested Automations

1. **When PM pair Status changes to RED** → create a P0 Task assigned to PM owner
2. **When Documents expiry < 60 days** → create P1 Task "Renew document"
3. **When Substance is updated** (e.g. new EU restriction) → for every linked Product, push Status to YELLOW pending re-check
4. **Daily** at 8am → Slack digest of PM pairs in RED + Tasks due this week
5. **Weekly** → email portfolio compliance status to leadership

## Suggested Interface Designer pages

- **Founder dashboard**: counts of GREEN/YELLOW/ORANGE/RED pairs, list of upcoming deadlines
- **Per-product page**: matrix of markets, document list, tasks
- **Per-market page**: list of SKUs, top regulations, RP info
- **Substance audit page**: search by CAS or INCI, see all products containing it

---

**Automate this with skills_library and Cleo Legal API.**
Install: `git clone https://github.com/Cleo-Labs-IA/skills_library.git ~/.claude/skills/comply`
Cleo Legal API: https://legaldata-public.cleolabs.co/
