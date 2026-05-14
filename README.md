# PODE

> **What is potential. We move like delta force.**

PODE — Bringing Claude to Japan. Human potential × AI potential = creative.

---

## 私たちは何者か

**株式会社PODE（PODE Inc.）** は、Claudeを日本に普及させることをミッションとする **クリエイティブ伴走組織** です。

エンタープライズSIや大規模DXコンサルではなく、企業と一緒に「まだ解放されていない可能性」を発見し、伴走するスタイルで動きます。

> **人間のポテンシャル × AI（Claude）のポテンシャル = クリエイティブ**

この方程式が、私たちのすべての出発点です。

---

## Name — PODE（ポデ）

- **PO** = **PO**tential（可能性）
- **DE** = **DE**lta（変化量 / Δ）
- ポルトガル語で **「できる（poder）」** の意味も持つ

---

## 2 Pillars

| Pillar | Meaning |
|---|---|
| **What is potential** | 現状を正解とせず、まだ見えていない可能性を常に問い直す |
| **Delta Force** | 特殊部隊のように、目標に対して迷わず・深く・正確に実行する |

---

## Values — Δ1〜Δ4

- **Δ1  問いが先、答えは後** — 「できるか」より「なぜやるか」を問う
- **Δ2  深く入る、広く見る** — 表面で語らず、核心まで届ける
- **Δ3  変化量で語る** — 成果は「何がどれだけ変わったか」で測る
- **Δ4  できる、から始まる** — pode（できる）が私たちのスタート地点

---

## Brand

- **Primary**: Orange `#FF4D1F`
- **Canvas**: White `#FFFFFF`
- **Signature Gradient — Delta Burst**:
  `linear-gradient(135deg, #FFD60A 0%, #FF4D1F 50%, #534AB7 100%)`
  - Creative（閃き）→ Human（人）→ AI / Claude（知性）を1本のグラデで表現

詳細は [`BRAND.md`](./BRAND.md) を参照。

---

## Repo Structure

```
.
├── README.md              # This file
├── BRAND.md               # ブランドガイドライン詳細
├── tokens/
│   ├── colors.json        # カラートークン
│   └── typography.json    # タイポグラフィ定義
└── assets/
    ├── logo-mark.svg              # ロゴマーク（オレンジ基調）
    ├── logo-mark-gradient.svg     # ロゴマーク（Delta Burst）
    ├── logo-wordmark-horizontal.svg
    └── logo-wordmark-stacked.svg
```

---

## Design System (this project)

Beyond the source brand files above, this project ships a working design system you can read, copy from, or extend.

| File / Folder | What's inside |
|---|---|
| [`colors_and_type.css`](./colors_and_type.css) | All CSS vars: `--pode-orange`, `--pode-delta-burst`, `--font-display-en`, type scale, motion. Import this once and you have the system. |
| [`SKILL.md`](./SKILL.md) | Agent-Skill manifest — usable by Claude Code as a portable skill. |
| `preview/` | Self-contained HTML cards that populate the Design System tab (palette, gradient, type specimens, components, brand). |
| `marketing-site/` | **PODE marketing site** — Hero → About → Equation → Values → Service → Contact. Open `marketing-site/index.html`. |
| `sketches/` | Source logo / palette exploration SVGs (from the upstream repo). |

**Source repo:** [github.com/ohebiish/PODE](https://github.com/ohebiish/PODE) — explore for the latest brand canon. If you're a designer/dev iterating in this project, push improvements to the upstream `tokens/` and `assets/` so they stay the source of truth.

---

© 2026 PODE Inc.
