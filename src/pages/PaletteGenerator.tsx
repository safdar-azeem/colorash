import { useState } from 'react'
import ColorPicker from '../components/base/color-picker/ColorPicker'
import Button from '../components/base/form/Button'
import Dropdown from '../components/base/form/Dropdown'
import frameOptions from '../json/frameOpetions.json'

const PaletteGenerator = () => {
	const [colors, setColors] = useState(['#e5efee', '#e5efee', '#e5efee'])
	const [dropdownValue, setDropdownValue] = useState(frameOptions[0].label)

	const handleColorChange = (color: string, index: number) => {
		const newColors = [...colors]
		newColors[index] = color
		setColors(newColors)
	}

	const refreshColors = () => {
		const newColors = colors.map(() => '#' + Math.floor(Math.random() * 16777215).toString(16))
		setColors(newColors)
	}

	const handleDropdownChange = (value: string) => {
		setDropdownValue(value)
	}

	return (
		<div>
			<div className='mb-20 flex gap-4'>
				<Button
					variant='outline'
					leftIcon='radix-icons:color-wheel'
					iconSize='text-fs-4'
					label='Wheel'
				/>
				<div>
					<label className='label'>Color Palette</label>
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
				<Dropdown
					label='Select Frame'
					withIcon
					variant='outline'
					options={frameOptions}
					value={dropdownValue}
					onChange={handleDropdownChange}
					minButtonWidth={170}
				/>
			</div>
		</div>
	)
}

export default PaletteGenerator
