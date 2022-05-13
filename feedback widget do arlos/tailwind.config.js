module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],// ...
  darkMode: 'class',
  theme: {
    fontSize: {
      'xs': '12px',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    screens :{
      'xxs' : '120px',
      'xs' : '280px',
      'bxs' : '420px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1353px',
    },
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
    require("tailwindcss-animatecss")({
      classes: ['animate__animated', 'animate__fadeInRight',],
    })
    // ...
  ],
  variants: {
    scrollbar: ['rounded']
}
}
