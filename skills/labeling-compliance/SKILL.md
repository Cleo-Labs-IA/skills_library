---
name: labeling-compliance
description: Use when checking labeling requirements for a product in a target market, creating compliant labels, verifying INCI nomenclature, checking allergen declarations, or understanding CE/UKCA/FCC marking requirements
---

# Labeling Compliance

Country-specific labeling requirements for physical products. What must be on your label to legally sell in each market.

## MCP Tools for Labeling Compliance

```
# Search for labeling regulation changes by jurisdiction
mcp__claude_ai_Cleo_Insight__search_signals(q="labeling", country="FR", limit=25)
mcp__claude_ai_Cleo_Insight__search_signals(q="allergen declaration", country="US", limit=25)

# Get full details of a specific labeling regulation
mcp__claude_ai_Cleo_Insight__get_regulation(id="<regulation-id>")

# Search labeling requirements by jurisdiction via Legal API
# Use /v2/search endpoint for targeted labeling queries:
mcp__claude_ai_CLEO_LEGAL_API__compliance/check
  product_description: "face cream 50ml"
  ingredients: ["retinol", "niacinamide"]
  target_markets: ["EU", "US", "UK"]
# Returns substance + labeling flags per market

# List all tracked regulations to find labeling-specific ones
mcp__claude_ai_Cleo_Insight__list_regulations(limit=100)
# Filter results for labeling, packaging, and marking requirements
```

See `compliance-mcp-tools` skill for full tool patterns and authentication.

## The Rule

**If your label is wrong, your product cannot be sold -- even if the product itself is perfectly safe and compliant.** Labeling is the #1 reason products get stopped at customs or pulled from shelves.

## Universal Labeling Elements

Every physical product in every market needs at minimum:

| Element | Description |
|---------|-------------|
| Product name / identity | What the product is |
| Net quantity | Weight, volume, or count (metric in EU/UK, dual in US) |
| Responsible entity | Manufacturer, importer, or responsible person with address |
| Country of origin | "Made in [country]" -- often legally required, always commercially expected |
| Batch/lot number | For traceability and recalls |

Beyond these, requirements vary dramatically by product category and market.

## Cosmetics Labeling

### EU (Regulation 1223/2009, Article 19)

**Mandatory elements on packaging:**

| Element | Requirement | Example |
|---------|-------------|---------|
| Responsible Person | Name + address, must be in EU | "Cleo Labs SAS, 92200 Neuilly, France" |
| Nominal content | Weight or volume in metric | "50 ml" |
| Date of minimum durability | "Best before" symbol (hourglass) + date. If >30 months: PAO symbol instead | PAO: "12M" (open jar icon) |
| Precautions | Mandatory warnings per Annexes III-VI | "Avoid contact with eyes" |
| Batch number | For recall traceability | "LOT 2026A-042" |
| Function | What the product does (if not obvious from name) | "Moisturising face cream" |
| **INCI ingredients list** | Full list in INCI nomenclature, descending concentration order | "AQUA, GLYCERIN, NIACINAMIDE..." |
| Country of origin | If made outside EU | "Made in Korea" |

**INCI rules:**
- Latin (INCI) names for chemicals: AQUA, not "water"
- Botanical names in Latin with common name: ALOE BARBADENSIS LEAF JUICE
- Colorants by CI number: CI 77891 (titanium dioxide)
- Fragrances as "PARFUM" (or "AROMA" for oral products)
- **26 allergens must be listed individually if above threshold**: LIMONENE, LINALOOL, CITRONELLOL, GERANIOL, etc. (0.01% in rinse-off, 0.001% in leave-on)
- Concentration >1%: strictly descending order. Below 1%: any order.
- Nanomaterials: add "[nano]" after ingredient name

**Language**: Official language(s) of the country of sale. Selling in France = French. Germany = German. Multi-country = multi-language.

### US (FDA + FTC)

| Element | Requirement |
|---------|-------------|
| Product identity | Prominent on PDP (Principal Display Panel) |
| Net quantity | Lower third of PDP, both metric and US customary |
| Ingredient list | Descending concentration, INCI names accepted. "Active ingredients" separate if OTC drug |
| Warning statements | Per 21 CFR (e.g., sunscreen: "Sun alert"), Prop 65 if selling in CA |
| Distributor/manufacturer | Name + address on info panel |
| Directions for use | If not obvious |
| **No pre-market approval** | But MoCRA (2024+) requires FDA facility registration + product listing |

**FTC claims rules**: "Natural," "organic," "hypoallergenic" -- all have specific FTC/FDA definitions. Unsubstantiated claims = FTC enforcement action.

