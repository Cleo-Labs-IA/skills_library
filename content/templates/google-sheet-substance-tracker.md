# Google Sheets — Substance Tracker (Multi-market)

A lightweight Google Sheet template to track substance limits across markets per product. Best for small brands with 5-25 SKUs that don't yet need Airtable/Notion.

## Sheet structure (4 tabs)

### Tab 1 — README

Short instructions for users:

> This workbook tracks each substance used in your products against the legal limits in each target market. Update Tab 4 (Substance Library) when new ingredients are added; the matrix in Tab 3 will auto-flag any concentration over the limit.

### Tab 2 — Products

| A: SKU | B: Name | C: Category | D: Sub-category | E: Brand | F: Formula version | G: Status |
|---|---|---|---|---|---|---|
| VC-30 | Vitamin C Serum 30 mL | Cosmetics | Skincare leave-on | YourBrand | 1.2 | Live |
| RT-50 | Retinol Night Cream 50 mL | Cosmetics | Skincare leave-on | YourBrand | 1.0 | Pre-launch |

### Tab 3 — Per-Product Substance Matrix (the main view)

Rows = (SKU × Ingredient) pairs. Columns = markets.

| A: SKU | B: Ingredient (INCI) | C: CAS | D: Concentration % | E: EU limit | F: EU margin % | G: EU status | H: US Prop 65? | I: JP limit | J: JP margin % | K: KR limit | L: CN limit | M: Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|

**Formulas:**

- Column E (EU limit): `=VLOOKUP(B2, 'Substance Library'!A:G, 5, FALSE)`
- Column F (EU margin %): `=IF(E2="No limit", "n/a", IF(E2="Banned", "BANNED", (E2-D2)/E2*100))`
- Column G (EU status): `=IF(E2="Banned", "🔴 BANNED", IF(F2="n/a", "🟢 OK", IF(F2<0, "🔴 OVER LIMIT", IF(F2<10, "🟠 Tight margin", IF(F2<30, "🟡 Caution", "🟢 OK")))))`
- Column H (US Prop 65?): `=VLOOKUP(B2, 'Substance Library'!A:G, 6, FALSE)` → returns Y/N
- Apply same logic to JP, KR, CN columns

### Tab 4 — Substance Library (master)

The single source of truth. Update only here.

| A: INCI / Chemical name | B: CAS | C: Function | D: EU regulation ref | E: EU limit % (or "No limit" or "Banned") | F: Prop 65 Y/N | G: JP limit | H: KR limit | I: CN limit | J: Source | K: Last verified |
|---|---|---|---|---|---|---|---|---|---|---|

Example rows:

| Retinol | 68-26-8 | Anti-aging active | Annex III ref. 327 | 0.05 (face leave-on), 0.3 (body) | N | 1.0 | 1.0 | 0.5 | Reg 2024/996 | 2026-05-01 |
| Phenoxyethanol | 122-99-6 | Preservative | Annex V ref. 29 | 1.0 | N | 1.0 | 1.0 | 1.0 | Reg 1223/2009 | 2026-05-01 |
| Hydroquinone | 123-31-9 | Skin lightening | Annex II ref. 1339 | Banned | Y | Banned | Banned | Banned (cosmetic) | Reg 1223/2009 | 2026-05-01 |
| Lilial (Butylphenyl Methylpropional) | 80-54-6 | Fragrance | Annex II ref. 1666 | Banned | N | No limit | No limit | No limit | Reg 2021/1902 | 2026-05-01 |
| Salicylic Acid | 69-72-7 | Keratolytic | Annex III ref. 98 | 2.0 (rinse-off), 0.5 (leave-on) | N | 0.2 (cosmetic; above = quasi-drug) | 0.5 | 2.0 | Reg 1223/2009 | 2026-05-01 |
| Kojic Acid | 501-30-4 | Brightener | Annex III ref. 327 | 1.0 (face/hands) | N | 1.0 | Quasi-drug | 2.0 | Reg 2024/1158 | 2026-05-01 |
| Limonene | 5989-27-5 | Fragrance allergen | Annex III ref. 67 | 0.001 (rinse-off declare), 0.01 (leave-on declare) | N | Declare | Declare | Declare | Reg 1223/2009 | 2026-05-01 |
| BHT | 128-37-0 | Antioxidant | Annex III | No restriction stated | N | OK | OK | OK | Reg 1223/2009 | 2026-05-01 |

### Tab 5 — Dashboard (optional but recommended)

Auto-summary view.

- **Cell B2**: number of SKUs with any RED (`=COUNTIF('Per-Product Matrix'!G:G, "🔴*")`)
- **Cell B3**: number of SKUs with any ORANGE/YELLOW (`=COUNTIF('Per-Product Matrix'!G:G, "🟠*") + COUNTIF('Per-Product Matrix'!G:G, "🟡*")`)
- **Cell B4**: count of substances above EU limit (RED rows)
- **Table**: top 10 tightest margins (`=QUERY('Per-Product Matrix'!A:M, "SELECT A, B, D, E, F WHERE F < 20 ORDER BY F ASC LIMIT 10", 1)`)

### Tab 6 — Market References (lookup)

For users to verify the regulatory sources.

| Market | Authority | Primary regulation | Source URL | Last checked |
|---|---|---|---|---|
| EU 27 | DG-SANTE / ECHA | Reg 1223/2009 + REACH | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32009R1223 | 2026-05-01 |
| USA | FDA + CPSC | MoCRA / FD&C Act / 21 CFR | https://www.fda.gov/cosmetics/cosmetics-laws-regulations | 2026-05-01 |
| Japan | MHLW / PMDA | PMD Act (Yakkihō) | https://www.pmda.go.jp/english/ | 2026-05-01 |
| Korea | MFDS | Cosmetics Act | https://www.mfds.go.kr/eng/index.do | 2026-05-01 |
| China | NMPA | CSAR | https://english.nmpa.gov.cn/ | 2026-05-01 |
| California | OEHHA | Prop 65 | https://oehha.ca.gov/proposition-65 | 2026-05-01 |

## How to use it

1. **Fill the Substance Library** (Tab 4) with every ingredient you currently use, sourced from Cleo Legal API or primary regulators. Cite the source.
2. **For each product**, list every ingredient and concentration in the Per-Product Matrix (Tab 3). The formulas will pull limits, calculate margins, and color-code statuses.
3. **At every formula change**, update the matrix.
4. **Quarterly**, re-verify Substance Library against latest Annex versions. The skill `substance-screening` automates this.
5. **Before any new market entry**, add the relevant columns (JP limit, KR limit, etc.) to the matrix and check status.

## Limitations vs more powerful tools

- **No automation**: you must manually re-pull substance limit changes.
- **No versioning**: use Google Sheets revision history or duplicate sheets.
- **No multi-user workflow**: real-time editing OK, but no task management or notifications.
- **No document linking**: keep PIF / CPSR / lab reports in a separate Drive folder.

If you outgrow this (typically >25 SKUs or >5 markets), migrate to the Notion or Airtable templates also in `/content/templates/`.

---

**Automate this with skills_library and Cleo Legal API.**
Install: `git clone https://github.com/Cleo-Labs-IA/skills_library.git ~/.claude/skills/comply`
Cleo Legal API: https://legaldata-public.cleolabs.co/
