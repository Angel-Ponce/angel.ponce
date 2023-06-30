import { slate } from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				base: slate[50],
				'dark-base': slate[800]
			},
			fontFamily: {
				tajawal: "'Tajawal', sans-serif",
				lilita: "'Lilita One', cursive"
			}
		}
	},
	plugins: []
};
