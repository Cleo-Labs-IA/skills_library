# Logo Usage Guidelines

How to use the **Cleo LABS** wordmark and related marks in editorial, partner, and product contexts.

> The marks below are trademarks of Cleo Corp SAS. Editorial use (news articles, podcasts, conference slides covering Cleo Labs / `skills_library`) is granted automatically. Commercial co-branding requires written approval — email contact@cleolabs.co.

---

## The marks

### Primary — Cleo LABS wordmark (color)

Two-tone wordmark. **`cleo`** in Cleo Blue (`#0008CF`), weight 900. **`LABS`** in Cleo Black (`#1A1A1A`), weight 400. Font: Satoshi.

**SVG source:**

```svg
<svg width="500" height="120" viewBox="0 0 500 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="0" y="85" font-family="'Satoshi', sans-serif" font-weight="900" font-size="90" fill="#0008CF">cleo</text>
  <text x="255" y="85" font-family="'Satoshi', sans-serif" font-weight="400" font-size="90" fill="#1A1A1A">LABS</text>
</svg>
```

> Drop this into any `<svg>` host. Native viewBox is `0 0 500 120`. Aspect ratio: **25:6**. Default render width: 500px.

---

### Secondary — Cleo LABS wordmark (white, for dark backgrounds)

Same geometry. Both words rendered in pure white (`#FFFFFF`). Use on any background darker than `#3A3A3A`.

```svg
<svg width="500" height="120" viewBox="0 0 500 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="0" y="85" font-family="'Satoshi', sans-serif" font-weight="900" font-size="90" fill="#FFFFFF">cleo</text>
  <text x="255" y="85" font-family="'Satoshi', sans-serif" font-weight="400" font-size="90" fill="#FFFFFF">LABS</text>
</svg>
```

---

### Icon-only — "C." square

Used for favicons, app icons, social avatars, and any context where the full wordmark is too wide.

```svg
<svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="120" height="120" rx="24" fill="#0008CF"/>
  <text x="20" y="92" font-family="'Satoshi', sans-serif" font-weight="900" font-size="90" fill="#FFFFFF">C.</text>
</svg>
```

> Aspect ratio: **1:1**. Rounded corners: `24px` at native size. Scales: 16px (favicon), 32px (UI), 256px (app icon).

---

## Sizing rules

### Minimum size

- **Wordmark:** 80px wide (web) / 20mm wide (print). Below this, fall back to the icon-only mark.
- **Icon-only:** 16px wide / 5mm. Below this, omit the mark entirely.

### Clear space

Maintain padding around the wordmark equivalent to the **height of the lowercase "l" in "cleo"**. Nothing — text, image, ruling line — should enter this clear-space zone.

```
   ┌─────────────────────────────────────────┐
   │                                         │
   │                                         │
   │           cleo LABS                     │
   │                                         │
   │                                         │
   └─────────────────────────────────────────┘
   ^                                         ^
   └── clear space = height of "l" in cleo ──┘
```

---

## Colors

| Token | Hex | Usage |
|---|---|---|
| **Cleo Blue** | `#0008CF` | Primary brand color. `cleo` wordmark, icon background, primary CTAs. |
| **Cleo Black** | `#1A1A1A` | `LABS` text, body copy. |
| **Cleo Peach** | `#FFD9C7` | Hero / warm background panels. |
| **Cleo Off-White** | `#FAF7F2` | Default page background. |
| **White** | `#FFFFFF` | Inverted wordmark; icon foreground. |

---

## Allowed uses

✅ News articles covering Cleo Labs or `skills_library`
✅ Podcast episode artwork when Naomie is the guest
✅ Conference slide decks featuring the company
✅ Integration partner pages ("works with Cleo Legal API")
✅ Comparison charts (alongside other dev-tool logos)
✅ Open-source contributor swag (please send us one)

## Forbidden uses

❌ Stretching, skewing, or warping the wordmark
❌ Recoloring outside the approved palette (no rainbow, no gradients, no "your brand's color")
❌ Rotating beyond 0° / 90° / 180° / 270°
❌ Adding drop shadows, glows, bevels, or outline strokes
❌ Combining with any other wordmark in a way that implies endorsement
❌ Use in contexts that contradict our messaging guide (e.g., "legal advice," "guaranteed compliance")
❌ Use in a manner that disparages Cleo Labs, our customers, or the open-source community

---

## File formats needed

When packaging the official logo bundle for distribution:

| Format | Purpose |
|---|---|
| **SVG** | Primary. Use everywhere it's supported — web, modern print, slide decks. |
| **PNG @ 1×** | Legacy web, email signatures, low-DPI displays. |
| **PNG @ 2×** | Retina web, modern email signatures. |
| **PNG @ 3×** | High-density mobile, print-quality web export. |
| **Favicon** | 16×16, 32×32, 48×48 ICO bundle + 180×180 Apple touch icon. |

**Naming convention:**

```
cleo-labs-wordmark-color.svg
cleo-labs-wordmark-color@1x.png   (500w)
cleo-labs-wordmark-color@2x.png   (1000w)
cleo-labs-wordmark-color@3x.png   (1500w)
cleo-labs-wordmark-white.svg
cleo-labs-wordmark-white@{1x,2x,3x}.png
cleo-labs-icon.svg
cleo-labs-icon@{1x,2x,3x}.png
cleo-labs-favicon.ico
cleo-labs-apple-touch-icon.png
```

Recommended bundle path: `press-kit/logos/`.

---

## Questions

📧 contact@cleolabs.co — typical response within 24h.
