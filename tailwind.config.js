/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
		'*.html'
	],
  theme: {
    extend: {
			fontFamily: {
				'sans': ['"Inter"', ...defaultTheme.fontFamily.sans],
				'cabinet-grotesk' : "'Cabinet Grotesk', sans-serif"
			}
		},
  },
	// darkMode: 'false',
  plugins: [
		require("daisyui")
	],
	daisyui: {
    themes: ['business'],
  },
}

