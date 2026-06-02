# Pet product — moving a pet-food line from EU to UK post-Brexit

> A specialist pet-food brand that had been EU-headquartered moved their main legal entity to the UK after Brexit. The skills helped them re-anchor the entire compliance stack: feed registration, marketing claims, importer-of-record, and re-establishing an EU representative the other way round.

```bash
npx -y @cleo-labs/skills-mcp@latest
```

## The brand

Family-run premium pet-food brand, ~£3.8M revenue, 27 SKUs across dry, wet, and freeze-dried for dogs and cats. Originally headquartered in the Netherlands with a Dutch establishment number. After a UK acquisition and HQ relocation, they needed to retain their EU customers but operate from the UK as the producer of record.

## The question they asked Claude Code

> *"We moved HQ from the Netherlands to the UK. Walk us through everything compliance-wise we need to reset — pet food, supplements, treats. And what does our EU representative situation look like now?"*

The MCP pulled `pet-product-compliance` + `responsible-person` + `labeling-compliance` + `customs-and-trade` + `regulatory-calendar`.

## The verdict from `skills_library`

- **Legal flip — the UK is now home, the EU is the export.**
  - In the UK, the brand needs an **APHA-issued approval/registration** under Regulation (EC) 183/2005 as retained UK law. Their existing Dutch establishment number does not transfer — but the **same site** (their new UK factory in Yorkshire) requires a fresh APHA approval visit. Lead time: 6-14 weeks. The skill flagged this as a critical path item.
  - **AAFCO** does not apply (US framework). **PFMA** (Pet Food Manufacturers' Association) membership is voluntary in the UK but useful for retail listings; major UK retailers (Pets at Home, Tesco) typically require PFMA member status or equivalent.

- **EU exports — the brand is now a third country.**
  - To export to EU member states they need an **EU establishment** to act as importer of record, or to use a customer's facility for that role. They didn't want to set one up — the skill recommended using a **Border Control Post (BCP)** for veterinary checks and contracting with an EU-side importer/distributor.
  - **TRACES** notification is required for every consignment of pet food crossing the EU border (Regulation 2017/625, Article 56). Their EU distributor handles this — but the brand needed to make sure their labels carried the **UK approval number** and the **importer name + address in the EU**.
  - Their **EU Responsible Person for the pet supplement line** (a fish-oil omega-3 supplement) was their old Dutch entity — which now is a separate legal entity post-acquisition. They needed to appoint a new EU RP (~€2,400/year service from a Dutch consultancy).

- **Labelling differences UK ↔ EU.**
  - The **"complete" vs "complementary" feed** declaration (Reg 767/2009 Art 17) is the same wording in UK and EU.
  - But the **address block** rule diverges: in UK, the operator's UK address must appear; for EU, the EU importer's address must appear. They opted to print **dual labels** for the 9 SKUs that ship both ways, separated by short production runs — modest cost, ~5p/unit on labels.
  - **Mandatory statements** are identical for now (UK retained EU rules), but the UK is reviewing the Pet Food Marketing Code in 2026 — this is a watchlist item via `regulatory-calendar`.
  - **Functional claims** on the supplement (e.g., "supports joint mobility") follow UK VMD's borderline guidance — they are *not* medicinal claims if substantiated by EFSA/FEDIAF feeding trial evidence. The brand had a 2021 FEDIAF-protocol feeding trial — adequate.

- **Customs.**
  - Pet food HS code is in the **2309** family (dog/cat food retail: 2309.10; other prepared animal feed: 2309.90). UK MFN duty on EU imports of 2309.10 is **0%** under the EU-UK TCA with origin proof.
  - **Veterinary border controls** at the EU border require an **EHC** (Export Health Certificate) for animal-derived products, issued by APHA. They needed to set up the EHC application workflow with their UK consignment hub. APHA charges per certificate.
  - **REX or EUR.1 origin proof** is required to claim 0% under the TCA. The brand needed to register for REX in the UK (free, takes ~1 week).

- **Veterinary medicines exposure.** They had been considering adding glucosamine + chondroitin to the senior-dog line. The skill flagged that in the EU, glucosamine + chondroitin at "feeding-trial substantiated" levels is a *feed additive* (no VMD/EMA authorisation), but **above** typical inclusion rates it can be classified as a veterinary medicine. The skill cited the FEDIAF maximum tolerable level (250 mg/kg body weight/day for dogs) — well above their planned 50 mg/kg formulation. **No veterinary medicines exposure.**

## Time saved

The brand had been told by their incumbent EU consultancy that re-establishing compliance would cost **~€18-24k** over 6 months. The skill-led audit produced:
- A precise critical-path list (APHA approval, EU RP appointment, REX registration, EHC workflow).
- A dual-label spec for the 9 cross-border SKUs.
- A claims watchlist for the supplement line.
- A 2026 watchlist for the UK Pet Food Marketing Code review.

Total advisory cost reduction: **~€16k**. Time-to-operational under the new UK HQ: **9 weeks** vs the consultancy's quoted 24 weeks.

## Try it yourself

```bash
npx -y @cleo-labs/skills-mcp@latest
```

> *"We moved a pet-food brand from EU HQ to UK HQ. Walk me through feed registration, importer-of-record, labelling, customs, and EU representative."*

For live veterinary medicines / feed additive substance lookups: <https://legaldata-public.cleolabs.co/>.

---

Repo: <https://github.com/Cleo-Labs-IA/skills_library>
Related: [food supplement Japan](./food-supplement-japan.md) · [marketplace Amazon EU GPSR](./marketplace-amazon-eu-gpsr.md)
