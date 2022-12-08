import { createContext } from 'react'
import { Frame } from '../../jsons/frameOpetions.json'

interface PaletteGeneratorContextProps {
	currentFrame: Frame
	currentFrameIndex: number
	colors: string[]
	template: any
	totalTemplates: number
	handleFrameIndexChange: (index: number) => void
	handleColorChange: (color: string, index: number) => void
	refreshColors: () => void
	handleFrameChange: (frame: Frame) => void
	handleSave: () => void
	isAlreadySaved: boolean
}

const initialContext: PaletteGeneratorContextProps = {
	currentFrame: 'Website',
	currentFrameIndex: 0,
	colors: [],
	template: {},
	totalTemplates: 0,
	handleFrameIndexChange: () => {},
	handleColorChange: () => {},
	refreshColors: () => {},
	handleFrameChange: () => {},
	handleSave: () => {},
	isAlreadySaved: false,
}

export const PaletteGeneratorContext = createContext<PaletteGeneratorContextProps>(initialContext)
