export const HABIT_COLORS = [
  "pine",
  "sage",
  "ocean",
  "slate",
  "clay",
  "terra",
  "moss",
  "wine",
] as const;

export type HabitColorId = (typeof HABIT_COLORS)[number];

export const HABIT_ICONS = [
  "footprints",
  "book",
  "droplets",
  "stretch",
  "dumbbell",
  "moon",
  "sun",
  "leaf",
  "pen",
  "brain",
  "heart",
  "bike",
] as const;

export type HabitIconId = (typeof HABIT_ICONS)[number];

/** JS weekday: 0 Sunday … 6 Saturday */
export type Weekday = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type Habit = {
  id: string;
  name: string;
  color: HabitColorId;
  icon: HabitIconId;
  /** Days this habit is due. Empty/missing treated as every day. */
  days: Weekday[];
  createdAt: string;
};

export type Completions = Record<string, string[]>;

export type HabitDraft = {
  name: string;
  color: HabitColorId;
  icon: HabitIconId;
  days: Weekday[];
};

export type HabitStats = {
  currentStreak: number;
  bestStreak: number;
  last30Due: number;
  last30Done: number;
  last30Rate: number;
  monthDue: number;
  monthDone: number;
  total: number;
  todayDue: boolean;
  todayDone: boolean;
};
