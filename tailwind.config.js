/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-black": "#15282E",
        "custom-red": "#DA1D2D",
        "custom-hover-red": "#BA1826",
        "custom-white": "#FFFFFF",
      },
    },
  },
  plugins: [],
};
