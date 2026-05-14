---
name: pode-design
description: Use this skill to generate well-branded interfaces and assets for PODE Inc. (株式会社PODE) — the Japan-based creative-companion org bringing Claude to Japan. Use for marketing pages, decks, proposals, social posts, and any visual artifact that should look and read like PODE. Contains brand voice, color/type tokens, the Delta Burst gradient + triforce-Δ logo system, and a working marketing site as reference.
user-invocable: true
---

# PODE Design Skill

Read `README.md` and `BRAND.md` first — they're the team's source of truth. Then explore:

- `tokens/colors.json` · `tokens/typography.json` — canonical design tokens. CSS variables in `colors_and_type.css` mirror these.
- `colors_and_type.css` — every CSS var you need (colors, type, motion, spacing).
- `assets/` — `logo-mark.svg` (orange triforce), `logo-mark-gradient.svg` (Delta Burst), wordmark variants. **Use these directly. Never redraw the logo.**
- `marketing-site/` — a working page that demonstrates the system end-to-end (Hero / About / Equation / Values / Service / Contact). Lift JSX components or copy patterns from here.
- `preview/` — design-system cards covering palette, type, components, brand, and motion.

## Core rules — non-negotiable

1. **Primary color is Orange `#FF4D1F`, not red.** PODE is explicit on this — don't drift into vermillion / scarlet / shu / coral.
2. **One gradient: Delta Burst.** `linear-gradient(135deg, #FFD60A 0%, #FF4D1F 50%, #534AB7 100%)`. Use it once per page as the signature visual moment. Never invent other gradients.
3. **Logo is a circle holding three triangles in a triforce.** Use `assets/logo-mark*.svg` directly. Do not re-arrange the deltas. Do not recolor outside the supplied variants.
4. **Type is Inter + Noto Sans JP** (both Google Fonts, provisional). Inter Black/900 for display, italic for accent lines. The wordmark "PODE" is always tracked at `letter-spacing: 0.08em`.
5. **Bilingual order: English first, Japanese second.** English is short, declarative, often italic for emphasis ("*We move like delta force.*"). Japanese fills nuance afterwards.

## Voice

- ✅ Use: 問い · 伴走 · ポテンシャル · クリエイティブ · 化学反応 · Δ · 変化量 / delta
- ❌ Avoid: DX推進 · SIer · エンタープライズ · ソリューション提供 · コンサルティング · 🚀 / hype emoji
- No exclamation marks. The full stop is the rhythm.

## When asked to make a PODE artifact

1. **Static HTML / JSX.** Import `colors_and_type.css`, use CSS vars, copy SVG logos from `assets/`.
2. **One accent moment.** Either a Delta Burst gradient section, OR a solid orange CTA — pick one focal accent per screen.
3. **Lots of white.** White canvas, generous negative space. The brand is bold by being uncrowded.
4. **The Δ glyph is yours.** Use it as a numbered marker (Δ1, Δ2…), as a bullet in lists, as a directional cue in CTAs.

## When asked for production code

Lift `colors_and_type.css` directly. The CSS variable names are stable contracts (`--pode-orange`, `--pode-delta-burst`, `--pode-purple`, `--pode-yellow`, `--font-display-en`, `--font-display-jp`, `--ease-delta`, etc.). Refactor at your peril.

## If invoked with no guidance

Ask:
- What are we making? (deck, landing page, proposal, one-pager, social post)
- English-only, Japanese-only, or bilingual?
- Audience — partner companies, talent, press, internal?
- One headline message, or 2–3 to explore?

Then act as an expert designer and ship HTML artifacts or production code accordingly.
