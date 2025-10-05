// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Barlow Condensed from next/font via --font-sans
        // with Noto Sans Ethiopic fallback for አማርኛ
        sans: ["var(--font-sans)", "var(--font-ethiopic)"],
      },
      letterSpacing: {
        tightish: "-0.01em", // optional: nice for big headings
      },
    },
  },
  plugins: [],
} satisfies Config;
