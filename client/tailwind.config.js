/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        bg01:"#821131",
        bg02:"#C7253E",
        bg03:"#E85C0D",
        bg04:"#FABC3F",
      }
    },
  },
  plugins: [],
}