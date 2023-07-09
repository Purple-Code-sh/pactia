/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      black: "#000000",
      ssTheme: {
        whiteBlue: "rgba(242, 238, 255, 1)",
        blue: "rgba(154, 156, 245, 1)",
        orange: "rgba(228, 134, 49, 1)",
        darkerBlue: "rgba(58, 65, 92, 1)",
        blackBlue: "rgba(46, 48, 69, 1)",
      },
    },
    screens: {
      desktop: "1140px",
    },
    extend: {},
  },
  plugins: [],
};
