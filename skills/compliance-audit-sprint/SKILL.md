---
name: compliance-audit-sprint
description: Use when running a full compliance framework assessment, starting a new framework audit, or asked to check overall compliance posture across all tests
---

# Compliance Audit Sprint

Run a complete assess-triage-remediate-verify cycle for any compliance framework.

## Flow

```dot
digraph {
  rankdir=LR
  Assess -> Triage -> Parallelize -> Remediate -> Verify -> Report
  Triage -> Assess [label="new framework" style=dashed]
  Verify -> Remediate [label="still failing" style=dashed]
}
```

## Phase 1: Assess

```
# 1. Framework posture snapshot
mcp__bastion__get-frameworks-stats

# 2. Failure distribution (by integration + type)
mcp__bastion__get-compliance-failing-summary  framework=<id>

# 3. All failing tests (paginate until exhausted)
mcp__bastion__list-failing-compliance-tests  framework=<id>  page=1
# Continue incrementing page until empty results
```

**No MCP?** Ask the user for a CSV/spreadsheet export from their compliance platform. Parse and proceed with the same triage logic.

## Phase 2: Triage

Classify every failing test into exactly one bucket:

| Bucket | Criteria | Action |
|--------|----------|--------|
| **Exclude** | Not applicable to org (e.g., no physical office, no sub-processors) | `exclude-compliance-test` with justification |
| **Refresh** | Already fixed externally (MDM enrolled, firewall ON) | `refresh-compliance-test` then verify |
| **Evidence** | Manual test, proof exists but not uploaded | `add-compliance-test-evidence` + `mark-ready-for-review` |
| **Fix** | Actual gap requiring work (policy, config, process) | Route to `compliance-remediation` skill |
| **Blocked** | Depends on external party or UI-only action | Log blocker, skip for now |

## Phase 3: Parallelize

Use `dispatching-parallel-agents` skill. Three independent workstreams:

- **Agent A**: Exclude all N/A tests (batch, fastest wins)
- **Agent B**: Refresh all externally-fixed tests
- **Agent C**: Upload evidence for manual tests

Fix and Blocked items stay sequential (they need human decisions).

## Phase 4: Verify + Report

After remediation round:
1. Re-run `get-frameworks-stats` to get updated score
2. Compare before/after
3. List remaining failures
4. Generate report via `compliance-reporting` skill

## Example

```
User: "Run an ISO 27001 audit sprint"

1. get-frameworks-stats → ISO27001: 14/75 passing
2. get-compliance-failing-summary → 61 failing (23 manual, 31 auto, 7 excluded-candidates)
3. list-failing-compliance-tests pages 1-4 → full list
4. Triage: 7 exclude, 12 refresh, 18 evidence, 24 fix
5. Parallel agents: A excludes 7, B refreshes 12, C uploads 18 evidences
6. Re-check: 14 → 51 passing in one session
7. Remaining 24 → prioritized roadmap
```

## Red Flags

- **Pagination skipped**: `list-failing-compliance-tests` returns max ~20/page. Always paginate until empty.
- **Refreshing before fix**: Don't refresh unfixed tests. It just re-confirms failure.
- **Bulk excluding real gaps**: Excludes are auditor-visible. Only exclude genuinely N/A tests.
- **Ignoring blocked bucket**: Track blockers explicitly or they silently stall the sprint.
