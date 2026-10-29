import type { HabitColorId, HabitIconId } from "./types";
import {
  Bike,
  BookOpen,
  Brain,
  Droplets,
  Dumbbell,
  Footprints,
  Heart,
  Leaf,
  Moon,
  PenLine,
  PersonStanding,
  Sun,
  type LucideIcon,
} from "lucide-react";

export const COLOR_META: Record<
  HabitColorId,
  { label: string; swatch: string; fg: string }
> = {
  pine: {
    label: "Pine",
    swatch: "var(--color-habit-pine)",
    fg: "var(--color-habit-pine-fg)",
  },
  sage: {
    label: "Sage",
    swatch: "var(--color-habit-sage)",
    fg: "var(--color-habit-sage-fg)",
  },
  ocean: {
    label: "Ocean",
    swatch: "var(--color-habit-ocean)",
    fg: "var(--color-habit-ocean-fg)",
  },
  slate: {
    label: "Slate",
    swatch: "var(--color-habit-slate)",
    fg: "var(--color-habit-slate-fg)",
  },
  clay: {
    label: "Clay",
    swatch: "var(--color-habit-clay)",
    fg: "var(--color-habit-clay-fg)",
  },
  terra: {
    label: "Terra",
    swatch: "var(--color-habit-terra)",
    fg: "var(--color-habit-terra-fg)",
  },
  moss: {
    label: "Moss",
    swatch: "var(--color-habit-moss)",
    fg: "var(--color-habit-moss-fg)",
  },
  wine: {
    label: "Wine",
    swatch: "var(--color-habit-wine)",
    fg: "var(--color-habit-wine-fg)",
  },
};

export const ICON_MAP: Record<HabitIconId, LucideIcon> = {
  footprints: Footprints,
  book: BookOpen,
  droplets: Droplets,
  stretch: PersonStanding,
  dumbbell: Dumbbell,
  moon: Moon,
  sun: Sun,
  leaf: Leaf,
  pen: PenLine,
  brain: Brain,
  heart: Heart,
  bike: Bike,
};

export const ICON_LABELS: Record<HabitIconId, string> = {
  footprints: "Walk",
  book: "Read",
  droplets: "Water",
  stretch: "Stretch",
  dumbbell: "Train",
  moon: "Wind down",
  sun: "Morning",
  leaf: "Nature",
  pen: "Write",
  brain: "Focus",
  heart: "Care",
  bike: "Ride",
};
