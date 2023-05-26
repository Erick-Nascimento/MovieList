/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      black: '#161616',
      red: '#E00E0E',
      gray: '#404040',
      white: '#FFFFFF',
    },
    fontFamily: {
      Inter: ['Inter', 'sans-serif'],
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
      })
    }),
  ],
}
