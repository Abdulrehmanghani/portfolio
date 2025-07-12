/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a365d',
          light: '#2b4c7e',
          dark: '#0f2442',
        },
        secondary: {
          DEFAULT: '#2d3748',
          light: '#4a5568',
          dark: '#1a202c',
        },
        accent: {
          DEFAULT: '#4a5568',
          light: '#718096',
          dark: '#2d3748',
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};