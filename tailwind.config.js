const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  // purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      green: colors.emerald,
      gray: colors.coolGray,
      yellow: colors.amber,
    },

    maxHeight: {
      selectElement: '617px',
    },

    extend: {
      inset: {
        '-03': '-0.3rem',
      },
      boxShadow: {
        'inner-2': 'inset 0 0 0 0.1rem rgba(52, 211, 153, 0.9)',
        'inner-3': 'inset 0 0 0 0.3rem rgba(52, 211, 153, 0.9)',
      },
      margin: {
        '-0.37': '-0.37rem',
        '3po': '3.5rem',
      },
      backgroundImage: (theme) => ({
        'covid-pattern': "url('/img/covid-pattern.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
