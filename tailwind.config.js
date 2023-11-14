/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "inter": ['inter'],
        'Circular': ['Circular STD']
      },
      colors: {
        'ungu': '#5D50C6',
        'pink': '#F85E9F',
        'orange': '#FF5722',
        'grey': '#191825'
      }
    },
  },
  plugins: [],
}

