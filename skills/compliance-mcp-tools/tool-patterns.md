# MCP Tool Patterns & Reference

## Workflow 1: Product Substance Check

Full compliance check for a product's ingredients across target markets.

```
# Step 1: Check ingredients (Cleo Legal API)
mcp__claude_ai_CLEO_LEGAL_API__compliance/check
  product_description: "face moisturizer"
  ingredients: ["water", "glycerin", "niacinamide", "retinol", "tocopherol"]
  target_markets: ["EU", "US", "UK", "CA"]
# Returns: per-ingredient, per-market compliance status with verdicts
# Composite check (5 units): classify + obligations + dual-use + alternatives + parallel

# Step 2: Cross-reference with recent signals (Cleo Insight)
mcp__claude_ai_Cleo_Insight__search_signals
  product_id: "<product-id>"       # from list_products
  risk_level: "critical"
  limit: 20
# Check: any ingredient recently banned or restricted?

# Step 3: For flagged substances, get regulation details
mcp__claude_ai_Cleo_Insight__get_regulation
  id: "<regulation-id>"
# Focus: specific article, limit, effective date, transition period

# Step 4: Synthesize into verdict matrix
# | Ingredient | CAS | EU | US | US-CA | UK | CA | Source |
# Verdicts: COMPLIANT / FLAG / FAIL / NEEDS_REVIEW
```

**Output template:**
```
SUBSTANCE CHECK -- [Product] -- [Date]
Ingredients checked: [count]
Markets: [list]

VERDICT MATRIX:
[table]

NON-COMPLIANT DETAILS:
[per substance: market, regulation, limit, actual, verdict, action required]

REVENUE AT RISK:
[per product-market pair]
```

## Workflow 2: Customs Classification & Landed Cost

```
# Step 1: Classify product by HS code
mcp__claude_ai_CLEO_LEGAL_API__customs/reverse-classify
  product_description: "organic face moisturizer with retinol and hyaluronic acid, 50ml glass jar"
# Returns: candidate HS codes with confidence scores
# Select: confidence >= 0.85 AND gap >= 0.15

# Step 2: Verify selected HS code
mcp__claude_ai_CLEO_LEGAL_API__customs/lookup
  hs_code: "3304.99"
# Returns: description, applicable measures, restrictions

# Step 3: Check import obligations
mcp__claude_ai_CLEO_LEGAL_API__customs/obligations
  hs_code: "3304.99"
  destination: "FR"
# Returns: duties, restrictions, required documents, certifications

# Step 4: Get duty rates (check FTA!)
mcp__claude_ai_CLEO_LEGAL_API__customs/duties
  hs_code: "3304.99"
  origin: "KR"
  destination: "FR"
  year: 2026
# Returns: MFN rate, preferential rates per FTA, anti-dumping, countervailing

# Step 5: Calculate full landed cost
mcp__claude_ai_CLEO_LEGAL_API__customs/landed-cost
  hs_code: "3304.99"
  origin: "KR"
  destination: "FR"
  product_value: 5000      # EUR, FOB value
  shipping: 500
  insurance: 50
# Returns: duty, special duties, VAT, handling, total landed cost
```

**Output template:**
```
LANDED COST -- [Product] -- [Origin] -> [Destination]
HS Code: [code] (confidence: [score])
Duty rate: [MFN] / [FTA if applicable]
FTA: [name or "none"]

COST BREAKDOWN (per shipment / per unit):
  FOB value:      EUR [X] / EUR [x/unit]
  Shipping:       EUR [X] / EUR [x/unit]
  Insurance:      EUR [X] / EUR [x/unit]
  Duty:           EUR [X] / EUR [x/unit]  ([rate]%)
  Special duties: EUR [X] / EUR [x/unit]
  VAT:            EUR [X] / EUR [x/unit]  ([rate]%)
  Handling:       EUR [X] / EUR [x/unit]
  TOTAL LANDED:   EUR [X] / EUR [x/unit]
```

## Workflow 3: Regulatory Signal Monitoring

```
# Step 1: Get your product catalog
mcp__claude_ai_Cleo_Insight__list_products
# Note product_id values for filtering

# Step 2: Search signals by priority
# Critical first
mcp__claude_ai_Cleo_Insight__search_signals
  risk_level: "critical"
  product_id: "<product-id>"
  limit: 20

# Then high
mcp__claude_ai_Cleo_Insight__search_signals
  risk_level: "high"
  product_id: "<product-id>"
  limit: 20

# Step 3: Deep dive on actionable signals
mcp__claude_ai_Cleo_Insight__get_signal
  id: "<signal-id>"
# Extract: what changed, who it affects, enforcement date, required action

# Step 4: Check if signal maps to known regulation
mcp__claude_ai_Cleo_Insight__get_regulation
  id: "<regulation-id>"
# Get: full regulation text, status, obligations

# Step 5: Generate action cards
# One card per signal that requires action (see regulatory-intelligence skill)
```

## Workflow 4: Dual-Use & Sanctions Screening

