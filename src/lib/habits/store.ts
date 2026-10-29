import { create } from "zustand";
import { persist } from "zustand/middleware";
import { subDays } from "date-fns";
import type { Completions, Habit, HabitDraft } from "./types";
import { isoDate } from "./dates";
import { isFutureIso } from "./dates";

type HabitState = {
  habits: Habit[];
  completions: Completions;
  hasOnboarded: boolean;
  hydrated: boolean;
  addHabit: (draft: HabitDraft) => void;
  updateHabit: (id: string, draft: HabitDraft) => void;
  deleteHabit: (id: string) => void;
  toggleDay: (habitId: string, iso: string) => void;
};

function hashRate(seed: string): number {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 33 + seed.charCodeAt(i)) | 0;
  return Math.abs(h);
}

function buildSeed(): { habits: Habit[]; completions: Completions } {
  const today = new Date();
  const createdAt = subDays(today, 48).toISOString();
  const habits: Habit[] = [
    {
      id: "seed-walk",
      name: "Morning walk",
      color: "pine",
      icon: "footprints",
      days: [0, 1, 2, 3, 4, 5, 6],
      createdAt,
    },
    {
      id: "seed-read",
      name: "Read 20 pages",
      color: "slate",
      icon: "book",
      days: [0, 1, 2, 3, 4, 5, 6],
      createdAt,
    },
    {
      id: "seed-water",
      name: "Drink water",
      color: "ocean",
      icon: "droplets",
      days: [0, 1, 2, 3, 4, 5, 6],
      createdAt,
    },
    {
      id: "seed-stretch",
      name: "Stretch",
      color: "clay",
      icon: "stretch",
      days: [1, 2, 3, 4, 5],
      createdAt,
    },
  ];

  const rates: Record<string, number> = {
    "seed-walk": 82,
    "seed-read": 70,
    "seed-water": 88,
    "seed-stretch": 64,
  };

  const todayIso = isoDate(today);
  const completions: Completions = {};
  for (const habit of habits) {
    const list: string[] = [];
    const rate = rates[habit.id] ?? 70;
    for (let i = 1; i <= 46; i++) {
      const d = isoDate(subDays(today, i));
      const n = hashRate(`${habit.id}:${d}`) % 100;
      if (n < rate) list.push(d);
    }
    completions[habit.id] = list;
  }

  // Leave today mostly open so checking off feels like the first action.
  if ((completions["seed-water"] ?? []).includes(todayIso) === false) {
    completions["seed-water"] = [...(completions["seed-water"] ?? []), todayIso];
  }

  return { habits, completions };
}

export const useHabitStore = create<HabitState>()(
  persist(
    (set, get) => ({
      habits: [],
      completions: {},
      hasOnboarded: false,
      hydrated: false,
      addHabit: (draft) => {
        const habit: Habit = {
          id:
            typeof crypto !== "undefined" && crypto.randomUUID
              ? crypto.randomUUID()
              : `h-${Date.now()}`,
          name: draft.name.trim(),
          color: draft.color,
          icon: draft.icon,
          days: draft.days.length ? draft.days : [0, 1, 2, 3, 4, 5, 6],
          createdAt: new Date().toISOString(),
        };
        set({ habits: [habit, ...get().habits] });
      },
      updateHabit: (id, draft) => {
        set({
          habits: get().habits.map((h) =>
            h.id === id
              ? {
                  ...h,
                  name: draft.name.trim(),
                  color: draft.color,
                  icon: draft.icon,
                  days: draft.days.length ? draft.days : [0, 1, 2, 3, 4, 5, 6],
                }
              : h,
          ),
        });
      },
      deleteHabit: (id) => {
        const { [id]: _removed, ...rest } = get().completions;
        set({
          habits: get().habits.filter((h) => h.id !== id),
          completions: rest,
        });
      },
      toggleDay: (habitId, iso) => {
        if (isFutureIso(iso)) return;
        const current = get().completions[habitId] ?? [];
        const next = current.includes(iso)
          ? current.filter((d) => d !== iso)
          : [...current, iso];
        set({
          completions: { ...get().completions, [habitId]: next },
        });
      },
    }),
    {
      name: "cadence-habits-v1",
      skipHydration: true,
      partialize: (state) => ({
        habits: state.habits,
        completions: state.completions,
        hasOnboarded: state.hasOnboarded,
      }),
      onRehydrateStorage: () => (state) => {
        if (!state?.hasOnboarded) {
          const seed = buildSeed();
          useHabitStore.setState({
            ...seed,
            hasOnboarded: true,
            hydrated: true,
          });
          return;
        }
        useHabitStore.setState({ hydrated: true });
      },
    },
  ),
);

export function rehydrateHabits() {
  void useHabitStore.persist.rehydrate();
}
