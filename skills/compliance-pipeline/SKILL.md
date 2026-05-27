---
name: compliance-pipeline
description: Use when running a full regulatory intelligence pipeline from company profiling through impact assessment, or processing multiple regulations with search-score-enrich steps
---

# Compliance Pipeline

Sequential 3-step pipeline with parallelism within each step. **Dependency**: `superpowers:dispatching-parallel-agents`.

## Flow

```dot
digraph {
  rankdir=LR; node [shape=box style=rounded fontsize=10];
  subgraph cluster_s1 {
    label="Step 1: Research (3 parallel)"; style=dashed;
    p1 [label="Products"]; p2 [label="Countries"]; p3 [label="Corporate"];
  }
  merge [label="Merge profile" shape=hexagon];
  subgraph cluster_s2 {
    label="Step 2: Search+Score+Enrich"; style=dashed;
    s [label="Search\n5-8 regs/agent"]; sc [label="Score\n7x5=35"]; en [label="Enrich"];
  }
  subgraph cluster_s3 {
    label="Step 3: Impact (per product)"; style=dashed;
    i1 [label="Product A"]; i2 [label="Product B"]; i3 [label="Product N"];
  }
  out [label="Signal Feed" shape=hexagon];
  p1 -> merge; p2 -> merge; p3 -> merge;
  merge -> s -> sc -> en; en -> i1; en -> i2; en -> i3;
  i1 -> out; i2 -> out; i3 -> out;
}
```

## Step 1: Research (3 parallel agents)

- **Products**: catalog with regulatory surface tags (data types, physical/digital, regulated substances)
- **Countries**: per-country regulatory profile (authorities, frameworks, enforcement posture)
- **Corporate**: governance, financial reporting, ESG, employment, AML

Merge into unified profile + candidate regulation list.

## Step 2: Search + Score + Enrich

**Batch sizing**: **5-8 regulations per search agent**. Fewer wastes slots; more causes context overflow.

**2A Search**: enforcement actions, guidance, amendments. Use Cleo Insight MCP or WebSearch.

**2B Score** on 7 dimensions (1-5 each, max 35):

| Dimension | 1 | 5 |
|-----------|---|---|
| Source authority | Blog | Official gazette |
| Content depth | Headline | Full analysis |
| Timeliness | >2yr | <3mo |
| Actionability | Informational | Specific obligations+dates |
| Legal rigor | Lay summary | Cites articles |
| Neutrality | Vendor marketing | Independent/official |
| Traceability | No sources | Primary sources linked |

**Thresholds**: <20 = DROP. 20-27 = YELLOW (monitor). 28+ = GREEN (promote to enrich).

**2C Enrich** promoted findings: 3-sentence summary, extracted obligations, affected products.

## Step 3: Impact (parallel per product)

**Risk level** = severity(1-5) x likelihood(1-5):

| Score | Level | Action |
|-------|-------|--------|
| 1-5 | GREEN | Monitor |
| 6-12 | YELLOW | Plan mitigation this quarter |
| 13-19 | ORANGE | Prioritize, assign owner |
| 20-25 | RED | Immediate action |

One agent per product:

```markdown
Assess impact on {{PRODUCT}} from: {{FINDINGS_LIST}}.
Per finding: regulation+article, obligation (1 sentence), severity(1-5), likelihood(1-5),
risk_level=severity*likelihood -> GREEN/YELLOW/ORANGE/RED, deadline, action+effort(days), owner role.
Sort: risk_level desc, deadline asc.
```

## Output

1. **Signal feed** -- all action cards, risk-colored
2. **Per-product view** -- grouped by product
3. **Timeline view** -- by deadline
4. **Dropped signals** -- below-threshold (reviewable)

## Red Flags

- **Skipping Step 1**: Searches miss sector-specific regulations without profiling.
- **No threshold**: Feed drowns in noise without 20/35 cutoff.
- **Batches >8**: Context overflow, missed findings.
- **Sequential Step 2**: Dispatch batches in parallel.
- **Missing cross-product**: Give each Step 3 agent the full enriched set.
