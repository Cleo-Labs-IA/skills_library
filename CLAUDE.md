# Comply -- All-in-one compliance toolkit for physical product companies.

Help small businesses (1-10 people) sell physical products in multiple markets. Cosmetics, food, supplements, electronics, toys, textiles, cleaning products -- whatever you make, Comply tells you what you need to do to sell it legally.

## Quick Start

These skills auto-trigger when you work on product compliance tasks. No manual invocation needed.

## Skill Index

### Tier 1 -- Product Compliance Core
- `product-compliance` -- **THE HERO SKILL**. Full substance check: ingredients -> CAS numbers -> 13 databases -> verdict per substance per market. Revenue-at-Risk calculation.
- `labeling-compliance` -- Country-specific labeling: INCI, allergens, warnings, responsible person, CE/UKCA marks, multi-language rules.
- `market-entry-checklist` -- Step-by-step checklist to enter a new market: classify -> regulations -> substances -> labels -> certs -> customs -> notification.

### Tier 2 -- Market Intelligence
- `regulatory-intelligence` -- Monitor signals that could block your product from sale: substance bans, labeling changes, recalls, deadlines.
- `multi-jurisdiction-scan` -- Parallel scan across all target markets. RED/ORANGE/YELLOW/GREEN per market. One agent per jurisdiction.
- `customs-and-trade` -- HS code classification, duty calculation, landed cost, dual-use screening, sanctions check.

### Tier 3 -- Action & Remediation
- `compliance-audit-sprint` -- Pre-launch compliance sprint: identify category -> map regulations -> check substances -> verify labels -> check certs -> estimate cost.
- `compliance-remediation` -- Fix compliance issues to unblock market entry: reformulate, relabel, test, certify.
- `evidence-blitz` -- Gather all compliance evidence for certification or audit: safety docs, labeling proof, substance docs, market certs.

### Tier 4 -- Reference & Integration
- `compliance-frameworks-ref` -- Product regulation reference: EU Cosmetics 1223/2009, REACH, FDA MoCRA, Prop 65, CE/UKCA, GPSR, EN 71, RoHS, WEEE, EPR.
- `compliance-mcp-tools` -- Cleo Legal API (customs, substances, sanctions) + Cleo Insight (signals, regulations) + Bastion (ISO 27001 if you handle data).
- `compliance-reporting` -- Per-product, per-market compliance matrix. Exportable for buyers, distributors, marketplace listings.

## MCP Integration

Skills auto-detect available MCP servers:
- **Cleo Legal API** -- Customs classification, substance checks, duty calculation, landed cost, sanctions screening. Core for product compliance.
- **Cleo Insight** -- Regulatory signals, regulation tracking, authorities, products, countries. Core for monitoring.
- **Bastion** -- ISO 27001/SOC2 framework management. Only relevant if you also handle customer data (e-commerce, SaaS component).

Without MCP, skills fall back to manual workflows with web search and file-based evidence.

## Multi-Agent Patterns

Tier 3 skills use `superpowers:dispatching-parallel-agents` for parallel execution:
- `compliance-audit-sprint` dispatches one agent per target market
- `multi-jurisdiction-scan` dispatches one agent per jurisdiction cluster
- `evidence-blitz` dispatches parallel agents per document category
