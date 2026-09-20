# PROJECT BLUEPRINT: HANMANTH PATIL — IMMERSIVE PORTFOLIO
**Role:** Lead Product Designer, Creative Frontend Architect, Interaction Designer & Technical Project Architect  
**Version:** 2.0 — Production Blueprint (Rebuilt from Zero)  
**Status:** Architecture Complete — Ready for Stage 2

---

## 1. Product Vision
An ultra-premium, minimal, editorial personal portfolio website representing **Hanmanth Patil** as an **AI/ML Engineer & Creative Technologist**. 

The site rejects generic developer tropes (cyberpunk themes, neon dashboards, 3D particle storms, bloated skills matrices) in favor of cinematic restraint, disciplined typography, intentional whitespace, and one hypnotic signature interaction: **An interactive liquid-glass portrait reveal** that physically exposes the computational/anatomical underpinnings of the engineer through smooth cursor and touch exploration.

The website is scannable and completely understandable within 60 seconds, leaving visitors with the unmistakable impression of an elite engineer who also commands world-class design aesthetics.

---

## 2. Final Information Architecture
The site operates as a streamlined, high-impact single-page architecture with dedicated modal/drawer case-study expanders for deep proof:

```
[ Global Header: Monogram + Minimal Nav + "Let's Talk" CTA ]
   │
   ├── 01. HERO (Full-viewport locked canvas with Liquid-Glass Reveal)
   │
   ├── 02. ACADEMICS & PROLOGUE (Concise institutional footing & multidisciplinary thesis)
   │
   ├── 03. SELECTED PROJECTS (Curated flagship projects with measurable outcomes)
   │
   ├── 04. KEY ACHIEVEMENTS (Top tier competitive & institutional recognitions)
   │
   ├── 05. EVENTS & COMPETITIONS (Curated track record of competitive engineering)
   │
   └── 06. CONTACT & FOOTER (Clean direct channel + verified professional presence)
```

---

## 3. Homepage Section Structure

### Section 01: Hero (`100dvh`)
- **Visual Subject:** Full-screen locked portrait of Hanmanth Patil.
- **Headline:** *"Building Intelligence. / Designing Experiences. / Engineering Impact."*
- **Role Identity:** `AI/ML Engineer & Creative Technologist`
- **Sub-tagline:** *"B.Tech AIML '27 · Kalaburagi, India"*
- **Primary Interaction:** Liquid-glass anatomical reveal driven by cursor proximity and touch drag.
- **Action CTAs:** Minimal white pill `Explore Work` and `Let's Talk`.

### Section 02: Academics & Short Introduction
- **Academic Anchor:** B.Tech in Artificial Intelligence & Machine Learning, Shetty Institute of Technology, Kalaburagi (Expected 2027). Academic rank: Second Topper across five semesters.
- **Editorial Hook:** 2-sentence thesis uniting AI/ML, Software, Robotics, and UI/UX into real-world production systems.
- **Core Pillars:** 4 minimalist tags: `Machine Learning Systems`, `Autonomous Robotics`, `Cybersecurity Engineering`, `Digital Product Design`.

### Section 03: Curated Flagship Projects (Strictly Top 4)
Each project presented with an editorial split-card: context, architectural role, tech stack tags, outcome metric, and repository/live link:
1. **PHISHGUARD 2.0:** AI-powered phishing & scam detection platform (FastAPI, ML Engine, Docker, Threat Scoring).
2. **EquipLease:** Industrial equipment rental marketplace & interface (Winner: 1st Prize UI/UX Challenge at TECH X).
3. **Agri Sahayak:** Edge AI agriculture assistance and plant pathology diagnosis system with offline capabilities.
4. **StockSense ML:** Predictive market modeling and research pipeline (Published via NOBCON).

### Section 04: Signature Achievements (Curated 4 Metrics)
- **1st Prize — IIT Indore:** National Robo Soccer Championship.
- **1st Prize — TECH X:** UI/UX Design Challenge (EquipLease).
- **2nd Prize — NIT Karnataka (Surathkal):** National Autonomous Line Following.
- **Gold Medal — INEX Goa:** Hackathon Winner.

### Section 05: Events & Competitions
- Clean technical ledger of verified milestones (IIT Indore, NIT Surathkal, Techfusionn24, INEX Expo, Epicthon SIT).
- Eliminates repetitive student awards; highlights collegiate national engineering benchmarks.

