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
				'rotate-one': 'rotate-one 200ms ease',
				'slide-l-to-r': 'slide-l-to-r 500ms ease-in',
				'slide-r-to-l': 'slide-r-to-l 500ms ease-in',
				'slide-u-to-d': 'slide-u-to-d 500ms ease-in'
			},
			keyframes: {
				'rotate-one': {
					from: { transform: 'rotate(0deg)' },
					to: { transform: 'rotate(360deg)' }
				},
				'slide-l-to-r': {
					from: { transform: 'translateX(-30%)' },
					to: { transform: 'translateX(0%)' }
				},
				'slide-r-to-l': {
					from: { transform: 'translateX(30%)' },
					to: { transform: 'translateX(0%)' }
				},
				'slide-u-to-d': {
					from: { transform: 'translateY(-30%)' },
					to: { transform: 'translateY(0%)' }
				}
			}
		}
	},
	plugins: []
};
