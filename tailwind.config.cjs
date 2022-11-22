/** @type {import('tailwindcss').Config} */

function rem(px) {
	return `${px / 16}rem`
}

module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		colors: {
			white: 'var(--theme-white)',
			black: 'var(--theme-black)',
			gray: {
				50: 'var(--theme-gray-50)',
				100: 'var(--theme-gray-100)',
				200: 'var(--theme-gray-200)',
				300: 'var(--theme-gray-300)',
				400: 'var(--theme-gray-400)',
				500: 'var(--theme-gray-500)',
				600: 'var(--theme-gray-600)',
				700: 'var(--theme-gray-700)',
				800: 'var(--theme-gray-800)',
				900: 'var(--theme-gray-900)',
			},
			customColors: {
				50: '#F4F6F7',
				100: '#EEF0F2',
				200: '#E7EBEF',
				300: '#a4a5a7',
				400: '#88898d',
				500: '#6d6e72',
				600: '#525358',
				700: '#3f4146',
				800: '#2d2f35',
				900: '#24262c',
				white: '#FCFCFD',
				black: '#1b1d23',
			},
		},
		fontSize: {
			// Base is 16px with 1.125x scaling
			'nfs-4': rem(8),
			'nfs-3': rem(10),
			'nfs-2': rem(12),
			'nfs-1': rem(14),
			'fs-0': rem(16),
			'fs-1': rem(18),
			'fs-2': rem(20),
			'fs-3': rem(22),
			'fs-4': rem(24),
			'fs-5': rem(26),
			'fs-6': rem(28),
			'fs-7': rem(30),
			'fs-8': rem(32),
			'fs-9': rem(34),
			'fs-10': rem(36),
			'fs-11': rem(38),
			'fs-12': rem(40),
			'fs-13': rem(42),
			'fs-14': rem(44),
			'fs-15': rem(46),
			'fs-16': rem(48),
			'fs-17': rem(50),
			'fs-18': rem(52),
			'fs-19': rem(54),
			'fs-20': rem(56),
		},
		fontFamily: {
			body: ['Roboto', 'sans-serif'],
			heading: ['Roboto', 'sans-serif'],
		},
	},
	plugins: [],
}