### Section 06: Contact & Epilogue
- Direct channel: `hanmanthpatil453@gmail.com`
- Verified channels: GitHub (`github.com/HanmanthPatil`), LinkedIn (`linkedin.com/in/hanmanthpatil`).
- Minimal status stamp: `Available for Summer 2025/2026 AI/ML Internships & Engineering Collaborations`.

---

## 4. Hero Composition
- **Layout Model:** Single viewport container (`100dvh`), `position: relative`, `overflow: hidden`, `isolation: isolate`.
- **Subject Placement:**
  - **Desktop (16:9):** Hanmanth is positioned right-of-center facing left into the open negative space. The portrait scale dominates the vertical height cleanly without clipping the chin or hairline.
  - **Mobile (9:16):** Hanmanth is framed vertically in the upper-right quadrant, leaving the top-left and bottom third open for editorial copy.
- **Copy Alignment:** Left 32–38% of desktop viewport is preserved as pure negative space for typography.
  - Headline sits at ~34% from the top: `clamp(3.8rem, 5.2vw, 5.8rem)`, line-height `0.94`, tight letter-spacing `-0.04em`.
  - Content never crosses over Hanmanth's facial features or glasses.
- **Navigation:** Fixed minimalist masthead at `top: max(1.5rem, env(safe-area-inset-top))`, containing a bespoke geometric monogram `[HP]`, subtle links (`About`, `Work`, `Achievements`, `Contact`), and a compact `Let's Talk` pill button.

---

## 5. Glass Reveal Architecture

### Asset Pairing & Geometry Lock
The hero strictly pairs two pre-rendered, mathematically aligned PNG assets:
- **Desktop (1672 × 941, 16:9):** `Base_image_desktop.png` (Base Portrait) + `Reveal_image_desktop.png` (Glass Anatomy).
- **Mobile (941 × 1672, 9:16):** `Base_image_mobile.png` (Base Portrait) + `Reveal_image_mobile.png` (Glass Anatomy).
- Both images in each pair share identical canvas dimensions, crop, head position, hairline, glasses geometry, and lighting angle.
- **Absolute Rule:** The portrait geometry NEVER jumps. The base and reveal are stacked absolutely with identical `object-fit: cover` and `object-position: center`.

### Masking Engine (Zero WebGL, Zero Canvas)
- Driven purely by **CSS Radial Masking** on the reveal layer via hardware-accelerated CSS variables:
  ```css
  -webkit-mask-image: radial-gradient(
    circle var(--reveal-radius, 0px) at var(--reveal-x, -999px) var(--reveal-y, -999px),
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.95) 58%,
    rgba(0, 0, 0, 0.65) 75%,
    rgba(0, 0, 0, 0.20) 88%,
    transparent 100%
  );
  mask-image: radial-gradient(...);
  ```
- **Physics & State Management:**
  - State is managed strictly in `useRef` to eliminate React re-renders during pointer movement.
  - Single `requestAnimationFrame` loop handles lerping:
    - Position interpolation factor: `0.14`
    - Radius interpolation factor: `0.12`
  - Target radius on Desktop: `220px` (expands on pointer proximity/enter; decays to `0px` on pointer leave).
  - Target radius on Mobile: `140px` (activates on `pointerdown`, tracks during touch move, smoothly decays to `0px` on `pointerup`/`pointercancel`).
  - Native fallback: If `prefers-reduced-motion` is active, interpolation factor is `1.0` (or static subtle toggle).
  - Layers set `pointer-events: none` so text and interactive links retain full native responsiveness.

---

## 6. Visual Design System
- **Tone:** Ultra-clean editorial luxury tech. Reminiscent of high-end industrial engineering monographs and contemporary Scandinavian software studios.
- **Depth & Surfaces:** Multi-layered optical depth created using subtle alpha borders (`rgba(255,255,255,0.08)`), micro-grain backdrop, and deep obsidian layering.
- **Restraint Rule:** No full-bleed gradients, no glowing text shadows, no decorative cyberpunk circuit lines, and no heavy box shadows.

---

## 7. Typography System

