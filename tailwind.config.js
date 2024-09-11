/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2C3E50',
        'tint-1': '#34495E',
        'tint-2': '#536980',
      },
      fontFamily: {
        amiri: ['Amiri', 'serif'],
        qwitcher: ['Qwitcher Grypen', 'cursive'],
        aref: ['Aref Ruqaa', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

