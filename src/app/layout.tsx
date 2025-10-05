import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Footer from "@/components/Footer";

import { Barlow_Condensed, Noto_Sans_Ethiopic } from "next/font/google";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const ethiopic = Noto_Sans_Ethiopic({
  subsets: ["ethiopic"],
  variable: "--font-ethiopic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zeamanuel Admasu — Portfolio",
  description:
    "AAiT software engineering student focused on Go/Nest backends, Flutter, and applied ML; ex-intern at A2SV (Dime) and the Ethiopian AI Institute.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${barlowCondensed.variable} ${ethiopic.variable}`}
    >
    <body className="font-sans antialiased bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
  <Providers>
    <ScrollProgress />
    <Navbar />
    {/* narrower like Amanuel's */}
    <main className="mx-auto max-w-4xl px-5.5 py-15">{children}</main>
    <Footer />
  </Providers>
</body>
     
    </html>
  );
}
