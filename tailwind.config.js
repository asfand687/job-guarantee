module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			height: {
				'2xl': '90vh',
			},
			width: {
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
