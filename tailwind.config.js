/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Niramit,Helvetica, Arial, sans-serif",
    },
    fontWeight: {
      thin: 200,
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      black: "#000000",
      ssTheme: {
        whiteBlue: "rgba(242, 238, 255, 1)",
        blue: "rgba(154, 156, 245, 1)",
        blue2: "rgba(103, 165, 245, 1)",
        orange: "rgba(228, 134, 49, 1)",
        darkerBlue: "rgba(58, 65, 92, 1)",
        blackBlue: "rgba(46, 48, 69, 1)",
      },
    },
    screens: {
      desktop: "1000px",
      minDesktop: "936px",
    },
    extend: {},
  },
  plugins: [],
};
