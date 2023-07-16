/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        //white: "#8f9197",
        primary: "#fafafa",
        secondary: "#000000",        
      },
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
      },
    },
  },

}
