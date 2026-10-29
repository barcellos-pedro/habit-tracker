# Cadence

A calm habit tracker. Check off the day, see the week and the month, and keep a streak without an account.

Habits stay in this browser. Nothing is sent to a server.

## What you can do

- Check a day on or off. Today is outlined. Future days stay locked. Rest days show a dash.
- Switch between a week strip and a month grid. The month view includes a fill map for the whole day and a calendar for each habit.
- See today’s count, this week’s rate, the current streak, the best streak, this month, the last 30 days, and the all-time total.
- Add, edit, or delete a habit. Each one has a name, a color, an icon, and the weekdays it is due.
- Switch between light and dark paper. The choice is remembered. Until you pick one, Cadence follows the system setting.

The first visit seeds four habits (a walk, reading, water, and a weekday stretch) with about six weeks of history so the board is not empty. Deleting them, or adding your own, replaces that sample. Days before a habit’s start date do not count as misses.

## Data

Everything is stored in `localStorage`:

| Key | Contents |
| --- | --- |
| `cadence-habits-v1` | Habits and completion dates |
| `cadence-theme` | `light` or `dark` |

Clearing site data resets Cadence, including the sample habits.

## Develop

Requires Node.js.

```bash
npm install
npm run dev
```

The dev server listens on port 8080. Production output is written to `dist/`;
Netlify deploys that directory using `netlify.toml`.

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run typecheck` | Typecheck with `tsc --noEmit` |
| `npm run build` | Production build |
| `npm run preview` | Serve the production build |
| `npm test` | Run the workspace tests |
| `npm run lint` | Lint with ESLint |

## Stack

React 19, Vite, Tailwind CSS 4, and Zustand. Habit state is client-only. Dates use `date-fns`. The week starts on Monday.
