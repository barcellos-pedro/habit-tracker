import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { P as require_jsx_runtime, a as Overlay2, c as Title2, d as DialogContent$1, f as DialogDescription$1, h as DialogTitle$1, i as Description2, l as Dialog$1, m as DialogPortal$1, n as Cancel, o as Portal2, p as DialogOverlay$1, r as Content2, s as Root2, t as Action, u as DialogClose } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { S as Bike, _ as ChevronRight, a as Plus, b as Brain, c as PenLine, d as Heart, f as Footprints, g as Droplets, h as Dumbbell, i as Sun, l as Moon, m as Ellipsis, o as PersonStanding, p as Flame, r as Trash2, s as Pencil, t as X, u as Leaf, v as ChevronLeft, x as BookOpen, y as Check } from "../_libs/lucide-react.mjs";
import { a as cn, i as buttonVariants, n as ThemeToggle, r as Button } from "./router-OGtdDJHI.mjs";
import { a as startOfMonth, c as startOfWeek, i as format, l as addMonths, n as isSameMonth, o as eachDayOfInterval, r as isSameWeek, s as addWeeks, t as subDays, u as addDays } from "../_libs/date-fns.mjs";
import { a as Trigger, i as Root2$1, n as Item2, r as Portal2$1, t as Content2$1 } from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
import { a as Trigger$1, i as Root3, n as Portal, r as Provider, t as Content2$2 } from "../_libs/@radix-ui/react-tooltip+[...].mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-yXL7Dm5v.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function TooltipProvider({ delayDuration = 250, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Provider, {
		delayDuration,
		...props
	});
}
function Tooltip({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root3, { ...props });
}
function TooltipTrigger({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger$1, { ...props });
}
function TooltipContent({ className, sideOffset = 6, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2$2, {
		sideOffset,
		className: cn("z-50 overflow-hidden rounded-sm bg-primary px-2 py-1 text-xs text-primary-foreground shadow-[var(--shadow-border)] animate-in fade-in-0 zoom-in-95", className),
		...props
	}) });
}
function DropdownMenu({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root2$1, {
		"data-slot": "dropdown-menu",
		...props
	});
}
function DropdownMenuTrigger({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
		"data-slot": "dropdown-menu-trigger",
		...props
	});
}
function DropdownMenuContent({ className, sideOffset = 6, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2$1, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2$1, {
		sideOffset,
		className: cn("z-50 min-w-40 overflow-hidden rounded-lg bg-popover p-1 text-popover-foreground shadow-[var(--shadow-border)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95", className),
		...props
	}) });
}
function DropdownMenuItem({ className, variant = "default", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2, {
		className: cn("flex cursor-pointer items-center gap-2 rounded-sm px-2.5 py-2 text-sm outline-none select-none focus:bg-muted data-[disabled]:pointer-events-none data-[disabled]:opacity-40 [&_svg]:size-4 [&_svg]:shrink-0", variant === "destructive" && "text-destructive focus:bg-destructive/10", className),
		...props
	});
}
function AlertDialog({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root2, {
		"data-slot": "alert-dialog",
		...props
	});
}
function AlertDialogPortal({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2, {
		"data-slot": "alert-dialog-portal",
		...props
	});
}
function AlertDialogOverlay({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overlay2, {
		className: cn("fixed inset-0 z-50 bg-overlay data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
		...props
	});
}
function AlertDialogContent({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
		className: cn("fixed top-1/2 left-1/2 z-50 grid w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-card p-5 text-card-foreground shadow-[var(--shadow-border)] outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95", className),
		...props
	})] });
}
function AlertDialogHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex flex-col gap-1.5", className),
		...props
	});
}
function AlertDialogFooter({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
		...props
	});
}
function AlertDialogTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title2, {
		className: cn("font-display text-xl font-medium tracking-tight", className),
		...props
	});
}
function AlertDialogDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Description2, {
		className: cn("text-sm text-muted-foreground", className),
		...props
	});
}
function AlertDialogAction({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Action, {
		className: cn(buttonVariants(), className),
		...props
	});
}
function AlertDialogCancel({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cancel, {
		className: cn(buttonVariants({ variant: "outline" }), className),
		...props
	});
}
var COLOR_META = {
	pine: {
		label: "Pine",
		swatch: "var(--color-habit-pine)",
		fg: "var(--color-habit-pine-fg)"
	},
	sage: {
		label: "Sage",
		swatch: "var(--color-habit-sage)",
		fg: "var(--color-habit-sage-fg)"
	},
	ocean: {
		label: "Ocean",
		swatch: "var(--color-habit-ocean)",
		fg: "var(--color-habit-ocean-fg)"
	},
	slate: {
		label: "Slate",
		swatch: "var(--color-habit-slate)",
		fg: "var(--color-habit-slate-fg)"
	},
	clay: {
		label: "Clay",
		swatch: "var(--color-habit-clay)",
		fg: "var(--color-habit-clay-fg)"
	},
	terra: {
		label: "Terra",
		swatch: "var(--color-habit-terra)",
		fg: "var(--color-habit-terra-fg)"
	},
	moss: {
		label: "Moss",
		swatch: "var(--color-habit-moss)",
		fg: "var(--color-habit-moss-fg)"
	},
	wine: {
		label: "Wine",
		swatch: "var(--color-habit-wine)",
		fg: "var(--color-habit-wine-fg)"
	}
};
var ICON_MAP = {
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
	bike: Bike
};
var ICON_LABELS = {
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
	bike: "Ride"
};
function isoDate(d = /* @__PURE__ */ new Date()) {
	return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function fromIso(iso) {
	const [y, m, d] = iso.split("-").map(Number);
	return new Date(y, (m ?? 1) - 1, d ?? 1);
}
function addDaysIso(iso, n) {
	return isoDate(addDays(fromIso(iso), n));
}
function weekdayJs(iso) {
	return fromIso(iso).getDay();
}
function isFutureIso(iso, today = isoDate()) {
	return iso > today;
}
function weekDays(anchor) {
	const start = startOfWeek(anchor, { weekStartsOn: 1 });
	return Array.from({ length: 7 }, (_, i) => addDays(start, i));
}
function monthGrid(anchor) {
	const start = startOfWeek(startOfMonth(anchor), { weekStartsOn: 1 });
	const end = addDays(start, 41);
	return eachDayOfInterval({
		start,
		end
	});
}
function formatLongDate(d) {
	return format(d, "EEEE, d MMMM");
}
function formatMonthTitle(d) {
	return format(d, "MMMM yyyy");
}
var WEEKDAY_LABELS = [
	{
		js: 1,
		short: "M"
	},
	{
		js: 2,
		short: "T"
	},
	{
		js: 3,
		short: "W"
	},
	{
		js: 4,
		short: "T"
	},
	{
		js: 5,
		short: "F"
	},
	{
		js: 6,
		short: "S"
	},
	{
		js: 0,
		short: "S"
	}
];
var ALL_DAYS = [
	0,
	1,
	2,
	3,
	4,
	5,
	6
];
function CheckCell({ date, done, due, scheduled, color, habitName, onToggle, today = isoDate() }) {
	const iso = isoDate(date);
	const future = isFutureIso(iso, today);
	const isToday = iso === today;
	const disabled = future || !due;
	const meta = COLOR_META[color];
	const label = [
		habitName,
		format(date, "EEE d MMM"),
		!scheduled ? "rest day" : !due ? "not started" : future ? "upcoming" : done ? "done" : "not done"
	].join(", ");
	const cell = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		disabled,
		onClick: onToggle,
		"aria-pressed": due ? done : void 0,
		"aria-label": label,
		className: cn("relative flex aspect-square w-full min-h-10 items-center justify-center rounded-md outline-none transition-[background-color,transform,box-shadow,opacity] duration-150 ease-out", "focus-visible:ring-2 focus-visible:ring-ring/50", "active:not-disabled:scale-[0.96]", due && !done && !future && "bg-muted hover:bg-secondary", !scheduled && "text-muted-foreground/50", future && due && "ring-1 ring-border ring-inset", isToday && due && !done && "ring-2 ring-foreground ring-inset", disabled && "cursor-default"),
		style: done && due ? {
			backgroundColor: meta.swatch,
			color: meta.fg
		} : void 0,
		children: due && done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
			className: "size-3.5",
			strokeWidth: 2.5
		}) : !scheduled ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs",
			"aria-hidden": "true",
			children: "–"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: future ? "Upcoming" : "Not done"
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
		asChild: true,
		children: cell
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TooltipContent, { children: [format(date, "EEE d MMM"), due ? done ? " · done" : future ? " · upcoming" : " · open" : scheduled ? " · not started" : " · rest"] })] });
}
function isScheduled(habit, iso) {
	return (habit.days.length ? habit.days : [
		0,
		1,
		2,
		3,
		4,
		5,
		6
	]).includes(weekdayJs(iso));
}
function isDueOn(habit, iso) {
	if (iso < isoDate(new Date(habit.createdAt))) return false;
	return isScheduled(habit, iso);
}
function completionSet(completions, habitId) {
	return new Set(completions[habitId] ?? []);
}
function isDone(completions, habitId, iso) {
	return (completions[habitId] ?? []).includes(iso);
}
function walkScheduledBack(habit, fromIsoInclusive, untilIso) {
	const dates = [];
	let cursor = fromIsoInclusive;
	while (cursor >= untilIso) {
		if (isDueOn(habit, cursor)) dates.push(cursor);
		cursor = addDaysIso(cursor, -1);
	}
	return dates;
}
function currentStreak(habit, done, today = isoDate()) {
	const created = isoDate(new Date(habit.createdAt));
	let start = today;
	if (isDueOn(habit, today) && !done.has(today)) start = addDaysIso(today, -1);
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
function bestStreak(habit, done, today = isoDate()) {
	const scheduled = walkScheduledBack(habit, today, isoDate(new Date(habit.createdAt)));
	let best = 0;
	let run = 0;
	for (const day of [...scheduled].reverse()) if (done.has(day)) {
		run += 1;
		if (run > best) best = run;
	} else run = 0;
	return best;
}
function computeHabitStats(habit, completions, today = isoDate(), monthAnchor = fromIso(today)) {
	const done = completionSet(completions, habit.id);
	const created = isoDate(new Date(habit.createdAt));
	const last30End = fromIso(today);
	const last30 = [];
	for (let i = 0; i < 30; i++) {
		const iso = isoDate(subDays(last30End, i));
		if (iso < created) break;
		if (isDueOn(habit, iso)) last30.push(iso);
	}
	const last30Done = last30.filter((d) => done.has(d)).length;
	const monthStart = isoDate(new Date(monthAnchor.getFullYear(), monthAnchor.getMonth(), 1));
	const monthEnd = isoDate(new Date(monthAnchor.getFullYear(), monthAnchor.getMonth() + 1, 0));
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
		todayDone: todayDue && done.has(today)
	};
}
function dayCompletion(habits, completions, iso) {
	let due = 0;
	let done = 0;
	for (const habit of habits) {
		if (!isDueOn(habit, iso)) continue;
		due += 1;
		if (isDone(completions, habit.id, iso)) done += 1;
	}
	return {
		done,
		due
	};
}
function HabitCard({ habit, completions, days, mode, monthAnchor, today, onToggle, onEdit, onDelete }) {
	const [confirm, setConfirm] = (0, import_react.useState)(false);
	const stats = computeHabitStats(habit, completions, today, monthAnchor);
	const Icon = ICON_MAP[habit.icon];
	const meta = COLOR_META[habit.color];
	const rate = Math.round(stats.last30Rate * 100);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-xl bg-card p-4 shadow-[var(--shadow-border)] sm:p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-md",
					style: {
						backgroundColor: meta.swatch,
						color: meta.fg
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "min-w-0 flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "truncate font-display text-lg font-medium tracking-tight text-foreground",
								children: habit.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-0.5 flex flex-wrap items-center gap-x-2 text-sm text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1 tabular-nums text-foreground",
										children: [
											stats.currentStreak > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, {
												className: "size-3.5",
												style: { color: meta.swatch }
											}) : null,
											stats.currentStreak,
											" day streak"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": "true",
										children: "·"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "tabular-nums",
										children: ["best ", stats.bestStreak]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": "true",
										children: "·"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "tabular-nums",
										children: [rate, "% last 30"]
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon-sm",
								"aria-label": `Actions for ${habit.name}`,
								className: "shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, {})
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
							align: "end",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
								onSelect: onEdit,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, {}), "Edit"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
								variant: "destructive",
								onSelect: () => setConfirm(true),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {}), "Delete"]
							})]
						})] })]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid grid-cols-7 gap-1.5",
				children: mode === "week" ? days.map((d) => {
					const iso = isoDate(d);
					const isToday = iso === today;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-stretch gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: cn("text-center text-xs font-medium text-muted-foreground tabular-nums", isToday && "text-foreground"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block uppercase tracking-wide",
								children: format(d, "EEEEEE")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("block", isToday && "font-semibold"),
								children: format(d, "d")
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckCell, {
							date: d,
							done: isDone(completions, habit.id, iso),
							due: isDueOn(habit, iso),
							scheduled: isScheduled(habit, iso),
							color: habit.color,
							habitName: habit.name,
							onToggle: () => onToggle(iso),
							today
						})]
					}, iso);
				}) : days.map((d) => {
					const iso = isoDate(d);
					if (!isSameMonth(d, monthAnchor)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "aspect-square" }, iso);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckCell, {
						date: d,
						done: isDone(completions, habit.id, iso),
						due: isDueOn(habit, iso),
						scheduled: isScheduled(habit, iso),
						color: habit.color,
						habitName: habit.name,
						onToggle: () => onToggle(iso),
						today
					}, iso);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-4 grid grid-cols-3 gap-2 border-t border-border pt-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "This month",
						value: `${stats.monthDone}/${stats.monthDue || 0}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Last 30 days",
						value: `${stats.last30Done}/${stats.last30Due || 0}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "All time",
						value: String(stats.total)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialog, {
				open: confirm,
				onOpenChange: setConfirm,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogTitle, { children: [
					"Delete ",
					habit.name,
					"?"
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogDescription, { children: "Completions and streak history for this habit will be removed from this device. This cannot be undone." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogCancel, { children: "Keep" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogAction, {
					className: "bg-destructive text-destructive-foreground hover:opacity-90",
					onClick: onDelete,
					children: "Delete"
				})] })] })
			})
		]
	});
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
		className: "text-xs font-medium tracking-wide text-muted-foreground uppercase",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
		className: "mt-0.5 font-display text-lg font-medium tabular-nums tracking-tight",
		children: value
	})] });
}
function Dialog({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog$1, {
		"data-slot": "dialog",
		...props
	});
}
function DialogPortal({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogPortal$1, {
		"data-slot": "dialog-portal",
		...props
	});
}
function DialogOverlay({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
		"data-slot": "dialog-overlay",
		className: cn("fixed inset-0 z-50 bg-overlay data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
		...props
	});
}
function DialogContent({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
		"data-slot": "dialog-content",
		className: cn("fixed top-1/2 left-1/2 z-50 grid w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-card p-5 text-card-foreground shadow-[var(--shadow-border)] outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
			className: "absolute top-3 right-3 rounded-sm p-2 text-muted-foreground transition-colors duration-150 hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/50",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: "Close"
			})]
		})]
	})] });
}
function DialogHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex flex-col gap-1.5 pr-8", className),
		...props
	});
}
function DialogFooter({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
		...props
	});
}
function DialogTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
		className: cn("font-display text-xl font-medium tracking-tight text-foreground", className),
		...props
	});
}
function DialogDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
		className: cn("text-sm text-muted-foreground", className),
		...props
	});
}
function Input({ className, type, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		"data-slot": "input",
		className: cn("flex h-11 w-full rounded-md bg-card px-3 text-base text-foreground shadow-[var(--shadow-border)] outline-none transition-[box-shadow] duration-150 placeholder:text-muted-foreground/80 focus-visible:ring-2 focus-visible:ring-ring/40 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
		"data-slot": "label",
		className: cn("text-sm font-medium text-foreground select-none", className),
		...props
	});
}
var HABIT_COLORS = [
	"pine",
	"sage",
	"ocean",
	"slate",
	"clay",
	"terra",
	"moss",
	"wine"
];
var HABIT_ICONS = [
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
	"bike"
];
var EMPTY = {
	name: "",
	color: "pine",
	icon: "leaf",
	days: [...ALL_DAYS]
};
function HabitForm({ open, habit, onOpenChange, onSubmit }) {
	const [draft, setDraft] = (0, import_react.useState)(EMPTY);
	const [error, setError] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (!open) return;
		if (habit) setDraft({
			name: habit.name,
			color: habit.color,
			icon: habit.icon,
			days: [...habit.days]
		});
		else setDraft(EMPTY);
		setError("");
	}, [open, habit]);
	function toggleDay(day) {
		setDraft((prev) => {
			const next = prev.days.includes(day) ? prev.days.filter((d) => d !== day) : [...prev.days, day];
			return {
				...prev,
				days: next.sort((a, b) => a - b)
			};
		});
	}
	function handleSubmit(e) {
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
		onSubmit({
			...draft,
			name
		});
		onOpenChange(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: handleSubmit,
			className: "grid gap-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: habit ? "Edit habit" : "New habit" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "A small daily rite. Color and days help it stand out on the board." })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "habit-name",
						children: "Name"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "habit-name",
						value: draft.name,
						onChange: (e) => setDraft((d) => ({
							...d,
							name: e.target.value
						})),
						placeholder: "Morning walk",
						maxLength: 40,
						autoFocus: true
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Icon" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-6 gap-1.5",
						children: HABIT_ICONS.map((id) => {
							const Icon = ICON_MAP[id];
							const selected = draft.icon === id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setDraft((d) => ({
									...d,
									icon: id
								})),
								"aria-label": ICON_LABELS[id],
								"aria-pressed": selected,
								className: cn("flex size-11 items-center justify-center rounded-md transition-[background-color,box-shadow] duration-150", selected ? "bg-primary text-primary-foreground" : "bg-muted text-foreground hover:bg-secondary"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
							}, id);
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Color" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: HABIT_COLORS.map((id) => {
							const selected = draft.color === id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": COLOR_META[id].label,
								"aria-pressed": selected,
								onClick: () => setDraft((d) => ({
									...d,
									color: id
								})),
								className: cn("size-9 rounded-full outline-none transition-transform duration-150 active:scale-[0.96]", selected && "ring-2 ring-ring ring-offset-2 ring-offset-card"),
								style: { backgroundColor: COLOR_META[id].swatch }
							}, id);
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Active days" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-1.5",
						children: WEEKDAY_LABELS.map((wd) => {
							const selected = draft.days.includes(wd.js);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => toggleDay(wd.js),
								"aria-pressed": selected,
								className: cn("flex h-11 flex-1 items-center justify-center rounded-md text-sm font-medium transition-[background-color,color] duration-150", selected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"),
								children: wd.short
							}, wd.js);
						})
					})]
				}),
				error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-destructive",
					children: error
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "ghost",
					onClick: () => onOpenChange(false),
					children: "Cancel"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					children: habit ? "Save" : "Add habit"
				})] })
			]
		}) })
	});
}
var WEEKDAYS = [
	"M",
	"T",
	"W",
	"T",
	"F",
	"S",
	"S"
];
function MonthHeatmap({ days, habits, completions, monthAnchor, today }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-xl bg-card p-4 shadow-[var(--shadow-border)] sm:p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 flex items-end justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-lg font-medium tracking-tight",
				children: "Month at a glance"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "Fill shows how many habits you kept that day."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-7 gap-1.5",
			children: [WEEKDAYS.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pb-1 text-center text-xs font-medium uppercase tracking-wide text-muted-foreground",
				children: d
			}, `${d}-${i}`)), days.map((date) => {
				const iso = isoDate(date);
				if (!isSameMonth(date, monthAnchor)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "aspect-square" }, iso);
				const { done, due } = dayCompletion(habits, completions, iso);
				const rate = due === 0 ? 0 : done / due;
				const future = iso > today;
				const isToday = iso === today;
				const fill = !future && due > 0 ? `color-mix(in oklab, var(--color-forest) ${Math.round(rate * 100)}%, var(--color-muted))` : void 0;
				const cell = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("flex aspect-square items-center justify-center rounded-md text-xs tabular-nums", future || due === 0 ? "bg-muted/60 text-muted-foreground" : "text-foreground", isToday && "ring-1 ring-foreground/25", !future && due > 0 && rate >= .75 && "text-forest-foreground"),
					style: fill ? { backgroundColor: fill } : void 0,
					children: format(date, "d")
				});
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: cell })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TooltipContent, { children: [format(date, "EEE d MMM"), due > 0 ? ` · ${done}/${due}` : " · no habits due"] })] }, iso);
			})]
		})]
	});
}
function Legend() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "hidden items-center gap-1 sm:flex",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mr-1 text-xs uppercase tracking-wide text-muted-foreground",
				children: "Less"
			}),
			[
				0,
				.25,
				.5,
				.75,
				1
			].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "size-3 rounded-xs",
				style: { backgroundColor: `color-mix(in oklab, var(--color-forest) ${Math.round(s * 100)}%, var(--color-muted))` }
			}, s)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "ml-1 text-xs uppercase tracking-wide text-muted-foreground",
				children: "More"
			})
		]
	});
}
function hashRate(seed) {
	let h = 0;
	for (let i = 0; i < seed.length; i++) h = h * 33 + seed.charCodeAt(i) | 0;
	return Math.abs(h);
}
function buildSeed() {
	const today = /* @__PURE__ */ new Date();
	const createdAt = subDays(today, 48).toISOString();
	const habits = [
		{
			id: "seed-walk",
			name: "Morning walk",
			color: "pine",
			icon: "footprints",
			days: [
				0,
				1,
				2,
				3,
				4,
				5,
				6
			],
			createdAt
		},
		{
			id: "seed-read",
			name: "Read 20 pages",
			color: "slate",
			icon: "book",
			days: [
				0,
				1,
				2,
				3,
				4,
				5,
				6
			],
			createdAt
		},
		{
			id: "seed-water",
			name: "Drink water",
			color: "ocean",
			icon: "droplets",
			days: [
				0,
				1,
				2,
				3,
				4,
				5,
				6
			],
			createdAt
		},
		{
			id: "seed-stretch",
			name: "Stretch",
			color: "clay",
			icon: "stretch",
			days: [
				1,
				2,
				3,
				4,
				5
			],
			createdAt
		}
	];
	const rates = {
		"seed-walk": 82,
		"seed-read": 70,
		"seed-water": 88,
		"seed-stretch": 64
	};
	const todayIso = isoDate(today);
	const completions = {};
	for (const habit of habits) {
		const list = [];
		const rate = rates[habit.id] ?? 70;
		for (let i = 1; i <= 46; i++) {
			const d = isoDate(subDays(today, i));
			if (hashRate(`${habit.id}:${d}`) % 100 < rate) list.push(d);
		}
		completions[habit.id] = list;
	}
	if ((completions["seed-water"] ?? []).includes(todayIso) === false) completions["seed-water"] = [...completions["seed-water"] ?? [], todayIso];
	return {
		habits,
		completions
	};
}
var useHabitStore = create()(persist((set, get) => ({
	habits: [],
	completions: {},
	hasOnboarded: false,
	hydrated: false,
	addHabit: (draft) => {
		set({ habits: [{
			id: typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : `h-${Date.now()}`,
			name: draft.name.trim(),
			color: draft.color,
			icon: draft.icon,
			days: draft.days.length ? draft.days : [
				0,
				1,
				2,
				3,
				4,
				5,
				6
			],
			createdAt: (/* @__PURE__ */ new Date()).toISOString()
		}, ...get().habits] });
	},
	updateHabit: (id, draft) => {
		set({ habits: get().habits.map((h) => h.id === id ? {
			...h,
			name: draft.name.trim(),
			color: draft.color,
			icon: draft.icon,
			days: draft.days.length ? draft.days : [
				0,
				1,
				2,
				3,
				4,
				5,
				6
			]
		} : h) });
	},
	deleteHabit: (id) => {
		const { [id]: _removed, ...rest } = get().completions;
		set({
			habits: get().habits.filter((h) => h.id !== id),
			completions: rest
		});
	},
	toggleDay: (habitId, iso) => {
		if (isFutureIso(iso)) return;
		const current = get().completions[habitId] ?? [];
		const next = current.includes(iso) ? current.filter((d) => d !== iso) : [...current, iso];
		set({ completions: {
			...get().completions,
			[habitId]: next
		} });
	}
}), {
	name: "cadence-habits-v1",
	skipHydration: true,
	partialize: (state) => ({
		habits: state.habits,
		completions: state.completions,
		hasOnboarded: state.hasOnboarded
	}),
	onRehydrateStorage: () => (state) => {
		if (!state?.hasOnboarded) {
			const seed = buildSeed();
			useHabitStore.setState({
				...seed,
				hasOnboarded: true,
				hydrated: true
			});
			return;
		}
		useHabitStore.setState({ hydrated: true });
	}
}));
function rehydrateHabits() {
	useHabitStore.persist.rehydrate();
}
function CadenceApp() {
	const hydrated = useHabitStore((s) => s.hydrated);
	const habits = useHabitStore((s) => s.habits);
	const completions = useHabitStore((s) => s.completions);
	const addHabit = useHabitStore((s) => s.addHabit);
	const updateHabit = useHabitStore((s) => s.updateHabit);
	const deleteHabit = useHabitStore((s) => s.deleteHabit);
	const toggleDay = useHabitStore((s) => s.toggleDay);
	const [view, setView] = (0, import_react.useState)("week");
	const [cursor, setCursor] = (0, import_react.useState)(() => /* @__PURE__ */ new Date());
	const [formOpen, setFormOpen] = (0, import_react.useState)(false);
	const [editing, setEditing] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		rehydrateHabits();
	}, []);
	const today = isoDate();
	const todayDate = (0, import_react.useMemo)(() => /* @__PURE__ */ new Date(), []);
	const days = (0, import_react.useMemo)(() => view === "week" ? weekDays(cursor) : monthGrid(cursor), [view, cursor]);
	const showingToday = view === "week" ? isSameWeek(cursor, todayDate, { weekStartsOn: 1 }) : cursor.getMonth() === todayDate.getMonth() && cursor.getFullYear() === todayDate.getFullYear();
	const todayStats = (0, import_react.useMemo)(() => {
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
		return {
			done,
			due,
			bestCurrent,
			weekDone,
			weekDue
		};
	}, [
		habits,
		completions,
		today,
		todayDate,
		cursor
	]);
	function openNew() {
		setEditing(null);
		setFormOpen(true);
	}
	function openEdit(habit) {
		setEditing(habit);
		setFormOpen(true);
	}
	function handleSubmit(draft) {
		if (editing) updateHabit(editing.id, draft);
		else addHabit(draft);
	}
	function shift(dir) {
		setCursor((c) => view === "week" ? addWeeks(c, dir) : addMonths(c, dir));
	}
	if (!hydrated) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex min-h-dvh max-w-3xl flex-col gap-6 px-4 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-2xl font-medium tracking-tight italic",
				children: "Cadence"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "Loading your week"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-24 rounded-xl bg-muted" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-48 rounded-xl bg-muted" })
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TooltipProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "border-b border-border/80 bg-background/80 backdrop-blur-sm",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-4 sm:py-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl leading-none font-medium tracking-tight italic",
						children: "Cadence"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: formatLongDate(todayDate)
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: openNew,
						className: "pl-3.5 pr-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline",
								children: "New habit"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sm:hidden",
								children: "Add"
							})
						]
					})]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto flex max-w-3xl flex-col gap-5 px-4 py-6 sm:py-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "grid grid-cols-3 gap-2 sm:gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatTile, {
							label: "Today",
							value: todayStats.due ? `${todayStats.done}/${todayStats.due}` : "Rest",
							hint: todayStats.due ? todayStats.done === todayStats.due ? "Complete" : "Still open" : "Nothing due"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatTile, {
							label: "This week",
							value: todayStats.weekDue ? `${Math.round(todayStats.weekDone / todayStats.weekDue * 100)}%` : "—",
							hint: `${todayStats.weekDone} kept`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatTile, {
							label: "Top streak",
							value: String(todayStats.bestCurrent),
							hint: todayStats.bestCurrent === 1 ? "day" : "days"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon-sm",
								"aria-label": view === "week" ? "Previous week" : "Previous month",
								onClick: () => shift(-1),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "min-w-[9.5rem] text-center font-display text-lg font-medium tracking-tight",
								children: view === "week" ? `Week of ${days[0] ? formatMonthShort(days[0]) : ""}` : formatMonthTitle(cursor)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon-sm",
								"aria-label": view === "week" ? "Next week" : "Next month",
								onClick: () => shift(1),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {})
							}),
							!showingToday ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "sm",
								onClick: () => setCursor(/* @__PURE__ */ new Date()),
								children: "Today"
							}) : null
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex rounded-lg bg-muted p-1",
						children: ["week", "month"].map((mode) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								setView(mode);
								setCursor(/* @__PURE__ */ new Date());
							},
							className: cn("h-9 rounded-md px-3.5 text-sm font-medium capitalize transition-[background-color,color] duration-150", view === mode ? "bg-card text-foreground shadow-[var(--shadow-border)]" : "text-muted-foreground hover:text-foreground"),
							children: mode
						}, mode))
					})]
				}),
				view === "month" && habits.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MonthHeatmap, {
					days,
					habits,
					completions,
					monthAnchor: cursor,
					today
				}) : null,
				habits.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, { onAdd: openNew }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col gap-3",
					children: habits.map((habit) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HabitCard, {
						habit,
						completions,
						days,
						mode: view,
						monthAnchor: cursor,
						today,
						onToggle: (iso) => toggleDay(habit.id, iso),
						onEdit: () => openEdit(habit),
						onDelete: () => deleteHabit(habit.id)
					}, habit.id))
				})
			]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HabitForm, {
		open: formOpen,
		habit: editing,
		onOpenChange: setFormOpen,
		onSubmit: handleSubmit
	})] });
}
function formatMonthShort(d) {
	return d.toLocaleDateString(void 0, {
		month: "short",
		day: "numeric"
	});
}
function StatTile({ label, value, hint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-card px-3 py-3 shadow-[var(--shadow-border)] sm:px-4 sm:py-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-wide text-muted-foreground uppercase",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 font-display text-2xl leading-none font-medium tracking-tight tabular-nums sm:text-3xl",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1.5 text-xs text-muted-foreground",
				children: hint
			})
		]
	});
}
function Mark() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		className: "size-9 text-forest",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "32",
				height: "32",
				rx: "8",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M7 21c3.2-6 14.8-6 18 0",
				fill: "none",
				stroke: "var(--color-forest-foreground)",
				strokeWidth: "1.75",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "16",
				cy: "13.5",
				r: "2",
				fill: "var(--color-forest-foreground)"
			})
		]
	});
}
function EmptyState({ onAdd }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center rounded-xl bg-card px-6 py-14 text-center shadow-[var(--shadow-border)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 font-display text-2xl font-medium tracking-tight",
				children: "Begin the week"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-sm text-sm text-muted-foreground",
				children: "Add one habit you can keep. Check it off each day and watch the line hold."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				className: "mt-6",
				onClick: onAdd,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}), "Add a habit"]
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CadenceApp, {});
}
//#endregion
export { Home as component };
