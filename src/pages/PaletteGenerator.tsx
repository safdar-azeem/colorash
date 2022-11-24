import { useState } from 'react'
import ColorPicker from '../components/base/color-picker/ColorPicker'
import Button from '../components/base/form/Button'

const PaletteGenerator = () => {
	const [colors, setColors] = useState(['#e5efee', '#e5efee', '#e5efee'])

	const handleColorChange = (color: string, index: number) => {
		const newColors = [...colors]
		newColors[index] = color
		setColors(newColors)
	}

	const refreshColors = () => {
		const newColors = colors.map(() => '#' + Math.floor(Math.random() * 16777215).toString(16))
		setColors(newColors)
	}

	return (
		<div className='mb-20 flex items-stretch gap-4'>
			<Button
				variant='outline'
				leftIcon='radix-icons:color-wheel'
				iconSize='text-fs-4'
			/>
			<section className='border-base-300 border flex items-center px-3 gap-x-3 rounded-md py-2 h-[45px] text-gray-200'>
				<Button
					variant='ghost'
					size='sm'
					leftIcon='charm:refresh'
					iconColor='text-gray-600'
					onClick={refreshColors}
				/>
				{colors.map((color, index) => (
					<ColorPicker
						key={index}
						color={color}
						size='xs'
						handleChange={(color) => handleColorChange(color, index)}
					/>
				))}
				<Button
					variant='ghost'
					size='sm'
					leftIcon='charm:download'
					iconColor='text-gray-600'
					iconSize='text-fs-4'
				/>
				<Button
					variant='ghost'
					size='sm'
					leftIcon='mdi:cards-heart-outline'
					iconColor='text-gray-600'
					iconSize='text-fs-4'
				/>
			</section>
		</div>
	)
}

export default PaletteGenerator
