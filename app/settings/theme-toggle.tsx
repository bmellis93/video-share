"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const effective = theme === "system" ? systemTheme : theme;

  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <div className="text-sm font-semibold">Theme</div>
        <div className="text-xs text-neutral-600 dark:text-neutral-400">
          Current: {effective}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setTheme("system")}
          className={[
            "rounded-lg border px-3 py-2 text-xs font-semibold",
            theme === "system"
              ? "border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-neutral-900"
              : "border-neutral-200 bg-white text-neutral-900 hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100 dark:hover:bg-neutral-900",
          ].join(" ")}
        >
          System
        </button>

        <button
          type="button"
          onClick={() => setTheme("dark")}
          className={[
            "rounded-lg border px-3 py-2 text-xs font-semibold",
            theme === "dark"
              ? "border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-neutral-900"
              : "border-neutral-200 bg-white text-neutral-900 hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100 dark:hover:bg-neutral-900",
          ].join(" ")}
        >
          Dark
        </button>

        <button
          type="button"
          onClick={() => setTheme("light")}
          className={[
            "rounded-lg border px-3 py-2 text-xs font-semibold",
            theme === "light"
              ? "border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-neutral-900"
              : "border-neutral-200 bg-white text-neutral-900 hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100 dark:hover:bg-neutral-900",
          ].join(" ")}
        >
          Light
        </button>
      </div>
    </div>
  );
}