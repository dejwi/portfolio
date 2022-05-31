module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cool: ["Inspiration", "cursive"],
        poppi: ["Poppins", "sans-serif"],
      },
      gridTemplateColumns: {
        art: "min-content min-content",
      },
    },
  },
  plugins: [],
};
