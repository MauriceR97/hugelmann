# Hugelmann Design System

Design system for **interliving – Möbel Hugelmann GmbH**, an owner-run furniture and kitchen retailer in Lahr (Baden), Germany, and its kitchen division **Küchen Hugelmann**. Family business, founded ~70 years ago as a small joinery ("Schreinerei"), today one of the leading home-furnishing houses in Südbaden and the neighbouring Alsace — ~60 employees, 14.000 qm showroom, led by owner/managing director Rainer Hugelmann. Member of the **Interliving** buying group. Tagline: *besser wohnen!*

## Sources used
- `uploads/Hugelmann-Brandkit.pdf` — the official brand kit (Farbpalette + Schriftarten). Colours pixel-sampled from its swatches; fonts read from its text.
- Logo lockups: `Logo-Küche-Hugelmann.svg/.png` (colour), `-weiss` (white-out), `-grau` (greyscale) — the **Küchen Hugelmann** lockup with the grey *interliving* box and handwritten "besser wohnen!".
- Photography: `aussen.jpg` (Lahr store exterior, colour), `hugel-bild.webp` (exterior, black & white).
- Website: https://www.hugelmann.de/ (copy, tone, navigation, product structure) and the kitchen site https://www.kuechen-hugelmann.de/.

All copied assets live in `assets/`.

