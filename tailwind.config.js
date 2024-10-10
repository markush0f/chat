/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'main-orange': '#ffa506',
        'second-orange': '#ffe9a1',
        'color-navbar': '#f9a830'
      }
    },
  },
  plugins: [],
}
