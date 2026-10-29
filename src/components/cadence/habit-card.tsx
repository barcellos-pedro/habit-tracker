import { useState } from "react";
import { format, isSameMonth } from "date-fns";
import { Flame, MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { CheckCell } from "@/components/cadence/check-cell";
import { COLOR_META, ICON_MAP } from "@/lib/habits/palette";
import { isoDate } from "@/lib/habits/dates";
import { computeHabitStats, isDone, isDueOn, isScheduled } from "@/lib/habits/stats";
import type { Completions, Habit } from "@/lib/habits/types";
import { cn } from "@/lib/utils";

type ViewMode = "week" | "month";

type HabitCardProps = {
  habit: Habit;
  completions: Completions;
  days: Date[];
  mode: ViewMode;
  monthAnchor: Date;
  today: string;
  onToggle: (iso: string) => void;
  onEdit: () => void;
  onDelete: () => void;
};

export function HabitCard({
  habit,
  completions,
  days,
  mode,
  monthAnchor,
  today,
  onToggle,
  onEdit,
  onDelete,
}: HabitCardProps) {
  const [confirm, setConfirm] = useState(false);
  const stats = computeHabitStats(habit, completions, today, monthAnchor);
  const Icon = ICON_MAP[habit.icon];
  const meta = COLOR_META[habit.color];
  const rate = Math.round(stats.last30Rate * 100);

  return (
    <article className="rounded-xl bg-card p-4 shadow-[var(--shadow-border)] sm:p-5">
      <div className="flex items-start gap-3">
        <div
          className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-md"
          style={{ backgroundColor: meta.swatch, color: meta.fg }}
        >
          <Icon className="size-4" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <h2 className="truncate font-display text-lg font-medium tracking-tight text-foreground">
                {habit.name}
              </h2>
              <p className="mt-0.5 flex flex-wrap items-center gap-x-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1 tabular-nums text-foreground">
                  {stats.currentStreak > 0 ? (
                    <Flame
                      className="size-3.5"
                      style={{ color: meta.swatch }}
                    />
                  ) : null}
                  {stats.currentStreak} day streak
                </span>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums">best {stats.bestStreak}</span>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums">{rate}% last 30</span>
              </p>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon-sm"
                  aria-label={`Actions for ${habit.name}`}
                  className="shrink-0"
                >
                  <MoreHorizontal />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onSelect={onEdit}>
                  <Pencil />
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem variant="destructive" onSelect={() => setConfirm(true)}>
                  <Trash2 />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-7 gap-1.5">
        {mode === "week"
          ? days.map((d) => {
              const iso = isoDate(d);
              const isToday = iso === today;
              return (
                <div key={iso} className="flex flex-col items-stretch gap-1">
                  <span
                    className={cn(
                      "text-center text-xs font-medium text-muted-foreground tabular-nums",
                      isToday && "text-foreground",
                    )}
                  >
                    <span className="block uppercase tracking-wide">
                      {format(d, "EEEEEE")}
                    </span>
                    <span className={cn("block", isToday && "font-semibold")}>
                      {format(d, "d")}
                    </span>
                  </span>
                    <CheckCell
                      date={d}
                      done={isDone(completions, habit.id, iso)}
                      due={isDueOn(habit, iso)}
                      scheduled={isScheduled(habit, iso)}
                      color={habit.color}
                      habitName={habit.name}
                      onToggle={() => onToggle(iso)}
                      today={today}
                    />
                </div>
              );
            })
          : days.map((d) => {
              const iso = isoDate(d);
              const inMonth = isSameMonth(d, monthAnchor);
              if (!inMonth) {
                return <div key={iso} className="aspect-square" />;
              }
              return (
                <CheckCell
                  key={iso}
                  date={d}
                  done={isDone(completions, habit.id, iso)}
                  due={isDueOn(habit, iso)}
                  scheduled={isScheduled(habit, iso)}
                  color={habit.color}
                  habitName={habit.name}
                  onToggle={() => onToggle(iso)}
                  today={today}
                />
              );
            })}
      </div>

      <dl className="mt-4 grid grid-cols-3 gap-2 border-t border-border pt-3">
        <Stat label="This month" value={`${stats.monthDone}/${stats.monthDue || 0}`} />
        <Stat label="Last 30 days" value={`${stats.last30Done}/${stats.last30Due || 0}`} />
        <Stat label="All time" value={String(stats.total)} />
      </dl>

      <AlertDialog open={confirm} onOpenChange={setConfirm}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete {habit.name}?</AlertDialogTitle>
            <AlertDialogDescription>
              Completions and streak history for this habit will be removed from this
              device. This cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Keep</AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive text-destructive-foreground hover:opacity-90"
              onClick={onDelete}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </article>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
        {label}
      </dt>
      <dd className="mt-0.5 font-display text-lg font-medium tabular-nums tracking-tight">
        {value}
      </dd>
    </div>
  );
}