## Brand at a glance
- **Two colour identities.** *Küchen Hugelmann* is **blue (#034EA3)**; the parent *Möbel Hugelmann* wordmark on the building is **red (#E30613)**. This system treats **blue = primary**, **red = accent/promo**, **anthracite (#4A4A49)** = the interliving neutral. The supplied logo files are the blue Küchen lockup.
- **Typeface:** Fira Sans — Bold for headlines, Medium for body (per Brandkit).
- **Voice:** warm, personal, formal *Sie*; German; benefit-led retail copy.

---

## CONTENT FUNDAMENTALS

**Language & address.** German throughout. Customers are addressed with the formal **Sie / Ihr / Ihnen**, always capitalised ("Entdecken **Sie**…", "für **Ihre** Küchenträume"). Warm and personal, never stiff — the brand positions itself as a family business that advises "von Herzen".

**Tone.** Inviting, aspirational, reassuring. Copy sells a feeling of home and belonging, not just products: a kitchen is "ein Platz an dem … Emotionen geteilt werden", the entryway "bildet den ersten Eindruck eines jeden Zuhauses". Benefit-led and service-forward (own delivery & assembly, planning, consultation, fair pricing).

**Casing.** Headlines and section titles are frequently **ALL CAPS** on the site ("HERZLICH WILLKOMMEN", "UNSERE 5 VERSPRECHEN", "EINZIGARTIGE GRANIT-ARBEITSPLATTEN"). Eyebrow/kicker labels are uppercase and tracked out. Body is sentence case. CTAs are short and uppercase ("ZUM ONLINESHOP", "MEHR ERFAHREN", "JETZT ENTDECKEN").

**Voice examples (verbatim from site):**
- "Auf 14.000 qm präsentieren wir Markenmöbel für alle Wohnbereiche."
- "Egal welches Budget – wir haben die richtige Lösung für Ihre Küchenträume."
- "Nur ein paar Klicks zu Ihrer Traumküche."
- "Fachberatung von Herzen · Küchenplanung bis ins Detail · Aufbau Ihrer Küche mit höchster Sorgfalt."
- "besser wohnen!" (the handwritten claim, always with exclamation mark).

**Emoji.** The website uses ✓ check glyphs as list bullets in feature lists; otherwise **no decorative emoji**. Keep to functional marks (✓) — no faces, no hands.

**Numbers & units.** German formatting: prices as `2.499,–€` (dot thousands, comma/dash decimals, € trailing), areas as `14.000 qm`, phone `07821 / 96 570`.

---

## VISUAL FOUNDATIONS

**Colour.** A crisp, high-contrast retail palette on white. **Blue #034EA3** carries primary actions, links and the Küchen identity; **red #E30613** is reserved for accents, sale/price emphasis and the Möbel wordmark energy — used sparingly so it stays loud. **Anthracite #4A4A49** (the interliving box colour) is the dark neutral for footers, inverse surfaces and body text at its darkest. Backgrounds are predominantly **white** with a very light warm-grey (`--grey-50/100`) for alternating sections. Never more than one heavy colour field per view. See `tokens/colors.css`.

**Typography.** Fira Sans everywhere — a friendly, legible humanist sans. Headlines Bold/Black (700–800), tight tracking (`-0.02em`), balanced wrapping. Body Medium (500) at 16px, line-height 1.5–1.65. Eyebrows: Bold, uppercase, `0.14em` tracking, in blue. A handwritten script ("besser wohnen!") appears as a brand signature — in the locked logo it is a bespoke hand; for standalone use `--font-script` maps to **Caveat** (Google Fonts substitute, flagged below). See `tokens/typography.css`.

**Spacing & layout.** 4px base grid (`--space-*`). Generous, calm section rhythm (72px vertical section padding on desktop). Centered max-width containers (`--container-xl` 1440px) with 32px gutters. Content-led grids: 3-up category tiles, 3–4-up product grids, 2-up split promos.

**Backgrounds & imagery.** Real interior/showroom **photography** is the hero medium — warm, bright, lifestyle. Full-bleed hero images carry a **left-to-right blue protection gradient** (`rgba(3,32,63,…)`) so white headline text stays legible. A secondary treatment desaturates photography to **black & white** under a blue overlay for story/family banners. No illustration, no pattern/texture fills, no noise/grain. Gradients are used only as photo scrims, never as decorative color backgrounds.

**Corner radii.** Gently rounded, never sharp, never fully pill except on buttons/chips. Cards `--radius-lg` (14px), large media `--radius-xl` (22px), inputs/controls `--radius-md` (8px), badges `--radius-sm` (4px). Buttons and tags are full pills (`--radius-pill`).

**Elevation / shadows.** Soft, low-contrast catalog shadows (`--shadow-xs → xl`), warm-black tint `rgba(32,31,31,·)`, never harsh or colored. Cards sit on `--shadow-sm` and rise to `--shadow-lg` on hover. No inner shadows. Depth comes from shadow + subtle 1px `--border-subtle`, not from heavy strokes.

**Cards.** White surface, 1px `--border-subtle`, `--radius-lg`, `--shadow-sm`. On hover: lift (`translateY(-3px)`), grow shadow to `lg`, and product image zooms `scale(1.04)`. Product cards carry an optional top-left Badge and top-right wishlist IconButton.

**Borders.** Thin (1px) grey hairlines for structure (`--border-subtle/default`); 2px for button outlines and focus. Section dividers are 1px `--border-subtle`.

**Buttons & states.**
- *Hover:* filled buttons darken to the `-hover` token (blue→`blue-700`, red→`red-600`); outline buttons fill solid; ghost gets a `--surface-muted` wash. Links darken and underline. Cards lift.
- *Press/active:* no scale gimmicks — colour deepens to the `-active` token. Calm and functional.
- *Focus:* 3px blue focus ring (`--shadow-focus`) — visible, on-brand.
- *Disabled:* 45–50% opacity, `not-allowed` cursor.

**Motion.** Restrained and functional. Standard ease `cubic-bezier(0.4,0,0.2,1)` at 120–320ms. Fades, gentle lifts, accordion height transitions, image zoom. **No bounces, no springy overshoot, no long/animated page intros.**

**Transparency & blur.** Used only for photo scrims (semi-opaque blue gradients over hero/banner images). No frosted-glass/backdrop-blur panels.

**Fixed elements.** The header (utility bar + logo/search + mega-nav) is `position: sticky` at the top. Filter sidebars and product galleries use sticky positioning within their sections.

---

## ICONOGRAPHY

The brand site uses small **PNG social icons** (Instagram, Facebook, Pinterest) and **✓ check glyphs** as feature-list bullets; it has **no published proprietary icon set or icon font**. For UI work this system uses a **thin-stroke line-icon set in the Lucide style** (`ui_kits/website/Icons.jsx` → `window.HugelmannIcons`), matched to the brand's light, friendly weight (~1.9px stroke, round caps/joins). **This is a flagged substitution** — if Hugelmann has an official icon library, supply it and it will replace the set.

Guidance: line icons only (not filled) except where a filled state signals selection (e.g. an active wishlist heart, filled stars in `Rating`). Icon colour follows text/brand colour via `currentColor`. Emoji are **not** used; the only glyph carried over from the brand is the ✓ check in promise/feature lists. No hand-drawn one-off SVGs beyond this consistent set.

Available icons: Search, Heart, Cart, User, Menu, ChevronDown/Right, ArrowRight, Phone, Pin, Clock, Truck, Check, Ruler, Sparkle, Leaf, Play.

---

## Components
Reusable primitives (`window.HugelmannDesignSystem_eafd78`). Each has a `.jsx`, `.d.ts`, `.prompt.md` and a directory `@dsCard`.

**forms/** — `Button`, `IconButton`, `Input`, `Select`
**display/** — `Badge`, `Tag`, `Rating`, `Accordion`, `ProductCard`

*Intentional additions* (no source component library was supplied — only brand guidelines): the set above is a standard retail-site kit sized to Hugelmann's needs (marketing pages + shop). `ProductCard` composes `Badge`, `Rating` and `IconButton`. These are additions, not derived from a Hugelmann codebase.

---

## Index / manifest
- `styles.css` — global entry point (only `@import`s). Consumers link this.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `base.css`.
- `components/forms/`, `components/display/` — primitives (+ `.card.html` specimens).
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `ui_kits/website/` — interactive Möbel Hugelmann site recreation (Home / Shop / Product).
- `assets/` — `logo.{svg,png}`, `logo-weiss.{png,svg}`, `logo-grau.{svg,png}`, `aussen.jpg`, `hugel-bild.webp`.
- `thumbnail.html` — homepage tile.
- `SKILL.md` — Agent-Skill wrapper.

## Caveats & substitutions
- **Fonts:** Fira Sans (the genuine brand typeface) is loaded from **Google Fonts**, not self-hosted binaries — no font files were supplied. The handwritten "besser wohnen!" script is a bespoke hand in the logo; `--font-script` substitutes **Caveat** for standalone use. Supply the real script/font files to replace these.
- **Icons:** Lucide-style set as a flagged substitute (see ICONOGRAPHY).
- **Product imagery:** none supplied — shop tiles use honest labelled placeholders.
