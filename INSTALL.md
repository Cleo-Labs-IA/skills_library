# Install Comply in 30 seconds

## One-liner (Claude Code)

```bash
git clone https://github.com/Cleo-Labs-IA/skills_library.git ~/.claude/skills/comply
```

That's it. Next time you ask Claude Code anything about product compliance, the skills auto-trigger.

## Try it now

Open Claude Code and type:

> "I'm launching a face cream with retinol in the EU and US. What do I need to do?"

Claude will use `product-compliance`, `labeling-compliance`, and `market-entry-checklist` to give you a complete compliance roadmap.

## More examples

| You say | Skills triggered |
|---------|-----------------|
| "Check if my ingredients are legal in Japan" | `product-compliance` |
| "What labels do I need for EU cosmetics?" | `labeling-compliance` |
| "Calculate landed cost for shipping to Germany" | `customs-and-trade` |
| "Scan all markets for my supplement" | `multi-jurisdiction-scan` |
| "Any new regulations that affect my product?" | `regulatory-intelligence` |
| "Prepare compliance docs for Amazon EU" | `evidence-blitz` + `compliance-reporting` |

## MCP Servers (optional, supercharges everything)

| Server | What it adds | Install |
|--------|-------------|---------|
| **Cleo Insight** | Live regulatory signals across 49 countries | [Setup on claude.ai](https://claude.ai) |
| **Cleo Legal API** | Substance database (500K+), customs classification, sanctions | [Setup on claude.ai](https://claude.ai) |
| **Bastion** | ISO 27001/SOC2 if you handle customer data | [bastion.tech](https://bastion.tech) |

## Uninstall

```bash
rm -rf ~/.claude/skills/comply
```
