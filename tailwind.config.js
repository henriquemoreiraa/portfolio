/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    maxWidth: {
      840: "840px",
      215: "215px",
      379: "379px",
    },
    extend: {
      colors: {
        red1: "#F35151",
        bl1: "#151414",
      },
    },
  },
  plugins: [],
};
