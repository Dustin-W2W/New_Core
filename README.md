# Ways2Well — New Core Offering Prototype

An interactive prototype exploring a new offering structure for Ways2Well, organized into two clear buckets:

1. **Pay As You Go** — Single-purchase services: the Discover Package, focused goal programs (Weight Loss, Hormone Optimization, Sexual Health, Skin Care, Hairloss, Cell Therapy, Health Coach Check-In), spot-check lab add-ons, and advanced stand-alone diagnostic tests.
2. **Memberships** — Three tiers (Core, Transform, Max) with monthly or annual billing, dedicated health coaching, lab interpretation, and a transparent savings breakdown vs. paying à la carte.

## Live Demo

Once deployed to Netlify, the URL goes here.

## Tech Stack

- **React 18** — UI
- **Vite 6** — build tooling
- **Tailwind CSS v4** — styling (loaded via the `@tailwindcss/vite` plugin)
- **lucide-react** — icons

Design language pulled from [ways2well.com](https://ways2well.com): deep navy background (`#1a1d29`), bright cyan accent (`#34b4f4`), warm cream text (`#f7f3eb`), Roboto Black 900 for display typography. The W2W logo SVG paths are extracted directly from the live site.

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Production Build

```bash
npm run build
```

Outputs to `dist/`. The build is ~63KB gzipped JS + ~5KB gzipped CSS.

## Deployment

The repo is wired for Netlify. The `netlify.toml` at the root tells Netlify:

- `npm run build` is the build command
- `dist/` is the publish directory
- SPA fallback is configured (any unmatched route serves `index.html`)

To deploy:

1. Push this repo to GitHub
2. Sign in to [Netlify](https://app.netlify.com) → **Add new site** → **Import an existing project**
3. Connect GitHub and pick this repo
4. Netlify auto-detects the Vite settings — hit **Deploy**

Every subsequent `git push` to `main` triggers an automatic redeploy.

## Project Structure

```
.
├── src/
│   ├── Ways2WellPrototype.jsx   # Full prototype (data + components in one file)
│   ├── main.jsx                 # React entry point
│   └── index.css                # Tailwind import + body resets
├── public/
│   └── favicon.svg              # W2W brand favicon
├── index.html                   # HTML shell
├── vite.config.js               # Vite + Tailwind plugin
├── netlify.toml                 # Netlify build config
└── package.json
```

All the prototype logic — data, components, modals, drawer — lives in `src/Ways2WellPrototype.jsx`. This is intentional for ease of iteration; later, we can split into separate files as the codebase grows.

## Editing the Prototype

The main file is **`src/Ways2WellPrototype.jsx`**. Key data structures at the top:

- `DISCOVER` — the featured Discover Package
- `GOAL_PROGRAMS` — list of Pay As You Go programs
- `ADD_ONS` — spot-check lab panels (eligibility-linked to programs)
- `ADVANCED_TESTS` — advanced diagnostic stand-alone tests
- `MEMBERSHIPS` — Core, Transform, Max with features, prices, and PAYG-value math

UI components (cards, modals, drawer, etc.) follow below.

## Notes for Stakeholders

This is a **prototype** — interaction is local-only:

- The cart and selections live in React state; refreshing the page resets them
- "Continue to Checkout" is a placeholder CTA (no real payment flow)
- All prices, savings math, and copy are based on the mock pricing list, not production data

## License

Proprietary — internal Ways2Well use only.
