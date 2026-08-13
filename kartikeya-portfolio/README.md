# Kartikeya Awasthi — Portfolio

GTM strategy and demand generation portfolio. Built as a Next.js 15 (App Router) site with GSAP for scroll motion.

## Stack

- Next.js 15 / React 19 / TypeScript
- GSAP + ScrollTrigger (loaded via CDN script tags, see `app/layout.tsx`)
- Plain CSS with a custom property design system (`app/globals.css`), no CSS framework dependency
- Single interactive component (`components/PortfolioBody.tsx`) that mounts the page markup and wires up scroll reveals, the animated stat counter, and the section-index rail
- `components/ui/coverflow-carousel.tsx` — a small React island (portaled into the raw markup) that renders the Exhibit 3.0 tool coverflow carousel

## Local development

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Project structure

```
app/
  layout.tsx      — fonts, metadata, GSAP script tags
  page.tsx         — renders PortfolioBody
  globals.css      — full design system (colors, type, layout, components)
components/
  PortfolioBody.tsx — page markup + GSAP scroll behavior
  ui/coverflow-carousel.tsx — the Exhibit 3.0 tool carousel (drag/physics + card rendering)
lib/
  utils.ts — small `cn()` class-join helper used by coverflow-carousel.tsx
public/
  tool-claims-ai.png — Exhibit 3.0 visual for the Claims AI Accelerator tool
```

## Updating content

Most page copy lives in `components/PortfolioBody.tsx` as a single markup block (`BODY_HTML`). The Exhibit 3.0 tool cards are the exception: they're driven by the `TOOL_SLIDES` array at the top of `components/PortfolioBody.tsx`, rendered through `CoverflowCarousel`. To add a tool image to any of the other four cards, drop the image into `public/` and add an `image`/`imageAlt` field to that slide's entry in `TOOL_SLIDES` — the carousel swaps in the image face automatically.

The next content pass (splitting this into structured data + real React components per section) is a good next step once the design is fully locked, but was intentionally deferred so the design could keep moving fast during review.

## Deploy to Vercel

### Option A — Git (recommended for ongoing edits)

1. Push this repo to GitHub/GitLab/Bitbucket.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Framework preset: Next.js (auto-detected). No environment variables required.
4. Deploy.

### Option B — Vercel CLI

```bash
npm install -g vercel
vercel        # preview deploy
vercel --prod # production deploy
```

## Domain

Once deployed, connect your custom domain under Vercel → Project → Settings → Domains.
