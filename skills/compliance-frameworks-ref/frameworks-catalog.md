# Frameworks Catalog

## ISO 27001:2022

- **Scope**: ISMS for any organization.
- **Structure**: 93 controls in 4 themes -- Organizational (37), People (8), Physical (14), Technological (34). Clauses 4-10 define ISMS; Annex A is normative.
- **Certification**: Stage 1 (doc review) + Stage 2 (on-site). 3-year cert, annual surveillance.
- **Penalties**: No fines -- loss of cert = lost contracts, procurement disqualification.
- **Pitfalls**: Policies not matching ops; no internal audit; risk register unmaintained; SoA missing exclusion justifications.
- **Timeline**: Startup 3-6mo, mid-size 6-12mo, enterprise 12-18mo.

## SOC 2 Type II

- **Scope**: Service orgs storing/processing customer data. US-origin (AICPA), globally recognized.
- **Structure**: 5 Trust Service Criteria -- Security (CC, required), Availability, Processing Integrity, Confidentiality, Privacy. Security has 9 CC categories (CC1-CC9).
- **Certification**: Type I = point-in-time. Type II = 6-12mo observation. Annual audit by CPA firm.
- **Penalties**: No regulatory fines. Loss of report = lost enterprise deals.
- **Pitfalls**: Too many TSCs initially (start Security only); evidence gaps during observation; confusing SOC 2 with SOC 1.
- **Timeline**: Readiness 2-3mo + observation 6-12mo.

## HIPAA

- **Scope**: PHI in US healthcare. Covered Entities + Business Associates.
- **Structure**: Privacy Rule, Security Rule (42 specs: admin/physical/technical), Breach Notification (60 days; media if >500 affected).
- **Penalties**: 4 tiers by knowledge. Range $137-$68,928/violation. Annual cap $2,067,813 per violation category (2024 adjusted). Criminal: up to $250K + 10 years.
- **Pitfalls**: Missing BAAs; no formal risk analysis; assuming cloud provider covers all; minimum necessary violations.
- **Timeline**: 3-6mo initial. BAA negotiation 2-6 weeks/vendor.

## GDPR

- **Scope**: Personal data of EU/EEA individuals, regardless of processor location. Extraterritorial.
- **Structure**: 6 legal bases. DPO for public bodies/large-scale monitoring. DPIA for high-risk. ROPA required. 72h breach notification.
- **Penalties**: Tier 1: EUR 10M/2%. Tier 2: EUR 20M/4% global turnover (whichever higher). Records: Meta EUR 1.2B (2023).
- **Pitfalls**: Consent overuse vs legitimate interest; no ROPA; outdated transfers post-Schrems II; cookie theater.
- **Timeline**: 3-9mo initial. Ongoing DSAR/DPIA maintenance.

## EU AI Act (Reg 2024/1689)

- **Scope**: AI systems in EU market. Risk-based: Unacceptable (banned), High (conformity+CE), Limited (transparency), Minimal (voluntary).
- **Key dates**: Feb 2025 prohibited practices. Aug 2025 GPAI obligations. Aug 2026 high-risk. Aug 2027 Annex I products.
- **Penalties**: EUR 35M/7% prohibited. EUR 15M/3% high-risk. EUR 7.5M/1.5% misinformation.
- **Pitfalls**: Not classifying risk early; ignoring GPAI downstream obligations; assuming "minimal" without assessment.
- **Timeline**: Classification 1-2mo. High-risk conformity 6-18mo.

## NIS2 (Dir 2022/2555)

- **Scope**: Essential (11 sectors) + Important (7 sectors) in EU. Threshold: >50 employees or >EUR 10M turnover.
- **Structure**: Art.21 (10 minimum measures), incident reporting (24h+72h+1mo), supply chain, management liability.
- **Penalties**: Essential: EUR 10M/2%. Important: EUR 7M/1.4%. Management personal liability.
- **Pitfalls**: Assuming out of scope; ignoring supply chain; no 24h reporting capability.
- **Timeline**: Gap 1-2mo, implementation 3-9mo. Transposition deadlines: Oct 2024 (many states delayed to 2025).

## DORA (Reg 2022/2554)

- **Scope**: EU financial entities + critical ICT providers. Effective Jan 17, 2025.
- **Structure**: 5 pillars -- ICT risk mgmt, incident reporting (4h+24h+1mo), resilience testing (TLPT/3yr), third-party risk (ICT register), info sharing.
- **Penalties**: Member state defined. Critical third-party: 1%/day worldwide turnover. Management liability.
- **Pitfalls**: ICT contract register underestimated; missing incident taxonomy; TLPT scope; subcontracting chains.
- **Timeline**: Gap remediation 6-12mo. Contract renegotiation 3-12mo additional.

## PCI-DSS v4.0.1

- **Scope**: Any entity storing/processing/transmitting cardholder data.
- **Structure**: 12 requirements, ~250 sub-requirements. SAQ (small) vs ROC (Level 1, by QSA). v4.0.1 released June 2024.
- **Key date**: March 31, 2025 -- all future-dated v4.0 requirements mandatory (targeted risk analysis, authenticated scanning, script integrity).
- **Cycle**: Annual assessment. Quarterly ASV scans. Annual pentest.
- **Penalties**: $5K-$100K/month from card brands. Loss of processing privileges.
- **Pitfalls**: Scope creep; storing CVV/full track; SAQ vs ROC eligibility; ignoring P2PE for scope reduction.
- **Timeline**: SAQ 1-3mo. ROC 3-9mo.

## CCPA/CPRA

- **Scope**: California PI. Thresholds: $25M revenue, 100K+ consumers, or 50%+ revenue from data sales/sharing.
- **Structure**: Rights: Know, Delete, Opt-Out, Correct, Limit Sensitive PI. CPPA enforcement. 45-day DSAR window.
- **Penalties**: $2,500/violation, $7,500/intentional. Private action: $100-$750/consumer for breaches. No cure period under CPRA.
- **Pitfalls**: Ignoring GPC signals (legally binding); sale vs sharing distinction; service provider contracts; dark patterns.
- **Timeline**: 2-4mo initial.

## CSRD (Dir 2022/2464)

- **Scope**: EU sustainability reporting. Large companies + listed SMEs.
- **Structure**: Double materiality. 12 ESRS (E5+S4+G1+2 cross-cutting). Limited assurance now, reasonable by 2028.
- **Rollout**: FY2024 >500emp (NFRD). FY2025 large. FY2026 listed SMEs. FY2028 non-EU >EUR 150M EU revenue.
- **Penalties**: Member state defined, expected financial-reporting-level. Director liability in some jurisdictions.
- **Pitfalls**: Scope 3 data collection; treating as comms not audit; missing double materiality; 6-12mo data infrastructure lead time.
- **Timeline**: Materiality 2-4mo. First report 6-12mo.
