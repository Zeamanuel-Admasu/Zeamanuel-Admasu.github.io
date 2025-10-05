export default function Section({
  title, children,
}: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="mb-4 text-2xl font-bold tracking-tight">{title}</h2>
      <div className="prose prose-zinc max-w-none dark:prose-invert">{children}</div>
    </section>
  );
}
