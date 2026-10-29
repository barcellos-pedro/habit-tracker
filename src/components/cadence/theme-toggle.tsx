import { useLayoutEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "cadence-theme";

export function applyTheme(dark: boolean) {
  document.documentElement.classList.toggle("dark", dark);
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", dark ? "#12110e" : "#f3f0e8");
}

export function readTheme(): boolean {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "dark" || stored === "light") return stored === "dark";
  } catch {
    /* private mode */
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function ThemeSync() {
  useLayoutEffect(() => {
    applyTheme(readTheme());
  }, []);
  return null;
}

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useLayoutEffect(() => {
    const next = document.documentElement.classList.contains("dark") || readTheme();
    applyTheme(next);
    setDark(next);
  }, []);

  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    applyTheme(next);
    setDark(next);
    try {
      localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
    } catch {
      /* ignore */
    }
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      onClick={toggle}
      aria-pressed={dark}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="relative size-4">
        <Sun
          className={cn(
            "absolute inset-0 size-4 transition-[opacity,transform,filter] duration-300 ease-[cubic-bezier(0.2,0,0,1)]",
            dark ? "scale-100 opacity-100 blur-none" : "scale-[0.25] opacity-0 blur-[4px]",
          )}
        />
        <Moon
          className={cn(
            "size-4 transition-[opacity,transform,filter] duration-300 ease-[cubic-bezier(0.2,0,0,1)]",
            dark ? "scale-[0.25] opacity-0 blur-[4px]" : "scale-100 opacity-100 blur-none",
          )}
        />
      </span>
    </Button>
  );
}