| Role | Font Family | Weights | Tracking / Line Height | Purpose |
|---|---|---|---|---|
| **Display / Hero** | `Space Grotesk` (Google Fonts) | 600, 700 | Tracking `-0.04em`, Leading `0.94` | High-impact architectural headlines |
| **Headings & Section Titles** | `Space Grotesk` | 500, 600 | Tracking `-0.02em`, Leading `1.1` | Section anchors and project titles |
| **Body & Longform** | `Inter` (Google Fonts) | 400, 500 | Tracking `-0.01em`, Leading `1.6` | Clear, effortless scannability |
| **Technical & Metadata** | `JetBrains Mono` | 400, 500 | Tracking `+0.02em`, Uppercase | Tags, dates, metrics, coordinates |

---

## 8. Color System
A strictly curated, restrained palette anchored in obsidian, neutral off-white, and disciplined cyan accents:

```css
:root {
  /* Surfaces */
  --bg-primary: #07090D;          /* Deep void background */
  --bg-secondary: #0D1014;        /* Secondary panel surface */
  --bg-elevated: #13171D;         /* Elevated card surface */
  
  /* Text & Inks */
  --text-primary: #F5F5F2;        /* High-key warm off-white */
  --text-secondary: #969CA6;      /* Muted technical gray */
  --text-tertiary: #5E6573;       /* De-emphasized labels */
  
  /* Accents */
  --accent-cyan: #00C2FF;         /* Electric cyan — selective highlight only */
  --accent-cyan-soft: #8FE8FF;    /* Soft cyan glow/reflection tone */
  --accent-cyan-subtle: rgba(0, 194, 255, 0.08); /* Background hover tint */
  
  /* Structural Borders */
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-focus: rgba(0, 194, 255, 0.40);
}
```

*Rule:* Cyan is reserved exclusively for interactive active states, focal metrics, and the glass interior reflections. It is never used as a generic text color or border blast.

---

## 9. Animation Philosophy
- **Principle:** Motion is mechanical, frictionless, and purpose-driven. It confirms physical presence rather than entertaining.
- **Hero Entrance:**
  - Base portrait: Opacity `0` → `1`, scale `1.03` → `1.00` over `1.2s` (`cubic-bezier(0.16, 1, 0.3, 1)`).
  - Editorial headline: Line-by-line vertical reveal (`translateY(24px)` → `0`, opacity `0` → `1`, staggered by `80ms`).
  - Navigation: Gentle drop-in from top (`opacity: 0, translateY(-10px)`).
- **Section Reveals:** IntersectionObserver-triggered subtle vertical shifts (`translateY(16px)` → `0`, opacity `0` → `1`).
- **Interactive States:** Cards lift by exactly `-3px` with border brightening from `0.08` to `0.22` alpha over `240ms`.
- **Strictly Prohibited:** Bouncing easings, infinite pulsating glows, spinning tech icons, 3D particles, and full-screen parallax distortion.

---

## 10. Responsive Strategy
- **Breakpoints:**
  - `Mobile Portrait (< 768px)`: Switches cleanly to `Base_image_mobile.png` & `Reveal_image_mobile.png`. Touch-driven circular lens (`140px`). Navigation collapses to Monogram + `Let's Talk` pill button (no clumsy hamburger drawers).
  - `Tablet / Landscape (768px – 1024px)`: Fluid typography clamps; desktop 16:9 assets utilized if aspect ratio > 1.2.
  - `Desktop (> 1024px)`: Standard 16:9 locked layout; mouse hover proximity lens (`220px`).
  - `Ultra-wide (> 1800px)`: Canvas max-width constraints or graceful edge-bleed vignettes preventing asset over-stretching.
- **320px Safety Guarantee:** Editorial headlines use dynamic CSS `clamp()` to guarantee zero horizontal overflow on small mobile displays (iPhone SE / 320px).

---

## 11. Accessibility Strategy
- **Semantic DOM:** Landmark structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, single `<h1>`).
- **Decorative Media:** Hero portrait base and reveal layers marked `aria-hidden="true"`, with meaningful off-screen screen-reader copy provided in an accessible `sr-only` description.
- **Keyboard Navigation:** Explicit visible focus rings (`--border-focus`) on all interactive buttons, links, and project anchors.
- **Motion Accessibility:** `@media (prefers-reduced-motion: reduce)` automatically disables lerping, eliminates translation animations, and defaults all content immediately to full opacity.
- **Contrast Ratios:** Primary text `#F5F5F2` on `#07090D` yields a contrast ratio of `17.4:1` (exceeding WCAG AAA).

