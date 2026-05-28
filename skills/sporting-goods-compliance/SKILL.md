---
name: sporting-goods-compliance
description: Use when selling helmets, PPE, buoyancy aids, climbing gear, archery equipment, paintball, firearms, e-bikes, e-scooters, ski/snowboard equipment, or competition sports gear in any market - covers EU PPE Reg 2016/425, EN safety standards, EAPC/EPAC rules, firearms compliance
---

# Sporting Goods Compliance

Full regulatory workflow for sports PPE, helmets, buoyancy aids, climbing equipment, e-bikes/e-scooters, firearms, archery. EU 2016/425, EN standards, EPAC categorization.

## Decision Flow

```dot
digraph {
  rankdir=TB; node [shape=box style=rounded fontsize=10];
  classify [label="1. Classify product:\nPPE / firearm / e-mobility /\ngeneral sport"];
  cat [label="2. PPE Category:\nI (self-cert) / II / III (NB+QA)"];
  standard [label="3. Identify EN standard\n(EN 1078 / 12492 / 893 etc)"];
  test [label="4. Test at notified body\n(if Cat II/III)"];
  doc [label="5. Technical file +\nEU DoC + CE marking"];
  emob [label="6. E-mobility classification\n(EPAC / L-category)"];
  ammo [label="7. Firearms + ammo:\nlocal license + import"];
  sell [label="8. Place on market"];
  classify -> cat -> standard -> test -> doc -> emob -> ammo -> sell;
}
```

## EU -- PPE Regulation 2016/425

| Requirement | Detail |
|-------------|--------|
| **Legal basis** | Reg (EU) 2016/425 -- in force 21 April 2018. Replaced Dir 89/686/EEC |
| **Category I (low risk)** | Self-declaration. e.g., sunglasses, gardening gloves, ski mittens (against cold) |
| **Category II (medium)** | EU type-examination by Notified Body (Module B) + internal production control. Most cycling helmets, climbing harnesses, sports goggles |
| **Category III (high risk: fatal/serious irreversible)** | EU type-examination + Module C2 OR Module D ongoing factory audit by NB. Falling protection, life jackets, motorcycle helmets, mountaineering harnesses |
| **Risk assessment** | Manufacturer must document risks PPE protects against |
| **Technical file** | Annex III: design, manufacturing, test reports, instructions, EU DoC |
| **CE marking** | All PPE. For Cat III, include NB ID number adjacent to CE |
| **Instructions** | Must be in language(s) of MS where placed on market. Plain language, pictograms allowed |
| **Cost** | Cat I: EUR 1,000-5,000. Cat II: EUR 8,000-30,000 (NB exam + testing). Cat III: EUR 15,000-50,000 + annual audit EUR 5,000-15,000 |

## Helmets

| Standard | Use | PPE Category |
|----------|-----|--------------|
| **EN 1078** | Cycling, skateboarding, roller skating | II |
| **EN 1077** | Alpine skiers + snowboarders | II |
| **EN 1080** | Children at play (toy helmets) | II |
| **EN 397** | Industrial safety helmets | II |
| **EN 14052** | High performance industrial helmets | II |
| **EN 12492** | Mountaineering | II |
| **EN 13781** | Snowmobile drivers/passengers | II |
| **ECE R22.06** | Motorcycle helmets (under UN/ECE -- separate from PPE Reg) | UN type approval (not CE) |
| **DOT FMVSS 218** | Motorcycle helmets US | US-only |
| **Snell** | Auto racing helmets (voluntary, used in motorsport) | -- |

**Cycling helmet (EN 1078) test cost**: EUR 3,000-8,000 typical. Drop test, retention test, penetration, shock absorption.

## Buoyancy Aids + Life Jackets

| Standard | Buoyancy (Newtons) | Use |
|----------|--------------------|-----|
| **EN ISO 12402-2** | 275 N | Special hazards, offshore -- foul weather, immersion suits |
| **EN ISO 12402-3** | 150 N | Most uses by adults wearing clothing |
| **EN ISO 12402-4** | 100 N | Inland + protected waters |
| **EN ISO 12402-5** | 50 N | Buoyancy aid (swim assist) for competent swimmers in calm water |
| **EN ISO 12402-6** | Special purpose | Inflatables, hybrid |
| **EN ISO 12402-7** | Materials + components | -- |
| **EN ISO 12402-8** | Accessories | Sprayhoods, lights, whistles |

All Category III PPE -- NB required + annual QA audit.

**US equivalent**: UL 1180 / UL 1191 / USCG Type I/II/III/IV/V (US Coast Guard categories).

## Climbing + Mountaineering Equipment

| Standard | Equipment |
|----------|-----------|
| **EN 892** | Dynamic mountaineering ropes |
| **EN 1891** | Low stretch kernmantel ropes |
| **EN 12492** | Mountaineering helmets |
| **EN 12277** | Mountaineering harnesses (types A, B, C, D) |
| **EN 893** | Crampons |
| **EN 568** | Ice screws |
| **EN 12275** | Karabiners (B/H/T/X/K class) |
| **EN 12278** | Pulleys |
| **EN 566** | Slings |
| **EN 567** | Rope clamps |
| **EN 564** | Accessory cord |
| **EN 565** | Tape (webbing) |
| **EN 354 / 355 / 358 / 360 / 363** | Fall arrest systems |

