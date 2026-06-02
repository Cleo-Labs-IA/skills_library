# Marketplace — Amazon EU seller preparing for the GPSR deadline

> A US-based Amazon-EU seller running ~120 SKUs across home, beauty, and kitchen. The EU's General Product Safety Regulation (GPSR) took effect 13 December 2024 and Amazon started enforcing it aggressively in 2025. The seller used `skills_library` to triage which SKUs to keep, fix, or sunset.

```bash
npx -y @cleo-labs/skills-mcp@latest
```

## The brand

US-based seller, two-person team, ~$2.4M annual revenue, 60-65% from Amazon EU (DE + FR + IT + ES). 120 active SKUs across non-electrical kitchen goods, decorative home, candles, and a few low-tech beauty accessories. They had been pulling listings down ad-hoc whenever Amazon flagged them — and losing roughly **15-20% of monthly EU revenue** to suppressed listings.

## The question they asked Claude Code

> *"Amazon EU keeps suppressing our listings. We can't tell from the seller-central messages what we're actually missing. Help us build a GPSR-readiness audit across our 120 SKUs."*

The MCP server pulled `marketplace-compliance` + `labeling-compliance` + `responsible-person` + `product-safety-incident` + `regulatory-calendar`.

## The verdict from `skills_library`

- **What GPSR (Reg 2023/988) actually requires for Amazon EU sellers.** Five core obligations apply to **all** non-food consumer products (medical devices, food, feed, and a few other categories are out of scope):
  1. **EU Responsible Person.** Article 16 requires every product placed on the EU market to have an economic operator established in the EU — typically the manufacturer's EU AR, the importer, or a fulfilment service provider acting in that capacity. A US-based seller is *not* one. Amazon's "Amazon EU SARL" can act as a fulfilment service provider, but it does *not* automatically take on the Responsible Person role.
  2. **EU contact info on the product/packaging** — name, postal address, email of the Responsible Person.
  3. **Internal risk analysis** retained for 10 years.
  4. **Traceability** — batch/serial identifier on product.
  5. **Public safety information** — instructions, warnings in the language(s) of the member state of sale.

  Amazon's enforcement focuses heavily on (1) and (2). Their seller-central system asks for "Responsible Person" details per ASIN and suppresses the listing if not provided.

- **Audit of the 120 SKUs.** Working through `multi-jurisdiction-scan` in parallel, the skills produced a triage table:
  - **84 SKUs (kitchen goods, home decor, plain candles, beauty accessories)** — no fundamental safety issue, missing only the EU RP + label. **Action: appoint a service-provider EU RP** (~€700-€1,400/year for the entire portfolio under a single contract) and reprint inserts/back labels with the EU RP block.
  - **18 SKUs (scented candles)** — additional obligations apply under CLP Reg 1272/2008 (allergen labelling, UFI code, PCN notification to the Poison Centre). The candles had US labels that did not meet CLP. **Action: relabel with CLP-compliant safety statements + 26 fragrance allergens (the new 80-allergen list from Reg 2023/1545 will phase in 2026-2028 — added to roadmap) + register PCN.**
  - **9 SKUs (decorative items containing children's-toy-like elements — plush dolls + toy-like puzzles)** — flagged by `toy-compliance` as potentially in scope of Toy Safety Directive 2009/48/EC. **Action: pause until full toy testing (EN 71-1/2/3) confirmed**, or restage as decorative-only with appropriate warnings (this is risky and the skill explicitly recommended against).
  - **6 SKUs (humidifiers + small heaters — electrical)** — flagged for **CE marking under LVD + EMC + EU Battery Reg + WEEE EPR**. They had FCC labels only, no CE. **Action: sunset on Amazon EU**; the testing + EPR per-country cost did not pencil out for their volume.
  - **3 SKUs (face rollers + ice globes — beauty accessories)** — `cosmetics-compliance` flagged that if the brand made any claim about "depuffing," "draining," or "stimulating circulation," they could be borderline-medical. **Action: cleanse marketing copy** to "cooling massage tool" / "facial massage." Otherwise clear.

- **Cost-benefit.** The skill produced a quick financial model. Sunsetting 6 SKUs (electrical) cost ~$48k/year in lost revenue but saved ~$22-30k in CE + WEEE + per-country EPR registration. The 9 toy-like SKUs were a coin flip; the seller decided to sunset 6 and retest 3.

- **Timing.** Amazon's enforcement was already live. The skill walked the seller through Amazon's "Compliance Reference" flow in Seller Central — where you upload the EU RP details once and reference them across ASINs — and produced the exact metadata payload Amazon expects.

## Time saved

The seller had been mid-process with two competing options: (a) hire a UK-based marketplace consultancy for £14k flat to "GPSR-ify the listings," or (b) abandon the EU marketplace entirely. The skill-led audit produced a defensible triage in a single working day, exposed the 6 SKUs that did not pencil out (correctly recommending sunset), and saved them from spending the £14k.

Estimated savings: **~£10-12k in avoided advisory + restored ~15-20% of monthly EU revenue (~$30k/month)** once the EU RP was registered and the labels were updated.

## Try it yourself

```bash
npx -y @cleo-labs/skills-mcp@latest
```

> *"I have 120 SKUs on Amazon EU. Walk me through GPSR readiness. I am a US seller, no EU entity, mixed catalogue."*

For live SVHC + REACH + CLP allergen list updates: <https://legaldata-public.cleolabs.co/>.

---

Repo: <https://github.com/Cleo-Labs-IA/skills_library>
Related: [textile PFAS](./textile-pfas-restriction.md) · [recall detection](./recall-detection.md) · [multi-jurisdiction launch](./multi-jurisdiction-launch.md)
