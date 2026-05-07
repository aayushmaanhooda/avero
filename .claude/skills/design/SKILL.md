---
name: design
description: Avreo marketing site design system — color, typography, section pills, glass-morphism cards, transitions, video/image treatment, responsive rules. Use when adding/editing any UI on the Avreo frontend so new work matches the established aesthetic.
---

# Avreo Marketing Site — Design System

This skill captures the design conventions established for the Avreo marketing frontend (`frontend/`). Follow these rules so every new section, page, or component blends with the existing aesthetic.

> **Reference:** the live site is https://avreo.ai/ — defer to it for brand voice/copy. This skill governs *visual* implementation.

---

## 1. Color

**Active palette:** Palette 2 — **Navy** (see `palette` skill for full token table).
- Tokens registered in `tailwind.config.js` under `brand.{200,400,600,800,950}`.

**Accent (the only highlight color):** `#00BBFF` — registered as Tailwind `accent` token.
- The user picks this hex; **do not change it proactively**. If asked what it is, return `#00BBFF`.
- Used for: headline highlight phrases, FA icons inside pills, primary CTA fills, glow accents, link hovers.
- `text-accent` Tailwind utility may not regenerate after a config change — use inline `style={{ color: '#00BBFF' }}` for highlight phrases for cache-proofness, OR declare `const ACCENT = '#00BBFF'` at the top of each component and reference it.

**No other accent hues.** Don't introduce greens, oranges, purples. Only the navy palette + `#00BBFF`.

---

## 2. Typography

- **Body / UI:** `Inter` (sans). Loaded via Google Fonts in `index.html`.
- **Highlight phrases:** `Playfair Display`, **italic** weight 500–700, applied via `font-display italic font-medium`. Used for the *one* phrase per heading that should pop in accent color.
- **Eyebrow / pill text:** `text-xs font-semibold uppercase tracking-[0.18em]`.
- **Body proportions:**
  - Section heading: `text-3xl sm:text-4xl md:text-5xl` (or up to `md:text-6xl` for the boldest sections like Hero/Boarding).
  - Subhead: `text-base md:text-lg`.
  - Card body: `text-sm md:text-base` or `text-[13px] md:text-sm` for tighter cards.
  - Pill: `text-[10px] sm:text-xs`.

**Pattern for the headline + accent phrase:**

```jsx
<h2 className="text-balance text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl">
  Plain part of the headline{' '}
  <span style={{ color: '#00BBFF' }} className="font-display italic font-medium">
    accent phrase
  </span>
</h2>
```

Use `text-balance` on every multi-line heading.

---

## 3. The Section "Category Pill" — canonical convention

Every section's eyebrow above the headline uses this exact pattern. **Do not deviate** (tone, sizing, icon — all locked):

```jsx
<span className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
  <FontAwesomeIcon
    icon={faXxx}
    className="h-3 w-3"
    style={{ color: '#00BBFF' }}
  />
  Section Label
</span>
```

**Icon-per-section register** (keep growing this when new sections are added so icons stay distinct):

| Section            | Icon                |
| ------------------ | ------------------- |
| Hero               | `faRocket`          |
| The Shift          | `faArrowsRotate`    |
| AI-Native          | `faRobot`           |
| Our Approach       | `faCompass`         |
| Why Now            | `faBolt`            |
| Success Stories    | `faStar`            |
| The Question       | `faCircleQuestion`  |
| Jetstar Principle  | `faPlaneUp`         |
| Boarding Now       | `faPaperPlane`      |
| Contact Us         | `faEnvelope`        |
| Privacy Policy     | `faShieldHalved`    |
| What We Do         | `faBriefcase`       |
| The Benefits       | `faAward`           |

> Pick the most semantically obvious FA solid icon when adding a new pill. Avoid duplicates across the same page.

---

## 4. Section Backdrop System

Every section is `relative isolate overflow-hidden` and stacks these layered backdrops behind content (`-z-10` / `-z-20`):

