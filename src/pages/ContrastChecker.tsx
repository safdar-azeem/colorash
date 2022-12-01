import { colord } from 'colord'
import { useMemo, useState } from 'react'
import ColorPicker from '../components/base/color-picker/ColorPicker'
import Input from '../components/base/form/Input'
import AppContent from '../layout/AppContent'
import InputGroup from '../layout/InputGroup'
import ContrastInfo from '../components/contrastChecker/ContrastInfo'
import ContrastTemplateExample from '../components/contrastChecker/ContrastTemplateExample'

const ContrastChecker = () => {
	const [color, setColor] = useState<string>('#000000')
	const [bgColor, setBgColor] = useState('#F1EEE5')

	const handleBgColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target
		setBgColor(value)
	}

	const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target
		setColor(value)
	}

	const largeTextColor = useMemo(() => colord(color).toHex(), [color])
	const normalTextColor = useMemo(() => colord(color).lighten(0.2).toHex(), [color])
	const iconTextColor = useMemo(() => colord(color).lighten(0.3).toHex(), [color])

	return (
		<>
			<InputGroup>
				<Input
					label='Background'
					value={bgColor}
					onChange={handleBgColorChange}
					rightSlot={
						<ColorPicker
							color={bgColor}
							value
							saturation
							box
							hue
							onChange={(color) => setBgColor(color)}
							size='xs'
						/>
					}
				/>
				<Input
					label='Foreground'
					value={color}
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
			</InputGroup>
			<AppContent className='grid grid-cols-1 md:grid-cols-2 gap-10'>
				<ContrastInfo
					bgColor={bgColor}
					largeTextColor={largeTextColor}
					normalTextColor={normalTextColor}
					iconTextColor={iconTextColor}
				/>
				<ContrastTemplateExample
					color={color}
					bgColor={bgColor}
					largeTextColor={largeTextColor}
					normalTextColor={normalTextColor}
					iconTextColor={iconTextColor}
				/>
			</AppContent>
		</>
	)
}

export default ContrastChecker
