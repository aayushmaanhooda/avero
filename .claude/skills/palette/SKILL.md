---
name: palette
description: Avreo's approved color palettes. Use when picking colors, writing Tailwind config, building UI components, or producing any visual asset (logos, social cards, marketing pages). Pick exactly one palette per surface — do not mix.
---

# Avreo Color Palettes

Two approved palettes. Pick one per surface and stick to it. Both are cool-toned and work well with white/near-white text on the darkest shades and dark text on the lightest shades.

---

## Palette 1 — Teal / Aqua

Source: https://coolors.co/palette/1c333d-215154-358484-5eaca1-96c7bb-fffeff

| Token              | Hex       | Role (suggested)                                  |
| ------------------ | --------- | ------------------------------------------------- |
| `teal-950`         | `#1C333D` | Page background (dark mode), headers, deep accents |
| `teal-800`         | `#215154` | Surface (cards, nav), secondary background        |
| `teal-600`         | `#358484` | **Primary brand** — buttons, links, active states |
| `teal-400`         | `#5EACA1` | Hover, secondary CTAs, highlights                 |
| `teal-200`         | `#96C7BB` | Subtle backgrounds, badges, borders               |
| `white`            | `#FFFEFF` | Page background (light mode), text on dark        |

**Mood:** calm, trustworthy, professional. Good for the main product UI and dashboard.

### Tailwind config snippet

```js
// tailwind.config.js
theme: {
  extend: {
    colors: {
      brand: {
        50:  '#FFFEFF',
        200: '#96C7BB',
        400: '#5EACA1',
        600: '#358484',
        800: '#215154',
        950: '#1C333D',
      },
    },
  },
}
```

---

## Palette 2 — Navy / Blue

Source: https://coolors.co/palette/1d3461-1f487e-376996-6290c8-829cbc

| Token            | Hex       | Role (suggested)                                  |
| ---------------- | --------- | ------------------------------------------------- |
| `navy-950`       | `#1D3461` | Page background (dark), headers, deep accents     |
| `navy-800`       | `#1F487E` | Surface, secondary background                     |
| `navy-600`       | `#376996` | **Primary brand** — buttons, links, active states |
| `navy-400`       | `#6290C8` | Hover, secondary CTAs, highlights                 |
| `navy-200`       | `#829CBC` | Subtle backgrounds, badges, borders               |

**Mood:** corporate, technical, authoritative. Good for marketing pages, investor-facing materials, and B2B comms.

### Tailwind config snippet

```js
// tailwind.config.js
theme: {
  extend: {
    colors: {
      brand: {
        200: '#829CBC',
        400: '#6290C8',
        600: '#376996',
        800: '#1F487E',
        950: '#1D3461',
      },
    },
  },
}
```

---

## Usage Rules

1. **One palette per surface.** Don't blend Palette 1 and Palette 2 in the same screen, page, or asset.
2. **Primary CTA = the `-600` token** of whichever palette is active.
3. **Text contrast:**
   - On `-950` / `-800`: use `#FFFEFF` (or near-white) for body text.
   - On `-200` / white: use `-950` for body text.
   - On `-600`: use white for text — verify WCAG AA contrast (≥ 4.5:1 for body, ≥ 3:1 for large text).
4. **Neutrals:** if a true neutral is needed (gray text, borders), pull a desaturated tint from the same family rather than introducing a new color. Don't mix in Tailwind's default `gray-*` unless explicitly approved.
5. **Accent colors** (success/warn/error) are not defined here — pause and ask before introducing red/green/yellow tokens.

## When in doubt

- Default to **Palette 1 (Teal)** for product UI.
- Default to **Palette 2 (Navy)** for marketing or external comms.
- Confirm with the user before deviating.
