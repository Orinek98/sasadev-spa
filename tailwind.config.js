/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
       fontFamily: {
        burtons: "burtons"
      },
    },
  },
  plugins: [],
}

