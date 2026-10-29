# Copilot instructions

## Project overview

Cadence is a single-page habit tracker built with React 19 and TanStack Start. The app is intentionally account-free: habits, completion dates, and theme preference live in the browser's `localStorage`; do not add server persistence or authentication unless the product requirement explicitly changes.

The `/` file route in `src/routes/index.tsx` mounts `CadenceApp` from `src/components/cadence/`. The app UI is split into cadence-specific components, while habit types, date helpers, statistics, and Zustand state are kept in `src/lib/habits/`. The root route (`src/routes/__root.tsx`) owns document metadata, the theme boot script, and the shared shell. Preserve `PreviewHostBridge`, `AuthProvider`, and `ThemeSync` there; the provider is currently a stable passthrough from the app-builder template.

## Build, test, and lint

- `npm run dev` — start the Vite/TanStack development server.
- `npm run typecheck` — run `tsc --noEmit`.
- `npm run build` — create the production build and then run `db:migrate`. The migrator skips without `DATABASE_URL`; when set, it applies pending top-level SQL migrations.
- `npm test` — run the script tests and the explicitly listed TypeScript tests.
- `npm run lint` — lint the repository with ESLint.

Run one script test directly, for example: `node --test scripts/preview.test.mjs`. Run one TypeScript test directly, for example: `node --experimental-strip-types --test src/lib/auth/gate-identity.test.ts`. The script tests are picked up by the glob in `package.json`; add new TypeScript test files to the `npm test` script's explicit list. For a focused lint check, use `npx eslint src/lib/habits/stats.ts`.

## Data and date conventions

- The Zustand store in `src/lib/habits/store.ts` is the source of truth for habits and completions. It uses the `cadence-habits-v1` persistence key and explicit rehydration; keep UI loading behavior tied to its `hydrated` state. First-run sample data is seeded only until onboarding has been persisted.
- Habit completion keys are local calendar dates formatted as `YYYY-MM-DD`. Use `isoDate`, `fromIso`, and related helpers in `src/lib/habits/dates.ts` rather than converting date-only values through UTC. This avoids date shifts across time zones.
- Weekday values follow JavaScript numbering (`0` Sunday through `6` Saturday), while displayed weeks start Monday (`WEEK_STARTS_ON`). Keep schedule interpretation and due-day rules centralized in `src/lib/habits/stats.ts`.
- Theme preference is separate from habit state under `cadence-theme`; the root boot script applies it before rendering to avoid a theme flash. Keep the key and `ThemeSync` behavior aligned when changing theme handling.
- Habit color and icon identifiers are finite unions in `src/lib/habits/types.ts`. Extend those definitions and the corresponding UI/color mappings together when adding options.

## App shell and build integration

TanStack file routes are registered through the generated `src/routeTree.gen.ts`; edit route source files rather than the generated tree. `src/router.tsx` exports the named `getRouter()` factory and installs the shared error component.

`npm run dev`, `build`, and `preview` go through `scripts/with-app-env.mjs`; preserve that wrapper and the `0.0.0.0:8080` dev / `127.0.0.1:8081` preview port contracts in `vite.config.ts`. The Vite configuration also wires the app-environment endpoint, PWA plugin, auth popup middleware, and production Nitro middleware from `server/`. Keep these integrations and their ordering intact when changing the build setup. Follow the root `AGENTS.md` for the wider App Builder workspace contract.
