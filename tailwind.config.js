const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      green: colors.green,
      emerald: colors.emerald,
    },
    extend: {
      zIndex: {
        "-10": "-10",
      },
      transitionProperty: {
        height: "height",
      },
      backgroundImage: (theme) => ({
        "main-bg": "url('/src/assets/images/backgrounds/bg1.jpg')",
      }),
    },
  },
  variants: {
    height: ["responsive", "hover", "focus"],
    extend: {},
  },
  plugins: [],
};
