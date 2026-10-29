# Cadence project guidance

Cadence is an account-free habit tracker. The `/` route in
`src/routes/index.tsx` mounts `CadenceApp`; UI components are in
`src/components/cadence/`, and habit types, date helpers, statistics, and
Zustand persistence are in `src/lib/habits/`. User data and theme preference
stay in browser storage unless a product requirement explicitly changes that.

## Commands

- `npm run dev` starts the Vite/TanStack development server.
- `npm run typecheck` runs `tsc --noEmit`.
- `npm run build` creates the production build.
- `npm test` runs the Node test suite.
- `npm run lint` runs ESLint.

Run one script test with `node --test scripts/preview.test.mjs`. For focused
browser rendering checks, use `node scripts/browser-smoke.mjs`; it captures
desktop and mobile views of the running local app.

## Conventions

- Habit completion dates use local calendar `YYYY-MM-DD` strings. Use the
  helpers in `src/lib/habits/dates.ts`, not UTC conversion, for date-only values.
- Weekday numbers follow JavaScript (`0` Sunday through `6` Saturday), but
  displayed weeks start Monday. Keep schedule and streak rules in
  `src/lib/habits/stats.ts`.
- Zustand persistence uses the `cadence-habits-v1` key and explicit
  rehydration; keep UI loading state tied to the store's `hydrated` flag.
- Theme preference uses the separate `cadence-theme` key. The root document
  boot script and `ThemeSync` keep the selected/system theme applied before and
  after hydration.
- Habit color and icon identifiers are finite unions in
  `src/lib/habits/types.ts`; update their UI mappings alongside those types.
- Edit TanStack route source files, not the generated `src/routeTree.gen.ts`.
