const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Inter", ...defaultTheme.fontFamily.serif]
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '1rem',
          md: "1rem",
          lg: '2rem',
          xl: '5rem',
          '2xl': '10rem',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
