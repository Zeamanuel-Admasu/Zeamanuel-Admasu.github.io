// src/lib/news.ts
export type NewsItem = {
  date: string;          // e.g., "Sep 2025"
  text: string;          // main text (no raw URLs)
  href?: string;         // optional external link
  hrefLabel?: string;    // optional label for the link (e.g., "click here")
};

export const news: NewsItem[] = [
  {
    date: "Sep 2025",
    text:
      "SocialSpark: AI toolkit for Ethiopian Small and Medium-sized Enterprises/creators that generates IG/TikTok captions, images & videos (Amharic) with secure scheduling/posting. Built in 3 weeks; Runner-up among 13 teams. I was on the Mobile team. Demo:",
    href: "https://lnkd.in/e3Hb-2qY",
    hrefLabel: "click here",
  },
  { date: "Sep 2025", text: "Completed ML Engineering internship at the Ethiopian Artificial Intelligence Institute." },
  { date: "Aug 2025", text: "Shipped Zebidar donation mobile app (Go/Gin + MongoDB backend, Flutter app, Chapa payments)." },
  { date: "Jun 2025", text: "Joined Ethiopian Artificial Intelligence Institute as an ML Engineer (Intern)." },
  { date: "Feb 2025", text: "Started Golang Backend internship at A2SV (Dime Remittance)." },
  { date: "2024 → 2025", text: "Completed multiple ML mini-projects: student grade prediction (Linear Regression), mushroom classification (LogReg, SVM, Perceptron), Titanic clustering (K-Means)." },
  { date: "2022 → 2026", text: "Pursuing BSc in Software Engineering & Computing at Addis Ababa University (AAiT)." },
];
