# Quick Smart Derma

A premium **Skin · Hair · Laser** dermatology clinic landing page built with
**Next.js 16 (App Router)**, **TypeScript** and **Tailwind CSS v3**.

High-tech medical aesthetic: icy-blue → white radial-blur shell on a slate-blue
canvas, deep ocean-blue headers, neon-green accent badges, and translucent
glass-morphism panels with large rounded corners.

## Features

- **Hero** — arched dermatologist portrait, floating credential cards, and a
  glowing "Smart Skin Layer Analysis" scan visual.
- **Treatments** — six categories (Skin, Hair, Laser, Injectables, Body
  Contouring, Face & Neck) plus a "Most Popular Treatments" grid.
- **About**, **Why Choose Us**, **metrics ribbon**, **testimonials**, and a
  closing CTA.
- **Working appointment booking** — accessible modal form posting to
  `/api/appointments` (validation, success/error states).
- All imagery uses styled placeholders, ready for real assets.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

## Wiring up bookings

`app/api/appointments/route.ts` currently validates the payload, logs it, and
returns success. Connect it to your email / database / CRM where marked `TODO`.

## Deployment

Deploys to [Vercel](https://vercel.com) with zero config (Next.js is
auto-detected). Push to GitHub and import the repository in Vercel.

---

Built with [Claude Code](https://claude.com/claude-code).
