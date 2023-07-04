/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'dark-base': '#000',
				primary: '#0C4160',
				secondary: '#738FA7',
				grayblue: '#C3CEDA',
				darkblue: '#071330'
			},
			fontFamily: {
				tajawal: "'Tajawal', sans-serif",
				inter: "'Inter', sans-serif;"
			},
			animation: {
				'rotate-one': 'rotate-one 200ms ease'
			},
			keyframes: {
				'rotate-one': {
					from: { transform: 'rotate(0deg)' },
					to: { transform: 'rotate(360deg)' }
				}
			}
		}
	},
	plugins: []
};
