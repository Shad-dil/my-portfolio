/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#1E1E2F",
        surface: "#151522",
        textPrimary: "#ECEFF4",
        textSecondary: "#AEB1C5",
        accent: "#5E81AC",
        cta: "#BF616A",
        border: "#2C2F3F",
      },
    },
  },
  plugins: [],
};
