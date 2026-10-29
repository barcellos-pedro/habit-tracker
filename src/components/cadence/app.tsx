import { useEffect, useMemo, useState } from "react";
import { addMonths, addWeeks, isSameWeek } from "date-fns";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HabitCard } from "@/components/cadence/habit-card";
import { HabitForm } from "@/components/cadence/habit-form";
import { MonthHeatmap } from "@/components/cadence/month-heatmap";
import {
  formatLongDate,
  formatMonthTitle,
  isoDate,
  monthGrid,
  WEEK_STARTS_ON,
  weekDays,
} from "@/lib/habits/dates";
import { computeHabitStats, dayCompletion } from "@/lib/habits/stats";
import { rehydrateHabits, useHabitStore } from "@/lib/habits/store";
import type { Habit, HabitDraft } from "@/lib/habits/types";
import { ThemeToggle } from "@/components/cadence/theme-toggle";
import { cn } from "@/lib/utils";

type ViewMode = "week" | "month";

export function CadenceApp() {
  const hydrated = useHabitStore((s) => s.hydrated);
  const habits = useHabitStore((s) => s.habits);
  const completions = useHabitStore((s) => s.completions);
  const addHabit = useHabitStore((s) => s.addHabit);
  const updateHabit = useHabitStore((s) => s.updateHabit);
  const deleteHabit = useHabitStore((s) => s.deleteHabit);
  const toggleDay = useHabitStore((s) => s.toggleDay);

  const [view, setView] = useState<ViewMode>("week");
  const [cursor, setCursor] = useState(() => new Date());
  const [formOpen, setFormOpen] = useState(false);
  const [editing, setEditing] = useState<Habit | null>(null);

  useEffect(() => {
    rehydrateHabits();
  }, []);

  const today = isoDate();
  const todayDate = useMemo(() => new Date(), []);

  const days = useMemo(
    () => (view === "week" ? weekDays(cursor) : monthGrid(cursor)),
    [view, cursor],
  );

  const showingToday =
    view === "week"
      ? isSameWeek(cursor, todayDate, { weekStartsOn: WEEK_STARTS_ON })
      : cursor.getMonth() === todayDate.getMonth() &&
        cursor.getFullYear() === todayDate.getFullYear();

  const todayStats = useMemo(() => {
    const { done, due } = dayCompletion(habits, completions, today);
    let bestCurrent = 0;
    let weekDone = 0;
    let weekDue = 0;
    const week = weekDays(todayDate);
    for (const habit of habits) {
      const s = computeHabitStats(habit, completions, today, cursor);
      if (s.currentStreak > bestCurrent) bestCurrent = s.currentStreak;
    }
    for (const d of week) {
      const iso = isoDate(d);
      if (iso > today) continue;
      const c = dayCompletion(habits, completions, iso);
      weekDone += c.done;
      weekDue += c.due;
    }
    return { done, due, bestCurrent, weekDone, weekDue };
  }, [habits, completions, today, todayDate, cursor]);

  function openNew() {
    setEditing(null);
    setFormOpen(true);
  }

  function openEdit(habit: Habit) {
    setEditing(habit);
    setFormOpen(true);
  }

  function handleSubmit(draft: HabitDraft) {
    if (editing) updateHabit(editing.id, draft);
    else addHabit(draft);
  }

  function shift(dir: -1 | 1) {
    setCursor((c) => (view === "week" ? addWeeks(c, dir) : addMonths(c, dir)));
  }

  if (!hydrated) {
    return (
      <div className="mx-auto flex min-h-dvh max-w-3xl flex-col gap-6 px-4 py-8">
        <p className="font-display text-2xl font-medium tracking-tight italic">Cadence</p>
        <p className="text-sm text-muted-foreground">Loading your week</p>
        <div className="h-24 rounded-xl bg-muted" />
        <div className="h-48 rounded-xl bg-muted" />
      </div>
    );
  }

  return (
    <TooltipProvider>
      <div className="min-h-dvh">
        <header className="border-b border-border/80 bg-background/80 backdrop-blur-sm">
          <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-4 sm:py-5">
            <div className="flex items-center gap-2.5">
              <Mark />
              <div>
                <p className="font-display text-2xl leading-none font-medium tracking-tight italic">
                  Cadence
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {formatLongDate(todayDate)}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button onClick={openNew} className="pl-3.5 pr-4">
                <Plus />
                <span className="hidden sm:inline">New habit</span>
                <span className="sm:hidden">Add</span>
              </Button>
            </div>
          </div>
        </header>

        <main className="mx-auto flex max-w-3xl flex-col gap-5 px-4 py-6 sm:py-8">
          <section className="grid grid-cols-3 gap-2 sm:gap-3">
            <StatTile
              label="Today"
              value={
                todayStats.due
                  ? `${todayStats.done}/${todayStats.due}`
                  : "Rest"
              }
              hint={
                todayStats.due
                  ? todayStats.done === todayStats.due
                    ? "Complete"
                    : "Still open"
                  : "Nothing due"
              }
            />
            <StatTile
              label="This week"
              value={
                todayStats.weekDue
                  ? `${Math.round((todayStats.weekDone / todayStats.weekDue) * 100)}%`
                  : "—"
              }
              hint={`${todayStats.weekDone} kept`}
            />
            <StatTile
              label="Top streak"
              value={String(todayStats.bestCurrent)}
              hint={todayStats.bestCurrent === 1 ? "day" : "days"}
            />
          </section>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label={view === "week" ? "Previous week" : "Previous month"}
                onClick={() => shift(-1)}
              >
                <ChevronLeft />
              </Button>
              <p className="min-w-[9.5rem] text-center font-display text-lg font-medium tracking-tight">
                {view === "week"
                  ? `Week of ${days[0] ? formatMonthShort(days[0]) : ""}`
                  : formatMonthTitle(cursor)}
              </p>
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label={view === "week" ? "Next week" : "Next month"}
                onClick={() => shift(1)}
              >
                <ChevronRight />
              </Button>
              {!showingToday ? (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setCursor(new Date())}
                >
                  Today
                </Button>
              ) : null}
            </div>
            <div className="flex rounded-lg bg-muted p-1">
              {(["week", "month"] as const).map((mode) => (
                <button
                  key={mode}
                  type="button"
                  onClick={() => {
                    setView(mode);
                    setCursor(new Date());
                  }}
                  className={cn(
                    "h-9 rounded-md px-3.5 text-sm font-medium capitalize transition-[background-color,color] duration-150",
                    view === mode
                      ? "bg-card text-foreground shadow-[var(--shadow-border)]"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>

          {view === "month" && habits.length > 0 ? (
            <MonthHeatmap
              days={days}
              habits={habits}
              completions={completions}
              monthAnchor={cursor}
              today={today}
            />
          ) : null}

          {habits.length === 0 ? (
            <EmptyState onAdd={openNew} />
          ) : (
            <div className="flex flex-col gap-3">
              {habits.map((habit) => (
                <HabitCard
                  key={habit.id}
                  habit={habit}
                  completions={completions}
                  days={days}
                  mode={view}
                  monthAnchor={cursor}
                  today={today}
                  onToggle={(iso) => toggleDay(habit.id, iso)}
                  onEdit={() => openEdit(habit)}
                  onDelete={() => deleteHabit(habit.id)}
                />
              ))}
            </div>
          )}
        </main>
      </div>

      <HabitForm
        open={formOpen}
        habit={editing}
        onOpenChange={setFormOpen}
        onSubmit={handleSubmit}
      />
    </TooltipProvider>
  );
}

function formatMonthShort(d: Date) {
  return d.toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

function StatTile({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint: string;
}) {
  return (
    <div className="rounded-xl bg-card px-3 py-3 shadow-[var(--shadow-border)] sm:px-4 sm:py-4">
      <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
        {label}
      </p>
      <p className="mt-1 font-display text-2xl leading-none font-medium tracking-tight tabular-nums sm:text-3xl">
        {value}
      </p>
      <p className="mt-1.5 text-xs text-muted-foreground">{hint}</p>
    </div>
  );
}

function Mark() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="size-9 text-forest"
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="8" fill="currentColor" />
      <path
        d="M7 21c3.2-6 14.8-6 18 0"
        fill="none"
        stroke="var(--color-forest-foreground)"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <circle cx="16" cy="13.5" r="2" fill="var(--color-forest-foreground)" />
    </svg>
  );
}

function EmptyState({ onAdd }: { onAdd: () => void }) {
  return (
    <div className="flex flex-col items-center rounded-xl bg-card px-6 py-14 text-center shadow-[var(--shadow-border)]">
      <Mark />
      <h2 className="mt-4 font-display text-2xl font-medium tracking-tight">
        Begin the week
      </h2>
      <p className="mt-2 max-w-sm text-sm text-muted-foreground">
        Add one habit you can keep. Check it off each day and watch the line
        hold.
      </p>
      <Button className="mt-6" onClick={onAdd}>
        <Plus />
        Add a habit
      </Button>
    </div>
  );
}
