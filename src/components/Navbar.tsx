"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/", label: "about" },
  { href: "/projects", label: "projects" },
  { href: "/cv", label: "cv" },
];

export default function Navbar() {
  const path = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-sky-100 dark:bg-zinc-900 border-b border-zinc-200/80 dark:border-zinc-800
                       text-zinc-900 dark:text-zinc-50">
      <nav className="mx-auto flex max-w-5xl items-center px-4 py-4">
        {/* left: brand */}
        <Link href="/" className="font-semibold tracking-tight text-xl">
          Zeamanuel
        </Link>

        {/* right: links + theme */}
        <div className="ml-auto flex items-center gap-6">
          {links.map((l) => {
            const isActive = path === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={[
                  "text-base hover:underline underline-offset-4 transition-colors",
                  isActive
                    ? "font-semibold text-blue-700 dark:text-blue-300"
                    : "text-zinc-700 dark:text-zinc-300",
                ].join(" ")}
              >
                {l.label}
              </Link>
            );
          })}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
