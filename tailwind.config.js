/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens : {
        'md': '375px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '425px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '768px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1024px',
        // => @media (min-width: 1536px) { ... }
        '3xl': '1440px',
        '4xl': '2560px'
      }
    },
  },
  plugins: [],
}

