# Electronics — Bluetooth speaker for US + EU + Canada

> A hardware startup readying their first BT speaker for retail across three markets. They used `skills_library` to map test certifications and avoid a recurring trap: assuming "CE = good enough."

```bash
npx -y @cleo-labs/skills-mcp@latest
```

## The brand

Two ex-Sonos engineers, seed-stage, planning the first production run (5,000 units) of a portable Bluetooth speaker with USB-C charging, an internal Li-ion battery, and an FM radio module. Target launch: Best Buy US + Fnac/Darty FR + Amazon DE + Best Buy CA. Total addressable revenue for the launch was projected at $1.8M. The CTO had assumed CE marking was the single hardest step — it was not.

## The question they asked Claude Code

> *"Walk me through every certification we need before this Bluetooth speaker can ship to the US, EU, and Canada. Include batteries and the FM module."*

`electronics-compliance` + `testing-certification` + `market-entry-checklist` triggered automatically. The MCP server also pulled in `customs-and-trade` and `packaging-compliance`.

## The verdict from `skills_library`

- **EU — CE marking requires multiple directives in parallel.**
  - **RED 2014/53/EU** (Radio Equipment Directive) — applies because of the Bluetooth and FM radio. Requires harmonised standards ETSI EN 300 328 (BT) and ETSI EN 303 345-3 (FM), plus EN 62311 (RF exposure). Notified Body involvement is **not required** for harmonised standards.
  - **EMC** is folded into RED, but **LVD** still applies because of the USB-C charging path (≥75 V DC / ≥50 V AC nominal — they were under, so de facto exempt, but the technical file still needs to demonstrate that).
  - **RoHS** Directive 2011/65/EU restricts 10 substances — they had a supplier RoHS declaration but had not done third-party verification.
  - **EU Battery Regulation 2023/1542** — the embedded Li-ion battery falls under the new "portable batteries" category. Carbon footprint declaration is required from February 2027 — not blocking for this launch but needs to be on the roadmap.
  - **WEEE** Directive 2012/19/EU — they need a producer registration in **every** member state where they sell. France: ecosystem-PROECT. Germany: stiftung-ear. Italy: RAEE. The skill listed the costs (€80-€2,400 per country annual) and pointed to `responsible-person` for the agent.
  - **Cyber Resilience Act (Reg 2024/2847)** — fully applicable December 2027. Their speaker has firmware and a Bluetooth interface, so it qualifies. Not blocking for the 2026 launch but a 2026-Q3 design review was added to their roadmap.

- **US — FCC + battery shipping + state EPR.**
  - **FCC Part 15 Subpart C** (intentional radiator — BT, FM) plus **Subpart B** (unintentional, USB-C). Requires Authorisation under FCC ID. They needed an accredited test lab and a Grantee Code. Lab cost: ~$3,500. Lead time: 6-8 weeks.
  - **UL listing** is not legally required but Best Buy requires it for AC-adapter shipped with the product. The adapter is on the supplier's UL listing — verified.
  - **DOT / IATA UN 38.3** for Li-ion battery shipping. Their cells came with the test summary — just need to keep it on file.
  - **CA Prop 65** — no listed substances above safe-harbour in the speaker grille (assumed no PFAS-coated mesh), but they had not confirmed with the supplier. Added to the supplier-audit checklist.

- **Canada — close to US but not identical.**
  - **ISED RSS-247** for the BT and FM modules — testing typically piggybacks on the FCC test, but the certification is separate. ~$1,200 incremental.
  - **ICES-003** (analogous to FCC Part 15B) for the unintentional emissions.
  - **CSA** marking for the AC adapter (on the supplier's listing — verified).
  - No federal EPR but Quebec (Recyc-Québec) and BC (EPRA) have provincial e-waste programs.

- **Customs.** HS code **8518.22** (multiple loudspeakers, mounted in same enclosure). EU duty 4.5%, US 4.9%, Canada free under CUSMA if the country of origin is the US. The supplier was Chinese — so Canada paid the MFN duty 4.5%. Landed-cost delta was ~$2.30/unit, which materially changed the wholesale-price model.

## Time saved

The CTO had quoted three separate test labs ($14k EMC, $8k RED, $11k US) over two weeks. Running the skills surface in one afternoon revealed they could bundle all radio testing under one accredited lab (Element or Eurofins) covering RED + FCC Part 15C + ISED RSS-247 with one set of conducted/radiated measurements — saving $7-9k and 4 weeks. The skill also surfaced the **WEEE per-country registration trap** that their consultant had missed (they had been quoted a single EU-wide registration which does not exist).

Total saved: **~$11k in test-lab consolidation + 4 weeks of timeline + €3,200 in avoided WEEE late-registration fees**.

## Try it yourself

Wire `@cleo-labs/skills-mcp` into [Claude Desktop](../tutorials/claude-desktop.md) or [Cursor](../tutorials/cursor.md) and ask:

> *"Walk me through every certification needed for a Bluetooth + FM-radio portable speaker shipping to US + EU + Canada. Include batteries, packaging, and customs."*

For live customs and substance lookups, use the Cleo Legal API at <https://legaldata-public.cleolabs.co/>.

---

Repo: <https://github.com/Cleo-Labs-IA/skills_library>
Related: [marketplace Amazon EU GPSR](./marketplace-amazon-eu-gpsr.md) · [multi-jurisdiction launch](./multi-jurisdiction-launch.md)
