import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { COLOR_META, ICON_LABELS, ICON_MAP } from "@/lib/habits/palette";
import { ALL_DAYS, WEEKDAY_LABELS } from "@/lib/habits/dates";
import type { Habit, HabitColorId, HabitDraft, HabitIconId, Weekday } from "@/lib/habits/types";
import { HABIT_COLORS, HABIT_ICONS } from "@/lib/habits/types";
import { cn } from "@/lib/utils";

const EMPTY: HabitDraft = {
  name: "",
  color: "pine",
  icon: "leaf",
  days: [...ALL_DAYS],
};

type HabitFormProps = {
  open: boolean;
  habit: Habit | null;
  onOpenChange: (open: boolean) => void;
  onSubmit: (draft: HabitDraft) => void;
};

export function HabitForm({ open, habit, onOpenChange, onSubmit }: HabitFormProps) {
  const [draft, setDraft] = useState<HabitDraft>(EMPTY);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) return;
    if (habit) {
      setDraft({
        name: habit.name,
        color: habit.color,
        icon: habit.icon,
        days: [...habit.days],
      });
    } else {
      setDraft(EMPTY);
    }
    setError("");
  }, [open, habit]);

  function toggleDay(day: Weekday) {
    setDraft((prev) => {
      const has = prev.days.includes(day);
      const next = has ? prev.days.filter((d) => d !== day) : [...prev.days, day];
      return { ...prev, days: next.sort((a, b) => a - b) as Weekday[] };
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const name = draft.name.trim();
    if (name.length < 1) {
      setError("Give this habit a name.");
      return;
    }
    if (name.length > 40) {
      setError("Keep the name under 40 characters.");
      return;
    }
    if (draft.days.length === 0) {
      setError("Pick at least one day.");
      return;
    }
    onSubmit({ ...draft, name });
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <form onSubmit={handleSubmit} className="grid gap-5">
          <DialogHeader>
            <DialogTitle>{habit ? "Edit habit" : "New habit"}</DialogTitle>
            <DialogDescription>
              A small daily rite. Color and days help it stand out on the board.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-2">
            <Label htmlFor="habit-name">Name</Label>
            <Input
              id="habit-name"
              value={draft.name}
              onChange={(e) => setDraft((d) => ({ ...d, name: e.target.value }))}
              placeholder="Morning walk"
              maxLength={40}
              autoFocus
            />
          </div>

          <div className="grid gap-2">
            <Label>Icon</Label>
            <div className="grid grid-cols-6 gap-1.5">
              {HABIT_ICONS.map((id) => {
                const Icon = ICON_MAP[id];
                const selected = draft.icon === id;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setDraft((d) => ({ ...d, icon: id as HabitIconId }))}
                    aria-label={ICON_LABELS[id]}
                    aria-pressed={selected}
                    className={cn(
                      "flex size-11 items-center justify-center rounded-md transition-[background-color,box-shadow] duration-150",
                      selected
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground hover:bg-secondary",
                    )}
                  >
                    <Icon className="size-4" />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid gap-2">
            <Label>Color</Label>
            <div className="flex flex-wrap gap-2">
              {HABIT_COLORS.map((id) => {
                const selected = draft.color === id;
                return (
                  <button
                    key={id}
                    type="button"
                    aria-label={COLOR_META[id].label}
                    aria-pressed={selected}
                    onClick={() => setDraft((d) => ({ ...d, color: id as HabitColorId }))}
                    className={cn(
                      "size-9 rounded-full outline-none transition-transform duration-150 active:scale-[0.96]",
                      selected && "ring-2 ring-ring ring-offset-2 ring-offset-card",
                    )}
                    style={{ backgroundColor: COLOR_META[id].swatch }}
                  />
                );
              })}
            </div>
          </div>

          <div className="grid gap-2">
            <Label>Active days</Label>
            <div className="flex gap-1.5">
              {WEEKDAY_LABELS.map((wd) => {
                const selected = draft.days.includes(wd.js);
                return (
                  <button
                    key={wd.js}
                    type="button"
                    onClick={() => toggleDay(wd.js)}
                    aria-pressed={selected}
                    className={cn(
                      "flex h-11 flex-1 items-center justify-center rounded-md text-sm font-medium transition-[background-color,color] duration-150",
                      selected
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {wd.short}
                  </button>
                );
              })}
            </div>
          </div>

          {error ? <p className="text-sm text-destructive">{error}</p> : null}

          <DialogFooter>
            <Button type="button" variant="ghost" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">{habit ? "Save" : "Add habit"}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
