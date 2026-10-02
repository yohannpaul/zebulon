# CLAUDE.md

Guidance for Claude Code sessions working in this repository.

## What this project is

**Zebulon Consulting** — the marketing website for a management consulting firm in Hyderabad
specializing in training, HR operations, digital marketing, and help desk support (see
`metadata.json`). It's a client-side React single-page site: a home page plus About, Services,
Careers, and Contact pages, built and exported from **Google AI Studio** (see `README.md` —
"Run and deploy your AI Studio app"). There is no backend in this repo beyond `express` and
`@google/genai` listed as dependencies (present for potential AI Studio–generated features; the
app currently runs as a static Vite/React site).

## Tech stack

- **Vite 6** — dev server / bundler (`vite.config.ts`)
- **React 19** + **react-dom 19**
- **react-router-dom 7** — client-side routing (`BrowserRouter`, routes in `src/App.tsx`)
- **TypeScript 5.8** — `tsconfig.json` uses `"noEmit": true`; type checking only, no `tsc` build
  step (Vite/esbuild handles transpilation)
- **Tailwind CSS 4** via `@tailwindcss/vite` plugin (no separate `tailwind.config.js` needed with
  this plugin)
- **lucide-react** — icon set
- **motion** (Framer Motion successor) — animations
- Path alias: `@/*` maps to the repo root (see `tsconfig.json` and `vite.config.ts`)

## Directory structure

```
index.html              # Vite entry HTML, mounts #root
src/
  main.tsx              # React entry point
  App.tsx               # Router setup + top-level layout (Header/Footer wrap all routes)
  index.css             # Global styles / Tailwind imports
  components/
    Header.tsx           # Site nav (rendered on every route)
    Footer.tsx            # Site footer (rendered on every route)
    Home.tsx               # Home page (composes Hero, About, Services, etc. below)
    Hero.tsx
    About.tsx
    Section.tsx           # Shared layout wrapper
    Services.tsx
    SuccessNumbers.tsx
    Testimonials.tsx
    TrustStrip.tsx
    VisionMission.tsx
    WhyUs.tsx
    AboutPage.tsx          # Routed page: /about
    ServicesPage.tsx       # Routed page: /services
    CareersPage.tsx        # Routed page: /careers
    Contact.tsx            # Routed page: /contact
  logo.png, yohannimg.jpg  # Static image assets imported directly by components
.claude/
  launch.json            # Dev-server launch config (npm run dev, port 3000)
  settings.local.json
```

Routes are defined in `src/App.tsx`: `/`, `/about`, `/services`, `/careers`, `/contact`. `Home.tsx`
is a composition of the marketing sections (`Hero`, `About`, `Services`, `WhyUs`,
`SuccessNumbers`, `Testimonials`, `TrustStrip`, `VisionMission`); the other routed `*Page.tsx`
components are standalone pages.

## Running locally

```bash
npm install        # install dependencies
npm run dev         # start Vite dev server on http://0.0.0.0:3000
npm run build        # production build to dist/
npm run preview       # preview the production build
npm run lint          # tsc --noEmit — type-check only, no emitted output
npm run clean          # rm -rf dist
```

There is also a Claude Code launch config at `.claude/launch.json` (`zebulon-dev`, `npm run dev`
on port 3000) for driving the dev server from a Claude Code preview pane.

## Gotchas

- **`GEMINI_API_KEY` / `.env.local`**: `vite.config.ts` reads `GEMINI_API_KEY` via `loadEnv` and
  injects it as `process.env.GEMINI_API_KEY`. `.env.example` documents `GEMINI_API_KEY` and
  `APP_URL`, both normally auto-injected by AI Studio at runtime. Neither appears to be consumed
  by current site code — leave this wiring alone unless you're specifically adding an AI Studio /
  Gemini-backed feature.
- **No lint/format tooling configured**: `npm run lint` only runs `tsc --noEmit`; there is no
  ESLint or Prettier config in the repo.
- **No test setup**: no test runner or test files exist in this repo.
- **HMR toggle**: `vite.config.ts` disables HMR when `DISABLE_HMR=true` is set in the environment
  — this is intentional for AI Studio's agent-editing flow ("file watching is disabled to prevent
  flickering during agent edits"). Don't "fix" this.
- **`index.html` title** still reads "My Google AI Studio App" — a leftover from the AI Studio
  template, not yet customized to the Zebulon brand.
- **This is a from-scratch/exported AI Studio project**, not a standard `create-vite` scaffold —
  expect occasional AI-Studio-specific idioms (like the `DISABLE_HMR` env var and the `@google/genai`
  / `express` dependencies) that aren't yet exercised by the current site code.
- Built and maintained by Nachiketh Desai / Milarch Tech.
