import { format, isSameMonth } from "date-fns";
import { cn } from "@/lib/utils";
import { isoDate } from "@/lib/habits/dates";
import { dayCompletion } from "@/lib/habits/stats";
import type { Completions, Habit } from "@/lib/habits/types";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const WEEKDAYS = ["M", "T", "W", "T", "F", "S", "S"];

type MonthHeatmapProps = {
  days: Date[];
  habits: Habit[];
  completions: Completions;
  monthAnchor: Date;
  today: string;
};

export function MonthHeatmap({
  days,
  habits,
  completions,
  monthAnchor,
  today,
}: MonthHeatmapProps) {
  return (
    <section className="rounded-xl bg-card p-4 shadow-[var(--shadow-border)] sm:p-5">
      <div className="mb-3 flex items-end justify-between gap-3">
        <div>
          <h2 className="font-display text-lg font-medium tracking-tight">
            Month at a glance
          </h2>
          <p className="text-sm text-muted-foreground">
            Fill shows how many habits you kept that day.
          </p>
        </div>
        <Legend />
      </div>
      <div className="grid grid-cols-7 gap-1.5">
        {WEEKDAYS.map((d, i) => (
          <div
            key={`${d}-${i}`}
            className="pb-1 text-center text-xs font-medium uppercase tracking-wide text-muted-foreground"
          >
            {d}
          </div>
        ))}
        {days.map((date) => {
          const iso = isoDate(date);
          const inMonth = isSameMonth(date, monthAnchor);
          if (!inMonth) {
            return <div key={iso} className="aspect-square" />;
          }
          const { done, due } = dayCompletion(habits, completions, iso);
          const rate = due === 0 ? 0 : done / due;
          const future = iso > today;
          const isToday = iso === today;
          const fill =
            !future && due > 0
              ? `color-mix(in oklab, var(--color-forest) ${Math.round(rate * 100)}%, var(--color-muted))`
              : undefined;

          const cell = (
            <div
              className={cn(
                "flex aspect-square items-center justify-center rounded-md text-xs tabular-nums",
                future || due === 0 ? "bg-muted/60 text-muted-foreground" : "text-foreground",
                isToday && "ring-1 ring-foreground/25",
                !future && due > 0 && rate >= 0.75 && "text-forest-foreground",
              )}
              style={fill ? { backgroundColor: fill } : undefined}
            >
              {format(date, "d")}
            </div>
          );

          return (
            <Tooltip key={iso}>
              <TooltipTrigger asChild>
                <div>{cell}</div>
              </TooltipTrigger>
              <TooltipContent>
                {format(date, "EEE d MMM")}
                {due > 0 ? ` · ${done}/${due}` : " · no habits due"}
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </section>
  );
}

function Legend() {
  const steps = [0, 0.25, 0.5, 0.75, 1];
  return (
    <div className="hidden items-center gap-1 sm:flex" aria-hidden="true">
      <span className="mr-1 text-xs uppercase tracking-wide text-muted-foreground">
        Less
      </span>
      {steps.map((s) => (
        <span
          key={s}
          className="size-3 rounded-xs"
          style={{
            backgroundColor: `color-mix(in oklab, var(--color-forest) ${Math.round(s * 100)}%, var(--color-muted))`,
          }}
        />
      ))}
      <span className="ml-1 text-xs uppercase tracking-wide text-muted-foreground">
        More
      </span>
    </div>
  );
}
