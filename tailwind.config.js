/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        blue: "#2463FF",
        darkNavy: "#261676",
        pink: "#887DC0",
      },

      backgroundImage: {
        bgDesktop: "url('./assets/images/background-desktop.svg')",
        bgMobile: "url('./assets/images/background-mobile.svg')",
        bgTablet: "url('./assets/images/background-tablet.svg')",
        pinkGradient: "linear-gradient(to right, #FE71FE, #7199FF)",
        blueGradient: "linear-gradient(to right, #344ABA, #001479)",
      },

      fontFamily: {
        primary: ["Mouse Memoirs", "sans-serif"],
      },
    },
  },
  plugins: [],
};
