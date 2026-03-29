/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        shellBg: "#f3f4f6",
        shellPanel: "#ffffff",
        shellBorder: "#cbd5e1",
        shellText: "#111827",
        shellSubtle: "#475569",
        shellAccent: "#0f172a",
        shellCorrect: "#166534",
        shellIncorrect: "#b91c1c",
        shellFlag: "#b45309",
      },
      fontFamily: {
        display: ["Arial", "Helvetica Neue", "Helvetica", "sans-serif"],
        body: ["Arial", "Helvetica Neue", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
