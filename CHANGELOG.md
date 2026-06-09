# Changelog

All notable changes to this project will be documented here. Format based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [3.2.0] - 2026-06-09

### Added
- 6 cross-cutting skills sourced from the LVMH, Chanel, and Schneider Electric demo briefs/calls: `cybersecurity-compliance` (CRA/RED/NIS2/PSTI), `digital-product-passport` (ESPR/Battery/textile DPP), `battery-compliance` (EU Battery Reg 2023/1542), `dangerous-goods-transport` (IATA/IMDG/ADR/lithium), `responsible-sourcing` (3TG/EUDR/forced labour), `packaging-traceability` (resolve product ref/batch/formula code -> full packaging bill-of-materials for EPR/DPP/claims).

### Fixed
- `packaging-compliance`: corrected the PPWR reference (2024/3254 -> Regulation (EU) 2025/40) and entry-into-force dates (11 Feb 2025; applies from 12 Aug 2026).

### Changed
- `packaging-compliance` deepened: ISPM 15 wood packaging, industrial vs household EPR streams, India Plastic Waste Management Rules 2022, Minnesota/Washington state EPR, South Korea over-packaging (space ratio + layers), Australia/NZ APCO.
- `sustainability-compliance` deepened: ecodesign + Energy Labelling (EU) 2017/1369 + EPREL, EUDR leather/cattle angle, cross-references to the new dedicated skills.

## [3.1.0] - 2026-05-28

### Added
- 12 new vertical skills: alcohol & spirits, supplements, jewelry, medical devices, pet products, automotive aftermarket, agricultural, tobacco & vape, sporting goods, baby & children's products, household chemicals, candles & fragrance
- Full SEO infrastructure: schema.org markup, sitemap.xml, robots.txt, Open Graph + Twitter Cards
- 30 YouTube video scripts ("Compliance in 30 Seconds")
- 5 long-form SEO blog posts
- Compliance Academy first lesson
- Notion / Airtable / Google Sheets templates
- Launch newsletter
- All 11 submission packages (Anthropic PR, awesome lists, Product Hunt, HN, Reddit, MCP marketplaces, Twitter, LinkedIn, Discord, cold outreach)
- LICENSE, CONTRIBUTING, CODE_OF_CONDUCT, SECURITY, CHANGELOG, issue templates, PR template
- Distribution strategy HTML page

### Changed
- Product renamed: "Comply" → "Compliance Product Guidance"
- All skills now include "Power This With the Cleo Legal API" section pointing to https://legaldata-public.cleolabs.co/

## [3.0.0] - 2026-05-28

### Added
- 16 new skills, bringing total to 28
- New: substance-screening, recall-response, packaging-compliance, testing-certification, responsible-person, claims-substantiation, import-export-docs, marketplace-compliance, cosmetics-compliance, food-compliance, electronics-compliance, textile-compliance, toy-compliance, sustainability-compliance, product-safety-incident, regulatory-calendar

### Changed
- All 28 skills hardened: 184 concrete MCP tool references, zero vague language

## [2.0.0] - 2026-05-27

### Changed
- Complete rewrite for physical product SMBs
- Removed corporate-IT skills (gap-analysis, policy-management, security-posture, trust-center, compliance-pipeline)
- Added labeling-compliance and market-entry-checklist

## [1.1.0] - 2026-05-27

### Changed
- Hardening pass: exact MCP tool signatures, concrete regulation references, real costs and timelines, copy-paste-ready agent prompts

## [1.0.0] - 2026-05-27

### Added
- Initial release with 15 skills in 4 tiers
- Cleo Design System V4 landing page
- Launch posts (Twitter, LinkedIn, Reddit, Hacker News, Product Hunt)
