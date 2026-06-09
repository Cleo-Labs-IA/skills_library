# Compliance Product Guidance

[![npm](https://img.shields.io/npm/v/@cleo-labs/skills-mcp?label=%40cleo-labs%2Fskills-mcp)](https://www.npmjs.com/package/@cleo-labs/skills-mcp)
[![npm downloads](https://img.shields.io/npm/dm/@cleo-labs/skills-mcp)](https://www.npmjs.com/package/@cleo-labs/skills-mcp)
[![MCP server](https://img.shields.io/badge/MCP-server-blue)](./mcp-server)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Skills](https://img.shields.io/badge/skills-51-blue)](./skills)
![GitHub stars](https://img.shields.io/github/stars/Cleo-Labs-IA/skills_library?style=social)
[![Cleo Labs](https://img.shields.io/badge/built%20by-Cleo%20Labs-0008CF)](https://cleolabs.co)

Copiloto de IA para el cumplimiento normativo de productos físicos — REACH, FDA, CE, aduanas y 24 normativas más, dentro de tu Claude Code, Cursor o Codex.

## ¿Qué es esto?

Vender un producto físico cruzando fronteras significa moverse entre más de 25.000 normativas repartidas en 49 países: sustancias prohibidas de las que nunca habías oído hablar, etiquetas que cambian cada trimestre, códigos arancelarios que mueven los aranceles un 12 %, reglas de marketplace que te retiran de la noche a la mañana. La mayoría de las marcas pequeñas lo aprenden por las malas — en la frontera, o después de que Amazon retire la ficha.

Compliance Product Guidance son **51 skills de calidad de producción + 2 servidores MCP** que enseñan a un agente de IA a responder una sola pregunta: *«¿Qué tengo que hacer concretamente para vender este producto en este mercado?»*

El skill estrella es `product-compliance`. Pegas una lista de ingredientes (o un BOM, o una fórmula), eliges tus mercados objetivo y ejecuta:

```
ingredientes  →  resolución CAS  →  13 bases regulatorias  →
veredicto por sustancia por mercado  →  cálculo de ingresos en riesgo
```

Salida de ejemplo:

```
Retinol 0.4%   UE: BLOQUEADO (Anexo III tope 0,3% productos faciales, vig. nov 2025)   €/año en riesgo: ~180 k€
Retinol 0.4%   EE.UU.: OK (sin tope federal; advertencia CA Prop 65 no requerida a esta dosis)
Retinol 0.4%   Reino Unido: BLOQUEADO (UK Cosmetics Reg refleja Anexo III UE)
Retinol 0.4%   Japón: REVISAR (umbral cuasi-fármaco — requiere revisión MHLW)
```

El mismo patrón sirve para un BOM electrónico (RoHS, REACH SVHC, CE/FCC, reglamento de baterías), una receta alimentaria (alérgenos, novel foods, FDA FSMA), un textil (PFAS, etiquetado de fibras, OEKO-TEX), o cualquiera de las 18 verticales de producto de abajo.

## Instalación

```bash
# Como servidor MCP (la vía más rápida)
npx -y @cleo-labs/skills-mcp@latest

# Como skills de Claude Code (basado en ficheros)
git clone https://github.com/Cleo-Labs-IA/skills_library.git ~/.claude/skills/comply
```

El paquete npm es la instalación en una línea para **Claude Desktop, Cursor, Continue, Zed y cualquier cliente compatible con MCP**. Los skills aparecen como recursos MCP nativos (`skill://<nombre>`), prompts parametrizados y tres herramientas estructuradas (`list_skills`, `find_skill`, `read_skill`).

Añade esto a la configuración de tu cliente:

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

Para **Claude Code**, la variante `git clone` coloca los skills en `~/.claude/skills/comply` y se activan automáticamente cuando preguntas sobre sustancias, etiquetas, aduanas, mercados o retiradas — sin invocación manual.

## Los 51 skills

### Motor de cumplimiento de producto (6)

Los skills que tocan tu producto real.

| Skill | Qué hace |
|-------|----------|
| `product-compliance` | **Skill estrella.** Chequeo completo de sustancias en 13 bases de datos, veredicto por mercado, ingresos en riesgo. |
| `substance-screening` | Screening profundo de ingredientes/materiales: INCI→CAS, márgenes de concentración, veredictos por jurisdicción. |
| `labeling-compliance` | Etiquetado país por país: INCI, alérgenos, advertencias, marcado CE/UKCA, reglas multilingües. |
| `testing-certification` | Tests/certificaciones requeridos por producto y mercado (CPSR, CE, FCC, UL, EN 71, HACCP). Selección de laboratorio, coste, plazos. |
| `claims-substantiation` | Validar reclamaciones de marketing: UE 655/2013, frontera FDA fármaco/cosmético, FTC, claims verdes. |
| `market-entry-checklist` | Paso a paso: clasificar → regulaciones → sustancias → etiquetas → certs → aduanas → notificación. |

### Inteligencia y acción multi-mercado (13)

Los skills que te llevan de «tenemos un problema» a «lo hemos enviado».

| Skill | Qué hace |
|-------|----------|
| `regulatory-intelligence` | Monitorización de señales: prohibiciones de sustancias, cambios de etiquetado, retiradas, fechas de aplicación. |
| `multi-jurisdiction-scan` | Escaneo paralelo en todos los mercados objetivo. ROJO/NARANJA/AMARILLO/VERDE por mercado. Un agente por jurisdicción. |
| `customs-and-trade` | Código HS, aranceles, coste puesto en destino, doble uso, sanciones. |
| `compliance-audit-sprint` | Sprint pre-lanzamiento: identificar → mapear → comprobar → verificar → estimar coste. Agentes en paralelo. |
| `compliance-remediation` | Resolver no conformidades para desbloquear la entrada al mercado: reformular, reetiquetar, testar, certificar. |
| `evidence-blitz` | Recopilación paralela de evidencias de cumplimiento para auditoría, certificación o listado de marketplace. |
| `responsible-person` | Configurar PR UE, PR Reino Unido, US Agent, AR EAEU, titular NMPA China. Cartas de mandato, costes, obligaciones. |
| `packaging-compliance` | RAP por estado miembro UE, transición PPWR, SUP, impuesto al plástico, RAP estatal en EE.UU. |
| `recall-response` | Evaluación de severidad, notificación a autoridades (UE 10 días, EE.UU. 24h, Reino Unido 3 días), cierre. |
| `product-safety-incident` | CPSC 24h, Safety Gate UE 10 días, matriz de riesgo, análisis de causa raíz, comunicación al consumidor. |
| `import-export-docs` | Factura comercial, packing list, EUR.1/REX/USMCA, declaraciones de mercancías peligrosas, Incoterms 2020. |
| `marketplace-compliance` | Documentos requeridos por plataforma y categoría: Amazon UE GPSR+RAP, Walmart, Shopify, Etsy, TikTok Shop. |
| `regulatory-calendar` | Renovaciones de notificación, expiración de certs, próximas entradas en vigor (GPSR, CRA, MoCRA GMP, EUDR, ESPR). |

### 18 verticales de producto

Playbooks regulatorios detallados por categoría:

`cosmetics-compliance` · `food-compliance` · `electronics-compliance` · `textile-compliance` · `toy-compliance` · `alcohol-spirits-compliance` · `supplement-compliance` · `jewelry-compliance` · `medical-device-compliance` · `pet-product-compliance` · `automotive-aftermarket-compliance` · `agricultural-compliance` · `tobacco-vape-compliance` · `sporting-goods-compliance` · `baby-children-products-compliance` · `household-chemicals-compliance` · `candle-fragrance-compliance` · `sustainability-compliance`

Cada vertical cubre la pila regulatoria completa para esa categoría en UE, EE.UU., Reino Unido, Canadá, Japón, Corea, China, ASEAN — no un resumen, los artículos reales, estructuras de tasas, portales de notificación y fechas de transición.

### Referencia e integración (3)

`compliance-frameworks-ref` (índice de referencia regulatorio) · `compliance-mcp-tools` (patrones de integración Cleo Legal API + Cleo Insight) · `compliance-reporting` (matriz producto-mercado, exportable).

## El foso MCP

La mayoría de las bibliotecas de skills son conocimiento estático — envejecen el día que se publican. Esta está conectada a datos en vivo vía dos servidores MCP:

- **Cleo Legal API** — clasificación aduanera, búsqueda de sustancias, cálculo de aranceles, coste puesto en destino, screening de sanciones. La espina dorsal de `product-compliance`, `customs-and-trade` y `substance-screening`.
- **Cleo Insight** — señales regulatorias en vivo sobre **más de 25.000 normativas en 49 países**. El feed para `regulatory-intelligence`, `multi-jurisdiction-scan` y `regulatory-calendar`.

**Los skills funcionan en standalone** — sin MCP, retroceden a búsqueda web y evidencias basadas en ficheros con la misma estructura de prompt. Con MCP habilitado, los mismos prompts devuelven datos actualizados en lugar de búsquedas best-effort.

## Multi-agente por defecto

Los skills de Tier 3 despachan agentes paralelos vía `superpowers:dispatching-parallel-agents`:

- `compliance-audit-sprint` — un agente por mercado objetivo
- `multi-jurisdiction-scan` — un agente por clúster de jurisdicciones
- `evidence-blitz` — un agente por categoría documental

Una auditoría de lanzamiento multi-mercado que le llevaba a un consultor regulatorio 3 semanas corre en ~12 minutos.

## Para quién

- Fundadores indie y equipos pequeños de producto (1–10 personas) lanzando bienes físicos
- Marcas D2C expandiéndose de un mercado a tres, cinco o diez
- Vendedores de marketplace luchando contra el delisting (Amazon GPSR, RAP, MoCRA)
- Operadores trabajando con REACH, CLP, FDA MoCRA, Prop 65, GPSR, CRA, EUDR, CE/UKCA/FCC, EN 71 y la larga cola
- Consultores regulatorios que quieren la primera pasada en minutos, no días

## Para quién NO

No buscamos sustituir a tus especialistas. **Te llevamos el 80 % del camino para que tu especialista se centre en el 20 % difícil.**

- No sustituimos una auditoría de **Organismo Notificado CE** (DM Clase IIa+, EPI Cat III, etc.)
- No sustituimos a un **evaluador de seguridad cosmética** que firma tu CPSR
- No sustituimos a un **agente de aduanas licenciado** para el despacho real
- No sustituimos a un **asesor legal** en litigios, defensa frente a sanciones o responsabilidad del producto
- No damos asesoramiento legal. Verifica siempre contra fuentes oficiales antes de una decisión de envío.

## Por qué lo hicimos

Somos Anaëlle (CEO) y Naomie (CDO), cofundadoras de [Cleo Labs](https://cleolabs.co). Empezamos con cumplimiento porque veíamos la misma escena repetirse: una marca pequeña pasa 14 meses construyendo un producto precioso, envía su primer contenedor a Róterdam o Felixstowe, y se lo retienen en aduanas por un dosier REACH ausente o una sustancia del Anexo III que no sabían que se había capado el trimestre pasado. Un contenedor de 40 pies bloqueado en la frontera UE cuesta 15–40 k€ en almacenaje, demoras y rework antes de que nadie toque el producto.

El conocimiento para evitar eso existe. Solo que no está donde está el fundador — está encerrado en decks de consultores a 800 €/hora y PDFs regulatorios de 4.000 páginas. Así que lo pusimos donde el fundador está: en su agente de IA. Esto es este repo.

## Ejemplos

Ver [EXAMPLES.md](./EXAMPLES.md) para walkthroughs completos (crema facial UE+UK, altavoz Bluetooth EE.UU.+UE, chocolate a Japón, seguridad de juguete, evidence pack Amazon UE).

## Contribuir

PRs bienvenidas — especialmente nuevos playbooks de verticales, actualizaciones de jurisdicción y correcciones de límites de sustancias. Empezar con [CONTRIBUTING.md](./CONTRIBUTING.md) y [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md). Problemas de seguridad: ver [SECURITY.md](./SECURITY.md).

## Licencia

MIT. Ver [LICENSE](./LICENSE).

## Aviso legal

> **Esto es orientación de cumplimiento, no asesoramiento legal.**
>
> Los skills proporcionan un punto de partida basado en normativas públicas. No sustituyen a un consultor regulatorio cualificado, Organismo Notificado, evaluador de seguridad, agente de aduanas o asesor legal.
>
> Los datos regulatorios (límites de sustancias, fechas de entrada en vigor, importes de tasas, reglas de clasificación) cambian constantemente. Verifica siempre la información crítica contra la fuente oficial (EUR-Lex, FDA, gov.uk, MHLW, etc.) antes de tomar una decisión de negocio. Cleo Labs no se hace responsable de decisiones tomadas en base a estos skills.

---

**Léelo en tu idioma:** [English](./README.md) · [Français](./README.fr.md) · [Español](./README.es.md) · [Deutsch](./README.de.md) · [日本語](./README.ja.md) · [简体中文](./README.zh.md)

Construido por [Cleo Labs](https://cleolabs.co). Impulsado por el motor MARIA — 25.000 normativas, 49 países, en vivo.
