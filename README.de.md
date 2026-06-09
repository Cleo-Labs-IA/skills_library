# Compliance Product Guidance

[![npm](https://img.shields.io/npm/v/@cleo-labs/skills-mcp?label=%40cleo-labs%2Fskills-mcp)](https://www.npmjs.com/package/@cleo-labs/skills-mcp)
[![npm downloads](https://img.shields.io/npm/dm/@cleo-labs/skills-mcp)](https://www.npmjs.com/package/@cleo-labs/skills-mcp)
[![MCP server](https://img.shields.io/badge/MCP-server-blue)](./mcp-server)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Skills](https://img.shields.io/badge/skills-51-blue)](./skills)
![GitHub stars](https://img.shields.io/github/stars/Cleo-Labs-IA/skills_library?style=social)
[![Cleo Labs](https://img.shields.io/badge/built%20by-Cleo%20Labs-0008CF)](https://cleolabs.co)

KI-Compliance-Copilot für physische Produkte — REACH, FDA, CE, Zoll und 24 weitere Regelwerke, direkt in Claude Code, Cursor oder Codex.

## Was ist das?

Ein physisches Produkt grenzüberschreitend zu verkaufen bedeutet, sich durch 25.000+ Vorschriften in 49 Ländern zu navigieren: Stoffverbote, von denen man noch nie gehört hat, Etiketten, die sich jedes Quartal ändern, Zolltarifnummern, die Abgabensätze um 12 % verschieben, Marketplace-Regeln, die einen über Nacht delisten. Die meisten kleinen Marken lernen das auf die teure Art — an der Grenze oder nachdem Amazon das Listing entfernt hat.

Compliance Product Guidance sind **40 produktionsreife Skills + 2 MCP-Server**, die einem KI-Agenten beibringen, eine einzige Frage zu beantworten: *„Was muss ich konkret tun, um dieses Produkt in diesem Markt zu verkaufen?"*

Der Hero-Skill ist `product-compliance`. Sie fügen eine Inhaltsstoffliste (oder eine Stückliste, oder eine Rezeptur) ein, wählen Ihre Zielmärkte und es läuft:

```
Inhaltsstoffe  →  CAS-Auflösung  →  13 Regulierungsdatenbanken  →
Verdikt pro Stoff pro Markt  →  Umsatzrisiko-Berechnung
```

Beispielausgabe:

```
Retinol 0.4%   EU: BLOCKIERT (Anhang III Cap 0,3% Gesichtsprodukte, gültig Nov. 2025)   €/Jahr im Risiko: ~180 T€
Retinol 0.4%   US: OK (kein Bundes-Cap; CA Prop 65 Warnung nicht erforderlich bei dieser Dosis)
Retinol 0.4%   UK: BLOCKIERT (UK Cosmetics Reg spiegelt EU Anhang III)
Retinol 0.4%   JP: PRÜFEN (Quasi-Arzneimittel-Schwelle — MHLW-Prüfung erforderlich)
```

Dasselbe Muster funktioniert für eine Elektronik-Stückliste (RoHS, REACH SVHC, CE/FCC, Batterieverordnung), ein Lebensmittelrezept (Allergene, Novel Foods, FDA FSMA), ein Textil (PFAS, Faserkennzeichnung, OEKO-TEX) oder jede der 18 Produktvertikalen unten.

## Installation

```bash
# Als MCP-Server (am schnellsten)
npx -y @cleo-labs/skills-mcp@latest

# Als Claude Code Skills (dateibasiert)
git clone https://github.com/Cleo-Labs-IA/skills_library.git ~/.claude/skills/comply
```

Das npm-Paket ist die Ein-Zeilen-Installation für **Claude Desktop, Cursor, Continue, Zed und jeden MCP-kompatiblen Client**. Die Skills erscheinen als native MCP-Ressourcen (`skill://<name>`), parametrisierte Prompts und drei strukturierte Tools (`list_skills`, `find_skill`, `read_skill`).

Tragen Sie das in Ihre Client-Config ein:

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

Für **Claude Code** legt die `git clone`-Variante die Skills in `~/.claude/skills/comply` ab und sie triggern automatisch, wenn Sie nach Stoffen, Etiketten, Zoll, Märkten oder Rückrufen fragen — keine manuelle Invocation nötig.

## Die 40 Skills

### Produkt-Compliance-Engine (6)

Die Skills, die Ihr tatsächliches Produkt anfassen.

| Skill | Was er macht |
|-------|--------------|
| `product-compliance` | **Hero-Skill.** Vollständiger Stoffcheck über 13 Datenbanken, Verdikt pro Markt, Umsatzrisiko. |
| `substance-screening` | Tiefes Inhaltsstoff-/Material-Screening: INCI→CAS, Konzentrationsmargen, Verdikte pro Jurisdiktion. |
| `labeling-compliance` | Länderspezifische Etiketten: INCI, Allergene, Warnhinweise, CE/UKCA-Kennzeichnung, mehrsprachige Regeln. |
| `testing-certification` | Erforderliche Tests/Zertifizierungen pro Produkt pro Markt (CPSR, CE, FCC, UL, EN 71, HACCP). Laborauswahl, Kosten, Zeitplan. |
| `claims-substantiation` | Marketing-Aussagen validieren: EU 655/2013, FDA Arznei-vs-Kosmetik, FTC, grüne Claims. |
| `market-entry-checklist` | Schritt für Schritt: klassifizieren → Vorschriften → Stoffe → Etiketten → Zertifikate → Zoll → Notifizierung. |

### Multi-Markt-Intelligenz & Aktion (13)

Die Skills, die Sie von „Wir haben ein Problem" zu „Wir haben es verschickt" bringen.

| Skill | Was er macht |
|-------|--------------|
| `regulatory-intelligence` | Signalüberwachung: Stoffverbote, Etikettenänderungen, Rückrufe, Inkrafttreten. |
| `multi-jurisdiction-scan` | Paralleler Scan über alle Zielmärkte. ROT/ORANGE/GELB/GRÜN pro Markt. Ein Agent pro Jurisdiktion. |
| `customs-and-trade` | HS-Code, Zoll, Landed Cost, Dual-Use, Sanktionen. |
| `compliance-audit-sprint` | Pre-Launch-Sprint: identifizieren → mappen → prüfen → verifizieren → Kosten schätzen. Versendet parallele Agenten. |
| `compliance-remediation` | Nichtkonformitäten beheben, um Markteintritt freizugeben: reformulieren, neu etikettieren, testen, zertifizieren. |
| `evidence-blitz` | Paralleles Sammeln von Compliance-Nachweisen für Audit, Zertifizierung oder Marketplace-Listing. |
| `responsible-person` | EU RP, UK RP, US Agent, EAEU AR, China NMPA-Inhaber einrichten. Mandatsschreiben, Kosten, Pflichten. |
| `packaging-compliance` | EPR pro EU-Mitgliedstaat, PPWR-Übergang, SUP, Plastiksteuer, US-Bundesstaat-EPR. |
| `recall-response` | Schweregradbewertung, Behördenmeldung (EU 10 Tage, US 24h, UK 3 Tage), Abschluss. |
| `product-safety-incident` | CPSC 24h, EU Safety Gate 10 Tage, Risikomatrix, Ursachenanalyse, Verbraucherkommunikation. |
| `import-export-docs` | Handelsrechnung, Packliste, EUR.1/REX/USMCA, Gefahrgutdeklarationen, Incoterms 2020. |
| `marketplace-compliance` | Erforderliche Dokumente pro Plattform pro Kategorie: Amazon EU GPSR+EPR, Walmart, Shopify, Etsy, TikTok Shop. |
| `regulatory-calendar` | Notifizierungs-Verlängerungen, Zertifikatsablauf, kommende Inkrafttreten (GPSR, CRA, MoCRA GMP, EUDR, ESPR). |

### 18 Produkt-Vertikalen

Tiefe, verordnungsspezifische Playbooks pro Kategorie:

`cosmetics-compliance` · `food-compliance` · `electronics-compliance` · `textile-compliance` · `toy-compliance` · `alcohol-spirits-compliance` · `supplement-compliance` · `jewelry-compliance` · `medical-device-compliance` · `pet-product-compliance` · `automotive-aftermarket-compliance` · `agricultural-compliance` · `tobacco-vape-compliance` · `sporting-goods-compliance` · `baby-children-products-compliance` · `household-chemicals-compliance` · `candle-fragrance-compliance` · `sustainability-compliance`

Jede Vertikale deckt den vollständigen Regulierungsstack für diese Kategorie über EU, USA, UK, Kanada, Japan, Korea, China, ASEAN ab — keine Zusammenfassung, die tatsächlichen Artikel, Gebührenstrukturen, Notifizierungsportale und Übergangsdaten.

### Referenz & Integration (3)

`compliance-frameworks-ref` (Regulierungs-Referenzindex) · `compliance-mcp-tools` (Cleo Legal API + Cleo Insight Integrationsmuster) · `compliance-reporting` (Produkt-Markt-Matrix, exportierbar).

## Der MCP-Moat

Die meisten Skill-Bibliotheken sind statisches Wissen — sie altern am Tag der Veröffentlichung. Diese hier ist über zwei MCP-Server an Live-Daten angeschlossen:

- **Cleo Legal API** — Zollklassifizierung, Stoff-Lookups, Zollberechnung, Landed Cost, Sanktions-Screening. Das Datenrückgrat für `product-compliance`, `customs-and-trade` und `substance-screening`.
- **Cleo Insight** — Live-Regulierungssignale über **25.000+ Vorschriften in 49 Ländern**. Der Signal-Feed für `regulatory-intelligence`, `multi-jurisdiction-scan` und `regulatory-calendar`.

**Die Skills funktionieren standalone** — ohne MCP fallen sie auf Websuche und dateibasierte Nachweise mit derselben Prompt-Struktur zurück. Mit aktiviertem MCP liefern dieselben Prompts aktuelle Daten statt Best-Effort-Lookups.

## Multi-Agent by default

Die Tier-3-Action-Skills versenden parallele Agenten via `superpowers:dispatching-parallel-agents`:

- `compliance-audit-sprint` — ein Agent pro Zielmarkt
- `multi-jurisdiction-scan` — ein Agent pro Jurisdiktions-Cluster
- `evidence-blitz` — ein Agent pro Dokumentenkategorie

Ein Multi-Markt-Launch-Audit, das einen Regulierungsberater 3 Wochen kostete, läuft in ~12 Minuten.

## Gebaut für

- Indie-Gründer und kleine Produktteams (1–10 Personen), die physische Produkte launchen
- D2C-Marken, die von einem Markt auf drei, fünf oder zehn expandieren
- Marketplace-Verkäufer im Kampf gegen Delisting (Amazon GPSR, EPR, MoCRA)
- Operatoren, die REACH, CLP, FDA MoCRA, Prop 65, GPSR, CRA, EUDR, CE/UKCA/FCC, EN 71 und den Long Tail handhaben
- Regulierungsberater, die einen First-Pass in Minuten statt Tagen wollen

## Nicht gebaut für

Wir versuchen nicht, Ihre Spezialisten zu ersetzen. **Wir bringen Sie 80 % des Weges, damit Ihr Spezialist sich auf die schwierigen 20 % konzentrieren kann.**

- Wir ersetzen kein **CE-Benannte-Stelle**-Audit (Medizinprodukte Klasse IIa+, PSA Kat III etc.)
- Wir ersetzen keinen **Kosmetik-Sicherheitsbewerter**, der Ihren CPSR unterschreibt
- Wir ersetzen keinen **zugelassenen Zollagenten** für die tatsächliche Grenzabfertigung
- Wir ersetzen keinen **Rechtsbeistand** für Rechtsstreit, Durchsetzungsverteidigung oder Produkthaftung
- Wir geben keine Rechtsberatung. Immer gegen offizielle Quellen verifizieren, bevor Sie eine Versandentscheidung treffen.

## Warum wir das gebaut haben

Wir sind Anaëlle (CEO) und Naomie (CDO), die Mitgründerinnen von [Cleo Labs](https://cleolabs.co). Wir haben mit Compliance-Arbeit angefangen, weil wir immer wieder dieselbe Szene gesehen haben: Eine kleine Marke verbringt 14 Monate damit, ein schönes Produkt zu bauen, verschifft ihren ersten Container nach Rotterdam oder Felixstowe und bleibt am Zoll wegen eines fehlenden REACH-Dossiers oder eines Anhang-III-Stoffs hängen, von dem sie nicht wusste, dass er letztes Quartal gekappt wurde. Ein 40-Fuß-Container, der an der EU-Grenze blockiert ist, kostet 15–40 T€ an Lagerung, Standgeld und Nacharbeit, bevor irgendjemand das Produkt überhaupt anfasst.

Das Wissen, um das zu verhindern, existiert. Es ist nur nicht dort, wo die Gründerin ist — es ist in 800 €/Stunde-Beraterdecks und 4.000-seitigen Regulierungs-PDFs eingeschlossen. Also haben wir es dorthin gestellt, wo die Gründerin ist: in ihren KI-Agenten. Das ist dieses Repo.

## Beispiele

Siehe [EXAMPLES.md](./EXAMPLES.md) für vollständige Walkthroughs (Gesichtscreme EU+UK, Bluetooth-Lautsprecher US+EU, Schokolade nach Japan, Spielzeugsicherheit, Amazon EU Evidence Pack).

## Mitwirken

PRs willkommen — besonders neue Vertikalen-Playbooks, Jurisdiktions-Updates und Korrekturen von Stoffgrenzwerten. Beginnen Sie mit [CONTRIBUTING.md](./CONTRIBUTING.md) und [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md). Sicherheitsprobleme: siehe [SECURITY.md](./SECURITY.md).

## Lizenz

MIT. Siehe [LICENSE](./LICENSE).

## Haftungsausschluss

> **Dies ist Compliance-Orientierung, keine Rechtsberatung.**
>
> Die Skills liefern einen Ausgangspunkt auf Basis öffentlich verfügbarer Vorschriften. Sie ersetzen keinen qualifizierten Regulierungsberater, keine Benannte Stelle, keinen Sicherheitsbewerter, keinen Zollagenten und keinen Rechtsbeistand.
>
> Regulatorische Daten (Stoffgrenzwerte, Inkrafttreten, Gebührenbeträge, Klassifizierungsregeln) ändern sich ständig. Verifizieren Sie kritische Informationen immer gegen die offizielle Quelle (EUR-Lex, FDA, gov.uk, MHLW etc.), bevor Sie eine Geschäftsentscheidung treffen. Cleo Labs haftet nicht für Entscheidungen, die auf Basis dieser Skills getroffen werden.

---

**Lesen in Ihrer Sprache:** [English](./README.md) · [Français](./README.fr.md) · [Español](./README.es.md) · [Deutsch](./README.de.md) · [日本語](./README.ja.md) · [简体中文](./README.zh.md)

Gebaut von [Cleo Labs](https://cleolabs.co). Angetrieben vom MARIA-Engine — 25.000 Vorschriften, 49 Länder, live.
