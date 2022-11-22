import type { MantineTheme, MantineThemeOverride } from '@mantine/core'

const theme: MantineThemeOverride = {
	components: {
		Button: {
			defaultProps: {
				size: 'md',
				styles: () => ({
					root: {
						fontWeight: 500,
					},
				}),
			},
		},
		Input: {
			defaultProps: {
				size: 'md',
			},
			styles: (theme: MantineTheme) => ({
				input: {
					borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
				},
			}),
		},
		InputWrapper: {
			classNames: {
				label: 'mb-1 text-[15px]',
				error: 'mt-2 text-[15px]',
				required: 'text-black',
			},
		},
		Avatar: {
			defaultProps: {
				size: 'md',
				radius: 'xl',
			},
			classNames: {
				placeholder: 'bg-gray-100',
				placeholderIcon: 'text-gray-400',
			},
		},
		Container: {
			defaultProps: {
				px: 24,
				sizes: {
					xs: 540,
					sm: 720,
					md: 960,
					lg: 1240,
					xl: 1380,
				},
			},
		},
		NavLink: {
			classNames: {
				icon: 'text-fs-3 -mt-1',
			},
		},
	},
	radius: {
		xl: 500,
	},
	colors: {
		green: [
			'#ECF9F8',
			'#C9EDEC',
			'#A6E2DF',
			'#84D7D3',
			'#61CCC7',
			'#3FC0BA',
			'#287B77',
			'#20625f',
			'#1c5653',
			'#143e3c',
		],
		gray: [
			'#F4F6F7',
			'#EEF0F2',
			'#dbdddf',
			'#a4a5a7',
			'#88898d',
			'#6d6e72',
			'#525358',
			'#3f4146',
			'#2d2f35',
			'#24262c',
		],
	},
	white: '#FCFCFD',
	primaryColor: 'green',
	fontSizes: {
		xs: 12,
		sm: 14,
		md: 16,
		lg: 18,
		xl: 22,
	},
	headings: {
		sizes: {
			h1: { fontWeight: 800, fontSize: 50 },
			h2: { fontWeight: 800, fontSize: 40 },
			h3: { fontWeight: 800, fontSize: 30 },
			h4: { fontWeight: 700, fontSize: 25 },
			h5: { fontWeight: 600, fontSize: 20 },
			h6: { fontWeight: 600, fontSize: 16 },
		},
	},
	fontFamily: 'Roboto, sans-serif',
	defaultRadius: 6,
}

export default theme
