import { colord, random } from 'colord'
import { useEffect } from 'react'
import ColorPicker from '../components/base/color-picker/ColorPicker'
import Button from '../components/base/form/Button'
import Dropdown from '../components/base/form/Dropdown'
import Input from '../components/base/form/Input'
import ColorTones from '../components/colorToner/ColorTones'
import { useAppDispatch, useAppSelector } from '../hooks/store'
import colorModeOptions from '../json/colorMode.json'
import {
	setBackgroundColor,
	setColor,
	setMode,
	setQuantity,
} from '../store/slices/colorToner.slice'
import { ColorMode } from '../types/color.type'

const ColorToner = () => {
	const dispatch = useAppDispatch()
	const { color, backgroundColor, mode, quantity } = useAppSelector((state) => state.colorToner)

	const handleBgColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target
		dispatch(setBackgroundColor(value))
	}

	const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target
		dispatch(setColor(value))
	}

	const handleDropdownChange = (value: string) => {
		dispatch(setMode(value as ColorMode))
	}

	const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target
		dispatch(setQuantity(parseInt(value)))
	}

	const handleRandom = () => dispatch(setColor(random().toHex()))
	const isLight = colord(backgroundColor).isLight()

	useEffect(() => {
		document.body.style.backgroundColor = backgroundColor
		document.body.style.color = isLight ? '#000' : '#fff'

		return () => {
			document.body.style.backgroundColor = ''
			document.body.style.color = ''
		}
	}, [backgroundColor])

	return (
		<div>
			<div className='mb-10 flex gap-x-4'>
				<Input
					label='Background'
					value={backgroundColor}
					className='w-[170px]'
					onChange={handleBgColorChange}
					leftSlot={
						<ColorPicker
							color={backgroundColor}
							handleChange={(color) => dispatch(setBackgroundColor(color))}
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
							handleChange={(color) => dispatch(setColor(color))}
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
					value={mode}
					onChange={handleDropdownChange}
					minButtonWidth={170}
				/>
				<Input
					type='number'
					label='Quantity'
					value={quantity}
					min={2}
					className='w-[100px]'
					onChange={handleQuantityChange}
				/>
			</div>
			<ColorTones />
		</div>
	)
}

export default ColorToner
