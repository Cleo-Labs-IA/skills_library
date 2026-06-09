# Compliance Product Guidance

[![npm](https://img.shields.io/npm/v/@cleo-labs/skills-mcp?label=%40cleo-labs%2Fskills-mcp)](https://www.npmjs.com/package/@cleo-labs/skills-mcp)
[![npm downloads](https://img.shields.io/npm/dm/@cleo-labs/skills-mcp)](https://www.npmjs.com/package/@cleo-labs/skills-mcp)
[![MCP server](https://img.shields.io/badge/MCP-server-blue)](./mcp-server)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Skills](https://img.shields.io/badge/skills-51-blue)](./skills)
![GitHub stars](https://img.shields.io/github/stars/Cleo-Labs-IA/skills_library?style=social)
[![Cleo Labs](https://img.shields.io/badge/built%20by-Cleo%20Labs-0008CF)](https://cleolabs.co)

Copilote IA de conformité réglementaire pour produits physiques — REACH, FDA, CE, douanes et 24 autres réglementations, directement dans Claude Code, Cursor ou Codex.

## De quoi s'agit-il ?

Vendre un produit physique à l'international, c'est naviguer dans 25 000+ réglementations réparties sur 49 pays : substances interdites dont vous n'avez jamais entendu parler, étiquettes qui changent chaque trimestre, codes douaniers qui font varier les droits de 12 %, règles marketplaces qui font déréférencer une fiche du jour au lendemain. La plupart des petites marques l'apprennent à leurs dépens — à la frontière, ou après qu'Amazon ait retiré l'annonce.

Compliance Product Guidance, c'est **51 skills de qualité production + 2 serveurs MCP** qui apprennent à un agent IA à répondre à une seule question : *« Que dois-je concrètement faire pour vendre ce produit sur ce marché ? »*

Le skill phare est `product-compliance`. Vous collez une liste d'ingrédients (ou un BOM, ou une formule), choisissez vos marchés cibles, et il exécute :

```
ingrédients  →  résolution CAS  →  13 bases réglementaires  →
verdict par substance par marché  →  calcul du chiffre d'affaires à risque
```

Exemple de sortie :

```
Retinol 0.4%   UE : BLOQUÉ (cap Annexe III 0.3% produits visage, eff. nov. 2025)   CA/an à risque : ~180 k€
Retinol 0.4%   US : OK (pas de cap fédéral ; mention CA Prop 65 non requise à cette dose)
Retinol 0.4%   UK : BLOQUÉ (UK Cosmetics Reg reprend l'Annexe III UE)
Retinol 0.4%   JP : À REVOIR (seuil quasi-médicament — examen MHLW requis)
```

Le même schéma fonctionne pour un BOM électronique (RoHS, REACH SVHC, CE/FCC, règlement batteries), une recette alimentaire (allergènes, novel foods, FDA FSMA), un textile (PFAS, étiquetage fibres, OEKO-TEX), ou n'importe quelle des 18 verticales produit ci-dessous.

## Installation

```bash
# En serveur MCP (le plus rapide)
npx -y @cleo-labs/skills-mcp@latest

# En skills Claude Code (fichiers locaux)
git clone https://github.com/Cleo-Labs-IA/skills_library.git ~/.claude/skills/comply
```

Le package npm est l'installation en une ligne pour **Claude Desktop, Cursor, Continue, Zed et tout client compatible MCP**. Les skills apparaissent comme ressources MCP natives (`skill://<nom>`), prompts paramétrés et trois outils structurés (`list_skills`, `find_skill`, `read_skill`).

Ajoutez ceci dans la config de votre client :

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

Pour **Claude Code**, la variante `git clone` dépose les skills dans `~/.claude/skills/comply` et ils se déclenchent automatiquement quand vous parlez substances, étiquettes, douanes, marchés ou rappels — pas d'invocation manuelle.

## Les 51 skills

### Moteur de conformité produit (6)

Les skills qui touchent votre produit réel.

| Skill | Rôle |
|-------|------|
| `product-compliance` | **Skill phare.** Contrôle substances complet sur 13 bases, verdict par marché, CA à risque. |
| `substance-screening` | Screening profond ingrédients/matières : INCI→CAS, marges de concentration, verdicts par juridiction. |
| `labeling-compliance` | Étiquetage pays par pays : INCI, allergènes, mentions, marquage CE/UKCA, règles multilingues. |
| `testing-certification` | Tests/certs requis par produit par marché (CPSR, CE, FCC, UL, EN 71, HACCP). Choix labo, coût, délais. |
| `claims-substantiation` | Validation des allégations marketing : UE 655/2013, frontière médicament/cosmétique FDA, FTC, allégations environnementales. |
| `market-entry-checklist` | Étape par étape : classer → réglementations → substances → étiquettes → certs → douane → notification. |

### Intelligence et action multi-marchés (13)

Les skills qui vous font passer de « on a un problème » à « on a expédié ».

| Skill | Rôle |
|-------|------|
| `regulatory-intelligence` | Veille signaux : interdictions de substances, changements d'étiquetage, rappels, dates d'application. |
| `multi-jurisdiction-scan` | Scan parallèle sur tous les marchés cibles. ROUGE/ORANGE/JAUNE/VERT par marché. Un agent par juridiction. |
| `customs-and-trade` | Code SH, droits, coût rendu, biens à double usage, sanctions. |
| `compliance-audit-sprint` | Sprint pré-lancement : identifier → mapper → vérifier → certifier → chiffrer. Agents en parallèle. |
| `compliance-remediation` | Corriger les non-conformités pour débloquer l'entrée marché : reformuler, ré-étiqueter, tester, certifier. |
| `evidence-blitz` | Collecte parallèle des preuves de conformité pour audit, certification ou listing marketplace. |
| `responsible-person` | Mettre en place RP UE, RP UK, US Agent, AR EAEU, titulaire NMPA Chine. Lettres de mandat, coûts, obligations. |
| `packaging-compliance` | REP par État membre UE, transition PPWR, SUP, taxe plastique, REP par État américain. |
| `recall-response` | Évaluation de gravité, notification autorités (UE 10 jours, US 24h, UK 3 jours), clôture. |
| `product-safety-incident` | CPSC 24h, Safety Gate UE 10 jours, matrice de risque, analyse de cause racine, communication consommateurs. |
| `import-export-docs` | Facture commerciale, packing list, EUR.1/REX/USMCA, déclarations MD, Incoterms 2020. |
| `marketplace-compliance` | Documents requis par plateforme par catégorie : Amazon UE GPSR+REP, Walmart, Shopify, Etsy, TikTok Shop. |
| `regulatory-calendar` | Renouvellements de notification, expiration de certs, échéances réglementaires (GPSR, CRA, MoCRA GMP, EUDR, ESPR). |

### 18 verticales produit

Playbooks réglementaires détaillés par catégorie :

`cosmetics-compliance` · `food-compliance` · `electronics-compliance` · `textile-compliance` · `toy-compliance` · `alcohol-spirits-compliance` · `supplement-compliance` · `jewelry-compliance` · `medical-device-compliance` · `pet-product-compliance` · `automotive-aftermarket-compliance` · `agricultural-compliance` · `tobacco-vape-compliance` · `sporting-goods-compliance` · `baby-children-products-compliance` · `household-chemicals-compliance` · `candle-fragrance-compliance` · `sustainability-compliance`

Chaque verticale couvre la pile réglementaire complète pour la catégorie sur UE, US, UK, Canada, Japon, Corée, Chine, ASEAN — pas un résumé, les articles réels, grilles tarifaires, portails de notification et dates de transition.

### Référence et intégration (3)

`compliance-frameworks-ref` (index de référence) · `compliance-mcp-tools` (intégration Cleo Legal API + Cleo Insight) · `compliance-reporting` (matrice produit-marché, exportable).

## Le moat MCP

La plupart des bibliothèques de skills sont des connaissances statiques — obsolètes le jour de la livraison. Celle-ci est branchée sur des données vivantes via deux serveurs MCP :

- **Cleo Legal API** — classification douanière, lookups substances, calcul droits, coût rendu, screening sanctions. La colonne dorsale de `product-compliance`, `customs-and-trade` et `substance-screening`.
- **Cleo Insight** — signaux réglementaires en temps réel sur **25 000+ réglementations dans 49 pays**. Flux pour `regulatory-intelligence`, `multi-jurisdiction-scan` et `regulatory-calendar`.

**Les skills fonctionnent en standalone** — sans MCP, ils retombent sur la recherche web et les preuves fichier avec la même structure de prompt. Avec MCP activé, les mêmes prompts renvoient des données à jour au lieu de lookups au mieux.

## Multi-agents par défaut

Les skills Tier 3 dispatchent des agents parallèles via `superpowers:dispatching-parallel-agents` :

- `compliance-audit-sprint` — un agent par marché cible
- `multi-jurisdiction-scan` — un agent par cluster de juridictions
- `evidence-blitz` — un agent par catégorie documentaire

Un audit de lancement multi-marchés qui prenait 3 semaines à un consultant réglementaire tourne en ~12 minutes.

## Pour qui ?

- Fondateurs indépendants et petites équipes produit (1–10 personnes) qui lancent du physique
- Marques D2C qui passent d'un marché à trois, cinq ou dix
- Vendeurs marketplace face aux déréférencements (Amazon GPSR, REP, MoCRA)
- Opérateurs sur REACH, CLP, FDA MoCRA, Prop 65, GPSR, CRA, EUDR, CE/UKCA/FCC, EN 71, et la longue traîne
- Consultants réglementaires qui veulent un premier passage en minutes plutôt qu'en jours

## Pas pour qui ?

On ne cherche pas à remplacer vos spécialistes. **On vous emmène à 80 % du chemin pour que votre spécialiste se concentre sur les 20 % difficiles.**

- On ne remplace pas un audit **Organisme Notifié CE** (DM Classe IIa+, EPI Cat III, etc.)
- On ne remplace pas un **évaluateur de sécurité cosmétique** qui signe votre CPSR
- On ne remplace pas un **commissionnaire en douane** pour le dédouanement
- On ne remplace pas un **conseil juridique** en contentieux ou responsabilité produit
- On ne donne pas d'avis juridique. Toujours vérifier les sources officielles avant une décision d'expédition.

## Pourquoi on a construit ça

On est Anaëlle (CEO) et Naomie (CDO), cofondatrices de [Cleo Labs](https://cleolabs.co). On a démarré le travail conformité parce qu'on voyait la même scène se répéter : une petite marque passe 14 mois à construire un beau produit, expédie son premier conteneur à Rotterdam ou Felixstowe, et se le fait bloquer en douane pour un dossier REACH manquant ou une substance Annexe III capée le trimestre dernier. Un conteneur 40 pieds bloqué à la frontière UE, c'est 15–40 k€ de stockage, surestaries et retravail avant même qu'on touche au produit.

La connaissance pour éviter ça existe. Elle n'est juste pas là où est le fondateur — elle est verrouillée dans des decks de consultants à 800 €/heure et des PDFs réglementaires de 4 000 pages. On l'a donc mise là où le fondateur est : dans son agent IA. C'est ce repo.

## Exemples

Voir [EXAMPLES.md](./EXAMPLES.md) pour des walkthroughs complets (crème visage UE+UK, enceinte Bluetooth US+UE, chocolat vers Japon, jouet sécurité enfant, evidence pack Amazon UE).

## Contribuer

PRs bienvenues — surtout nouveaux playbooks verticales, mises à jour juridiction, corrections de limites de substances. Démarrer avec [CONTRIBUTING.md](./CONTRIBUTING.md) et [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md). Failles de sécurité : voir [SECURITY.md](./SECURITY.md).

## Licence

MIT. Voir [LICENSE](./LICENSE).

## Avertissement

> **Ceci est de l'orientation conformité, pas un avis juridique.**
>
> Les skills fournissent un point de départ basé sur des réglementations publiques. Ils ne remplacent ni un consultant réglementaire qualifié, ni un Organisme Notifié, ni un évaluateur de sécurité, ni un commissionnaire en douane, ni un avocat.
>
> Les données réglementaires (limites de substances, dates d'application, montants des frais, règles de classification) changent constamment. Toujours vérifier les informations critiques auprès de la source officielle (EUR-Lex, FDA, gov.uk, MHLW, etc.) avant toute décision business. Cleo Labs n'est pas responsable des décisions prises sur la base de ces skills.

---

**Lire dans une autre langue :** [English](./README.md) · [Français](./README.fr.md) · [Español](./README.es.md) · [Deutsch](./README.de.md) · [日本語](./README.ja.md) · [简体中文](./README.zh.md)

Construit par [Cleo Labs](https://cleolabs.co). Propulsé par le moteur MARIA — 25 000 réglementations, 49 pays, en direct.
