# Copilot instructions

## Project overview

Cadence is an account-free React 19 single-page app built with Vite. Habits, completion dates, and theme preference live in the browser's `localStorage`; do not add server persistence or authentication unless the product requirement explicitly changes.

`src/main.tsx` mounts `CadenceApp` from `src/components/cadence/`; app UI is split into cadence-specific components, while habit types, date helpers, statistics, and Zustand state are kept in `src/lib/habits/`. `index.html` owns document metadata and the pre-render theme boot script. Keep `ThemeSync` mounted at the app root.

## Build, test, and lint

- `npm run dev` — start the Vite development server.
- `npm run typecheck` — run `tsc --noEmit`.
- `npm run build` — create the production build.
- `npm test` — run the Node test suite.
- `npm run lint` — lint the repository with ESLint.

Run one script test directly, for example: `node --test scripts/browser-smoke-verdict.test.mjs`. For a focused lint check, use `npx eslint src/lib/habits/stats.ts`.

## Data and date conventions

- The Zustand store in `src/lib/habits/store.ts` is the source of truth for habits and completions. It uses the `cadence-habits-v1` persistence key and explicit rehydration; keep UI loading behavior tied to its `hydrated` state. First-run sample data is seeded only until onboarding has been persisted.
- Habit completion keys are local calendar dates formatted as `YYYY-MM-DD`. Use `isoDate`, `fromIso`, and related helpers in `src/lib/habits/dates.ts` rather than converting date-only values through UTC. This avoids date shifts across time zones.
- Weekday values follow JavaScript numbering (`0` Sunday through `6` Saturday), while displayed weeks start Monday (`WEEK_STARTS_ON`). Keep schedule interpretation and due-day rules centralized in `src/lib/habits/stats.ts`.
- Theme preference is separate from habit state under `cadence-theme`; the root boot script applies it before rendering to avoid a theme flash. Keep the key and `ThemeSync` behavior aligned when changing theme handling.
- Habit color and icon identifiers are finite unions in `src/lib/habits/types.ts`. Extend those definitions and the corresponding UI/color mappings together when adding options.

## App shell and build integration

The Vite dev server listens on `0.0.0.0:8080`; the preview server listens on `127.0.0.1:8081`. Production builds go to `dist/`, which Netlify publishes as configured in `netlify.toml`.
