/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      screens: {
        sm: "359px",
        "2xl": "1440px",
      },
      colors: {
        primary: {
          "dark-cyan": "hsl(var(--dark-cyan) / <alpha-value>)",
          cream: "hsl(var(--cream) / <alpha-value>)",
        },
        netral: {
          "v-d-blue": "hsl(var(--very-dark-blue) / <alpha-value>)",
          "d-g-blue": "hsl(var(--dark-grayish-blue) / <alpha-value>)",
          white: "hsl(var(--white) / <alpha-value>)",
        },
      },
      fontSize: {
        paragraph: "14px",
      },
      fontFamily: {
        headline: ["Fraunces", "system-ui", "sans-serif"],
        body: ["Montserrat", "system-ui", "sans-serif"],
      },
      fontWeightCustom: {
        regular: 500,
        bold: 700,
      },
    },
  },
  plugins: [require("./node_modules/tw-elements/dist/plugin")],
};
