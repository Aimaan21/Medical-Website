/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
	// "./pages/**/*.{ts,tsx}", 
	"./components/**/*.{js,ts,jsx,tsx}"
  ],
  plugins: [
    require("flowbite/plugin")
  ],
  theme: {

	    container:{
         center:true
		},
		extend: {
			colors: {
				backgroud:{
					100:"#FEF3EA"
				},
				primary: {
					// Violoet
					50: "#1E144F",
					100: "#72569D",
					200: "#CAC2CB",
					300:"#FEEBDC"   //textColor
				},
				cardWrap: {
					// Violoet
					50: "#FCFCFC",
					
				},
				// GoldLime
				secondary: {
					50: "#f7f7ee",
					100: "#e7e7cb",
					200: "#d6d7a8",
					300: "#c6c785",
					400: "#b6b762",
					500: "#9c9d48",
					600: "#7a7a38",
					700: "#575728",
					800: "#343418",
					900: "#111108",
				}
			}
		}
	}
};