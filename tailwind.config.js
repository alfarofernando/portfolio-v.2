/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "light-bg": "url('./src/assets/light-bg.webp')",
        "dark-bg": "url('./src/assets/dark-bg.webp')",
      },
    },
  },
  plugins: [],
};
