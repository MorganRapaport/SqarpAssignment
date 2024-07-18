export default {
  plugins: [],
  theme: {
    extend: {
      spacing: {
        15: "3.75rem", // Custom spacing for 3.75rem
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
      borderRadius: {
        48: "48px",
      },
      colors: {
        customOrange: "#F65311",
      },
    },
  },
  purge: [
    "./index.html",
    "./src/**/*.{svelte,js,ts}",
  ], // for unused CSS
  variants: {
    extend: {},
  },
  darkmode: false, // or 'media' or 'class'
};
