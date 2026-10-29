import { subDays } from "date-fns";
import type { Completions, Habit, HabitStats, Weekday } from "./types";
import { addDaysIso, fromIso, isoDate, weekdayJs } from "./dates";

export function isScheduled(habit: Habit, iso: string): boolean {
  const days = habit.days.length ? habit.days : ([0, 1, 2, 3, 4, 5, 6] as Weekday[]);
  return days.includes(weekdayJs(iso));
}

export function isDueOn(habit: Habit, iso: string): boolean {
  if (iso < isoDate(new Date(habit.createdAt))) return false;
  return isScheduled(habit, iso);
}

export function completionSet(
  completions: Completions,
  habitId: string,
): Set<string> {
  return new Set(completions[habitId] ?? []);
}

export function isDone(
  completions: Completions,
  habitId: string,
  iso: string,
): boolean {
  return (completions[habitId] ?? []).includes(iso);
}

function walkScheduledBack(
  habit: Habit,
  fromIsoInclusive: string,
  untilIso: string,
): string[] {
  const dates: string[] = [];
  let cursor = fromIsoInclusive;
  while (cursor >= untilIso) {
    if (isDueOn(habit, cursor)) dates.push(cursor);
    cursor = addDaysIso(cursor, -1);
  }
  return dates;
}

export function currentStreak(
  habit: Habit,
  done: Set<string>,
  today = isoDate(),
): number {
  const created = isoDate(new Date(habit.createdAt));
  let start = today;
  if (isDueOn(habit, today) && !done.has(today)) {
    start = addDaysIso(today, -1);
  }
  let streak = 0;
  let cursor = start;
  while (cursor >= created) {
    if (!isDueOn(habit, cursor)) {
      cursor = addDaysIso(cursor, -1);
      continue;
    }
    if (!done.has(cursor)) break;
    streak += 1;
    cursor = addDaysIso(cursor, -1);
  }
  return streak;
}

export function bestStreak(habit: Habit, done: Set<string>, today = isoDate()): number {
  const created = isoDate(new Date(habit.createdAt));
  const scheduled = walkScheduledBack(habit, today, created);
  let best = 0;
  let run = 0;
  for (const day of [...scheduled].reverse()) {
    if (done.has(day)) {
      run += 1;
      if (run > best) best = run;
    } else {
      run = 0;
    }
  }
  return best;
}

export function computeHabitStats(
  habit: Habit,
  completions: Completions,
  today = isoDate(),
  monthAnchor = fromIso(today),
): HabitStats {
  const done = completionSet(completions, habit.id);
  const created = isoDate(new Date(habit.createdAt));

  const last30End = fromIso(today);
  const last30: string[] = [];
  for (let i = 0; i < 30; i++) {
    const iso = isoDate(subDays(last30End, i));
    if (iso < created) break;
    if (isDueOn(habit, iso)) last30.push(iso);
  }
  const last30Done = last30.filter((d) => done.has(d)).length;

  const monthStart = isoDate(
    new Date(monthAnchor.getFullYear(), monthAnchor.getMonth(), 1),
  );
  const monthEnd = isoDate(
    new Date(monthAnchor.getFullYear(), monthAnchor.getMonth() + 1, 0),
  );
  let monthDue = 0;
  let monthDone = 0;
  let cursor = monthStart > created ? monthStart : created;
  const cap = monthEnd < today ? monthEnd : today;
  while (cursor <= cap) {
    if (isDueOn(habit, cursor)) {
      monthDue += 1;
      if (done.has(cursor)) monthDone += 1;
    }
    cursor = addDaysIso(cursor, 1);
  }

  const todayDue = isDueOn(habit, today);
  return {
    currentStreak: currentStreak(habit, done, today),
    bestStreak: bestStreak(habit, done, today),
    last30Due: last30.length,
    last30Done,
    last30Rate: last30.length ? last30Done / last30.length : 0,
    monthDue,
    monthDone,
    total: [...done].filter((d) => d <= today).length,
    todayDue,
    todayDone: todayDue && done.has(today),
  };
}

export function dayCompletion(
  habits: Habit[],
  completions: Completions,
  iso: string,
): { done: number; due: number } {
  let due = 0;
  let done = 0;
  for (const habit of habits) {
    if (!isDueOn(habit, iso)) continue;
    due += 1;
    if (isDone(completions, habit.id, iso)) done += 1;
  }
  return { done, due };
}
