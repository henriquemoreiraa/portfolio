/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    maxWidth: {
      840: "840px",
      215: "215px",
      379: "379px",
    },
    screens: {
      tablet: "860px",
      cel1: "550px",
    },
    extend: {
      colors: {
        red1: "#F35151",
        bl2: "#1514147c",
        bl1: "#151414",
        html: "#FF6614",
        css: "#00AEE3",
        js: "#FFF500",
        ts: "#0076BE",
        react: "#06bdf5",
        balck: "#0b0b0c",
      },
      width: {
        70: "69.5%",
        840: "840px",
      },
      height: {
        312: "312px",
      },
      fontSize: {
        115: "115px",
      },
    },
  },
  plugins: [],
};
