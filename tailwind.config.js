/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      'DodgerBlue' : '#3b82f6'
      },
      fontFamily: {
        helvetica: ['Helvetica Neue', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
}