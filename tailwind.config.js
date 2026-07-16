/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#0A0A0B",
        surface: "#111113",
        "surface-hover": "#16161A",
        border: {
          DEFAULT: "#1F1F23",
          hover: "#2A2A30",
        },
        foreground: "#F2F2F3",
        muted: "#8A8A93",
        accent: {
          DEFAULT: "#3B82F6",
          dim: "#1D4ED8",
          soft: "rgba(59, 130, 246, 0.12)",
        },
      },
      fontSize: {
        "display-lg": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-md": ["3.25rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};
