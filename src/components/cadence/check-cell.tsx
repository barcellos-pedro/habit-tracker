import { Check } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { COLOR_META } from "@/lib/habits/palette";
import type { HabitColorId } from "@/lib/habits/types";
import { isoDate, isFutureIso } from "@/lib/habits/dates";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type CheckCellProps = {
  date: Date;
  done: boolean;
  due: boolean;
  scheduled: boolean;
  color: HabitColorId;
  habitName: string;
  onToggle: () => void;
  today?: string;
};

export function CheckCell({
  date,
  done,
  due,
  scheduled,
  color,
  habitName,
  onToggle,
  today = isoDate(),
}: CheckCellProps) {
  const iso = isoDate(date);
  const future = isFutureIso(iso, today);
  const isToday = iso === today;
  const disabled = future || !due;
  const meta = COLOR_META[color];

  const label = [
    habitName,
    format(date, "EEE d MMM"),
    !scheduled ? "rest day" : !due ? "not started" : future ? "upcoming" : done ? "done" : "not done",
  ].join(", ");

  const cell = (
    <button
      type="button"
      disabled={disabled}
      onClick={onToggle}
      aria-pressed={due ? done : undefined}
      aria-label={label}
      className={cn(
        "relative flex aspect-square w-full min-h-10 items-center justify-center rounded-md outline-none transition-[background-color,transform,box-shadow,opacity] duration-150 ease-out",
        "focus-visible:ring-2 focus-visible:ring-ring/50",
        "active:not-disabled:scale-[0.96]",
        due && !done && !future && "bg-muted hover:bg-secondary",
        !scheduled && "text-muted-foreground/50",
        future && due && "ring-1 ring-border ring-inset",
        isToday && due && !done && "ring-2 ring-foreground ring-inset",
        disabled && "cursor-default",
      )}
      style={
        done && due
          ? { backgroundColor: meta.swatch, color: meta.fg }
          : undefined
      }
    >
      {due && done ? (
        <Check className="size-3.5" strokeWidth={2.5} />
      ) : !scheduled ? (
        <span className="text-xs" aria-hidden="true">
          –
        </span>
      ) : (
        <span className="sr-only">{future ? "Upcoming" : "Not done"}</span>
      )}
    </button>
  );

  return (
    <Tooltip>
      <TooltipTrigger asChild>{cell}</TooltipTrigger>
      <TooltipContent>
        {format(date, "EEE d MMM")}
        {due ? (done ? " · done" : future ? " · upcoming" : " · open") : scheduled ? " · not started" : " · rest"}
      </TooltipContent>
    </Tooltip>
  );
}
