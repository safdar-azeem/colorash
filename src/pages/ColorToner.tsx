import { colord, random } from 'colord'
import { useEffect, useMemo, useState } from 'react'
import ColorList from '../Components/Base/ColorList'
import ColorPicker from '../Components/Base/ColorPicker'
import Button from '../Components/Base/Forms/Button'
import Dropdown from '../Components/Base/Forms/Dropdown'
import Input from '../Components/Base/Forms/Input'
import ExportColorModal from '../Components/ColorToner/ExportColorModal'
import colorModeOptions from '../Json/colorMode.json'
import AppContent from '../Layout/AppContent'
import AppHeader from '../Layout/AppHeader'
import InputGroup from '../Layout/InputGroup'
import { ColorMode } from '../Types/color.type'

const ColorToner = () => {
	const [color, setColor] = useState<string>('#f2f3f4')
	const [bgColor, setBgColor] = useState('#FCFCFD')
	const [quantity, setQuantity] = useState(24)
	const [colorMode, setColorMode] = useState<ColorMode>('shades')

	const handleBgColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target
		setBgColor(value)
	}

	const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target
		setColor(value)
	}

	const handleDropdownChange = (value: string) => {
		setColorMode(value as ColorMode)
	}

	const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target
		if (parseInt(value) > 100 || parseInt(value) < 2) return
		setQuantity(parseInt(value))
	}

	const handleRandom = () => setColor(random().toHex())

	const isLight = colord(bgColor).isLight()

	useEffect(() => {
		document.body.style.backgroundColor = bgColor
		return () => {
			document.body.style.backgroundColor = ''
		}
	}, [bgColor])

	const colorsPalette: any[] = useMemo(() => {
		const baseColor = colord(color)
		if (colorMode === 'tints') return baseColor.tints(quantity)
		if (colorMode === 'shades') return baseColor.shades(quantity)
		return baseColor.tones(quantity)
	}, [color, quantity, colorMode])

	return (
		<>
			<AppHeader>
				<InputGroup minWidth={185}>
					<Input
						label='Background'
						value={bgColor}
						onChange={handleBgColorChange}
						leftSlot={
							<ColorPicker
								color={bgColor}
								value
								saturation
								box
								hue
								onChange={(color) => setBgColor(color)}
								size='xs'
								direction='none'
							/>
						}
					/>
					<Input
						label='Colour'
						value={color}
						onChange={handleColorChange}
						leftSlot={
							<ColorPicker
								color={color}
								value
								saturation
								box
								hue
								onChange={(color) => setColor(color)}
								size='xs'
								direction='none'
							/>
						}
						rightSlot={
							<Button
								leftIcon='charm:refresh'
								variant='ghost'
								size='sm'
								onClick={handleRandom}
							/>
						}
					/>
					<Dropdown
						label='Mode'
						withIcon
						variant='outline'
						options={colorModeOptions}
						value={colorMode}
						onChange={handleDropdownChange}
						minButtonWidth='100%'
					/>
					<Input
						type='number'
						label='Quantity'
						value={quantity}
						min={2}
						max={100}
						onChange={handleQuantityChange}
					/>
					<Button
						leftIcon='charm:download'
						label='Export'
						htmlFor='export-color-modal'
					/>
				</InputGroup>
			</AppHeader>
			<AppContent>
				<ColorList colorsPalette={colorsPalette} />
				<ExportColorModal
					colorsPalette={colorsPalette}
					generateColorFor='tones'
				/>
			</AppContent>
		</>
	)
}

export default ColorToner
