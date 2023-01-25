/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      keyframes: {
        btnpulse: {
          '0%': { 'box-shadow': '0 0 0 0 theme("colors.zinc.400")' },
          '30%': {
            'box-shadow': '0 0 0 0 theme("colors.zinc.400/50")'
          },
          '100%': {
            'box-shadow': '0 0 0 12px theme("colors.zinc.400/0")'
          }
        }
      }
    }
  },
  plugins: [require('@headlessui/tailwindcss')({ prefix: 'ui' })]
}
