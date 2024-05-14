/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
	theme: {
		container: {
			center: true,
			padding: "1rem",
		},
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1200px",
			"2xl": "1280px",
		},
		fontFamily: {
			inter: ["Inter", "sans-serif"],
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			white: {
				DEFAULT: "#ffffff",
				light: "#EAECF0",
				dark: "#F9FAFB",
			},
			black: {
				DEFAULT: "#101828",
				light: "#475467",
				dark: "#0C111D",
			},
			primary: "#A6192E",
			secondary: "#7B61FF",
		},
		extend: {},
	},
};