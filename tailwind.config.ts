/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {},
      screens: {}
    }
  },
  plugins: [
    require('tailwindcss-safe-area'),
    ({ addUtilities }) => {
      addUtilities({})
    }
  ]
}