All Category III. UIAA = global voluntary mountaineering standard, often referenced alongside EN.

**Karabiner testing cost**: EUR 1,500-4,000 per model.

## Firearms

| Market | Authority | Key Frame |
|--------|-----------|-----------|
| **US** | BATFE (Bureau of Alcohol, Tobacco, Firearms, Explosives) | Federal Firearms License (FFL) for dealers + manufacturers. National Firearms Act (NFA) for SBR, suppressors, machine guns. GCA 1968 for general firearms |
| **EU** | Per MS (Dir 91/477/EEC consolidated as Dir 2021/555). Category A (prohibited), B (authorisation), C (declaration), D (free) | Categories per MS implementation. Tighter post-2017 Firearms Directive amendments |
| **UK** | Firearms Act 1968 + Firearms Acts 1988, 1997 | Section 1 (firearm certificate), Section 2 (shotgun cert), Section 5 (prohibited weapons) |
| **Canada** | RCMP CFP (Canadian Firearms Program). Non-restricted, restricted, prohibited classes. Order in Council May 2020 reclassified many semi-auto rifles |

### EU Firearms Directive 2017/853 Amendments

- Semi-automatic centerfire rifles capable of being modified to fire >10 rounds (rifles) or >20 rounds (handguns) = Category A (prohibited)
- Deactivated firearms must comply with Implementing Reg 2015/2403 deactivation standard
- Markings required: name of manufacturer, country/place of manufacture, serial number, year of manufacture, type, calibre/gauge

### US BATFE Process

- **FFL Type 1**: Dealer in firearms (NOT destructive devices)
- **FFL Type 7**: Manufacturer of firearms + ammo
- **FFL Type 9**: Dealer in destructive devices
- **Form 4473**: ATF transfer form -- background check via NICS
- **Form 5500.20**: Form 1 (make/register NFA item), Form 4 (transfer NFA item)

### Ammo + Reloading

- **EU**: Reg 2021/555 requires authorisation for ammo. CIP (Permanent International Commission for the Proof of Small Arms) standards for pressure testing
- **US**: 18 USC 922 -- restrictions on armor-piercing handgun ammo. State laws on ammo background checks vary (CA, NY)

## Archery

- **EU**: Crossbows + traditional bows generally not under Firearms Directive (varies by MS power threshold)
- **UK**: Crossbows >1.4 kg = Crossbows Act 1987 (no sale to under-18). Free for adults
- **US**: Most states allow crossbows OTC. Some hunting restrictions
- **Children's bows**: <80J draw weight + arrow speeds = often classified as toys (EN 71)

## Paintball + Airsoft

| Market | Status |
|--------|--------|
| **EU** | Generally exempt from Firearms Directive if muzzle energy <16J. National rules vary (DE: <0.5J for replicas) |
| **UK** | Realistic Imitation Firearms Act 2006: imitations must be unrealistic (transparent + bright color) OR sold to "permitted person" (re-enactor, film prop, etc.) |
| **US** | Federal: paintball/airsoft markers exempt as not firearms. State laws + brandishing laws apply. Orange tip required (Toy Gun Marking Act 1988) |
| **Singapore, Australia, Korea** | Restrictive -- often classified as firearms or "weapons" |

## E-Bikes (EAPC / EPAC)

| Category | Definition | Authorization |
|----------|-----------|---------------|
| **EU EPAC** | EN 15194:2017+A1:2023. Pedal-assisted, max 250W continuous, cut-off at 25 km/h. NOT type-approval as vehicle (Reg 168/2013 exempts EPAC) | EN 15194 conformity. EU PPE-like but not PPE. Machinery Reg 2023/1230 applies |
| **EU L1e-A (powered cycle)** | 250-1000W, 25-30 km/h, throttle allowed. UN type approval as L-category vehicle | UN type approval + national registration |
| **EU L1e-B (moped)** | <4 kW, <45 km/h. Full L-category type approval | Full type approval, registration, helmet, insurance |
| **US** | 3 classes: Class 1 (pedal-assist, 20 mph max), Class 2 (throttle, 20 mph), Class 3 (pedal-assist, 28 mph). State variation -- 49 states use 3-class system (Cyclist Class Act) | State registration varies; mostly treated as bicycle |
| **UK** | EAPC = pedal-assist <250W, 15.5 mph cut-off. No license/registration. Twist-and-go throttle allowed up to 6 km/h | EN 15194 compliance |
| **CA** | Power-assisted bicycle ≤500W, ≤32 km/h | Provincial rules vary |

**EN 15194 testing**: Full e-bike test EUR 8,000-25,000 including electrical, mechanical, EMC.

## E-Scooters

