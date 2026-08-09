# NOIRÉ ATELIER — Demo Website

A demo portfolio website for a fictional luxury interior design studio,
built as a webdesign showcase. Not a real company.

## Tech stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- React Router
- GSAP + ScrollTrigger (scroll reveals, entrance sequence, micro-interactions)
- Lenis (smooth scrolling)

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (typically `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

`npm run build` runs a TypeScript project check (`tsc -b`) before the
Vite production build, so type errors will fail the build early.

## Deploying to Vercel

1. Push this repository to GitHub.
2. Import the repo in Vercel — the Vite framework preset is detected
   automatically.
3. Build command: `npm run build`. Output directory: `dist`.
4. `vercel.json` includes a catch-all rewrite to `index.html` so
   client-side routes (`/studio`, `/work/casa-nero`, etc.) resolve
   correctly on refresh and direct link.

No environment variables are required.

## Pages

- `/` — Home (hero, studio intro, selected work)
- `/studio` — Studio story and process
- `/services` — Service offerings
- `/journal` — Editorial articles
- `/contact` — Contact form (front-end only, see below)
- `/work/:slug` — Individual project case studies

## Notes

- **Contact form**: validates on the client and shows a success state,
  but is not wired to a backend or email service — this is called out
  directly in the UI. Wire `handleSubmit` in `src/pages/Contact.tsx` to
  a real endpoint (e.g. Formspree, a serverless function, or your own
  API) before using this in production.
- **Images**: sourced from Unsplash (free license) for demo purposes.
  Replace with licensed photography of real projects before any
  commercial use.
- **Custom cursor**: automatically disabled on touch devices and when
  the OS "reduce motion" preference is enabled.
- This project was built and reviewed without a live `npm install` /
  `npm run build` pass (no package-registry network access in the
  environment it was authored in). It has been checked carefully by
  hand — imports, routes, and Tailwind config were all manually
  verified — but please run `npm install && npm run build` yourself
  as a first step after downloading, and open an issue-style note for
  anything that doesn't compile cleanly.
