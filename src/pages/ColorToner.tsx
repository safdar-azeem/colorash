import { colord, random } from 'colord'
import { useEffect, useMemo, useState } from 'react'
import ColorPicker from '../components/base/color-picker/ColorPicker'
import ColorList from '../components/base/ColorList'
import Button from '../components/base/form/Button'
import Dropdown from '../components/base/form/Dropdown'
import Input from '../components/base/form/Input'
import ExportColorModal from '../components/colorToner/ExportColorModal'
import colorModeOptions from '../json/colorMode.json'
import { ColorMode } from '../types/color.type'

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
		document.body.style.color = isLight || bgColor === 'transparent' ? '#000' : '#fff'

		return () => {
			document.body.style.backgroundColor = ''
			document.body.style.color = ''
		}
	}, [bgColor])

	const colorsPalette: any[] = useMemo(() => {
		const baseColor = colord(color)
		if (colorMode === 'tints') return baseColor.tints(quantity)
		if (colorMode === 'shades') return baseColor.shades(quantity)
		return baseColor.tones(quantity)
	}, [color, quantity, colorMode])

	console.log('colorsPalette', colorsPalette)

	return (
		<div>
			<div className='mb-10 flex gap-x-4'>
				<Input
					label='Background'
					value={bgColor}
					className='w-[170px]'
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
						/>
					}
				/>
				<Input
					label='Colour'
					value={color}
					className='w-[270px]'
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
					minButtonWidth={170}
				/>
				<Input
					type='number'
					label='Quantity'
					value={quantity}
					min={2}
					max={100}
					className='w-[100px]'
					onChange={handleQuantityChange}
				/>
				<Button
					leftIcon='charm:download'
					label='Export'
					htmlFor='export-color-modal'
				/>
			</div>
			<ColorList colorsPalette={colorsPalette} />
			<ExportColorModal colorsPalette={colorsPalette} />
		</div>
	)
}

export default ColorToner
