# Notion Compliance Checklist — Per Product, Per Market

A Notion template blueprint to track product compliance across your portfolio. Drop this structure into a fresh Notion workspace.

## Structure overview

```
Compliance HQ (root page)
├── Products (database)
├── Markets (database)
├── SKU × Market matrix (linked DB)
├── Substances (database)
├── Documents (database)
├── Tasks (database)
└── Calendar (database — deadlines)
```

## Database 1 — Products

A row per SKU.

| Property | Type | Notes |
|---|---|---|
| Name | Title | "Vitamin C Serum 30 mL" |
| SKU code | Text | Internal identifier |
| Category | Select | Cosmetics, Electronics, Toys, Food, Supplements, Textiles, Other |
| Sub-category | Select | Linked to category |
| Brand | Relation → Brands DB |
| Formula version | Number | 1.0, 1.1 ... |
| Status | Select | Concept, In Dev, Pre-launch, Launched, Discontinued |
| Manufacturer | Relation → Suppliers DB |
| Lead developer | Person | Internal owner |
| BOM file | File | Link to BOM |
| Cover image | Files & media | Product photo |
| Created | Created time | |
| Last updated | Last edited time | |

## Database 2 — Markets

Per market entry.

| Property | Type | Notes |
|---|---|---|
| Market | Title | "EU 27", "USA", "UK", "Japan", "Korea", "Canada", "Australia", "UAE" |
| Region | Select | EU, EFTA, North America, APAC, MENA, LATAM, Africa |
| Authority | Text | "MHLW + PMDA" (JP), "FDA + CPSC" (US) |
| Notification system | Text | "CPNP", "FDA Cosmetics Direct", "MFDS CIMS", etc. |
| Notification cost | Number | Local currency |
| RP / Importer required | Checkbox | |
| Local language label | Multi-select | EN, FR, DE, IT, ES, JA, KO ... |
| Top 3 regulations | Multi-select | Linked to Regs DB |

## Database 3 — SKU × Market matrix (the heart of the system)

This is the **central** database. One row per (Product × Market) pair. Use Notion's **linked-database view** to filter by product or market.

| Property | Type | Notes |
|---|---|---|
| Pair | Title | "Vit C 30 mL — EU 27" |
| Product | Relation → Products | |
| Market | Relation → Markets | |
| Status | Select | GREEN, YELLOW, ORANGE, RED |
| Classification confirmed | Checkbox | Step 1 — classify |
| Substance check done | Checkbox | Step 2 — substances |
| Label compliant | Checkbox | Step 3 — label |
| Certifications obtained | Checkbox | Step 4 — certify |
| Notified | Checkbox | Step 5 — notify |
| Notification number | Text | CPNP, MFDS ID, etc. |
| RP / importer | Text or relation | Linked to RP DB |
| Last test report date | Date | |
| Renewal due | Date | |
| Open issues | Multi-select | E.g. "Allergen on label", "EPR France" |
| Linked documents | Relation → Documents | |
| Notes | Long text | Free text |

### Suggested views
- **Master view**: all pairs, grouped by Product, color-coded by Status
- **Per-market**: Filter by Market, see all your SKUs in that market
- **Red list**: Status = RED, sorted by urgency
- **Renewals next 90 days**: Filter Renewal due ≤ 90 days

## Database 4 — Substances

For each ingredient/material across your formulas.

| Property | Type | Notes |
|---|---|---|
| Name | Title | INCI or trade name |
| CAS number | Text | Authoritative identifier |
| Function | Select | Preservative, UV filter, Solvent, Emollient, Surfactant... |
| Used in (products) | Relation → Products | |
| EU status | Select | Allowed, Restricted, Banned (Annex II) |
| EU restriction | Text | e.g. "Annex III ref. 165, max 1.0%" |
| US (Prop 65) | Checkbox | |
| Japan status | Select | Allowed, Quasi-drug active, Banned |
| Korea status | Select | |
| China NMPA status | Select | |
| Concentration in formula | Number | % w/w |
| Margin to limit | Formula | =(limit − concentration) / limit × 100 |
| Last verified | Date | |

## Database 5 — Documents

Every PIF, technical file, lab report, DoC, mandate letter.

| Property | Type | Notes |
|---|---|---|
| Title | Title | "CPSR Vit C Serum v1.0" |
| Type | Select | CPSR, PIF, DoC, Lab report, Test report, Mandate, Certificate, Other |
| Product | Relation → Products | |
| Market | Relation → Markets | |
| Issuer | Text | Lab name, assessor name |
| Issued date | Date | |
| Expiry | Date | |
| File | File & media | |
| Status | Select | Draft, Final, Expired, Superseded |

## Database 6 — Tasks

Operational tasks tied to compliance work.

| Property | Type | Notes |
|---|---|---|
| Task | Title | |
| Linked SKU/market | Relation | |
| Owner | Person | |
| Due date | Date | |
| Priority | Select | P0/P1/P2/P3 |
| Status | Select | Open, In progress, Blocked, Done |
| Dependencies | Relation → Tasks | |

## Database 7 — Calendar (deadlines)

Regulatory deadlines and recurring renewals.

| Property | Type | Notes |
|---|---|---|
| Deadline | Title | "EU GPSR enforcement wave" |
| Type | Select | New regulation, Notification renewal, Test renewal, EPR declaration |
| Affected products | Relation → Products | |
| Date | Date | |
| Days remaining | Formula | dateBetween(Date, now(), "days") |
| Source | URL | Link to EUR-Lex / FDA / etc. |
| Status | Select | Upcoming, In progress, Done, Missed |

## How to use this template

### Onboarding a new product
1. Add a row in **Products**
2. For each target market, add a row in **SKU × Market matrix**
3. Run skills_library's `market-entry-checklist` to populate the matrix
4. Pre-fill **Tasks** for the missing items
5. Schedule renewals in **Calendar**

### Operating
- **Monday review**: open **Tasks** dashboard, filter "Due this week"
- **Monthly review**: scan **Calendar** for next-90-day deadlines
- **Quarterly audit**: filter **SKU × Market matrix** by Status = YELLOW or ORANGE; investigate
- **Per-launch**: filter all rows by Product = X, see the full readiness matrix at a glance

### Sharing with buyers
- Create a **shared view** of **SKU × Market matrix** with only the relevant SKUs + markets, hide internal columns
- Export to PDF for retailer/distributor compliance dossiers

## Automation suggestions

- Notion automation: when **Status** changes to RED, create a P0 task
- Slack integration: post to #compliance channel on RED status
- Calendar integration: sync **Calendar** DB to Google Calendar via 2-way sync

---

**Automate this with skills_library and Cleo Legal API.**
Install: `git clone https://github.com/Cleo-Labs-IA/skills_library.git ~/.claude/skills/comply`
Cleo Legal API: https://legaldata-public.cleolabs.co/
