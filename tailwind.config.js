/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  variants:{
    extend:{
      display:['group-focus']
    },
  },
  theme: {
    extend: {
      colors:{
      'leulePrime':'#fd1b53'
    },
  },
    fontFamily: {
      'leuleFont': ['Poppins', 'sans-serif'] // Ensure fonts with spaces have " " surrounding it.
    },
  },
  
  plugins: [],
}
