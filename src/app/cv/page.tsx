// src/app/cv/page.tsx
import Link from "next/link";
import { FileText } from "lucide-react";

/* ——— atoms ——— */

function Container({ children }: { children: React.ReactNode }) {
  // Slightly narrow like the reference
  return <div className="mx-auto max-w-4xl">{children}</div>;
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 text-3xl font-semibold leading-tight tracking-tight">
      {children}
    </h2>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50">
      {children}
    </div>
  );
}

function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-[160px,1fr]">
      <div className="text-base font-semibold text-zinc-700 dark:text-zinc-200">
        {label}
      </div>
      <div className="text-base">{children}</div>
    </div>
  );
}

function Year({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex min-w-[60px] justify-center rounded-md bg-violet-600 px-2 py-1 text-[11px] font-semibold text-white shadow-sm">
      {children}
    </span>
  );
}

function ItemTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-lg font-semibold leading-snug text-zinc-900 dark:text-zinc-50">
      {children}
    </div>
  );
}

function Muted({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-base text-zinc-600 dark:text-zinc-400">{children}</div>
  );
}

function Divider() {
  return <hr className="my-5 border-zinc-200 dark:border-zinc-800" />;
}

/* ——— page ——— */

export default function CVPage() {
  return (
    <Container>
      {/* header: small “CV” on left, purple pdf button on right */}
      <div className="mb-6 mt-6 flex items-center justify-between">
        <h1 className="text-3xl font-semibold tracking-tight">CV</h1>
        <Link
          href="/cv.pdf"
          target="_blank"
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-violet-600 text-white shadow hover:bg-violet-700"
          aria-label="Download CV (PDF)"
          title="Download CV (PDF)"
        >
          <FileText size={18} />
        </Link>
      </div>

     {/* General Information */}
<div className="mt-6">
  <Card>
  <h3 className="mb-4 text-2xl font-semibold leading-tight">General Information</h3>
  <div className="text-[15px] md:text-base">
    <div className="grid grid-cols-[160px_1fr] gap-y-3">
      <div className="font-bold text-zinc-900 dark:text-zinc-50 whitespace-nowrap">Full Name</div>
      <div>Zeamanuel Admasu Shibru</div>

      <div className="font-bold text-zinc-900 dark:text-zinc-50 whitespace-nowrap">Languages</div>
      <div>English, Amharic</div>

      <div className="font-bold text-zinc-900 dark:text-zinc-50 whitespace-nowrap">Email</div>
      <div>zeamanshibru2020@gmail.com</div>
    </div>
  </div>
</Card>

</div>


      {/* Education */}
      <div className="mt-8" />
      <SectionTitle>Education</SectionTitle>
      <Card>
        <div className="space-y-5">
          <div>
            <div className="mb-1 flex items-center gap-3">
              <Year>2022–2026</Year>
              <ItemTitle>
                B.Sc. in Software Engineering &amp; Computing (final year)
              </ItemTitle>
            </div>
            <Muted>Addis Ababa University — AAiT, Addis Ababa, Ethiopia</Muted>
            <ul className="mt-2 list-disc pl-5 text-base">
              <li>
                Coursework: Mobile App Dev, Web Design, DBMS, OOP, Calculus
                I–III, Machine Learning.
              </li>
            </ul>
          </div>

          <Divider />

          <div>
            <div className="mb-1 flex items-center gap-3">
              <Year>2025–2026</Year>
              <ItemTitle>
                A2SV (Africa to Silicon Valley) — Data Structures &amp;
                Algorithms
              </ItemTitle>
            </div>
            <Muted>Addis Ababa, Ethiopia</Muted>
            <ul className="mt-2 list-disc pl-5 text-base">
              <li>Competitive programming, algorithms, web &amp; mobile dev.</li>
            </ul>
          </div>

          <Divider />

          <div>
            <div className="mb-1 flex items-center gap-3">
              <Year>2024–Sep 2025</Year>
              <ItemTitle>Backend Development &amp; AI Career Essentials</ItemTitle>
            </div>
            <Muted>ALX</Muted>
          </div>

          <Divider />

          <div>
            <div className="mb-1 flex items-center gap-3">
              <Year>2018–2019</Year>
              <ItemTitle>Robotic Simulation &amp; Python</ItemTitle>
            </div>
            <Muted>Faris Aerospace Engineering — Addis Ababa, Ethiopia</Muted>
          </div>

          <Divider />

          <div>
            <div className="mb-1 flex items-center gap-3">
              <Year>2017–2021</Year>
              <ItemTitle>High School Diploma</ItemTitle>
            </div>
            <Muted>School of Tomorrow — Addis Ababa, Ethiopia</Muted>
          </div>
        </div>
      </Card>

      {/* Work Experience */}
      <div className="mt-8" />
      <SectionTitle>Work Experience</SectionTitle>
      <Card>
        <div className="space-y-5">
          <div>
            <div className="mb-1 flex items-center gap-3">
              <Year>Feb–Jun 2025</Year>
              <ItemTitle>
                Golang Backend Developer (Intern) — Dime Remittance
              </ItemTitle>
            </div>
            <Muted>A2SV</Muted>
            <ul className="mt-2 list-disc pl-5 text-base">
              <li>Contributed to remittance features and REST APIs (Go/Gin).</li>
            </ul>
          </div>

          <Divider />

          <div>
            <div className="mb-1 flex items-center gap-3">
              <Year>Jun–Sep 2025</Year>
              <ItemTitle>ML Engineer (Intern)</ItemTitle>
            </div>
            <Muted>Ethiopian Artificial Intelligence Institute</Muted>
            <ul className="mt-2 list-disc pl-5 text-base">
              <li>Implemented small ML pipelines and experiments.</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Selected Projects */}
      <div className="mt-8" />
      <SectionTitle>Selected Projects</SectionTitle>
      <Card>
        <div className="space-y-5">
          <div>
            <div className="mb-1 flex items-center gap-3">
              <Year>Sep 2025</Year>
              <ItemTitle>
                SocialSpark — AI Content Toolkit (Runner-up, A2SV Gen 6)
              </ItemTitle>
            </div>
            <ul className="mt-2 list-disc pl-5 text-base">
              <li>
                AI toolkit for SMEs/creators to generate IG/TikTok captions,
                images &amp; videos (Amharic) with secure scheduling/posting.
              </li>
              <li>
                Built in three weeks across mobile, web, and backend; I was on
                the Mobile team.{" "}
                <Link
                  href="https://lnkd.in/e3Hb-2qY"
                  target="_blank"
                  className="underline underline-offset-4"
                >
                  demo
                </Link>
              </li>
            </ul>
          </div>

          <Divider />

          <div>
            <div className="mb-1 flex items-center gap-3">
              <Year>Aug 2025</Year>
              <ItemTitle>Zebidar Donation App</ItemTitle>
            </div>
            <ul className="mt-2 list-disc pl-5 text-base">
              <li>
                Go (Gin) + MongoDB backend, Flutter app; Chapa payments for
                local &amp; international donors.
              </li>
            </ul>
          </div>

          <Divider />

          <div>
            <div className="mb-1 flex items-center gap-3">
              <Year>2023–2025</Year>
              <ItemTitle>ML Mini-projects</ItemTitle>
            </div>
            <ul className="mt-2 list-disc pl-5 text-base">
              <li>Student grade prediction (Linear Regression).</li>
              <li>Mushroom edible/poison classification (LogReg, SVM, Perceptron).</li>
              <li>Titanic clustering (K-Means).</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Skills */}
      <div className="mt-8" />
      <SectionTitle>Skills</SectionTitle>
      <Card>
        <div className="space-y-4 text-base">
          <Row label="Soft skills">
            Hard working, communication, leadership, responsibility
          </Row>
          <Divider />
          <Row label="Languages & Tools">
            Python, Go (Gin), Java, Spring, MySQL, MongoDB, Flutter, Git,
            Next.js, Docker, NumPy
          </Row>
        </div>
      </Card>

      {/* Leadership & Certifications */}
      <div className="mt-8" />
      <SectionTitle>Leadership &amp; Volunteering</SectionTitle>
      <Card>
        <Muted>
          Makedonya Charity Association • Matheos Wondu Cancer Society • Live
          Addis NGO — active roles in event organization and fundraising.
        </Muted>
      </Card>

      <div className="mt-8" />
      <SectionTitle>Certifications</SectionTitle>
      <Card>
        <ul className="list-disc pl-5 text-base">
          <li>Cisco — Python Essentials</li>
          <li>ALX — Career Essentials</li>
          <li>ALX — Backend Web Development (Django)</li>
          <li>Ethiopian Coffee &amp; Tea Authority — Coffee Cupping Certificate</li>
        </ul>
      </Card>

      <div className="mb-14" />
    </Container>
  );
}
