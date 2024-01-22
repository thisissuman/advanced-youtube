/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.js",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'transform': 'transform',
      },
    },
  },
  plugins: [],
}