```
# Step 1: Dual-use check (for electronics, chemicals, precision instruments)
mcp__claude_ai_CLEO_LEGAL_API__customs/dual-use-check
  product_description: "wireless IoT sensor with AES-256 encryption"
  hs_code: "8517.62"
# Returns: control list matches (Wassenaar, EU 2021/821, US CCL/EAR)
# If flagged: STOP. May need export license.

# Step 2: Sanctions screening (for business partners)
mcp__claude_ai_CLEO_LEGAL_API__sanctions/search
  entity_name: "ABC Trading Co"
  country: "SY"
# Returns: matches across 8 authorities (UN, OFAC, UK, AU, CA, JP, CH, KZ)
# Any match: STOP transaction. Seek legal advice.

# Step 3: Document screening
# Date, result, lists checked -- retain for audit trail
```

## Workflow 5: ISO 27001 / Data Compliance (Bastion)

Only if your product company also handles customer data.

```
# Health check
mcp__bastion__get-frameworks-stats
# Returns: frameworks with passing/failing/total counts

# Drill into failures
mcp__bastion__get-compliance-failing-summary
  framework: "iso27001-2022"
mcp__bastion__list-failing-compliance-tests
  framework: "iso27001-2022"
  page: 1
  pageSize: 100
# Paginate: check totalCount vs items.length

# Fix a failing test
mcp__bastion__get-compliance-test-detail
  compliance_test_id: "<test-id>"
# Determine: exclude / evidence / refresh / fix

# Upload evidence
mcp__bastion__add-compliance-test-evidence
  testId: "<test-id>"
  name: "Product compliance documentation"
  description: "Full product compliance file including CPSR and test reports (max 500 chars)"
  link: "https://..."
mcp__bastion__mark-compliance-test-ready-for-review
  testId: "<test-id>"

# Answer compliance question
mcp__bastion__get-knowledge-base-status
mcp__bastion__post-knowledge-base-ask
  question: "What controls address product data encryption?"
```

## Cleo Insight Parameter Reference

### Signal Search Filters

| Filter | Type | Notes |
|--------|------|-------|
| `risk_level` | enum | `critical`, `high`, `medium`, `low` |
| `q` | string | Free-text search across titles and summaries |
| `country` | string | ISO code or country name (49 tracked) |
| `product_id` | string | From `list_products` response |
| `hs_code` | string | Harmonized System code |
| `limit` | int | Results per page |
| `after` | string | Cursor for pagination |

Filters combine with AND logic. Start broad, narrow incrementally.

### Regulation Statuses

| Status | Meaning | Action for your product |
|--------|---------|------------------------|
| `in_force` | Active compliance required | Must comply NOW |
| `adopted_not_yet_in_force` | Published, effective date pending | Prepare -- set calendar, start compliance work |
| `proposed` | Draft or consultation phase | Monitor -- no action yet but plan if likely to pass |
| `under_review` | Existing regulation being revised | Check for changes to current compliance |

## Cleo Legal API Parameter Reference

### Confidence Rules (HS Classification)

| Confidence | Gap | Action |
|------------|-----|--------|
| >= 0.85, gap >= 0.15 | Clear | Proceed with this HS code |
| >= 0.70, gap >= 0.15 | Likely | Use it, get professional verification for high-value |
| < 0.70 OR gap < 0.15 | Ambiguous | Do NOT proceed. Recommend binding ruling |

### Sanctions Authorities

| Code | Authority | Coverage |
|------|-----------|----------|
| UN_SC | UN Security Council | Consolidated List |
| US_OFAC | US Treasury | SDN + other lists |
| UK_FCDO | UK Foreign Office | UK Sanctions |
| AU_DFAT | Australia | Consolidated List |
| CA_GAC | Canada | Consolidated Autonomous |
| JP_MOF | Japan | Entity Lists |
| CH_SECO | Switzerland | EU-aligned proxy |
| KZ_MFA | Kazakhstan | National List |

**Gap**: EU Consolidated List not directly covered; CH_SECO is EU-aligned proxy.

## Bastion Parameter Reference

### Pagination

```
page: 1          # starts at 1
pageSize: 50     # max 100 for most endpoints
```

Always check `totalCount`. Calculate: `totalPages = ceil(totalCount / pageSize)`.

### Evidence Attachment

Two methods:
- **URL link**: `link: "https://..."` -- preferred for most evidence
- **Document upload**: `mcp__bastion__upload-compliance-document` -> returns `evidenceDocumentId` -> use in `add-compliance-test-evidence`
- Max upload ~50KB via MCP. Larger files: use Bastion UI.
- **Must provide exactly one**: link OR evidenceDocumentId, not both.
- **Max description**: 500 characters.

### Exclusion Comments

Max 500 characters. Must be auditor-defensible:
- Good: "Not applicable: product company with no physical servers or on-premise data processing. All customer data handled by Stripe and Shopify."
- Bad: "N/A", "Not relevant"

## Error Handling

| Error | Cause | Fix |
|-------|-------|-----|
| Legal API auth failure | Token expired | Re-run authenticate -> complete_authentication |
| Empty signal results | Wrong product_id or country | Verify with list_products / list_countries first |
| HS classification low confidence | Vague product description | Add: composition, material, intended use, form factor |
| Sanctions false positive | Common name | Add country filter, verify against full entity details |
| Bastion 500 on upload | File too large or malformed | Check size < 50KB, verify base64 encoding |
| Bastion pagination same page | API caching | Wait 30s, retry with explicit page param |
| Bastion description truncated | Over 500 chars | Shorten, move details to linked document |
| Insight pagination incomplete | Missing after cursor | Always check for after token in response |
