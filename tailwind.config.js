module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			height: {
				'2xl': '80vh',
				'3xl': '90vh',
				'4xl': '180vh',
			},
			width: {
				'block-quote': '650px',
				card: '500px',
				'4xl': '1000px',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
