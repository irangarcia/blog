const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    listStlightyleType: {
      disc: 'disc',
    },
    extend: {
      fontFamily: {
        sans: ['"Quicksand"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        green: {
          450: '#00c58e',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
