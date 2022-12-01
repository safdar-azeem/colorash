import { useState } from 'react'
import ColorPicker from '../Components/Base/ColorPicker'
import Button from '../Components/Base/Forms/Button'
import Dropdown from '../Components/Base/Forms/Dropdown'
import frameOptions from '../Json/frameOpetions.json'
import { generateRandomColor } from '../Utils/generateRandomColor'

const PaletteGenerator = () => {
	const [colors, setColors] = useState(['#e5efee', '#e5efee', '#e5efee'])
	const [dropdownValue, setDropdownValue] = useState(frameOptions[0].label)

	const handleColorChange = (color: string, index: number) => {
		const newColors = [...colors]
		newColors[index] = color
		setColors(newColors)
	}

	const refreshColors = () => setColors(generateRandomColor(3))

	const handleDropdownChange = (value: string) => setDropdownValue(value)

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
								onChange={(color) => handleColorChange(color, index)}
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
