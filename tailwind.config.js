module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'unique1': '#581C2B',
        'unique2': '#E4F0FF',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}