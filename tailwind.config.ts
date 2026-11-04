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
        forest: {
          50: "#F4F7F5",
          100: "#E3ECE6",
          200: "#C6D9CD",
          300: "#9EBFAB",
          400: "#6FA084",
          500: "#498263",
          600: "#32664B",
          700: "#24503B",
          800: "#1B4D3E", // Primary Canopy Emerald
          900: "#14372C",
          950: "#0C1410", // Base Dark
        },
        alert: {
          fire: "#DC2626",
          smoke: "#D97706",
          safe: "#16A34A",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
