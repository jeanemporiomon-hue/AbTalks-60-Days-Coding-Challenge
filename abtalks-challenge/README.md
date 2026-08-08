# ABTalks 60-Day Coding Challenge

A mobile-first, persona-driven preview app for a 60-day proof-of-work coding
challenge. Built with React 18, Vite, Tailwind CSS v4, and React Router.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (defaults to `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview   # serve the production build locally
```

## Project structure

```
abtalks-challenge/
├── index.html              # Vite entry point (mounts #root)
├── standalone-preview.html # Zero-build CDN/Babel version — open directly
│                            in a browser, no npm install needed
├── package.json
├── vite.config.js
├── .gitignore
└── src/
    ├── main.jsx             # ReactDOM root + BrowserRouter
    ├── App.jsx               # Route table + PersonaProvider/MobileFrame wiring
    ├── index.css              # Tailwind v4 import + custom animations
    ├── context/
    │   └── PersonaContext.jsx  # Mock-state provider (3 demo personas)
    ├── components/
    │   ├── MobileFrame.jsx
    │   ├── PersonaSwitcher.jsx
    │   ├── StreakBadge.jsx
    │   ├── ProgressGrid.jsx
    │   ├── SubmissionForm.jsx
    │   └── FrictionSolverCard.jsx
    ├── pages/
    │   ├── LandingPage.jsx
    │   ├── DashboardPage.jsx
    │   └── DayPage.jsx
    └── data/
        └── mockData.js
```

## What was reconstructed

Two files that a working build needs weren't in the original upload set, so
they were added:

- **`src/App.jsx`** — didn't exist. Rebuilt from the route table and
  provider/component nesting found inside the standalone prototype's inline
  `App` component, so it should match the original design intent exactly
  (including the `/day` → `/day/12` and `*` → `/` redirects).
- **`package.json`** — didn't exist, so none of this was installable.

The uploaded `index.html` turned out to be a **self-contained CDN + Babel
single-file prototype** (Tailwind v3 via `<script>` tag, React/React Router
via UMD globals, everything inlined in one `<script type="text/babel">`
block) rather than a Vite entry point — it has no `<script type="module"
src="/src/main.jsx">` tag, so dropping it in as-is would have made Vite
serve the old inline prototype and silently ignore every other file in this
project. It's kept as `standalone-preview.html` (open it directly in a
browser, no build step required) as a bonus, and a correct, minimal
`index.html` was written for the real Vite app, reusing its title/meta/font
tags.

## Dependency notes

A few versions are pinned deliberately rather than left to resolve to
"latest," because this stack has had some breaking transitions recently:

- **`lucide-react` is capped in the `0.x` line.** Version 1.0 renamed several
  icons this project imports (`AlertCircle` → `CircleAlert`, `CheckCircle` →
  `CircleCheck`, `CheckCircle2` → `CircleCheckBig`). Installing `1.x` as-is
  would break the build on import.
- **`vite` is pinned to `5.x`** paired with `@vitejs/plugin-react ^4.x`.
  `@tailwindcss/vite` had a documented peer-dependency conflict with Vite 7,
  and Vite 8 (mid-2026) is a very recent Rolldown-based rewrite. Vite 5 is
  still a maintained line and is the combination with the longest track
  record with this exact Tailwind v4 setup.
- **`react-router-dom` is pinned to `7.x`.** The `react-router-dom` package
  was discontinued as of React Router v8 (routing now lives in the
  `react-router` package instead) and plain v6 is now end-of-life for
  security patches — v7's `react-router-dom` re-export is the actively
  maintained version that still matches every import in this codebase
  (`BrowserRouter`, `Routes`, `Route`, `useNavigate`, `useParams`).

If you'd rather ride the newest majors, that's a reasonable choice too — just
budget time for the `lucide-react` icon renames and re-test the Tailwind/Vite
pairing.
