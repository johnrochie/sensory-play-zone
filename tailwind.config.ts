import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#fffbf7",
        foreground: "#2d2a26",
        primary: "#ff6b6b",
        secondary: "#feca57",
        accent: "#48dbfb",
        border: "#f0e9e4",
        muted: "#6b6560",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-fredoka)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        "fade-in-up": {
          from: {
            opacity: "0",
            transform: "translateY(20px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
