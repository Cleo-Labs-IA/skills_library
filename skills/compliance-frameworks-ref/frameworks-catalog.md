# Frameworks Catalog

## ISO 27001:2022

- **Scope**: ISMS for any organization.
- **Structure**: 93 controls in 4 themes -- Organizational (37), People (8), Physical (14), Technological (34).
- **Certification**: Stage 1 (doc review) + Stage 2 (on-site audit). 3-year certificate, annual surveillance.
- **Penalties**: No fines -- loss of cert means lost contracts.
- **Pitfalls**: Policies that don't match operations; neglecting internal audit; risk register not maintained.
- **Timeline**: Startup 3-6mo, mid-size 6-12mo, enterprise 12-18mo.

## SOC 2 Type II

- **Scope**: Service orgs storing/processing customer data. US-origin, globally recognized.
- **Structure**: 5 TSCs -- Security (required), Availability, Processing Integrity, Confidentiality, Privacy.
- **Certification**: Type I = point-in-time. Type II = 6-12mo observation period. Annual audit.
- **Penalties**: No regulatory fines. Loss of report = lost enterprise deals.
- **Pitfalls**: Too many TSCs initially; evidence gaps during observation; confusing SOC 2 with SOC 1.
- **Timeline**: Readiness 2-3mo + observation 6-12mo.

## HIPAA

- **Scope**: PHI in US healthcare. Covered Entities + Business Associates.
- **Structure**: Privacy Rule, Security Rule (admin/physical/technical safeguards), Breach Notification (60-day to individuals, HHS, media if >500).
- **Certification**: None formal. Compliance via risk analysis, policies, BAAs.
- **Penalties**: $100-$50K per violation, max $1.5M/category/year. Criminal up to $250K + 10 years.
- **Pitfalls**: Missing BAAs; no formal risk analysis; assuming cloud provider handles everything.
- **Timeline**: 3-6mo initial. BAA negotiation adds weeks.

## GDPR

- **Scope**: Personal data of EU/EEA individuals, regardless of processor location.
- **Structure**: 6 legal bases. DPO for public bodies/large-scale monitoring. DPIA for high-risk. ROPA. 72h breach notification.
- **Penalties**: Up to 20M EUR or 4% global turnover. Tiered: 10M/2% and 20M/4%.
- **Pitfalls**: Consent overuse vs legitimate interest; no processing inventory; outdated transfer mechanisms post-Schrems II.
- **Timeline**: 3-9mo initial. Ongoing maintenance substantial.

## EU AI Act

- **Scope**: AI systems in EU market. Risk-based.
- **Structure**: Unacceptable (banned), High (conformity assessment), Limited (transparency), Minimal (voluntary).
- **Key dates**: Aug 2025 prohibited practices. Aug 2026 high-risk obligations. Foundation models 2025-2027.
- **Penalties**: 35M/7% for prohibited; 15M/3% high-risk; 7.5M/1.5% misinformation.
- **Pitfalls**: Not classifying risk level early; ignoring foundation model downstream obligations.
- **Timeline**: Classification 1-2mo. High-risk conformity 6-18mo.

## NIS2

- **Scope**: Essential (energy, transport, health, digital infra) + Important entities (18 sectors) in EU.
- **Structure**: Risk-management (Art.21), incident reporting (24h early warning + 72h notification + 1-month report), supply chain security.
- **Penalties**: Essential: 10M/2%. Important: 7M/1.4%.
- **Pitfalls**: Assuming out of scope; ignoring supply chain obligations; no 24h reporting capability.
- **Timeline**: Gap analysis 1-2mo, implementation 3-9mo.

## DORA

- **Scope**: EU financial entities + critical ICT third-party providers.
- **Structure**: 5 pillars -- ICT risk mgmt, incident reporting (24h), resilience testing (TLPT every 3yr), third-party risk, info sharing.
- **Penalties**: Member state defined. Critical third-party: up to 1% daily worldwide turnover.
- **Pitfalls**: Underestimating third-party documentation; missing incident classification taxonomy.
- **Timeline**: 6-12mo gap remediation. Third-party contracts take longer.

## PCI-DSS v4.0

- **Scope**: Any entity storing/processing/transmitting cardholder data.
- **Structure**: 12 requirements, ~250 sub-requirements. SAQ (small merchants) vs ROC (Level 1). QSA performs ROC.
- **Key date**: March 2025 -- all v4.0 requirements mandatory.
- **Cycle**: Annual assessment. Quarterly ASV scans. Annual pentest.
- **Penalties**: $5K-$100K/month from card brands. Loss of processing privileges.
- **Pitfalls**: Scope creep; storing prohibited data (CVV); assuming SAQ when ROC required.
- **Timeline**: SAQ 1-3mo. ROC 3-9mo.

## CCPA/CPRA

- **Scope**: California consumers' PI. Thresholds: $25M revenue, 100K consumers, or 50%+ revenue from data sales.
- **Structure**: Rights: Know, Delete, Opt-Out, Correct, Limit Sensitive PI. CPPA enforcement. 45-day response window.
- **Penalties**: $2,500/violation, $7,500/intentional. Private action for breaches: $100-$750/consumer.
- **Pitfalls**: Ignoring Global Privacy Control; not distinguishing "sale" from "sharing" under CPRA.
- **Timeline**: 2-4mo initial. Ongoing request handling costs.

## CSRD

- **Scope**: EU sustainability reporting. Large companies + listed SMEs. Replaces NFRD.
- **Structure**: Double materiality. 12 ESRS standards (E/S/G). Limited assurance (reasonable by 2028).
- **Rollout**: 2024 >500 employees. 2025 large companies. 2026 listed SMEs. 2028 non-EU >150M EU revenue.
- **Penalties**: Member state defined. Expected to align with financial reporting penalties.
- **Pitfalls**: Underestimating Scope 3 data collection; treating as comms exercise; missing double materiality.
- **Timeline**: Materiality assessment 2-4mo. First report 6-12mo.
