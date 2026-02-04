/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./{*.html,reflexoes/*.html}"],
  theme: {
    extend: {
      colors: {
        primary: '#0E2A3B',
        secondary: '#163A55',
        accent: '#2C5C7A',
        footer: '#7FA58B',
        textbase: '#4A4A4A'
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: [],
}


  

