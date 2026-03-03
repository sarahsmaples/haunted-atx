/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.njk", "./src/**/*.html", "./src/**/*.md"],
  theme: {
    extend: {
      colors: {
        crimson: {
          DEFAULT: "#991B1B",
          dark:    "#7B1111",
          light:   "#B91C1C",
        },
      },
    },
  },
  plugins: [],
};
