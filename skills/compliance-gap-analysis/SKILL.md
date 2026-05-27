---
name: compliance-gap-analysis
description: Use when asked to identify compliance gaps, prioritize remediation work, build a compliance roadmap, or understand what's blocking certification readiness
---

# Compliance Gap Analysis

Identify, categorize, score, and prioritize compliance gaps into an actionable roadmap.

## Step 1: Pull Current State

```
mcp__bastion__get-frameworks-stats
mcp__bastion__get-compliance-failing-summary  framework=<id>
mcp__bastion__list-failing-compliance-tests   framework=<id>  # all pages
```

**No MCP?** Request dashboard export. Need: test name, status, category, integration source.

## Step 2: Categorize Gaps

| Gap Type | Signal | Examples |
|----------|--------|----------|
| **Policy** | Missing/unapproved policy | InfoSec, acceptable use, incident response |
| **Technical** | Misconfigured or absent control | FileVault OFF, MFA not enforced |
| **Process** | No documented procedure | No access reviews, no change mgmt |
| **Evidence** | Control exists, proof not uploaded | Training records, pentest report |

## Step 3: Score and Prioritize

Three dimensions, each 1-3:

| Dimension | 1 (Low) | 2 (Medium) | 3 (High) |
|-----------|---------|------------|----------|
| **Impact** | Nice-to-have | Auditor flags | Certification blocker |
| **Effort** | < 1 hour | Half-day, vendor | Multi-day, external |
| **Dependency** | Standalone | Enables 2-3 tests | Blocks entire category |

**Priority** = Impact + Dependency - Effort (higher = do first)

## Step 4: Generate Roadmap

**Phase 1 — Blockers** (this session): High-dependency + certification blockers
**Phase 2 — Quick Wins** (next session): Low effort, medium-high impact
**Phase 3 — Planned** (scheduled): Policies, vendor work, process creation

## Solo Founder Bottlenecks

| Bottleneck | Mitigation |
|------------|------------|
| **Single approver** (32 policies, one signer) | Batch approval session |
| **No MDM admin** (user not associated) | UI-only fix, cannot automate |
| **Manual-only tests** | Batch evidence upload sprint |
| **Vendor dependency** (pentest, SOC report) | Start request early |

## Example

```
Current: 14/75 passing (ISO 27001)
  Policy gaps: 32 (need UI approval — solo founder bottleneck)
  Technical: 8 | Process: 9 | Evidence: 12

Roadmap:
  Phase 1: 8 technical + 12 evidence → ~34/75
  Phase 2: 9 process docs → ~43/75
  Phase 3: 32 policies (batch approval) → ~75/75
```

## Red Flags

- **Scoring without data**: Check dependency chains first. One low-impact test might block ten others.
- **Ignoring UI-only actions**: MDM association, policy approval cannot be done via MCP. Flag as manual.
- **Flat priority lists**: 60 items in one list is useless. Phase into 3 groups max.
- **Optimistic effort**: Policy writing is fast; approval in a solo-founder org is the bottleneck.
