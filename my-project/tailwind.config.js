/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {
      fontFamily: {
        "caveat": "Caveat', cursive",
      },
      colors: {
        "PINK": "#F2A7BB",
        "PINK-BLACK": "#0A0D0A",
        "PINK-GRAY": "text-gray-700",
        "PINK-BLUE": "#A8CDE8"
      },
      screens: {
        'tablet': '640px',
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