---

## 12. Performance Strategy
- **Asset Optimization:** Convert the high-resolution PNGs to modern WebP/AVIF formats while retaining lossless PNG fallbacks.
- **Zero Third-Party Canvas/3D Overhead:** Total avoidance of Three.js / WebGL saves ~600KB–1.2MB of JavaScript bundle size.
- **Core Web Vitals Targets:**
  - **LCP (Largest Contentful Paint):** `< 1.2s` (Hero base image loaded with `priority={true}` via `next/image` or preloaded link).
  - **CLS (Cumulative Layout Shift):** `0.00` (Hero layers absolutely pinned with locked aspect ratio).
  - **FID / INP:** `< 50ms` (RAF loop runs off React lifecycle with direct DOM variable injection).

---

## 13. Technology Stack

| Layer | Selection | Justification |
|---|---|---|
| **Framework** | **Next.js 15 (App Router)** | Static export capabilities, zero-layout-shift image optimization, pristine developer experience. |
| **Language** | **TypeScript** | Strict type safety for data models, event interfaces, and ref handlers. |
| **Styling** | **Tailwind CSS v3/v4** | High-utility, zero runtime CSS overhead, seamless CSS variable integration. |
| **Fonts** | **next/font/google** | Zero layout shift font self-hosting for `Space Grotesk`, `Inter`, `JetBrains Mono`. |
| **Icons** | **Lucide React** (Minimal imports) | Feather-light SVG icons for external links, email, and arrow anchors. |
| **Motion** | **Vanilla CSS + RAF Hooks** | Pure native requestAnimationFrame for hero reveal physics; lightweight Tailwind transitions for UI. |

---

## 14. Clean Folder Architecture

