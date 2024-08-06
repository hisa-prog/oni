const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
        hakio: "Hakio",
        rosario: "Rosario",
      },
      colors: {
        "orangefooter": "#DF4F50",
      },
      maxWidth: {
        mobile: "375px",
        "8xl": "1440px",
      },
    },
    screens: {
      "mm": "375px",
      "ml": "425px",
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "1xl": "1320px",
      "xxl": "1440px",
      "2xl": "1536px",
      "3xl": "1880px",
      "4xl": "2200px",
      "5xl": "2500px",
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {
      visibility: ['hover', 'focus'],
      backgroundColor: ['active'],
      fill: ['hover', 'focus', 'active'],
      textColor: ['active'],
    },
  },
  plugins: [],
}