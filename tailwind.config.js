/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'dark-gray': '#292f36',
				'pink-red': '#FB7185',
				primary: '#FB7185',
				'primary-hover': '#FD8295',
				black: '#080a0f',
				dark: {
					bg: '#1e222a',
					bg2: '#32353e',
					hover: '#434d60',
					text: '#F8F8F8'
				},
				light: {
					bg: '#F8F8F8',
					bg2: '#D8D8D8',
					hover: '#B6B6B6',
					text: '#242424'
				}
			},
			boxShadow: {
				solid: '5px 5px 0 0 #000000',
				'solid-lg': '10px 10px 0 0 #000000'
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif', 'system-ui']
			},
			backgroundImage: {
				'home-image': 'url("$lib/images/background.png")'
			}
		}
	},
	plugins: []
};
