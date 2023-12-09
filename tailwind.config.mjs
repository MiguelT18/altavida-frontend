/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			width: {
				navBrandLogo: "clamp(12rem, 25vw, 15rem)",
			},
			colors: {
				orange: "#FF8900",
				"steel-blue": "#4E5B6D",
				silver: "#BDC3C7",
				black: "#000000",
				dark: "#333333",
				"sky-blue": "#3498DB",
				"navy-blue": "#1B2532",
			},
			fontSize: {
				sm: "clamp(1.4rem, 3.5vw, 1.8rem)",
				md: "clamp(1.6rem, 4.2vw, 2rem)",
				lg: "clamp(1.8rem, 4.8vw, 2.4rem)",
				xl: "clamp(2.4rem, 6.4vw, 3rem)",
			},
		},
	},
	plugins: [],
};
