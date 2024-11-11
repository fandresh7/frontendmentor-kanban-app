/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Plus Jakarta Sans', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        'theme-dark': '#000112', // Black
        'theme-darker': '#20212C', // Very Dark Grey (Dark BG)
        'theme-charcoal': '#2B2C37', // Dark Grey
        'theme-gray-dark': '#3E3F4E', // Lines (Dark)
        'theme-gray-light': '#828FA3', // Medium Grey
        'theme-light-blue': '#E4EBFA', // Lines (Light)
        'theme-light-gray': '#F4F7FD', // Light Grey (Light BG)
        'theme-white': '#FFFFFF', // White
        'theme-primary': '#635FC7', // Main Purple
        'theme-secondary': '#A8A4FF', // Main Purple (Hover)
        'theme-red-dark': '#EA5555', // Red
        'theme-red-light': '#FF9898', // Red (Hover)
      },
      fontSize: {
        xl: ['24px', '30px'], // Heading (XL)
        lg: ['18px', '23px'], // Heading (L)
        base: ['15px', '19px'], // Heading (M)
        sm: ['13px', '23px'], // Body (L)
        xs: ['12px', '15px'], // Body (M)
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'base'
    }),
  ],
}

