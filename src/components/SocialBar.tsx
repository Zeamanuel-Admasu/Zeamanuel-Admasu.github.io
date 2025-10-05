type Item = { href: string; label: string; icon: React.ReactNode };

export default function SocialBar({
  items,
  note,
}: {
  items: Item[];
  note?: string;
}) {
  return (
    <div className="mt-14">
      <div className="flex items-center justify-center gap-6 sm:gap-8">
        {items.map((it) => {
          const isMail = it.href.startsWith("mailto:");
          return (
            <a
              key={it.label}
              href={it.href}
              target={isMail ? undefined : "_blank"}
              rel={isMail ? undefined : "noreferrer"}
              aria-label={it.label}
              className={[
                "grid h-12 w-12 place-items-center rounded-md border transition",
                // backgrounds & borders
                "bg-zinc-50 border-zinc-200 hover:bg-zinc-100",
                "dark:bg-zinc-800 dark:border-zinc-700 dark:hover:bg-zinc-700",
                // make the SVGs visible & sized in both themes
                "[&>svg]:h-6 [&>svg]:w-6",
                "[&>svg]:text-zinc-800 hover:[&>svg]:text-zinc-900",
                "dark:[&>svg]:text-zinc-100 dark:hover:[&>svg]:text-white",
              ].join(" ")}
            >
              {it.icon}
            </a>
          );
        })}
      </div>

      {note && (
        <p className="mt-3 text-center text-xs text-zinc-600 dark:text-zinc-400">
          {note}
        </p>
      )}
    </div>
  );
}
