/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1e3382',
        'primary-dark': '#0f172a', // Deep slate blue/black
        'primary-light': '#2a4aaf',
        secondary: {
          DEFAULT: '#c5a059', // Executive Gold/Bronze
          light: '#e6c88a',
          dark: '#9d7b3e',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
