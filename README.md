# Comply

All-in-one compliance toolkit for physical product companies.

## What is Comply?

Comply is a library of 12 production-grade skills that teach AI agents how to get physical products legally to market. Built for small businesses (1-10 people) selling cosmetics, food, supplements, electronics, toys, textiles, cleaning products, and more across multiple countries.

One question drives everything: **"What do I need to do to sell my product in this market?"**

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
| **Product Core** | product-compliance, labeling-compliance, market-entry-checklist | Check substances, labels, and market requirements |
| **Market Intel** | regulatory-intelligence, multi-jurisdiction-scan, customs-and-trade | Monitor regulations, scan markets, calculate duties |
| **Action** | compliance-audit-sprint, compliance-remediation, evidence-blitz | Sprint to compliance, fix issues, gather evidence |
| **Reference** | compliance-frameworks-ref, compliance-mcp-tools, compliance-reporting | Look up regulations, use tools, generate reports |

## MCP Integration

Comply works standalone but supercharges with MCP servers:

- **Cleo Legal API** -- Substance checks, customs classification, duty calculation, sanctions screening
- **Cleo Insight** -- Regulatory signal monitoring, regulation tracking across 49 countries

## Built For

Small physical product companies that need to:
- Check if their formulation is legal in the EU, US, UK, Canada, Japan, Korea
- Understand what labels they need per market
- Calculate landed cost (duty + VAT + handling) before entering a market
- Monitor for substance bans or labeling changes that could block their product
- Prepare documentation for marketplace listings (Amazon, retail buyers)
- Get CE/UKCA/FCC certification for electronics and toys
- Comply with REACH, CLP, FDA MoCRA, Prop 65, and dozens of other regulations


## License

MIT

## Disclaimer

**This is compliance guidance, not legal advice.** The skills provide a starting point based on publicly available regulations. They do not replace a qualified regulatory consultant, safety assessor, or legal counsel.

Regulatory data (substance limits, enforcement dates, fee amounts) changes frequently. Always verify critical information against official sources before making business decisions. Cleo Labs is not liable for decisions made based on these skills.
