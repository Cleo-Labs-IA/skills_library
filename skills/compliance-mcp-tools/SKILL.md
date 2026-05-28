---
name: compliance-mcp-tools
description: Use when calling Cleo Legal API, Cleo Insight, or Bastion MCP tools, planning a multi-tool compliance workflow, troubleshooting MCP tool errors, or choosing which tool to use for a product compliance task
---

# Compliance MCP Tools

Three MCP servers provide product compliance automation. For detailed workflows and parameters, load `tool-patterns.md`.

## Tool Inventory

### Cleo Legal API (Core for Product Compliance)

| Category | Endpoint | What it does for you |
|----------|----------|---------------------|
| **Substance check** | `compliance/check` | Check product ingredients against multiple substance databases per market |
| **HS classification** | `customs/reverse-classify` | Product description to candidate HS codes |
| **HS lookup** | `customs/lookup` | Verify HS code details and applicable measures |
| **Duties** | `customs/duties` | Tariff rates by origin/destination |
| **Landed cost** | `customs/landed-cost` | Full delivered cost breakdown (duty + VAT + handling) |
| **Dual-use** | `customs/dual-use-check` | Wassenaar + EU 2021/821 + US CCL screening |
| **Sanctions** | `sanctions/search` | Entity screening across 8 authorities |
| **Import obligations** | `customs/obligations` | Duties + restrictions per HS code + destination |

**Auth required**: `mcp__claude_ai_CLEO_LEGAL_API__authenticate` then `complete_authentication`.

### Cleo Insight MCP (Core for Monitoring)

| Category | Tools | What it does for you |
|----------|-------|---------------------|
| **Signals** | `search_signals`, `get_signal` | Find regulatory changes that affect your product (substance bans, labeling changes, deadlines) |
| **Regulations** | `list_regulations`, `get_regulation` | Browse and read tracked regulations |
| **Company** | `get_company_profile` | Your product catalog and regulatory exposure |
| **Assets** | `list_products`, `list_countries`, `list_authorities` | Reference data for filters |
| **Pipeline** | `list_scans` | Status of regulatory scanning pipelines |

### Bastion MCP (If you also handle customer data)

Only relevant if your product company also manages customer data (e-commerce, SaaS component) and needs ISO 27001 / SOC 2.

| Category | Tools |
|----------|-------|
| Assessment | `get-frameworks-stats`, `get-compliance-failing-summary`, `list-failing-compliance-tests`, `get-compliance-test-detail` |
| Evidence | `upload-compliance-document`, `add-compliance-test-evidence`, `mark-compliance-test-ready-for-review` |
| Exclusions | `exclude-compliance-test`, `put-compliance-test-exclude-asset` |
| Refresh | `refresh-compliance-test` |
| Security | `list-code-security-issues`, `get-code-security-issue-by-id`, `post-customer-issues-remediation` |
| Policies | `list-customer-policies`, `get-customer-policy-by-id` |
| Knowledge | `get-knowledge-base-status`, `post-knowledge-base-refresh`, `post-knowledge-base-ask` |
| Trust Center | `get-trust-center-config`, `put-trust-center` |
| GitHub | `get-github-dependabot-resolution` |
| Customer | `get-customer` |

## Five Core Workflows for Product Companies

### 1. "Can I sell this product in [market]?" -- Substance Check

```
# Step 1: Check ingredients against substance databases
mcp__claude_ai_CLEO_LEGAL_API__compliance/check
  product_description: "face moisturizer with retinol"
  ingredients: ["water", "glycerin", "niacinamide", "retinol"]
  target_markets: ["EU", "US", "UK"]

# Step 2: Cross-reference with recent regulatory signals
mcp__claude_ai_Cleo_Insight__search_signals
  product_id: "<product-id>"
  risk_level: "critical"

# Step 3: For any flagged substance, get regulation details
mcp__claude_ai_Cleo_Insight__get_regulation
  id: "<regulation-id>"

# Output: verdict per ingredient per market (COMPLIANT/FLAG/FAIL/NEEDS_REVIEW)
```

### 2. "What does it cost to import this?" -- Landed Cost

```
# Step 1: Classify product
mcp__claude_ai_CLEO_LEGAL_API__customs/reverse-classify
  product_description: "organic face cream, 50ml glass jar, made in Korea"

# Step 2: Get duty rates (check FTA!)
mcp__claude_ai_CLEO_LEGAL_API__customs/duties
  hs_code: "3304.99"
  origin: "KR"
  destination: "FR"
  year: 2026

# Step 3: Calculate full landed cost
mcp__claude_ai_CLEO_LEGAL_API__customs/landed-cost
  hs_code: "3304.99"
  origin: "KR"
  destination: "FR"
  product_value: 5000
  shipping: 500
  insurance: 50

# Output: per-unit delivered cost with duty, VAT, handling breakdown
```

