/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'demont-navy': '#0C2D46',
        'demont-dark': '#0C2D46',
        'demont-orange': '#ECA22D',
        'demont-gray': '#879DA5',
        'demont-light-gray': '#FAFBFB',
        'demont-bg-gray': '#F6F6F6',
        'demont-blue-gray': '#E7EBED',
        'demont-text-gray': '#6D6D6D',
        'demont-border-gray': '#D0D4D6',
        'demont-line-gray': '#E6E6E6',
      },
      fontFamily: {
        'sans': ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'xs': ['12px', '18px'],
        'sm': ['14px', '21px'],
        'base': ['16px', '24px'],
        'lg': ['18px', '27px'],
        'xl': ['20px', '30px'],
        '2xl': ['24px', '36px'],
        '3xl': ['30px', '45px'],
        '4xl': ['40px', '60px'],
        '5xl': ['40px', '60px'],
      },
      fontWeight: {
        'light': '275',
        'normal': '300',
        'medium': '500',
        'semibold': '600',
      },
      animation: {
        'slide-in': 'slideIn 0.3s ease-out',
        'slide-out': 'slideOut 0.3s ease-out',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      borderRadius: {
        'xl': '25px',
        '2xl': '50px',
      },
      maxWidth: {
        '8xl': '1440px',
      }
    },
  },
  plugins: [],
}