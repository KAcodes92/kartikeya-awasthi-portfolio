# Kartikeya Awasthi — Portfolio

GTM strategy and demand generation portfolio. Built as a Next.js 15 (App Router) site with GSAP for scroll motion.

## Stack

- Next.js 15 / React 19 / TypeScript
- GSAP + ScrollTrigger (loaded via CDN script tags, see `app/layout.tsx`)
- Plain CSS with a custom property design system (`app/globals.css`), no CSS framework dependency
- Single interactive component (`components/PortfolioBody.tsx`) that mounts the page markup and wires up scroll reveals, the animated stat counter, the section-index rail, and the Exhibit 4.0 tool coverflow carousel

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
  PortfolioBody.tsx — page markup + GSAP/carousel behavior
public/
  tool-claims-ai.png — Exhibit 4.0 visual for the Claims AI Accelerator tool
```

## Updating content

All page copy currently lives in `components/PortfolioBody.tsx` as a single markup block (`BODY_HTML`). To add a tool image to any of the other four Exhibit 4.0 cards, drop the image into `public/` and swap that card's inner markup to match the Claims AI Accelerator pattern (an `<img>` with `class="cf-image"` inside `<div class="cf-card-face has-image">`, and add a matching `data-img` attribute).

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
