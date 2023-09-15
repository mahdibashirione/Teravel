/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: { center: true },
      colors: {
        primary: "#8DD3BB",
        secend: "#FF8682",
      },
    },
  },
  plugins: [],
};
