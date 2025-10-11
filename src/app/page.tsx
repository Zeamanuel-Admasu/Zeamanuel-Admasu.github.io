// src/app/page.tsx
import Image from "next/image";
import { news } from "@/lib/news";
import SocialBar from "@/components/SocialBar";
import { Code2, Sparkles } from "lucide-react";
import { Mail, GraduationCap, Github, Linkedin, Twitter, Rss } from "lucide-react";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-8">
      <h2 className="mb-3 text-xl font-semibold tracking-tight">{title}</h2>
      <div className="prose prose-zinc max-w-none dark:prose-invert">{children}</div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl">
      {/* NAME + SUBTITLE */}
      <h1 className="mt-6 text-5xl font-bold tracking-tight">Zeamanuel Admasu</h1>
      <p className="mt-3 text-[15px] text-[var(--color-muted-foreground)]">
        AAiT software engineering student focused on Go/Django backends, Flutter, and applied ML;
        former intern at A2SV (Dime) and the Ethiopian AI Institute.
      </p>

      {/* HORIZONTAL LAYOUT */}
      <div className="mt-6 flex flex-col sm:flex-row sm:items-start sm:gap-12">
        {/* LEFT: text */}
        <div className="flex-1 min-w-0">
          <Section title="Hi there,">
            <p>
              I’m focused on building reliable, end-to-end products—RESTful backends, data-driven
              features, and mobile experiences. I like owning the whole cycle—from API design and
              database modeling to shipping and monitoring.
            </p>
            <p>
              I’m broadly interested in practical ML and efficient systems. I’m also a Data Structures
              student at <b>A2SV (Africa to Silicon Valley)</b>, where I drill algorithms and
              problem-solving through competitive programming. I have solved 500+ questions on LeetCode
              and Codeforces combined. If you’d like to collaborate or talk
              about a project, reach out.
            </p>
          </Section>

          <Section title="Highlights">
            <ul>
              <li>
                <b>SocialSpark — Runner-up (A2SV Gen 6)</b> • AI toolkit for SMEs/creators (Amharic supported),
                secure scheduling/posting; I was on the Mobile team (Sep 2025).
              </li>
              <li>
                <b>A2SV (Dime) • Go Backend Intern</b> — contributed to remittance features and API
                endpoints (Feb–Jun 2025).
              </li>
              <li>
                <b>Ethiopian AI Institute • ML Engineering Intern</b> — Led Amharic OCR work: labeled 30+ pages in CVAT, trained a YOLO text-region detector and OCR recognizer; improved detection mAP by 74% and reduced character error rate (CER) by 67% via augmentation and post-processing (Jun–Sep 2025).
              </li>
              <li>
                <b>Zebidar Donation App</b> — Go (Gin) + MongoDB backend, Flutter app, Chapa payments
                for local &amp; international donors (Aug 2025).
              </li>
            </ul>
          </Section>

          <Section title="Currently">
            <ul>
              <li>Final-year BSc in Software Engineering &amp; Computing at AAiT (2022–2026).</li>
              <li>Learning Data Science at <b>ALX</b> (projects + fundamentals).</li>
              <li>Exploring OCR for <b>Amharic</b> text recognition (data prep, training, evaluation).</li>
              <li>Practicing problem solving on <b>Codeforces</b> and <b>LeetCode</b>.</li>
            </ul>
          </Section>

          <Section title="News">
            <ul className="not-prose divide-y rounded-xl border">
              {news.map((n) => {
                // optional: auto-detect a URL inside text if you didn't add href in news.ts
                const match = n.text.match(/https?:\/\/\S+/);
                const autoUrl = match?.[0];

                return (
                  <li key={n.date + n.text} className="flex items-start gap-4 p-4">
                    <div className="w-28 shrink-0 text-sm font-medium text-zinc-500">{n.date}</div>
                    <div className="text-base">
                      {/* If you added href/hrefLabel in news.ts, render them; else try to replace the raw URL */}
                      {"href" in n && n.href ? (
                        <>
                          {n.text}{" "}
                          <a
                            href={n.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-underline"
                          >
                            {"hrefLabel" in n && n.hrefLabel ? n.hrefLabel : "click here"}
                          </a>
                        </>
                      ) : autoUrl ? (
                        <>
                          {n.text.replace(autoUrl, "").trim()}{" "}
                          <a
                            href={autoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-underline"
                          >
                            click here
                          </a>
                        </>
                      ) : (
                        n.text
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </Section>
        </div>

        {/* RIGHT: photo + institute address + profile links */}
        <aside className="mt-6 w-full shrink-0 sm:mt-0 sm:w-[360px]">
          <div className="overflow-hidden rounded-xl border">
            <Image
              src="/me.jpg"
              alt="Zeamanuel Admasu"
              width={360}
              height={360}
              className="h-auto w-full object-cover"
              priority
            />
          </div>

          <div className="mt-4 font-mono text-base leading-6">
            <div className="font-semibold">Addis Ababa Institute of Technology</div>
            <div>King George St, 5 Kilo</div>
            <div>Addis Ababa, Ethiopia</div>

            {/* Profile links as pill buttons */}
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <a
                href="https://github.com/Zeamanuel-Admasu"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm font-medium
                           transition-colors shadow-sm
                           text-zinc-900 bg-white border-zinc-300 hover:bg-zinc-50
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white
                           dark:text-zinc-50 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:border-zinc-600
                           dark:focus-visible:ring-zinc-500 dark:focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950
                           [&>svg]:h-4 [&>svg]:w-4"
                aria-label="Open GitHub profile"
              >
                <Github /> GitHub
              </a>

              <a
                href="https://codeforces.com/profile/zeaman"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm font-medium
                           transition-colors shadow-sm
                           text-zinc-900 bg-white border-zinc-300 hover:bg-zinc-50
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white
                           dark:text-zinc-50 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:border-zinc-600
                           dark:focus-visible:ring-zinc-500 dark:focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950
                           [&>svg]:h-4 [&>svg]:w-4"
                aria-label="Open Codeforces profile"
              >
                <Code2 /> Codeforces
              </a>

              <a
                href="https://leetcode.com/u/zshibru/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm font-medium
                           transition-colors shadow-sm
                           text-zinc-900 bg-white border-zinc-300 hover:bg-zinc-50
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white
                           dark:text-zinc-50 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:border-zinc-600
                           dark:focus-visible:ring-zinc-500 dark:focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950
                           [&>svg]:h-4 [&>svg]:w-4"
                aria-label="Open LeetCode profile"
              >
                <Sparkles /> LeetCode
              </a>
            </div>
          </div>
        </aside>
      </div>

      {/* SOCIAL ICONS ROW (above footer) */}
      <SocialBar
        items={[
          {
            href:
              "https://mail.google.com/mail/?view=cm&fs=1&to=zeamanshibru2020@gmail.com&su=Hello%20Zeamanuel&body=Hi%20Zeamanuel,%0D%0A%0D%0A",
            label: "Gmail",
            icon: <Mail />,
          },
          { href: "https://github.com/Zeamanuel-Admasu", label: "GitHub", icon: <Github /> },
          { href: "https://www.linkedin.com/in/zeamanuel-admasu-32b6a6212/", label: "LinkedIn", icon: <Linkedin /> },
        ]}
        note="Ways to reach me."
      />
    </div>
  );
}