**Prop 65 (California)**: If product contains any listed substance above safe harbor, label must include: "WARNING: This product can expose you to [substance], which is known to the State of California to cause [cancer/birth defects/other reproductive harm]."

### UK (post-Brexit)

Mirrors EU 1223/2009 but:
- **UK Responsible Person**: Must be established in UK (cannot be your EU RP)
- **UKCA marking**: Not required for cosmetics (no UKCA for cosmetics)
- **GB address**: Must appear on label
- **Language**: English

### Canada

- **Bilingual**: English AND French mandatory on all labels
- **Cosmetic Regulations C.R.C., c. 869**: Similar to EU ingredients list
- **NHP**: If product makes health claims, classified as Natural Health Product -- different labeling regime entirely

### Japan

- **Full Japanese translation** of all label elements
- **Positive list system**: Only ingredients on the approved list may be used
- **Medicated cosmetics (quasi-drugs)**: Separate approval and labeling path
- **Allergen labeling**: Mandatory for specific allergens, different list from EU

### Korea (MFDS)

- **Korean language** mandatory
- **CGMP compliance** statement if functional cosmetic
- **All-ingredients labeling** required
- **Expiry date** mandatory (not just PAO)

## Food Labeling

### EU (Regulation 1169/2011)

| Element | Requirement |
|---------|-------------|
| Food name | Legal name, or customary name, or descriptive name |
| Ingredients list | Descending weight order, allergenic substances EMPHASIZED (bold, caps, or underline) |
| **14 allergens** | Mandatory declaration: cereals with gluten, crustaceans, eggs, fish, peanuts, soybeans, milk, nuts, celery, mustard, sesame, sulphites, lupin, molluscs |
| Quantitative declaration (QUID) | % of highlighted ingredients |
| Net quantity | Metric |
| Date marking | "Use by" (safety) or "Best before" (quality) |
| Storage conditions | If special handling needed |
| Operator name + address | EU-based food business operator |
| Country of origin | Mandatory for certain foods (meat, honey, olive oil, fruits/veg) |
| Nutrition declaration | Energy, fat, saturates, carbs, sugars, protein, salt -- per 100g/100ml |
| Lot number | For traceability |

**Language**: Official language(s) of member state of sale.

### US (FDA 21 CFR 101)

| Element | Requirement |
|---------|-------------|
| Statement of identity | Common name of food |
| Net quantity | US customary + metric |
| **Nutrition Facts panel** | Standardized format: servings, calories, fat, cholesterol, sodium, carbs, fiber, sugars, protein, vitamins |
| Ingredients list | Descending weight |
| **9 major allergens** (FALCPA + FASTER Act) | Milk, eggs, fish, crustacean shellfish, tree nuts, peanuts, wheat, soybeans, sesame -- must be declared |
| Manufacturer/distributor | Name + address |
| Country of origin | Required |

**Claims**: "Organic" (USDA NOP), "Non-GMO," "Gluten-free" -- all have specific regulatory definitions and verification requirements.

### Supplements (US: DSHEA / EU: Food Supplements Directive 2002/46/EC)

| Market | Label Requirements |
|--------|-------------------|
| **US** | "Supplement Facts" panel (not Nutrition Facts), "dietary supplement" identifier, disclaimer: "This statement has not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease." |
| **EU** | "Food supplement" designation, recommended daily dose, "Do not exceed stated dose" warning, "Not a substitute for a varied diet," nutrient amounts as % of reference intake |

## Electronics Labeling

### CE Marking (EU)

| Requirement | Detail |
|-------------|--------|
| CE symbol | Minimum 5mm height, specific proportions (Commission template) |
| Directives covered | LVD (2014/35/EU), EMC (2014/30/EU), RED (2014/53/EU), RoHS (2011/65/EU) |
| Declaration of Conformity | Must reference all applicable directives, harmonized standards, notified body (if used) |
| Importer info | EU importer name + address on product or packaging |
| Traceability | Type, batch, serial number |
| Instructions | In official language(s) of member state of sale |

CE marking without actual conformity assessment = illegal. Self-declaration is allowed for most consumer electronics but requires full technical documentation.

### UKCA Marking (UK)

Same principle as CE but:
- **UKCA symbol** (different from CE)
- **UK Designated Standards** (not EU harmonised standards -- though largely identical for now)
- **UK Responsible Person** for importers
- **UK conformity assessment** (UK-recognized bodies)
- **Transition**: CE marking accepted in GB until indefinite extension -- but UKCA required for new product types

### FCC (US)

