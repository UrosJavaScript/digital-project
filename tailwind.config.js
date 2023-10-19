/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryColor: 'rgb(16 185 129)',
        colorText: '#ffffff',

        lightTheme: {
          bgColor: '#eae6e6',
          hoverText: 'rgb(30 41 59)',
          fromLGradient: 'rgb(101 163 13)',
          toLGradient: 'rgb(12 74 110)',
        },

        darkTheme: {
          bgColor: 'rgb(30 41 59)',
          hoverText: 'rgb(16 185 129)',
          toLGradient: 'rgb(101 163 13)',
          fromLGradient: 'rgb(12 74 110)',
        },
      },
    },
  },
  plugins: [],
};
