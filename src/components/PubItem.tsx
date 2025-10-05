export default function PubItem({
  title, venue, year, authors, link,
}: { title:string; venue:string; year:number; authors:string; link?:string }) {
  return (
    <div className="rounded-xl border p-4">
      <div className="font-medium">{title}</div>
      <div className="text-base text-zinc-600 dark:text-zinc-300">
        {authors} • {venue} • {year}
      </div>
      {link && (
        <a className="text-base underline underline-offset-4" href={link} target="_blank">
          paper / code
        </a>
      )}
    </div>
  );
}