### 3. "What regulations apply to my product?" -- Regulatory Map

```
# Step 1: Get company/product profile
mcp__claude_ai_Cleo_Insight__get_company_profile
mcp__claude_ai_Cleo_Insight__list_products

# Step 2: Search for applicable regulations per market
mcp__claude_ai_Cleo_Insight__search_signals
  product_id: "<product-id>"
  country: "FR"
  limit: 50

# Step 3: Browse full regulation list
mcp__claude_ai_Cleo_Insight__list_regulations
  limit: 50
# Paginate with 'after' cursor

# Step 4: Deep dive on specific regulations
mcp__claude_ai_Cleo_Insight__get_regulation
  id: "<regulation-id>"

# Output: regulation inventory per market with status, deadlines, key requirements
```

### 4. "Has anything changed that affects me?" -- Signal Monitoring

```
# Search by risk level (start with critical)
mcp__claude_ai_Cleo_Insight__search_signals
  risk_level: "critical"
  product_id: "<product-id>"
  limit: 20

# Then high
mcp__claude_ai_Cleo_Insight__search_signals
  risk_level: "high"
  product_id: "<product-id>"
  limit: 20

# Deep dive on each signal
mcp__claude_ai_Cleo_Insight__get_signal
  id: "<signal-id>"
# Focus on: what changed, enforcement date, impact on your product

# Output: action cards per signal (see regulatory-intelligence skill)
```

### 5. "Is this business partner sanctioned?" -- Sanctions Screening

```
mcp__claude_ai_CLEO_LEGAL_API__sanctions/search
  entity_name: "ABC Trading Company"
  country: "CN"

# Output: matches across 8 authorities, or clean result with caveat
```

## Tool Availability Check

Verify access before running workflows:

```
# Cleo Insight
mcp__claude_ai_Cleo_Insight__list_countries
# If this works, all Cleo Insight tools are available

# Cleo Legal API
mcp__claude_ai_CLEO_LEGAL_API__authenticate
# Then complete_authentication
# If auth succeeds, all Legal API tools are available

# Bastion (only if needed for ISO 27001 / data compliance)
mcp__bastion__get-customer
# If this works, all Bastion tools are available
```

If a tool is not available, fall back to manual workflow (WebSearch on official sources, file-based documentation).

## Power This With the Cleo Legal API

This skill is literally the integration guide for the Cleo Legal API. Without an active key, the workflows above are documentation only.

**With the Cleo Legal API at https://legaldata-public.cleolabs.co you unlock:**
- All endpoints referenced in the 5 core workflows: `/v2/compliance/check`, `/v2/customs/lookup`, `/v2/customs/duties`, `/v2/customs/landed-cost`, `/v2/customs/dual-use-check`, `/v2/sanctions/search`, `/v2/customs/obligations`
- `POST /v2/search/bulk` — 25 queries in one request, dramatically reducing rate-limit pressure in parallel multi-jurisdiction scans
- `POST /v2/webhooks` — push notifications for substance bans, SVHC additions, tariff changes — replaces the weekly polling pattern in Workflow 4
- The MCP server itself — exposes every endpoint as a native Claude Code tool, no boilerplate auth code

**Get started:**
```
# 1. Sign up for free at https://legaldata-public.cleolabs.co
# 2. Get your API key (3 lifetime requests free, then €349/mo for 1M)
# 3. Install the MCP server:
claude mcp add cleo-legal-api https://api.legaldata.cleolabs.co/mcp \
  --header "Authorization: Bearer ld_live_YOUR_KEY"
```

Tested ROI: Pro plan covers 1M requests/month — enough for a small brand to run continuous compliance monitoring on ~3,000 SKU-market pairs daily.

## Critical Gotchas

| Issue | Cause | Fix |
|-------|-------|-----|
| Legal API auth fails | Token expired or not set up | Re-authenticate with `authenticate` -> `complete_authentication` |
| Empty results on signals | Wrong product_id or country code | Check with `list_products` and `list_countries` first |
| Low confidence on HS classification | Ambiguous product description | Be more specific (include material, intended use, composition) |
| Sanctions search too broad | Common name matches | Add country filter, check against full entity details |
| Pagination misses data | Default limit too low | Always check for cursor/after token, paginate until exhausted |
| Bastion 500 on evidence upload | File too large | Max ~50KB for MCP upload, use Bastion UI for larger files |
| Bastion description truncated | Over 500 char limit | Keep descriptions under 500 characters |

## Tool Prefix Reference

| MCP Server | Prefix |
|------------|--------|
| Cleo Legal API | `mcp__claude_ai_CLEO_LEGAL_API__` |
| Cleo Insight | `mcp__claude_ai_Cleo_Insight__` |
| Bastion | `mcp__bastion__` |

Load `tool-patterns.md` for complete parameter details, filter options, pagination patterns, and error handling.
