"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";
  const handleClick = () => setTheme(isDark ? "light" : "dark");

  return (
    <button
      aria-label="Toggle theme"
      onClick={handleClick}
      className="rounded-xl border px-3 py-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-900"
    >
      {!mounted ? "…" : isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
