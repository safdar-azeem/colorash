import React, { useState } from 'react'
import ColorPicker from '../Components/Base/ColorPicker'
import Input from '../Components/Base/Forms/Input'
import AppContent from '../Layout/AppContent'
import InputGroup from '../Layout/InputGroup'
import ColorCodeList from '../Components/ColorConvert/ColorCodeList'
import AppHeader from '../Layout/AppHeader'

const ColorConverter = () => {
	const [color, setColor] = useState<string>('#285245')

	const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target
		setColor(value)
	}

	return (
		<>
			<AppHeader>
				<InputGroup>
					<Input
						label='Color'
						value={color}
						onChange={handleColorChange}
						rightSlot={
							<ColorPicker
								color={color}
								value
								saturation
								box
								hue
								size='xs'
								direction='left'
								onChange={(color) => setColor(color)}
							/>
						}
					/>
				</InputGroup>
			</AppHeader>
			<AppContent className='flex flex-col md:flex-row gap-x-10'>
				<div className='flex-1'>
					<ColorCodeList color={color} />
				</div>
				<div
					className='w-[340px] hidden md:flex rounded-lg h-[400px]'
					style={{
						backgroundColor: color,
					}}
				/>
			</AppContent>
		</>
	)
}

export default ColorConverter
