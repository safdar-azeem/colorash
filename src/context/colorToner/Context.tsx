import { createContext } from 'react'
import { ColorMode } from '../../types/color.type'

interface ColorTonerContextProps {
	color: string
	bgColor: string
	quantity: number
	colorMode: ColorMode
	colorsPalette: any[]
	handleBgColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	handleColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	handleDropdownChange: (value: string) => void
	handleQuantityChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	handleRandom: () => void
}

export const initialColorTonerState: ColorTonerContextProps = {
	color: '#f2f3f4',
	bgColor: '#FCFCFD',
	quantity: 24,
	colorMode: 'shades',
	colorsPalette: [],
	handleBgColorChange: () => {},
	handleColorChange: () => {},
	handleDropdownChange: () => {},
	handleQuantityChange: () => {},
	handleRandom: () => {},
}

export const ColorTonerContext = createContext<ColorTonerContextProps>(initialColorTonerState)
