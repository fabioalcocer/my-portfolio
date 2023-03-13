/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      keyframes: {
        btnpulse: {
          '0%': {
            'box-shadow': '0 0 0 0 theme("colors.zinc.400/80")'
          },
          '30%': {
            'box-shadow': '0 0 0 0 theme("colors.zinc.400/40")'
          },
          '100%': {
            'box-shadow': '0 0 0 12px theme("colors.zinc.400/0")'
          }
        },
        rightGrow: {
          '0%': {
            width: '0'
          },
          '100%': {
            width: '100%'
          }
        }
      }
    }
  },
  plugins: [require('@headlessui/tailwindcss')({ prefix: 'ui' })]
}
