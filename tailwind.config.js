module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark_purple: "#2C2640",
        garis: "#D9D9D9"
      },
      width:{
        lg: "1024px",
        xl: "1280px"
      }
    },

  },
  variants: {
    extend: {

    },
  },
  plugins: [],
}
