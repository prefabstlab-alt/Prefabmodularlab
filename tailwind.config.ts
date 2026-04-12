import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.md",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a1a2e",
        secondary: "#16213e",
        accent: "#0f3460",
        "bg-gray": "#f5f5f5",
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "var(--font-noto-kr)",
          "system-ui",
          "sans-serif",
        ],
        montserrat: [
          "var(--font-montserrat)",
          "var(--font-noto-kr)",
          "sans-serif",
        ],
        kr: ["var(--font-noto-kr)", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;
