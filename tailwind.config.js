/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'dark-gray': '#292f36',
				'pink-red': '#fb7185'
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif', 'system-ui']
			}
		}
	},
	plugins: []
};