1. **Base bg color** — alternate `bg-brand-950` ↔ `bg-brand-800` between consecutive sections.
2. **Top fade** (height `h-64 md:h-80`) — 4-stop linear gradient from the *previous section's end color* down to `transparent`. Example:
   ```css
   linear-gradient(180deg, #1F487E 0%, rgba(31,72,126,0.85) 30%, rgba(31,72,126,0.4) 65%, rgba(31,72,126,0) 100%)
   ```
3. **Bottom fade** — symmetric, fading *to* the next section's start color.
4. **Optional grid** — faint dotted/grid overlay (`opacity-50` masked by a radial-gradient ellipse).
5. **Optional accent glow blob** — large `blur-3xl rounded-full` div with `rgba(0,187,255,0.15–0.30)` for atmosphere.

**Critical rule for blending:** the top-fade start color of section N+1 **must equal** the bottom-fade end color of section N. If you see a visible band/seam between two sections, that's the bug — sync the colors.

**Standard color anchors:**
- `#1D3461` = `brand-950`
- `#1F487E` = `brand-800`

---

## 5. Glass Card Pattern

Cards on dark sections use this glassmorphism baseline:

```
rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md
```

- Hover: `transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06]`.
- Padding: `p-5 md:p-6` for tight cards, `p-6 md:p-7` for roomier cards.
- Icon container inside a card: `h-9 w-9` rounded-xl, accent-tinted bg `rgba(0,187,255,0.08)` with border `rgba(0,187,255,0.35)` and FA icon at `h-3.5 w-3.5` in accent.
- Numerical / step badges in cards: `font-display italic` in accent.

Heavier surfaces (Contact card, JetstarPrinciple jetstar image holder) use:
```
rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md
boxShadow: '0 30px 60px -30px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)'
```

---

## 6. Buttons

- **Primary CTA (accent-fill):** `bg-accent text-brand-950 rounded-2xl px-6 py-3 font-semibold` with hover `-translate-y-0.5`.
- **Secondary (white):** `bg-white text-brand-950 rounded-2xl ring-1 ring-white/40`.
- **Tertiary / ghost (on dark):** `border border-white/30 bg-white/[0.08] text-white backdrop-blur-md`.
- Group multiple CTAs with `flex flex-col gap-3 sm:flex-row sm:gap-4`. On mobile they stack full-width.

---

## 7. Video & Image Treatment

**Videos in use** (`frontend/public/videos/`):
- `hero.mp4` — full-bleed background of the Hero (with navy wash + radial glow + bottom blend gradient).
- `clouds.mp4` — used in Success Stories (full-bleed with navy gradient veil) and What We Do hero (partial top fill with mask).

Standard video block:
```jsx
<video autoPlay muted loop playsInline className="absolute inset-0 -z-20 h-full w-full object-cover">
  <source src="/videos/clouds.mp4" type="video/mp4" />
</video>
```
Always pair a video with a navy gradient overlay so headlines stay readable.

**Image treatments:**
- White-bg PNGs on dark sections: `mixBlendMode: 'screen'` to drop the white.
- White-source logos on white cards: `filter: invert(1)` to flip to black.
- Color logos on white cards: `filter: grayscale(1) contrast(20) brightness(0.85)` + `mixBlendMode: 'multiply'` to coerce to black silhouettes.
- Hero/Why-Now style asymmetric "leaf" image frames: `borderRadius: '88px 16px 88px 16px / 72px 22px 72px 22px'`.

---

## 8. Routing & Persistent UI

- **Stack:** Vite + React (JS, not TS) + React Router DOM v6.
- All routes live in `src/main.jsx` inside `<BrowserRouter>` → `<Routes>`.
- **Persistent components** (sticky chat widget, etc.) mount **once** outside `<Routes>` but inside `<BrowserRouter>` so they appear on every page.
- Navbar uses `<Link>` for paths starting with `/` and `<a href="#hash">` for in-page anchors — see `Navbar.jsx`'s `NavLinkItem` for the switch.
- Each routed page does `useEffect(() => window.scrollTo(0, 0), [])` to reset scroll on mount.

