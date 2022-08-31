/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      'midnight' : '#121063',
      'blue' : '#1d4ed8',
      'purple' : '#6b21a8',
    },
    fontFamily: {
      sans: ['Outfit', 'sans-serif'],
    },
    container:{
      center:true,
      padding:'2rem',
    },
    extend: {},
  },
  plugins: [],
}
