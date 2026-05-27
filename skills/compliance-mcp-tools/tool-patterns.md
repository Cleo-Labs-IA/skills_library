# MCP Tool Patterns & Reference

## Workflow 1: Compliance Health Check

Full assessment of current compliance posture.

```
# Step 1: Get overall framework scores
mcp__bastion__get-frameworks-stats
# Returns: list of frameworks with passing/failing/total counts

# Step 2: Drill into failing areas for target framework
mcp__bastion__get-compliance-failing-summary
  framework: "<framework-id>"
# Returns: failing counts grouped by category/theme

# Step 3: Get all failing tests (paginate!)
mcp__bastion__list-failing-compliance-tests
  framework: "<framework-id>"
  page: 1
  per_page: 50
# REPEAT: increment page until all fetched (check totalCount)

# Step 4: Sample detailed tests (3-5 representative failures)
mcp__bastion__get-compliance-test-detail
  compliance_test_id: "<test-id>"
# Returns: description, status, integration, affected assets, evidence

# Step 5: Synthesize
# - Group failures by type (policy/technical/process/evidence)
# - Identify blockers and quick wins
# - Calculate score delta for each remediation phase
```

**Output template:**
```
Framework: [name] — Score: [passing]/[total]
Failing by category:
  [category]: [count] ([list critical ones])
Top blockers: [items blocking other tests]
Quick wins: [items fixable in < 1 hour]
Recommended next action: [specific step]
```

## Workflow 2: Fix a Failing Test

```
# Step 1: Understand the failure
mcp__bastion__get-compliance-test-detail
  compliance_test_id: "<test-id>"
# Read: test type (auto/manual), integration, failing assets, existing evidence

# Step 2: Choose action path
# - Test not applicable → exclude-compliance-test
# - Specific asset out of scope → put-compliance-test-exclude-asset
# - Manual test, evidence ready → add-compliance-test-evidence + mark-ready-for-review
# - Auto test, fix applied externally → refresh-compliance-test
# - Auto test, not yet fixed → tell user what to fix, then refresh later

# Step 3a: Exclude (if N/A)
mcp__bastion__exclude-compliance-test
  compliance_test_id: "<test-id>"
  comment: "Not applicable: [auditor-defensible justification, max 500 chars]"

# Step 3b: Evidence (if manual test)
mcp__bastion__add-compliance-test-evidence
  compliance_test_id: "<test-id>"
  description: "[what this proves, max 500 chars]"
  url: "https://..."
# THEN always:
mcp__bastion__mark-compliance-test-ready-for-review
  compliance_test_id: "<test-id>"

# Step 3c: Refresh (if auto test, fix done)
mcp__bastion__refresh-compliance-test
  compliance_test_id: "<test-id>"
# Wait ~30s, then re-check with get-compliance-test-detail

# Step 4: Verify
mcp__bastion__get-compliance-test-detail
  compliance_test_id: "<test-id>"
# Confirm status changed
```

## Workflow 3: Answer a Compliance Question

```
# Step 1: Check knowledge base freshness
mcp__bastion__get-knowledge-base-status
# Returns: last_refresh timestamp, status

# Step 2: Refresh if stale (>24h or never refreshed)
mcp__bastion__post-knowledge-base-refresh
# Takes ~10 minutes. Do NOT query until status = "ready"

# Step 3: Poll until ready (if just refreshed)
mcp__bastion__get-knowledge-base-status
# Repeat until status = "ready" (check every 60s, max 15 min)

# Step 4: Ask the question
mcp__bastion__post-knowledge-base-ask
  question: "[specific compliance question]"
# Returns: answer with source references

# Tips:
# - Ask specific questions, not broad ones ("What controls address endpoint encryption?" not "Tell me about security")
# - The KB answers based on YOUR policies and evidence, not general knowledge
# - If answer is insufficient, rephrase or break into sub-questions
```

## Workflow 4: Regulatory Signal Triage

```
# Step 1: Search for relevant signals
mcp__claude_ai_Cleo_Insight__search_signals
  risk_level: "critical"       # or "high", "medium", "low"
  country: "FR"                # optional: ISO country code
  product_id: "<product-id>"   # optional: from list_products
  q: "AI regulation"           # optional: free-text search

# Step 2: Read signal details
mcp__claude_ai_Cleo_Insight__get_signal
  signal_id: "<signal-id>"
# Focus on: executive summary, obligations, enforcement date, impact rationale

# Step 3: Check if signal maps to existing framework tests
mcp__bastion__list-failing-compliance-tests
  framework: "<relevant-framework-id>"
# Cross-reference signal obligations with failing tests

# Step 4: Generate action items
# For each obligation in the signal:
#   - Map to compliance test if applicable
#   - Set deadline based on enforcement date
#   - Assign owner
#   - Flag if current test is already failing (double priority)
```

## Bastion Parameter Reference

### Pagination Pattern

```
page: 1          # starts at 1
per_page: 50     # max varies by endpoint, 50 is safe default
```

Always check response for `totalCount` or equivalent. Calculate: `totalPages = ceil(totalCount / per_page)`. Fetch all pages before analyzing.

### Evidence Attachment

Two methods:
- **URL**: `url: "https://..."` -- link to external evidence (Google Doc, Confluence, S3, etc.)
- **File**: `file_path: "/absolute/path"` -- direct upload, max ~50KB

For files >50KB, instruct the user to upload via Bastion UI, then reference the uploaded document URL.

### Exclusion Comments

Max 500 characters. Must be auditor-defensible. Pattern:
```
"Not applicable: [entity type] does not [activity the control addresses].
Justification: [specific reason]. Evidence: [supporting fact]."
```

Bad: "N/A", "Not relevant", "We don't do this"
Good: "Not applicable: fully remote company with no physical office. No on-premise servers, visitor areas, or physical access points to secure."

## Cleo Insight Parameter Reference

### Signal Search Filters

| Filter | Type | Notes |
|--------|------|-------|
| `risk_level` | enum | `critical`, `high`, `medium`, `low` |
| `q` | string | Free-text search across titles and summaries |
| `country` | string | ISO code or country name (49 tracked) |
| `product_id` | string | From `list_products` response |
| `hs_code` | string | Harmonized System code |

Filters combine with AND logic. Start broad, narrow incrementally.

### Regulation Statuses

| Status | Action |
|--------|--------|
| `in_force` | Active compliance required |
| `adopted_not_yet_in_force` | Prepare -- set calendar for effective date |
| `proposed` | Monitor -- no compliance action yet |
| `under_review` | Monitor -- check for changes to existing compliance |

## Error Handling

| Error | Cause | Fix |
|-------|-------|-----|
| 500 on evidence upload | File too large or malformed | Check size < 50KB, verify file exists |
| Empty results on list-failing | Wrong framework ID | Re-check with get-frameworks-stats |
| KB ask returns generic answer | KB not refreshed or question too broad | Refresh KB, wait, ask specific question |
| Refresh doesn't change status | External fix not complete | Verify the fix in the source system |
| Pagination returns same page | API caching | Wait 30s, retry with explicit page param |
| Description truncated | Over 500 char limit | Shorten description, move details to linked doc |

## Tool Availability Check

Verify access with lightweight calls before workflows:
- Bastion: `mcp__bastion__get-customer`
- Cleo Insight: `mcp__claude_ai_Cleo_Insight__list_countries`

If either fails, fall back to manual workflows.
