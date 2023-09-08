/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				xs: "320px",
			},
			colors: {
				primary: "#173f6c",
			},
		},
	},
	plugins: [],
}
