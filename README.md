# Zebulon Consulting

The marketing website for Zebulon Consulting, a management consulting firm in Hyderabad
specializing in corporate training, HR solutions, and people advisory services.

Live site: https://zebulon.in

## Tech stack

- [Vite 6](https://vite.dev/) — dev server and bundler
- [React 19](https://react.dev/) + [react-router-dom 7](https://reactrouter.com/) — client-side routing
- [TypeScript 5.8](https://www.typescriptlang.org/) — type checking only (`tsc --noEmit`); Vite/esbuild handles transpilation
- [Tailwind CSS 4](https://tailwindcss.com/) via `@tailwindcss/vite` — no separate `tailwind.config.js`
- [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/) — UI primitives (`components/ui`)
- [motion](https://motion.dev/) (Framer Motion) — animations
- [lucide-react](https://lucide.dev/) — icons

This is a static, client-side-only site — there's no backend to run or deploy.

## Run locally

**Prerequisites:** Node.js 20+

```bash
npm install
npm run dev
```

The dev server runs at http://localhost:3000.

## Other scripts

```bash
npm run build    # type-check and build the production bundle to dist/
npm run preview  # preview the production build locally
npm run lint     # type-check only (tsc --noEmit)
npm run clean    # remove dist/
```

## Project structure

```
index.html              # Vite entry HTML, mounts #root
src/
  main.tsx               # React entry point
  App.tsx                # Router setup; Header/Footer wrap all routes
  index.css              # Global styles / Tailwind theme
  lib/                    # Shared utilities (motion variants, document meta hook)
  components/
    Header.tsx, Footer.tsx         # Site chrome, rendered on every route
    Home.tsx                       # Home page (composes Hero, Services, etc.)
    Hero.tsx, Services.tsx, ...    # Home page sections
    AboutPage.tsx, LearningPage.tsx, HRSolutionsPage.tsx,
    PeopleAdvisoryPage.tsx, CareersPage.tsx, Contact.tsx,
    Privacy.tsx, Terms.tsx, NotFound.tsx   # Individual pages/routes
components/ui/            # shadcn/ui primitives (button, card, sheet, etc.)
public/                   # Static assets served as-is (images, robots.txt, sitemap.xml)
```

## Deployment

The site deploys automatically to [GitHub Pages](https://pages.github.com/) on every push to
`main` via the workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml): it
type-checks, builds the Vite app, and publishes `dist/` using GitHub's official Pages actions.

The custom domain (`zebulon.in`) is configured via `public/CNAME` and the repo's
Settings → Pages → Custom domain field. Since this is a single-page app using
`react-router-dom`'s `BrowserRouter`, `public/404.html` plus a small inline script in
`index.html` implement the [SPA GitHub Pages redirect trick](https://github.com/rafgraph/spa-github-pages)
so deep links (e.g. `/about`, `/contact`) and page refreshes work correctly instead of 404ing.

To deploy manually, trigger the "Deploy to GitHub Pages" workflow from the Actions tab, or push
to `main`.
