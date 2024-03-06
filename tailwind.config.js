/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkMode: {
          'very-dark-blue': 'hsl(207, 26%, 17%)',
          'dark-blue': 'hsl(200, 15%, 8%)',
          'light-gray': 'hsl(0, 0%, 52%)',
          'very-light-gray': 'hsl(0, 0%, 98%)',
          'white': 'hsl(0, 0%, 100%)',
        },
      },
      fontFamily: {
        'plus-jakarta-sans': ['Plus Jakarta Sans', 'sans-serif'],
        'the-nautigal': ['The Nautigal', 'cursive'],
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}

