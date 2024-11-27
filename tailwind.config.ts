import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gray: {
          50: '#f9fafb',
          600: '#4B5563',
          900: '#111827',
        },
        green: {
          500: '#6ee7b7',
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
