---
name: compliance-reporting
description: Use when generating compliance status reports, preparing board/investor summaries, creating audit-ready documentation, or asked for compliance posture overview
---

# Compliance Reporting

Generate structured compliance reports at framework, integration, or executive level.

## Data Collection

```
# Run in parallel
mcp__bastion__get-frameworks-stats
mcp__bastion__get-compliance-failing-summary  framework=<id>
mcp__bastion__list-failing-compliance-tests   framework=<id>  # all pages
```

**No MCP?** Request dashboard export. Need: test name, status, category, integration.

## Report Types

### 1. Framework Scorecard

| Metric | Formula |
|--------|---------|
| Compliance rate | passing / (total - excluded) |
| Never count excluded in denominator | |

### 2. Integration Health

Flag any integration where >50% tests fail (systemic misconfiguration).

### 3. Category Breakdown

Group by domain (ISO Annex A, SOC2 TSC). Lowest-% category = highest remediation priority.

### 4. Executive Summary

```
COMPLIANCE STATUS — [Framework] — [Date]
Score: [X]/[Y] ([Z]%)  Delta: +[N] since last report
Achievements: [top 3]
Blockers: [top 3 with owner + ETA]
Readiness: [Ready / On track Q[N] / Blocked by X]
```

### 5. Evidence Inventory (audit-ready)

Map every passing manual test to its evidence reference + submission date.

## Audience Selection

| Audience | Include |
|----------|---------|
| Technical team | All 5 report types |
| Board/investors | Scorecard + executive + trend |
| Auditor | Evidence inventory + scorecard + categories |
| Internal | Delta only (what changed this session) |

## Trend Tracking

```
Session 1: 14/75 (19%)
Session 2: 34/75 (50%) — +20
Session 3: 51/75 (75%) — +17
Target:    68/75 (100% applicable)
```

## Example

```
User: "ISO 27001 status for the board"

COMPLIANCE STATUS — ISO 27001 — 2026-05-27
Score: 51/75 (75% of applicable)
Delta: +37 from baseline over 3 sessions
Achievements: 7 N/A excluded, 18 evidence submitted, 12 auto-refreshed
Blockers: 32 policies pending (single-approver, ETA Q3)
Readiness: On track Q3 2026
```

## Red Flags

- **Counting excludes as passing**: Excluded = out of scope, not passed.
- **Stale data**: Always pull fresh stats before reporting.
- **No delta**: Snapshot without trend is half the story.
- **Jargon for board**: They need score, trend, blockers, timeline. No test IDs.
- **Missing evidence inventory**: Auditors will ask "show proof for test X."
