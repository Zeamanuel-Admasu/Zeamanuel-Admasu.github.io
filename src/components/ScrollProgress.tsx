"use client";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calc = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const p = scrollTop / Math.max(1, scrollHeight - clientHeight);
      setProgress(Math.min(1, Math.max(0, p)));
    };

    const onScroll = () => requestAnimationFrame(calc);
    calc();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-1 bg-zinc-200/50 dark:bg-zinc-800/50">
      <div
        className="h-full origin-left bg-gradient-to-r from-fuchsia-500 to-violet-500"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
