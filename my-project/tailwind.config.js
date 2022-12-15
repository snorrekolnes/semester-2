/** @type {import('tailwindcss').Config} */ 
module.exports = {
//  content: ["./src/*.html"],
content: [

  "./src/**/*.html",

  "./src/**/*.js",

],
  theme: {
    extend: {
      fontFamily: {
        "caveat": "Caveat', cursive",
        "Josefin": "'Josefin Sans', sans-serif",
        "Indie": "'Indie Flower', cursive",
      },
      colors: {
        "SWIMMER-PINK": "#F2A7BB",
        "SWIMMER-BLACK": "#0A0D0A",
        "SWIMMER-GRAY": "D9D9D9",
        "SWIMMER-BROWN": "#BF895A",
      },
      backgroundImage:
         {
           'hero_pattern': "url('/)"
         },
      screens: {

        'lMobile': '425px',

        'tablet': '740px',
        // => @media (min-width: 640px) { ... }
                                          
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}