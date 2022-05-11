module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],// ...
  darkMode: 'class',
  theme: {
    extend: 
    { colors: 
      { brand: 
        { 300 : "#996DDF",
          500 : "#8257e6",
          black : "#00000"
        },
      },
    borderRadius : {
        md : '4px'
    },
    fontFamily : {
      'Heebo' : ['Heebo', 'sans-serif'],
    }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
    // ...
  ],
}
