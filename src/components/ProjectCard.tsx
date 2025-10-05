import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({
  title,
  desc,
  tags,
  href,
  thumbnail,
}: {
  title: string;
  desc: string;
  tags: readonly string[];
  href: string;
  thumbnail?: string;
}) {
  const external = href.startsWith("http");

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={[
        "group relative block overflow-hidden rounded-2xl",
        "border border-zinc-200 bg-white p-5 shadow-sm",
        "hover:-translate-y-0.5 hover:shadow-md transition-all",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/50",
        // dark – solid card, clear border & ring
        "dark:border-zinc-800 dark:bg-zinc-900",
      ].join(" ")}
      style={{ textDecoration: "none" }}
    >
      {/* subtle top accent */}
      <span className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-fuchsia-400/40 to-transparent opacity-70 dark:via-fuchsia-500/30" />

      {thumbnail && (
        <div className="mb-4 overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
          <Image
            src={thumbnail}
            alt=""
            width={800}
            height={420}
            className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
      )}

      <div className="flex items-start gap-2">
        <h3 className="text-lg font-semibold leading-snug tracking-tight text-zinc-900 dark:text-zinc-50">
          {title}
        </h3>
        {external && (
          <svg
            viewBox="0 0 24 24"
            className="mt-1 h-4 w-4 shrink-0 text-zinc-400 transition-colors group-hover:text-zinc-600 dark:group-hover:text-zinc-300"
            aria-hidden="true"
          >
            <path d="M14 3h7v7M21 3l-9 9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M21 14v6H3V3h6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </div>

      {/* brighter, readable secondary text in dark */}
      <p className="mt-2 text-base text-zinc-600 dark:text-zinc-300">
        {desc}
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-xs text-zinc-700 shadow-sm
                       dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
          >
            {t}
          </span>
        ))}
      </div>
    </Link>
  );
}
