---
name: compliance-frameworks-ref
description: Use when comparing compliance frameworks, checking framework-specific requirements, identifying control overlaps, scoping a new certification, or answering questions about specific framework rules
---

# Compliance Frameworks Reference

Quick lookup for 10 major compliance frameworks. For detailed per-framework data, load `frameworks-catalog.md`.

## Framework Selector

| Need | Start with | Why first |
|------|-----------|-----------|
| SaaS selling to enterprise | SOC 2 Type II | Unlocks enterprise deals; 70%+ of procurement requires it |
| EU personal data | GDPR | Legal obligation, not optional; highest penalty ceiling |
| Broad security certification | ISO 27001 | Maps to most other frameworks; internationally recognized |
| Healthcare / PHI | HIPAA | No market access without BAAs and safeguards |
| Credit card processing | PCI-DSS v4.0.1 | Mandatory for any cardholder data; card brands enforce |
| AI product in EU | AI Act | Classification determines entire compliance path |
| Critical infrastructure EU | NIS2 | Member-state transposition deadlines are NOW |
| Financial services EU | DORA | Effective Jan 2025; regulator expectations immediate |
| California consumer data | CCPA/CPRA | Largest US state privacy law; CPPA actively enforcing |
| EU sustainability reporting | CSRD | Phased rollout underway; double materiality required |

**Start-here by company type**:
- **SaaS startup**: SOC 2 first, then ISO 27001 (controls overlap ~60%)
- **EU data processor**: GDPR first, then ISO 27001 for operational backbone
- **Healthcare SaaS**: HIPAA + SOC 2 together (SOC 2 + HIPAA criteria)
- **Fintech in EU**: DORA + PCI-DSS (payments) + GDPR (data)
- **AI company in EU**: AI Act classification first, then GDPR for training data

## Cross-Framework Control Mapping

| Control Domain | ISO 27001 | SOC 2 | HIPAA | GDPR | NIS2 | DORA |
|---------------|-----------|-------|-------|------|------|------|
| Access control | A.5.15-18 | CC6.1-3 | 164.312(d) | Art.32 | Art.21(2)(d) | Art.9 |
| Encryption | A.8.24 | CC6.1 | 164.312(a)(2)(iv) | Art.32(1)(a) | Art.21(2)(d) | Art.9 |
| Incident response | A.5.24-28 | CC7.3-5 | 164.308(a)(6) | Art.33-34 | Art.23 | Art.17-19 |
| Risk assessment | A.5.7 | CC3.1-4 | 164.308(a)(1)(ii)(A) | Art.35 | Art.21(1) | Art.6 |
| Vendor mgmt | A.5.19-22 | CC9.2 | 164.308(b)(1) | Art.28 | Art.21(2)(e) | Art.28-30 |
| Training | A.6.3 | CC1.4 | 164.308(a)(5) | Art.39(1)(b) | Art.21(2)(g) | Art.13 |

## How to Use

1. **Single framework** -- load `frameworks-catalog.md`, find the section.
2. **Control mapping** -- use the table above for overlaps, then check catalog details.
3. **Scoping** -- framework selector + company type -> catalog timeline and pitfalls.
4. **Audit prep** -- catalog certification cycle, penalties, and common mistakes.
5. **Multi-framework** -- start with the "Start-here by company type" guidance, implement shared controls once.
