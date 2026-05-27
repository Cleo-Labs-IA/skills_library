# Comply

The world's most complete compliance skills library for AI coding agents.

## What is Comply?

Comply is a plugin of 15 production-grade skills that teach AI agents how to manage regulatory compliance end-to-end. Built from real-world compliance operations across ISO 27001, SOC 2, GDPR, AI Act, and 10+ other frameworks.

## Installation

### Claude Code
```bash
# Copy to your skills directory
cp -r comply/skills/* ~/.claude/skills/
```

### As a Plugin
Place the `comply/` directory in your Claude Code plugins path.

## Skills Overview

| Tier | Skills | Purpose |
|------|--------|---------|
| **Core Process** | audit-sprint, gap-analysis, remediation, reporting | Run audits, find gaps, fix them, report |
| **Domain** | regulatory-intelligence, policy-management, product-compliance, security-posture, trust-center | Deep expertise per compliance domain |
| **Multi-Agent** | multi-jurisdiction-scan, compliance-pipeline, evidence-blitz | Parallel processing for speed |
| **Reference** | frameworks-ref, mcp-tools, customs-and-trade | Quick lookup and integration guides |

## MCP Integration

Comply works standalone but supercharges with MCP servers:

- **Bastion** — Automated compliance framework management
- **Cleo Insight** — Regulatory intelligence and signal monitoring
- **Cleo Legal API** — Legal document search and customs compliance

## Built From

Extracted from production compliance operations at [Cleo Labs](https://cleolabs.co):
- 78 regulations monitored across 49 countries
- 1,479 legal sources across 131 countries
- 1.68M legal documents with pgvector embeddings
- 62 catalogued regulations with 500K+ substance records
- ISO 27001 certification journey (77 tests, 20+ integrations)
- Multi-agent pipelines processing 2,500+ articles per scan

## License

MIT
