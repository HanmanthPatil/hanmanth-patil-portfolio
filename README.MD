# Hanmanth Patil — Portfolio

Personal portfolio website showcasing engineering systems across artificial intelligence, machine learning, autonomous robotics, software engineering, and human-centered product design.

## Overview

A high-performance, editorial digital portfolio engineered with responsive layouts, an interactive liquid-glass portrait reveal hero, verified academic standing, technical project benchmarks, competitive honors, and direct professional contact channels.

## Technology Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router, React 19)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Typography:** Inter, Space Grotesk, JetBrains Mono
- **Icons:** Custom SVG Geometric System & Lucide Icons
- **Deployment Target:** [Vercel](https://vercel.com/)

## Getting Started

### Prerequisites

- Node.js 18.17+ or higher
- npm 9+

### Installation & Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

1. Build the production-optimized static bundle:
   ```bash
   npm run build
   ```

2. Test the production build locally:
   ```bash
   npm run start
   ```

## Project Structure

```
├── public/               # Static public assets (optimized dual-portrait layers)
├── src/
│   ├── app/              # Next.js App Router root layout, styles, and page
│   ├── components/
│   │   ├── hero/         # Liquid-glass interactive hero & typography
│   │   ├── layout/       # Fixed minimal navigation and footer
│   │   ├── sections/     # Profile, Projects, Honors, Ledger, Contact
│   │   └── ui/           # Custom geometric HP mark, project marks, brand icons
│   ├── hooks/            # Custom hooks (pointer reveal, in-view intersection)
│   └── lib/              # Verified single-source-of-truth content definitions
├── tailwind.config.ts    # Custom design tokens, typography, and color palette
└── tsconfig.json         # TypeScript strict configuration
```

## Deployment

Designed for seamless deployment on Vercel or any modern static/hybrid hosting platform. Set `NEXT_PUBLIC_SITE_URL` to your production domain to automatically configure canonical URLs and Open Graph metadata.