---

## 9. Chat Widget (Yianni)

- Fixed bottom-right launcher in **chat-bubble shape** (not a circle): `borderRadius: '22px 22px 6px 22px'` plus a small rotated-square "tail" at bottom-right.
- Launcher contents = the `chat.png` mark used as a CSS mask filled in accent color (so it tints with the rest of the brand).
- No glow/animate-ping on the launcher — flat shape only.
- Panel anchors above launcher; uses dark `#0B1A36` glass bg, scrollbar hidden via `[scrollbar-width:none] [&::-webkit-scrollbar]:hidden`.
- Bot name: **Yianni**. Greeting line uses `Yianni` in accent italic Playfair.
- Esc closes; focus returns to input on open.

---

## 10. Favicon

`/public/favicon.svg` is an `ai` text mark in `#00BBFF`. Wired in `index.html` as the primary favicon; `chat.png` serves as `apple-touch-icon`. When the accent hex is changed, swap `fill` in `favicon.svg` too.

---

## 11. Responsive Rules

The site is built mobile-first then up. Breakpoints used: `sm: 640`, `md: 768`, `lg: 1024`, `xl: 1280`, `2xl: 1536`.

- **Phone (`<sm`):**
  - Padding: `px-5 py-16` baseline, never less than `px-5`.
  - Heading sizes: `text-3xl` (or `text-[2rem]` for Hero).
  - All button rows must stack (`flex-col` → `sm:flex-row`).
  - All multi-column grids start at `grid-cols-1` and scale up.
  - **No horizontal overflow.** `html, body { overflow-x: hidden }` is set in `index.css` because blur blobs can leak.
- **Laptop / Mac (`md`–`xl`):** the design baseline. Most existing classes target this.
- **Monitor (`2xl`+):** add `2xl:max-w-[1440px]` on outer containers and `2xl:text-7xl` etc on big headings so the layout doesn't feel pinched on 4K screens.

Form footer / button rows on cards: `flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between` so the button is full-width on mobile but inline on desktop.

---

## 12. Tone of Voice for Visual Decisions

- Terse > ornate. Empty whitespace > visual noise.
- One accent color, one accent typeface, one highlight phrase per heading.
- Smooth section blends > sharp section breaks.
- Don't introduce new component libraries (no Headless UI, MUI, etc.) — Tailwind utilities + FontAwesome only.
- Don't add emojis unless explicitly asked.

---

## 13. Common Failure Modes (avoid)

- Using `text-accent` Tailwind class without inline-style fallback → may render white due to JIT cache miss.
- Tinting JPEGs with `brightness(0) invert(1)` → solid white blocks (JPEGs have no transparency).
- Copying the dot-style pill `<span className="h-1.5 w-1.5 rounded-full bg-brand-400" />` instead of the FA icon pattern → inconsistent eyebrow style.
- Section bg-color that doesn't match adjacent fades → visible seam band.
- Centered hero layouts on the marketing site — Avreo's hero is **left-aligned** on `text-left max-w-5xl`.
- Adding "Start the conversation" CTA where the user has already removed it (Our Approach, What We Do — these should NOT have a bottom CTA).

---

## 14. File Layout Reference

```
frontend/
├── public/
│   ├── favicon.svg            ai mark in accent
│   ├── logo/
│   │   ├── chat.png           Yianni "ai" mark
│   │   ├── clouds.jpg
│   │   ├── jetstar.png
│   │   └── logo.png           Avreo wordmark
│   ├── videos/
│   │   ├── hero.mp4
│   │   └── clouds.mp4
│   ├── gifs/                  why-us.png, whatwedo.png
│   └── success/               client logos
└── src/
    ├── main.jsx               BrowserRouter + Routes + ChatWidget
    ├── App.jsx                landing-page section composition
    ├── index.css              Tailwind + global overflow fix + .shiny-border keyframes
    ├── components/            section components, Navbar, Footer, ChatWidget, etc.
    └── pages/                 routed pages (Privacy, WhatWeDo)
```
