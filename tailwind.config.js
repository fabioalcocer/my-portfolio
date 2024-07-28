const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-conic": "conic-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        "bounce-slow": "bounce 2.5s linear infinite",
        disco: "disco 2.5s linear infinite",
        aurora: "aurora 60s linear infinite",
        fadein: "fadein 3s linear",
      },
      keyframes: {
        fadein: {
          "0%": {
            opacity: "0",
          },
          "50%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        disco: {
          "0%": { transform: "translateY(-50%) rotate(0deg)" },
          "100%": { transform: "translateY(-50%) rotate(360deg)" },
        },
        btnpulse: {
          "0%": {
            "box-shadow": '0 0 0 0 theme("colors.zinc.400/80")',
          },
          "30%": {
            "box-shadow": '0 0 0 0 theme("colors.zinc.400/40")',
          },
          "100%": {
            "box-shadow": '0 0 0 12px theme("colors.zinc.400/0")',
          },
        },
        rightGrow: {
          "0%": {
            width: "0",
          },
          "100%": {
            width: "100%",
          },
        },
      },
    },
  },
  plugins: [
    require("@headlessui/tailwindcss")({ prefix: "ui" }),
    addVariablesForColors,
  ],
}

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"))
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  )

  addBase({
    ":root": newVars,
  })
}
