/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#1E1E2F",
        surface: "#151522",
        textPrimary: "#4F46E5",
        textSecondary: "#6366F1",
        accent: "#5E81AC",
        card: "#1E293B",
        cta: "#BF616A",
        border: "#2C2F3F",
      },
    },
  },
  plugins: [],
};
