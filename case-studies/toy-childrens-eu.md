# Toys — plush toy with magnets for EU + UK

> An indie toy designer who'd never sold to a regulated market before. Their first product included rare-earth magnets — the single most-recalled feature in EU/UK toy compliance in the last 10 years. They used `skills_library` to avoid joining the statistic.

```bash
npx -y @cleo-labs/skills-mcp@latest
```

## The brand

Solo designer, ex-game artist, Berlin-based. Crowdfunded a "story-building" plush toy on Kickstarter (~€80k raised). The toy has a soft body, an embroidered face, and **6 small rare-earth magnets** sewn into pockets on the hands and feet so kids can attach the toy to fridge doors, magnet boards, or other copies of the same toy. Target age 4+. Target markets: EU (DE, FR, IT, ES, NL) and UK.

## The question they asked Claude Code

> *"My plush toy has rare-earth magnets in pockets. Target age 4+. EU + UK. What do I need to ship?"*

`toy-compliance` triggered immediately. The MCP server also pulled in `substance-screening`, `labeling-compliance`, `responsible-person`, and `marketplace-compliance`.

## The verdict from `skills_library`

- **EU — Toy Safety Directive 2009/48/EC.** Plush toys fall under EN 71 series of harmonised standards. The relevant parts for this product:
  - **EN 71-1 (mechanical and physical properties)** — covers small parts, sharp points, drawstrings, etc. Magnets are the headline concern.
  - **EN 71-2 (flammability)** — soft toy textile bodies must pass.
  - **EN 71-3 (migration of certain elements)** — 19 heavy metals migration limits.
  - **EN 71-9/10/11 (organic chemical compounds)** — applies to the dyes in the embroidery.

- **Magnets — the deal-breaker.** EN 71-1 specifies the **magnetic flux index (MFI)**: any magnet (or magnetic component) that can be wholly contained inside the **small-parts cylinder** (EN 71-1 §8.2) cannot have an MFI ≥ 50 kG²mm². The brand's magnets were N42-grade neodymium discs 8 mm × 2 mm — when measured, MFI was ~88 kG²mm². **Three options:**
  1. Use weaker magnets (ferrite grade, MFI < 50). They lose the satisfying "snap" but the toy remains a magnet toy.
  2. Use larger magnets that physically cannot fit in the small-parts cylinder (≥ ~32 mm diameter). Heavy and ugly for a plush.
  3. Encapsulate the magnet in a tamper-proof housing that cannot release the magnet under the EN 71-1 abuse tests (drop, torque, tension, soak). They explored option 3 with their supplier — adds ~€0.40/unit but preserves the magnet experience.

  The skill cited the [EU Safety Gate notifications](https://ec.europa.eu/safety-gate/) where magnet-failure has been **the #1 recall reason for soft toys 2018-2024**.

- **CE marking is self-declaration with a DoC** — but the brand needs the EC-Type Examination by a Notified Body **if** they cannot apply the harmonised standards in full, or **if** the toy contains a "warning required for under 36 months" condition. Given the small magnets and the small parts, **EC-Type Examination by a Notified Body is recommended**. Cost: €2,500-€4,500, lead time 5-9 weeks.

- **Authorised Representative / Responsible Person.** As the brand is in Berlin, they don't need a separate EU AR — but they **do** need a UK-based AR for UK sales, post-Brexit. The skill recommended a UK AR service (~£600-£900/year).

- **UK — UKCA + UK Toy Safety Regulations 2011 (as amended).** Substantively identical to EU directive — the same test report from a UKAS-accredited lab covers both markets if scoped correctly. Indefinitely accepted: CE marking until further notice (latest extension to ~2027), so a single CE marking can in practice cover UK for now, but **UK responsible person + UK address on label is mandatory**.

- **Labelling.** CE mark, manufacturer name + EU address, importer (if applicable), product type, model, batch ID, **CE warning age** (e.g., "Not suitable for children under 36 months — small parts"), instructions in the official language of every member state of sale. The skill produced a labelling template covering DE/FR/IT/ES/NL plus EN for UK.

- **GPSR (EU Reg 2023/988)** in force since 13 December 2024 — requires a digital safety information page reachable from a QR code or URL on the toy. They needed to set up `toysafety.theirbrand.com/<model>/` with the safety info before shipping.

## Time saved

The brand had been quoted **€11,500** by a Berlin consultancy for "EU + UK toy compliance package" — which included testing they did not yet need to schedule, advisory hours, and CE-marking paperwork. The skill-driven pass surfaced:
- the magnet issue (which would have killed the launch on first lab test),
- the correct testing scope (EN 71-1/2/3 + selected EN 71-9 ingredient tests, ~€3,800 at a UKAS+EU-notified lab),
- the right Notified Body involvement (EC-Type Examination ~€3,500),
- the GPSR digital page requirement (which the consultancy hadn't mentioned).

Total cost was €7,300 instead of €11,500, and the magnet redesign happened **before** prototyping, not after first-lot rejection. **~€4,000 saved + 8 weeks faster.**

## Try it yourself

```json
{
  "mcpServers": {
    "cleo-skills": {
      "command": "npx",
      "args": ["-y", "@cleo-labs/skills-mcp@latest"]
    }
  }
}
```

Then: *"I have a plush toy with N42 neodymium magnets, 4+ age, EU + UK. Walk me through EN 71 testing and EU GPSR obligations."*

For live magnet-substance or REACH lookups: <https://legaldata-public.cleolabs.co/>.

---

Repo: <https://github.com/Cleo-Labs-IA/skills_library>
Related: [recall detection](./recall-detection.md) · [textile PFAS](./textile-pfas-restriction.md)
