# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run lint     # Run ESLint
npm run start    # Start production server
```

> Note: `next.config.mjs` has `typescript.ignoreBuildErrors: true`, so TypeScript errors won't block builds.

## Architecture

This is a **Next.js 16 + React 19 single-page landing page** for Randall Choc, a personal trainer in Guatemala. The entire site is a scrollable one-pager rendered in `app/page.tsx`.

**Section flow** (top to bottom): `Navigation → Hero → Problem → About → Plans → HowItWorks → Testimonials → FinalCTA → Footer`

### Key files

- `app/page.tsx` — Composes all sections; this is the only route
- `app/layout.tsx` — Root layout: fonts (Bebas Neue + Inter), metadata (Spanish), Vercel Analytics
- `app/globals.css` — Theme tokens (Tailwind v4 `@theme inline`): primary `#FF6B35`, background `#0A0A0A`
- `lib/plans.ts` — Source of truth for pricing plans and contact info (WhatsApp number, Instagram, email)
- `lib/utils.ts` — `cn()` helper (`clsx` + `tailwind-merge`)
- `components/` — Page section components; `components/ui/` contains shadcn/ui primitives

### Styling

- Tailwind CSS v4 (config is in `globals.css` via `@theme inline`, not a separate config file)
- PostCSS plugin: `@tailwindcss/postcss`
- shadcn/ui components with "new-york" style, neutral base color, `lucide-react` icons
- Fonts exposed as CSS variables: `--font-bebas` (headings), `--font-inter` (body)
- `cn()` from `lib/utils.ts` for conditional class merging

### Content & data

- All pricing plans are defined in `lib/plans.ts` — update prices/features there, not in components
- CTAs open WhatsApp with pre-filled messages using the number in `lib/plans.ts`
- Site language is Spanish throughout

### shadcn/ui

Add new components with:
```bash
npx shadcn@latest add <component>
```
Components land in `components/ui/`.
