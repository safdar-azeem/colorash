import { createContext } from 'react'

interface SolidColorsContextProps {
	colorsPalette: any[]
	bgColor: string
	handleBgColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const initialSolidColorsState: SolidColorsContextProps = {
	colorsPalette: [],
	bgColor: '#FCFCFD',
	handleBgColorChange: () => {},
}

export const SolidColorsContext = createContext<SolidColorsContextProps>(initialSolidColorsState)