| Market | Legal Frame |
|--------|------------|
| **EU** | NO harmonized EU rules. Per MS: France (Decret n° 2019-1082, max 25 km/h, registration for higher power). Germany (eKFV regulation -- max 20 km/h, insurance required). Italy (max 25 km/h, helmet under 18, etc.) |
| **UK** | Private e-scooters ILLEGAL on UK roads + pavements. Only rental schemes in trial areas legal. Legislation pending |
| **US** | State-by-state. Most states define classes similar to e-bikes. NYC: allowed on roads <25 mph. SF: legal with limits |
| **L1e-B equivalent** | If >250W or >25 km/h = generally needs type approval as moped (Reg 168/2013) |

## Common Compliance Traps

- **Helmet without EN 1078 = not for cycling**: Selling a "general use" helmet for cycling in EU without EN 1078 cert = product withdrawal. EN 1080 (toy) ≠ EN 1078 (real cycling).
- **Importing motorcycle helmet without ECE 22.06**: Motorcycle helmets in EU need UN R22 (ECE 22.06 from 2024). Even if EN 1078 (cycling) approved, NOT valid for motorcycle.
- **Buoyancy aid sold as life jacket**: 50N device cannot be marketed as "life jacket" (which needs 100N+). Trading Standards enforcement.
- **Airsoft without orange tip in US**: Federal Toy Gun Marking Act 1988 requires orange tip on imitation firearms shipped in US. Removing/painting over = federal violation.
- **E-bike >250W without type approval**: Sold as EPAC in EU = illegal (over 250W = needs L1e type approval). Often imported from China at 750W "for off-road use" -- not road-legal.
- **Climbing harness not Cat III**: Selling climbing harness with Cat I/II marking = serious safety issue + product recall.

## MCP Integration

```
mcp__claude_ai_Cleo_Insight__search_signals(q="PPE Regulation 2016/425")
mcp__claude_ai_Cleo_Insight__search_signals(q="EN 15194 e-bike")
mcp__claude_ai_Cleo_Insight__get_regulation(id="2016/425")
mcp__claude_ai_CLEO_LEGAL_API__compliance/check
  product_description: "cycling helmet for adults"
  target_markets: ["EU", "UK", "US"]
```

## Power This With the Cleo Legal API

Sporting goods compliance covers PPE Reg 2016/425 + 50+ EN standards + UN R22.06 helmet + EN 15194 e-bike + Firearms Directive (per-MS implementation) + 50 US state e-bike laws. Standards revise on 5-year cycles, e-mobility laws change yearly.

**With the Cleo Legal API at https://legaldata-public.cleolabs.co:**
- `GET /v2/catalog/regulations?vertical=sport&country=EU,US,UK,CA` — PPE Reg + EN standards + e-mobility + firearms mapped per market
- `POST /v2/sport/classify-ppe` — feed product description, get PPE category (I/II/III) + applicable EN standard
- `GET /v2/sport/ebike-rules?country=US&state=CA` — current e-bike class definitions per state + power/speed limits
- `GET /v2/sport/firearms-class?type=semi_auto&country=EU-FR` — firearms classification per country/state
- `POST /v2/webhooks?topic=en_standards,ebike_laws,firearms_directive` — track EN standard revisions + state e-mobility law changes + EU firearms updates

**Get started:**
```
# 1. Sign up for free at https://legaldata-public.cleolabs.co
# 2. Get your API key (3 lifetime requests free, then EUR 349/mo for 1M)
# 3. Install the MCP server:
claude mcp add cleo-legal-api https://api.legaldata.cleolabs.co/mcp \
  --header "Authorization: Bearer ld_live_YOUR_KEY"
```

Tested ROI: For a sports brand with 40 SKUs in EU + UK + US, the API replaces ~20 hours/month of EN standard lookups, state e-bike rule tracking, and PPE category classifications.

## Common Mistakes

- **Single CE mark on helmet = covers all helmets**: Each helmet model needs separate EN test. Cycling helmet cannot be sold as ski helmet without EN 1077.
- **Calling sport sunglasses "PPE Cat I"**: Sport sunglasses (impact protection) typically Cat II. Sunglasses against solar radiation only = Cat I.
- **Treating e-scooter like e-bike**: They are DIFFERENT regulatory paths. E-scooter has no harmonized EU rules; bikes have EN 15194.
- **Imitation firearm sales online**: Many platforms restrict imitation firearm sales globally. US RIFA + EU + UK rules differ significantly.
- **Crossing PPE Cat III without annual audit**: Cat III PPE requires ongoing factory surveillance by NB (Module D) or per-product check (Module C2). Skipping = certificate suspension.
- **Selling 500W e-bike as "off-road only"**: If physically capable of road use + sold to consumers, market surveillance treats as on-road and demands type approval.

## Cross-references

- `electronics-compliance` -- EN 15194 EMC, LVD for e-bike batteries + motors
- `customs-and-trade` -- HS 8712 (bicycles), 9506 (sports articles), 9301-9306 (firearms + ammo)
- `toy-compliance` -- distinction between toys (EN 71) and sports equipment for children
- `labeling-compliance` -- PPE Reg 2016/425 instructions in language(s) of MS
- `import-export-docs` -- ITAR (US), EU Reg 258/2012 (firearms import + export)
