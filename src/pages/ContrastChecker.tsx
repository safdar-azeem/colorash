import { colord } from 'colord'
import { lazy, useMemo, useState } from 'react'
import Input from '../components/base/forms/Input'
import AppContent from '../layout/AppContent'
import AppHeader from '../layout/AppHeader'
import InputGroup from '../layout/InputGroup'
const ColorPicker = lazy(() => import('../components/base/ColorPicker'))
const ContrastTemplateExample = lazy(
	() => import('../components/contrastChecker/ContrastTemplateExample')
)
const ContrastInfo = lazy(() => import('../components/contrastChecker/ContrastInfo'))

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
			<AppHeader>
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
								size='xs'
								direction='left'
								onChange={(color) => setBgColor(color)}
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
								size='xs'
								direction='left'
								onChange={(color) => setColor(color)}
							/>
						}
					/>
				</InputGroup>
			</AppHeader>
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
