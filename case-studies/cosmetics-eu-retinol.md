# D2C cosmetics — launching a 0.3% retinol night cream in EU + US

> A direct-to-consumer skincare brand was scheduled to launch their flagship retinol product across the EU and US two weeks after the EU's new retinol restriction took effect. They used `skills_library` to triage the launch.

```bash
npx -y @cleo-labs/skills-mcp@latest
```

## The brand

A bootstrapped skincare D2C, two co-founders, 14 SKUs, ~€1.4M ARR. Their hero formula — a night cream at 0.3% retinol with niacinamide and squalane — sold mostly in Germany, France, and the US. Their lab in Lyon had finalised the formulation 18 months earlier when retinol was still loosely regulated in EU cosmetics. They were planning the relaunch with new packaging and a wider US push.

## The question they asked Claude Code

> *"We're relaunching our 0.3% retinol night cream in the EU and US in 6 weeks. The packaging is going to the printer Monday. Anything we should know?"*

Claude Code, with skills loaded via the MCP server, auto-triggered `cosmetics-compliance` + `substance-screening` + `labeling-compliance` + `multi-jurisdiction-scan`.

## The verdict from `skills_library`

- **EU — RED.** EU Regulation 2024/996, in force since 1 November 2025 (sunset for non-compliant placement 1 May 2026), restricts retinol in body lotion to **0.05%** and in **other leave-on and rinse-off products** to **0.3%**. The brand was at the ceiling. Two problems followed:
  1. The PIF and CPSR needed updating to reflect the new exposure assessment.
  2. **Mandatory warning** required on label: *"Contains Vitamin A. Consider your daily intake before use."* — most printers had not seen this wording yet, and it had to appear in every official language of the member states they sold in (DE, FR, IT, ES, NL). Their existing PSD did not include it.

- **US — YELLOW.** No federal cap on retinol concentration in cosmetics, but MoCRA (Modernization of Cosmetics Regulation Act 2022) requires facility registration and product listing. They had not done either — deadline had already passed for existing products (July 2024). The skill flagged this as a near-term enforcement risk, not a launch blocker.

- **UK — YELLOW.** Post-Brexit, the UK Cosmetics Regulation is being aligned with EU 2024/996 but enforcement timeline is not yet final (consultation closed Q4 2025). Safer to label as if the EU restriction applied, then there's no relabel cost when the UK formalises.

- **Claims — ORANGE.** The marketing copy claimed "anti-ageing" and "wrinkle-reducing." `claims-substantiation` flagged that in the EU these are accepted under Reg 655/2013 six criteria *if* the brand holds clinical or instrumental evidence. They had a 22-subject in-vivo study from 2022 — adequate but on the old formulation. The skill recommended either re-running the study or watering the claims down to "supports skin renewal" / "promotes a more even-toned appearance" while the study is updated.

- **Packaging — GREEN.** The 30 ml glass jar with PP lid was already compliant with the upcoming PPWR recycling requirements. The brand was registered for EPR in France (Citeo), Germany (LUCID), and Italy. The skill confirmed nothing else was needed.

## Time saved

The traditional route — engage a regulatory consultant on retainer, get a written opinion in 2-3 weeks at €4,500-€8,000 — would have arrived after the print order had gone out. The skills-driven check took **38 minutes of chat time**, used `multi-jurisdiction-scan` to parallelise the EU/US/UK threads, and surfaced the print-blocking warning *before* Monday.

The brand pushed the print order back by 9 days, added the Vitamin A warning to the secondary packaging, kept the formulation at 0.3% (already at ceiling), and registered the facility in the FDA MoCRA portal in the same week. Launched on schedule.

## Try it yourself

```bash
# Add to ~/Library/Application Support/Claude/claude_desktop_config.json
{
  "mcpServers": {
    "cleo-skills": {
      "command": "npx",
      "args": ["-y", "@cleo-labs/skills-mcp@latest"]
    }
  }
}
```

Then ask Claude: *"I'm launching a retinol product at 0.3% in the EU. What restrictions apply post Reg 2024/996?"*

Want live substance lookups instead of static skill knowledge? Get a free Cleo Legal API key at <https://legaldata-public.cleolabs.co/> — it queries 13 substance and customs databases in real time.

---

Source: <https://github.com/Cleo-Labs-IA/skills_library>
Other case studies: [electronics](./electronics-bluetooth-speaker.md) · [food supplement Japan](./food-supplement-japan.md) · [multi-jurisdiction](./multi-jurisdiction-launch.md)
