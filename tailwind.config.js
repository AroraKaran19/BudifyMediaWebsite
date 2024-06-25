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
        'max': '1200px' // Small devices (phones to tablets)
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
    },
    extend: {
      keyframes: {
        shine: {
          '0%': { backgroundPosition: '0%' },
          '50%': { backgroundPosition: 'calc(50% + 10vw)' },
          '100%': { backgroundPosition: '100%' },
        },
        swipefromtop: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        glitter: { 
          '0%': { maskPosition: '120%', opacity: 1 },
          '100%': { maskPosition: '0%', opacity: 1 }
        },
      },
      animation: {
        shine: 'shine 8s infinite ease',
        shineDelayed: 'swipefromtop 1s ease-in-out, shine 8s infinite ease 8s',
        animateHeadText: 'swipefromtop 1s ease-in-out, glitter ease-in-out 2s forwards 1s',
        swipeTop: 'swipefromtop 1s ease-in-out',
        fadeIn: 'fadeIn ease-in-out 2s forwards',
        glitter: 'glitter ease-in-out 2s',
      },
      backgroundImage: {
        'heading-gradient': 'linear-gradient(to left, hsl(0, 0%, 100%) 5%, hsl(30, 100%, 30%) 100%)',
        // 'background-gradient': "linear-gradient(165deg, rgba(0,0,0,1) 0%, rgba(255,165,0,1) 77%, rgba(255,255,255,1) 100%)",
        "background-gradient": "linear-gradient(184deg, rgba(255,255,255,1) 0%, rgba(226,94,62,0.2) 50%, rgba(255,255,255,1) 100%)",
        "card-1-gradient": "linear-gradient(90deg, #FEE140 0%, #FA709A 100%)",
        "card-2-gradient": ""
      },
    }
  },
  plugins: [],
}