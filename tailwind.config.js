/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 * 
 * 
 * 
 */

const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {},
  },
  plugins: [],
});

module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
    './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js',
    // "./pages/**/*.{ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("flowbite/plugin"), require("prettier-plugin-tailwindcss"),require('tw-elements/dist/plugin')],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        backgroud: {
          100: "#FEF3EA",
        },
        btn:{
         
          100:'#f3e6e1',
          200:'#f1e2dd',
          300:'#f0dfd8',
          400:'#EEDBD4',
          500:'#d6c5bf',
          600:'#beafaa',
          700:'#a79994',
          800:'#8f837f',
          900:'#776e6a',
          
        },
        primary: {
          // Violet
          //   50: "#72569D",
          //   100: "#1E144F",
          //   200: "#CAC2CB",
          //   300: "#FEEBDC", //textColor
          // for lighter violet
          50: "#f1eef5",
          100: "#e3ddeb",
          200: "#d5cce2",
          300: "#c7bbd8",
          400: "#b9abce",
          500: "#72569D",
          600: "#674d8d",
          700: "#5b457e",
          800: "#503c6e",
          900: "#392b4f",
          1000: "#392b4f",
          900: "#392b4f",
        },
        cardWrap: {
          50: "#FAFAFB",
        },
        // for article section
        secondary: {
          // for darker violet
          
          900: "#120c2f",
          800: "#150e37",
          700: "#18103f",
          600: "#1b1247",
          500: "#1E144F",
          400: "#352c61",
          300: "#4b4372",
          200: "#625b84",
          100: "#787295",
          50: "#8f8aa7"
        },
      },
    },
  },
};
