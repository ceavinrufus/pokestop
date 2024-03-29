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
        slideInFromLeft: "slideInFromLeft 0.5s ease-out 0s 1",
        slideInFromRight: "slideInFromRight 0.5s ease-out 0s 1",
        wiggle: "wiggle 0.2s ease-in-out",
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
        wiggle: {
          "0%, 100%": {
            transform: "rotate(-3deg)",
          },
          "50%": {
            transform: "rotate(3deg)",
          },
        },
        slideInFromLeft: {
          "0%": { opacity: "0", transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideInFromRight: {
          "0%": { opacity: "0", transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
