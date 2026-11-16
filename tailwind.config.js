/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fbf8ea',
          100: '#f5eecc',
          200: '#ebdc9b',
          300: '#dec364',
          400: '#d4af37',
          500: '#c59d2a',
          600: '#ab7e20',
          700: '#895e1c',
          800: '#714c1d',
          900: '#60401d',
          DEFAULT: '#d4af37',
          light: '#f3e5ab',
          dark: '#aa820a'
        },
        obsidian: {
          950: '#030303',
          900: '#080808',
          800: '#101010',
          700: '#181818',
          600: '#222222'
        }
      },
      fontFamily: {
        serif: ['"Cinzel"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Montserrat"', 'sans-serif'],
      },
      letterSpacing: {
        'widest-plus': '0.3em',
        'super-wide': '0.45em',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #f5eecc 0%, #d4af37 50%, #aa820a 100%)',
        'gold-metallic': 'linear-gradient(105deg, #dfba4f 0%, #fff2b2 25%, #c59d2a 50%, #f7e189 75%, #a1781b 100%)',
        'radial-vignette': 'radial-gradient(circle at center, rgba(16,16,16,0.2) 0%, rgba(0,0,0,0.95) 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
};
