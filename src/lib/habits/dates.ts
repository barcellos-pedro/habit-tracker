import {
  addDays,
  eachDayOfInterval,
  endOfMonth,
  format,
  startOfMonth,
  startOfWeek,
  subDays,
} from "date-fns";
import type { Weekday } from "./types";

export const WEEK_STARTS_ON = 1 as const;

export function isoDate(d: Date = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function fromIso(iso: string): Date {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y!, (m ?? 1) - 1, d ?? 1);
}

export function addDaysIso(iso: string, n: number): string {
  return isoDate(addDays(fromIso(iso), n));
}

export function weekdayJs(iso: string): Weekday {
  return fromIso(iso).getDay() as Weekday;
}

export function isFutureIso(iso: string, today = isoDate()): boolean {
  return iso > today;
}

export function weekDays(anchor: Date): Date[] {
  const start = startOfWeek(anchor, { weekStartsOn: WEEK_STARTS_ON });
  return Array.from({ length: 7 }, (_, i) => addDays(start, i));
}

export function monthGrid(anchor: Date): Date[] {
  const start = startOfWeek(startOfMonth(anchor), {
    weekStartsOn: WEEK_STARTS_ON,
  });
  const end = addDays(start, 41);
  return eachDayOfInterval({ start, end });
}

export function monthDays(anchor: Date): Date[] {
  return eachDayOfInterval({
    start: startOfMonth(anchor),
    end: endOfMonth(anchor),
  });
}

export function lastNDays(n: number, today = new Date()): Date[] {
  const end = today;
  const start = subDays(end, n - 1);
  return eachDayOfInterval({ start, end });
}

export function formatDayHeading(d: Date): string {
  return format(d, "EEE d");
}

export function formatLongDate(d: Date): string {
  return format(d, "EEEE, d MMMM");
}

export function formatMonthTitle(d: Date): string {
  return format(d, "MMMM yyyy");
}

export const WEEKDAY_LABELS: { js: Weekday; short: string }[] = [
  { js: 1, short: "M" },
  { js: 2, short: "T" },
  { js: 3, short: "W" },
  { js: 4, short: "T" },
  { js: 5, short: "F" },
  { js: 6, short: "S" },
  { js: 0, short: "S" },
];

export const ALL_DAYS: Weekday[] = [0, 1, 2, 3, 4, 5, 6];
