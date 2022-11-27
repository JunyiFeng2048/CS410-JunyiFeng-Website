/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    
      extend: {
        colors: {
          "primary": "#F6F6F6",
          "weather-secondary": "#004E71",
        },
        /*
        screens: {
          'sm': '414px',
          'md': '768px',
          'lg': '1024px',
        },
        */
      },
    },

    
}
