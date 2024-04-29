/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      orange: colors.orange,
      black: colors.black,
      sky: colors.sky,
      green: colors.lime,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      red: colors.red,
      yellow: colors.yellow,
      amber: colors.amber,
      stone: colors.stone,
      slate: colors.slate,
      lime: colors.lime,
    },
  },
  plugins: [],
};
