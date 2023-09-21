/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: { center: true },
      colors: {
        primary: "#3075C6",
        secend: "#FF8682",
      },
      maxWidth: {
        "6xl": "1100px",
      },
      boxShadow: {
        main: "0px 4px 25px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
