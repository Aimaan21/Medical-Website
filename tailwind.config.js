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
					// Violet
					50: "#72569D",
					100: "#1E144F",
					200: "#CAC2CB",
					300:"#FEEBDC"   //textColor
				},
				cardWrap: {
					
					50: "#FCFCFC",
					
				},
				// for article section
				secondary: {
					50: "#F6BFC0",//pink(article-bg)
					100: "#E4E4E4",
					200: "#F4F3F1",
					300:"#A9CAE7",
					
				}
			}
		}
	}
};