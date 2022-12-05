import { useEffect, useMemo, useState } from 'react'
import ColorPicker from '../Components/Base/ColorPicker'
import Button from '../Components/Base/Forms/Button'
import Dropdown from '../Components/Base/Forms/Dropdown'
import templates from '../templates/'
import frameOptions, { Frame } from '../Json/frameOpetions.json'
import AppContent from '../Layout/AppContent'
import { generateRandomColor } from '../Utils/generateRandomColor'
import { useNavigate, useParams } from 'react-router-dom'
import { checkIsAlreadySaved, savePalette } from '../Utils/savePalettes'
import InputGroup from '../Layout/InputGroup'
import { AppRoutes } from '../Constants/routes.constants'
import ExportColorModal from '../Components/ColorToner/ExportColorModal'
import AppHeader from '../Layout/AppHeader'

const PaletteGenerator = () => {
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

	const totalFrameTemplates = useMemo(
		() => Object.keys(templates[currentFrame]).length,
		[currentFrame]
	)

	const template = useMemo(() => {
		return templates[currentFrame][currentFrameIndex]
	}, [currentFrame, currentFrameIndex])

	const handleFrameIndexChange = (index: number) => {
		if (index >= 0 && index <= totalFrameTemplates) {
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
		<div>
			<AppHeader>
				<InputGroup minWidth={250}>
					<div className='w-full'>
						<label className='label'>Color Palette</label>
						<section className='border-base-300 border flex justify-between items-center px-3 gap-x-3 rounded-md py-2 h-[45px] text-gray-200'>
							<Button
								variant='ghost'
								size='sm'
								leftIcon='charm:refresh'
								iconColor='text-gray-600'
								onClick={refreshColors}
								iconSize='text-fs-5'
							/>
							{colors.map((color, index) => (
								<ColorPicker
									key={index}
									color={color}
									size='xs'
									value
									saturation
									box
									hue
									withRandomBtn
									direction='none'
									onChange={(color) => handleColorChange(color, index)}
								/>
							))}
							<Button
								variant='ghost'
								size='sm'
								leftIcon='charm:download'
								iconColor='text-gray-600'
								htmlFor='export-color-modal'
							/>
							<Button
								variant='ghost'
								size='sm'
								leftIcon={isAlreadySaved ? 'mdi:cards-heart' : 'mdi:cards-heart-outline'}
								iconColor='text-gray-600'
								onClick={handleSave}
							/>
						</section>
					</div>
					<Dropdown
						label='Select Frame'
						withIcon
						variant='outline'
						options={frameOptions}
						value={currentFrame}
						onChange={handleFrameChange}
						minButtonWidth={200}
					/>
				</InputGroup>
			</AppHeader>
			<AppContent className='mt-0'>
				<section className='flex justify-end gap-x-3'>
					<Button
						leftIcon='material-symbols:chevron-left-rounded'
						iconSize='xl'
						size='sm'
						isCircle
						disabled={currentFrameIndex === 0}
						onClick={() => handleFrameIndexChange(currentFrameIndex - 1)}
					/>
					<Button
						leftIcon='material-symbols:chevron-right-rounded'
						iconSize='xl'
						size='sm'
						isCircle
						disabled={currentFrameIndex === totalFrameTemplates - 1}
						onClick={() => handleFrameIndexChange(currentFrameIndex + 1)}
					/>
				</section>
				<AppContent
					className='grid zoomIn mt-3 resize overflow-auto place-items-center px-8 py-10  border border-gray-100 rounded-[30px]'
					style={{
						backgroundColor: template.backDropColor,
					}}>
					{template.component({
						colors,
					})}
				</AppContent>
			</AppContent>
			<ExportColorModal
				colorsPalette={colors}
				generateColorFor='palette'
			/>
		</div>
	)
}

export default PaletteGenerator
