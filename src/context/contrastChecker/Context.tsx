import { createContext } from 'react'

interface ContrastCheckerContextProps {
	bgColor: string
	color: string
	largeTextColor: string
	normalTextColor: string
	iconTextColor: string
	handleBgColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	handleColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const initialContrastCheckerState: ContrastCheckerContextProps = {
	bgColor: '#F1EEE5',
	color: '#000000',
	largeTextColor: '#000000',
	normalTextColor: '#000000',
	iconTextColor: '#000000',
	handleBgColorChange: () => {},
	handleColorChange: () => {},
}

export const ContrastCheckerContext = createContext<ContrastCheckerContextProps>(
	initialContrastCheckerState
)
