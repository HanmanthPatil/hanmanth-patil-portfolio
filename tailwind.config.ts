import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0D10",
        surface: {
          secondary: "#111419",
          elevated: "#171B21",
          hover: "#1B2027",
        },
        text: {
          primary: "#F5F5F2",
          secondary: "#9CA3AD",
          muted: "#5E6573",
        },
        accent: {
          cyan: "#00C2FF",
          soft: "#8FE8FF",
          subtle: "rgba(0, 194, 255, 0.08)",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.08)",
          focus: "rgba(0, 194, 255, 0.40)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      borderRadius: {
        pill: "9999px",
      },
    },
  },
  plugins: [],
};

export default config;
