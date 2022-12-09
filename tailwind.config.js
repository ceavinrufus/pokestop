/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "425px",
      },
      fontFamily: {
        Pokemon: "PocketMonk",
        BreeSerif: "BreeSerif",
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translatey(5%)",
          },
          "50%": {
            transform: "translatey(0px)",
          },
        },
      },
    },
  },
  plugins: [],
};
