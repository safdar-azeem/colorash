import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppRoutes } from '../../constants/routes.constants'
import { Frame } from '../../jsons/frameOpetions.json'
import templates from '../../templates'
import { generateRandomColor } from '../../utils/generateRandomColor'
import { checkIsAlreadySaved, savePalette } from '../../utils/savePalettes'
import { PaletteGeneratorContext } from './Context'

export const PaletteGeneratorProvider = ({ children }: { children: React.ReactNode }) => {
	const navigate = useNavigate()
	const { '*': params } = useParams()

	const [isAlreadySaved, setIsAlreadySaved] = useState(false)

	const { frame, index, frameColors } = useMemo(() => {
		const [frame, index, colors] = params?.split('/') || []
		const frameColors = colors ? colors?.split('-').map((color) => `#${color}`) : []
		// @ts-ignore
		setIsAlreadySaved(checkIsAlreadySaved({ frame, colors: frameColors, index }))
		return { frame, index, frameColors }
	}, [params])

	const [currentFrame, setCurrentFrame] = useState<Frame>((frame as Frame) || 'Website')
	const [currentFrameIndex, setCurrentFrameIndex] = useState(Number(index) || 0)
	const [colors, setColors] = useState(
		frameColors.length ? frameColors : templates[currentFrame][currentFrameIndex].colors
	)

	const totalTemplates = useMemo(() => Object.keys(templates[currentFrame]).length, [currentFrame])

	const template = useMemo(() => {
		return templates[currentFrame][currentFrameIndex]
	}, [currentFrame, currentFrameIndex])

	const handleFrameIndexChange = (index: number) => {
		if (index >= 0 && index <= totalTemplates) {
			setCurrentFrameIndex(index)
			setColors(templates[currentFrame][index].colors)
		}
	}

	const handleColorChange = (color: string, index: number) => {
		const newColors = [...colors]
		newColors[index] = color
		setColors(newColors)
	}

	const refreshColors = () => setColors(generateRandomColor(colors.length, colors))

	const handleFrameChange = (value: string) => setCurrentFrame(value as Frame)

	const handleSave = () => {
		setIsAlreadySaved(
			savePalette({
				frame: currentFrame,
				index: currentFrameIndex,
				colors,
			})
		)
	}

	useEffect(() => {
		navigate(
			`${AppRoutes.PaletteGenerator}/${currentFrame}/${currentFrameIndex}/${colors
				.join('-')
				.replaceAll('#', '')}`
		)
	}, [currentFrame, currentFrameIndex, colors])

	return (
		<PaletteGeneratorContext.Provider
			value={{
				currentFrame,
				currentFrameIndex,
				template,
				totalTemplates,
				colors,
				handleFrameIndexChange,
				handleColorChange,
				refreshColors,
				handleFrameChange,
				handleSave,
				isAlreadySaved,
			}}>
			{children}
		</PaletteGeneratorContext.Provider>
	)
}

export default PaletteGeneratorProvider
