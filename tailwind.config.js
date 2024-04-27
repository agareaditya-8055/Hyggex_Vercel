/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        nav_text: "#3A3740",
        categories_text: "#696671",
        linear_blue_1: "#06286E",
        linear_blue_2: "#164EC0",
      },
    },
  },
  plugins: [],
};
