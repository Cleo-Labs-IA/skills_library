# Comply — Compliance Skills Library

The world's most complete compliance skills library for Claude Code. 15 skills covering the full compliance lifecycle — from regulatory discovery to audit readiness.

## Quick Start

These skills auto-trigger when you work on compliance tasks. No manual invocation needed.

## Skill Index

### Tier 1 — Core Process
- `compliance-audit-sprint` — Full framework assessment sprint (ISO 27001, SOC2, HIPAA)
- `compliance-gap-analysis` — Identify, score, and prioritize compliance gaps
- `compliance-remediation` — Fix failing tests: evidence → upload → submit → verify
- `compliance-reporting` — Generate posture reports for stakeholders and auditors

### Tier 2 — Domain Expertise
- `regulatory-intelligence` — Discover regulations, monitor signals, triage by risk
- `policy-management` — Policy lifecycle: draft → review → approve → publish → maintain
- `product-compliance` — Product conformity across jurisdictions and substance limits
- `security-posture` — SAST findings, Dependabot, branch protection, device compliance
- `trust-center` — Public trust center: FAQs, SEO, certifications, publish

### Tier 3 — Multi-Agent Intelligence
- `multi-jurisdiction-scan` — Parallel agents per jurisdiction cluster for global regulatory mapping
- `compliance-pipeline` — 5-step intelligence pipeline: research → search → score → enrich → impact
- `evidence-blitz` — Parallel evidence collection across all failing tests simultaneously

### Tier 4 — Reference & Integration
- `compliance-frameworks-ref` — Quick reference for 10 major frameworks (ISO, SOC2, GDPR, AI Act...)
- `compliance-mcp-tools` — Bastion (20 tools) + Cleo Insight (9 tools) usage patterns
- `customs-and-trade` — HS classification, duties, dual-use, sanctions screening

## MCP Integration

Skills auto-detect available MCP servers:
- **Bastion** — Framework assessment, evidence, policies, trust center, SAST, knowledge base
- **Cleo Insight** — Regulatory signals, regulations, authorities, products, countries
- **Cleo Legal API** — Legal document search, customs, compliance checks, sanctions

Without MCP, skills fall back to manual workflows with web search and file-based evidence.

## Multi-Agent Patterns

Tier 3 skills use `superpowers:dispatching-parallel-agents` for parallel execution. Each dispatches specialized sub-agents that work independently and report back to a consolidation step.
