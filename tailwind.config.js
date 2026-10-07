/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFDF9',
          100: '#FDFBF7',
          200: '#F5EFE6',
          300: '#E8DFD1',
        },
        maroon: {
          800: '#4A0E17',
          900: '#34080E',
          950: '#1F0408',
        },
        gold: {
          200: '#FCEAA6',
          300: '#F3DB83',
          400: '#E6C657',
          500: '#D4AF37',
          600: '#AA8822',
        },
        charcoal: '#1A1818',
      },
      fontFamily: {
        wedding: ['"Classic Wedding Demo"', '"Great Vibes"', 'serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'subtle-pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
