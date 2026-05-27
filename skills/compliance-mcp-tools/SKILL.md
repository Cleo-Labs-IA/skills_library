---
name: compliance-mcp-tools
description: Use when calling Bastion or Cleo Insight MCP tools, planning a multi-tool compliance workflow, troubleshooting MCP tool errors, or choosing which tool to use for a compliance task
---

# Compliance MCP Tools

Two MCP servers provide compliance automation. For detailed workflows and parameters, load `tool-patterns.md`.

## Tool Inventory

### Bastion MCP (20 tools)

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

### Cleo Insight MCP (9 tools)

| Category | Tools |
|----------|-------|
| Signals | `search_signals`, `get_signal` |
| Regulations | `list_regulations`, `get_regulation` |
| Company | `get_company_profile` |
| Assets | `list_products`, `list_countries`, `list_authorities` |
| Pipeline | `list_scans` |

## Four Core Workflows

1. **Health check** -- `get-frameworks-stats` -> `get-compliance-failing-summary` -> `list-failing-compliance-tests` (paginate) -> `get-compliance-test-detail` (sample 3-5) -> synthesize.
2. **Fix failing test** -- `get-compliance-test-detail` -> determine action (exclude/evidence/refresh) -> execute -> verify.
3. **Compliance question** -- `get-knowledge-base-status` -> `post-knowledge-base-refresh` (if stale) -> `post-knowledge-base-ask`.
4. **Signal triage** -- `search_signals` (filter) -> `get_signal` -> cross-ref with `list-failing-compliance-tests`.

## Critical Gotchas

- **Evidence description max 500 chars** -- truncated or rejected if longer.
- **Document upload max ~50KB** -- larger files go through Bastion UI.
- **Auto tests need external fix + refresh** -- evidence alone won't pass them.
- **Policy owners can't approve own policies** -- separation of duties.
- **KB refresh takes ~10 min** -- check status before querying.
- **Pagination** -- compare `totalCount` vs returned items, increment `page`.
- **Prefixes** -- Bastion: `mcp__bastion__`. Cleo Insight: `mcp__claude_ai_Cleo_Insight__`.

Load `tool-patterns.md` for parameter details, workflow sequences, and error handling.
