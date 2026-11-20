import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          primary: "#659287",
          secondary: "#88BDA4",
          tint: "#B1D3B9",
          mist: "#E6F2DD",
          white: "#FFFFFF",
        },
        forest: {
          slate: "#162622",
          pine: "#435E57",
          offwhite: "#F4F9F1",
          obsidian: "#0E1916",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
        bangla: ["var(--font-hind-siliguri)", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 4px 20px -2px rgba(22, 38, 34, 0.06)",
        elevated: "0 10px 30px -4px rgba(22, 38, 34, 0.12)",
        glow: "0 0 25px rgba(136, 189, 164, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
