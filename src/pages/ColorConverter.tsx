import React, { useState } from 'react'
import ColorPicker from '../components/base/color-picker/ColorPicker'
import Input from '../components/base/form/Input'
import ColorCodeList from '../components/colorConvert/ColorCodeList'

const ColorConverter = () => {
	const [color, setColor] = useState<string>('#285245')

	const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target
		setColor(value)
	}

	return (
		<div className='flex gap-10'>
			<aside className=' flex-1 '>
				<div className='mb-8 flex gap-x-4'>
					<Input
						label='Color'
						value={color}
						className='w-[370px]'
						onChange={handleColorChange}
						rightSlot={
							<ColorPicker
								color={color}
								value
								saturation
								box
								hue
								onChange={(color) => setColor(color)}
								size='xs'
							/>
						}
					/>
				</div>
				<ColorCodeList color={color} />
			</aside>
			<div
				className='w-[320px] mt-4 rounded-lg h-[400px]'
				style={{
					backgroundColor: color,
				}}
			/>
		</div>
	)
}

export default ColorConverter
