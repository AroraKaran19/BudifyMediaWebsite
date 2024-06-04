/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': {
        'max': '320px' // Extra small devices (phones)
      },
      // => @media (max-width: 320px) { ... }
      'sm': {
        'min': '0px',
        'max': '1024px' // Small devices (phones to tablets)
      },
      // => @media (min-width: 321px) and (max-width: 768px) { ... }
      'md': {
        'min': '769px',
        'max': '1024px' // Medium devices (tablets to small desktops)
      },
      // => @media (min-width: 769px) and (max-width: 1024px) { ... }
      'lg': {
        'min': '1025px',
        'max': '1440px' // Large devices (desktops)
      },
      // => @media (min-width: 1025px) and (max-width: 1440px) { ... }
      'xl': {
        'min': '1441px' // Extra large devices (large desktops)
      }
      // => @media (min-width: 1441px) { ... }
    }
  },
  plugins: [],
}