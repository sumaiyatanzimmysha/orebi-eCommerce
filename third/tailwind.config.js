/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#262626',
        'list': '#6D6D6D',
        'seconary': '#767676',
        'cate': '#F5F5F3',
        'bord': '#979797',
      },
      fontfamily:{
        'dm': ['DM Sans'],
        'open': ['Open Sans'],
      },
      fontSize:{
  '39':'39px'
      },
      maxWidth: {
        'container': '1600px',
      },
      fontSize:{
        '':''
      }
    },
  },
  plugins: [],
}