```
/
├── assets/                          # Original high-res source assets (Preserved)
│   ├── Base_image_desktop.png
│   ├── Reveal_image_desktop.png
│   ├── Base_image_mobile.png
│   └── Reveal_image_mobile.png
├── reference/                       # Project documentation & master profile
│   ├── master-profile.md
│   ├── reference-build-guide.md
│   └── reference-video.mp4
├── public/                          # Production static web assets
│   ├── images/
│   │   ├── hero-base-desktop.webp
│   │   ├── hero-reveal-desktop.webp
│   │   ├── hero-base-mobile.webp
│   │   └── hero-reveal-mobile.webp
│   ├── favicon.ico
│   └── og-image.png
├── src/                             # Clean production application code
│   ├── app/
│   │   ├── layout.tsx               # Root metadata, font declarations, theme wrappers
│   │   ├── page.tsx                 # Master page assembling curated sections
│   │   └── globals.css              # Design tokens, CSS mask variables, base resets
│   ├── components/
│   │   ├── hero/
│   │   │   ├── glass-hero.tsx       # Signature Liquid-Glass Portrait Reveal component
│   │   │   └── hero-typography.tsx  # Editorial headline & CTA pill anchors
│   │   ├── layout/
│   │   │   ├── navbar.tsx           # Monogram + Minimal floating masthead
│   │   │   └── footer.tsx           # Contact channel & professional colophon
│   │   ├── sections/
│   │   │   ├── academics-intro.tsx  # Institutional footing & 1-minute intro
│   │   │   ├── projects-grid.tsx    # Curated top 4 flagship project cards
│   │   │   ├── achievements.tsx     # National wins & paper publication ledger
│   │   │   └── contact-section.tsx  # High-impact closing callout
│   │   └── ui/
│   │       ├── badge.tsx            # Technical mono tags
│   │       └── button.tsx           # Pill CTA components
│   ├── lib/
│   │   ├── content.ts               # Locked, verified data from master-profile.md
│   │   └── utils.ts                 # Class merger & helper routines
│   └── hooks/
│       └── use-pointer-reveal.ts    # Custom lerping RAF physics hook
├── PROJECT_BLUEPRINT.md             # This active implementation blueprint
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

---

## 15. Content Architecture (Verified Single Source of Truth)

All data strictly imported from `/reference/master-profile.md`:
- **Name:** Hanmanth Patil
- **Title:** AI/ML Engineer & Creative Technologist
- **Institution:** Shetty Institute of Technology, Kalaburagi · B.Tech AIML (Graduating 2027)
- **Academic Standing:** Second Topper of College (5 consecutive semesters)
- **Verified Flagship Projects:**
  1. *PHISHGUARD 2.0* (Cybersecurity & AI Platform)
  2. *EquipLease* (1st Prize TECH X UI/UX Design Challenge)
  3. *Agri Sahayak* (AI Plant Disease Diagnosis & Offline Agricultural Tool)
  4. *StockSense ML* (Market Modeling & Published Research at NOBCON)
- **Verified Competition Wins:**
  - 1st Prize — Robo Soccer (IIT Indore)
  - 1st Prize — UI/UX Design Challenge (TECH X / ComedKares)
  - 1st Prize — Line Following (Techfusionn24)
  - 2nd Prize — Line Following (NIT Karnataka / NIT Surathkal)
  - 2nd Prize — Robosumo (Techfusionn24)
  - Gold Medal — Hackathon (INEX Goa)
  - 1st Runner-Up — Epicthon (SIT)
  - Research Publication — NOBCON (Team Kirin)

---

## 16. Assets Required
- [x] `assets/Base_image_desktop.png` (1672 × 941, 16:9) — Verified present & inspected.
- [x] `assets/Reveal_image_desktop.png` (1672 × 941, 16:9) — Verified present & inspected.
- [x] `assets/Base_image_mobile.png` (941 × 1672, 9:16) — Verified present & inspected.
- [x] `assets/Reveal_image_mobile.png` (941 × 1672, 9:16) — Verified present & inspected.
- [ ] Optimized WebP/AVIF exports for production `/public/images/`.
- [ ] Inline SVG Monogram for `HP` brand mark.

---

## 17. Potential Risks & Mitigations

| Risk | Impact | Mitigation Strategy |
|---|---|---|
| **Portrait Jumps on Mask Shift** | High / Unacceptable | Ensure both Base and Reveal images use identical absolute position, CSS background/object fit rules, and identical pixel bounds. |
| **Laggy Cursor on Lower-End Hardware** | Medium | Drive CSS variables via `useRef` and a single `requestAnimationFrame` loop; zero React state triggers on `pointermove`. |
| **Touch Conflict with Page Scroll** | High | Apply `touch-action: pan-y` on container so vertical page scrolling works normally, while tracking touch position for reveal. |
| **Headline Overflow at 320px** | Medium | Use strict CSS `clamp(2.2rem, 8vw, 5.8rem)` with controlled `max-width` and non-breaking spaces. |
| **Content Bloat** | High | Hard-limit projects to top 4 and achievements to top 4 metrics to guarantee 60-second comprehension. |

---

## 18. Implementation Stages

- **Stage 1:** Blueprint & Architectural Alignment *(Current Stage)*.
- **Stage 2:** Next.js Project Scaffolding & Core Design Tokens Setup (`tailwind.config.ts`, `globals.css`, fonts).
- **Stage 3:** Glass Hero Interaction Component Implementation & Pixel-Perfect Mask Calibration.
- **Stage 4:** Editorial Content Sections Construction (Academics, Top 4 Projects, Achievements, Contact).
- **Stage 5:** Cross-device Responsive Polishing, Touch Testing & Performance Auditing.
- **Stage 6:** Final Verification & Delivery.

---

## 19. Verification Strategy
1. **Geometric Alignment:** Stack Base and Reveal at 50% opacity to verify zero shift across eyebrows, glasses, lips, and neckline.
2. **Interaction Physics:** Test desktop cursor entrance, smooth lerp tracking, and graceful decay on pointer leave.
3. **Mobile Touch:** Test immediate touch radius activation on mobile viewport, continuous drag reveal, and clean fade-out upon touch release.
4. **Layout Responsiveness:** Verify flawless rendering across 320px (iPhone SE), 375px, 768px (iPad portrait), 1024px, 1440px, and 1920px viewports.
5. **Accessibility & Reduced Motion:** Confirm all content remains fully legible with `prefers-reduced-motion: reduce` active.
6. **Production Build:** Run `npm run build` and `npm run lint` with zero errors or warnings.