| Type | Requirement |
|------|-------------|
| Intentional radiator | FCC ID on label, FCC authorization required |
| Unintentional radiator | FCC compliance statement on label or in manual |
| Label text | "This device complies with Part 15 of the FCC Rules" + interference statements |

### RoHS Marking

No mandatory symbol in EU (CE covers it), but many markets use the "RoHS compliant" crossed-out wheelie bin or custom marks. China RoHS requires specific marking with substance content tables.

## Toys Labeling

| Requirement | EU (2009/48/EC) | US (CPSIA/ASTM F963) |
|-------------|-----------------|----------------------|
| Age warning | "Not suitable for children under 36 months" + specific hazard | Age grading label |
| CE mark | Required | Not applicable |
| ASTM mark | Not applicable | Not mandatory but widely used |
| Small parts warning | Mandatory for toys with detachable parts < 36mm | Mandatory (choking hazard) |
| Importer info | EU address | US importer or domestic manufacturer |
| Tracking info | Batch, manufacturer, model | Permanent distinguishing mark, batch info |
| Third-party testing | EU-type examination for some categories | **Mandatory** for all children's products |

## Textile Labeling

| Requirement | EU (Reg 1007/2011) | US (FTC Textile Act) |
|-------------|---------------------|----------------------|
| Fiber composition | Mandatory, by % weight | Mandatory, generic fiber names |
| Country of origin | Recommended | Mandatory |
| Care instructions | Recommended (ISO 3758 symbols) | Mandatory (ASTM D5489 or care symbols) |
| Manufacturer/importer | Mandatory | Mandatory (RN or WPL number) |
| Flammability | Required for clothing textiles (EN ISO 14116) | 16 CFR 1610 compliance label |

## Multi-Language Requirements

| Market | Required Language(s) |
|--------|---------------------|
| France | French |
| Germany | German |
| Spain | Spanish (+ regional in some autonomous communities) |
| Italy | Italian |
| Netherlands | Dutch |
| Belgium | French + Dutch (+ German in some areas) |
| Switzerland | German, French, Italian (whichever market you target) |
| Canada | English + French (bilingual mandatory) |
| US | English (Spanish recommended for some markets) |
| UK | English |
| Japan | Japanese |
| Korea | Korean |
| China | Simplified Chinese |
| EU multi-country | One label with ALL target country languages, or country-specific stickering |

**Practical tip**: For small packaging, use a fold-out label or booklet label to fit multiple languages. The outer packaging must still show the mandatory elements in the correct language.

## Label Review Checklist

Before printing labels, verify:

```
LABEL REVIEW -- [Product] -- [Market] -- [Date]

UNIVERSAL:
[ ] Product name/identity present
[ ] Net quantity in correct units (metric for EU/UK, dual for US)
[ ] Batch/lot number
[ ] Country of origin
[ ] Responsible entity name + address (in correct jurisdiction)

CATEGORY-SPECIFIC:
[ ] Ingredients list in correct format and order
[ ] Allergens declared per local requirements
[ ] Required warnings present
[ ] Required symbols present (CE, UKCA, recycling, PAO)
[ ] Nutrition/supplement facts panel (if food/supplement)
[ ] Claims substantiated per local rules

LANGUAGE:
[ ] Text in official language(s) of country of sale
[ ] Bilingual where required (Canada, Belgium)
[ ] Technical terms (INCI) in correct nomenclature

FORMATTING:
[ ] Minimum font size met (EU: 1.2mm x-height for <80cm2 packages, 0.9mm if <10cm2)
[ ] Required elements on correct panel (PDP vs info panel for US)
[ ] Symbols at minimum required dimensions
```

## Common Mistakes

- **Same label for EU and US**: Different formats, different allergen lists, different ingredient nomenclature rules. Never reuse.
- **Missing language**: Selling in France with English-only label = seized at customs.
- **EU Responsible Person address missing**: Must be an EU-based entity with a physical address.
- **Prop 65 warning omitted**: If selling in California (including Amazon US), and product contains ANY listed substance above safe harbor level, the warning is mandatory.
- **INCI errors**: Wrong botanical names, missing [nano] designation, wrong allergen threshold -- each can trigger a recall.
- **CE marking without conformity**: Affixing CE without the proper technical documentation and declaration of conformity is a criminal offense in the EU.
- **Expiry format mismatch**: EU uses DD/MM/YYYY or "best before end [month/year]". US uses MM/DD/YYYY. Confusion leads to compliance issues.
- **Forgetting recycling symbols**: Triman (France), Gruner Punkt (Germany), WEEE crossed-out bin (electronics) -- each market has specific waste labeling requirements.
