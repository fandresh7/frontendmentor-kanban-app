/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'

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
        'theme-dark': '#000112',        // Black
        'theme-darker': '#20212C',      // Very Dark Grey (Dark BG)
        'theme-charcoal': '#2B2C37',    // Dark Grey
        'theme-gray-dark': '#3E3F4E',   // Lines (Dark)
        'theme-gray-light': '#828FA3',  // Medium Grey
        'theme-light-blue': '#E4EBFA',  // Lines (Light)
        'theme-light-gray': '#F4F7FD',  // Light Grey (Light BG)
        'theme-white': '#FFFFFF',       // White
        'theme-primary': '#635FC7',     // Main Purple
        'theme-secondary': '#A8A4FF',   // Main Purple (Hover)
        'theme-red-dark': '#EA5555',    // Red
        'theme-red-light': '#FF9898',   // Red (Hover)
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, rgba(233, 239, 250, 1) 0%, rgba(233, 239, 250, 0.5) 100%)',
        'custom-gradient-dark': 'linear-gradient(180deg, rgba(43,44,55,1) 100%, rgba(43,44,55,0.5) 100%)'
      },
    }
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'base'
    }),
    animations
  ],
}

