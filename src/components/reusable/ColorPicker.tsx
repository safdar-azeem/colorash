import iro from '@jaames/iro'
import { colord } from 'colord'
import { useEffect, useMemo, useRef, useState } from 'react'
import { TRadius, TSize } from '../../types/tailwind.types'
import { generateRandomColor } from '../../utils/generateRandomColor'
import Button from './forms/Button'
import Dropdown from './forms/Dropdown'

interface ColorPickerProps {
	color: string
	rounded?: TRadius
	size?: TSize
	box?: boolean
	hue?: boolean
	saturation?: boolean
	value?: boolean
	alpha?: boolean
	withRandomBtn?: boolean
	onChange?: (color: string) => void
	onClose?: () => void
	onOpen?: () => void
	button?: JSX.Element
	direction?: 'left' | 'end' | 'right' | 'none'
}

const ColorPicker = ({
	color,
	onChange,
	rounded = 'full',
	size = 'xs',
	direction = 'right',
	withRandomBtn = false,
	box,
	hue,
	saturation,
	value,
	alpha,
	button,
	onClose,
	onOpen,
}: ColorPickerProps) => {
	const ref = useRef(null)
	var colorPicker = useRef(null)
	const [isOpen, setIsOpen] = useState(false)
	const [colorValue, setColorValue] = useState(color || '#e5efee')

	useMemo(() => {
		onChange && onChange(colorValue)
	}, [colorValue])

	useEffect(() => {
		if (!ref.current) return
		let layoutOptions = []
		if (box) {
			layoutOptions.push({
				component: iro.ui.Box,
			})
		}
		if (hue) {
			layoutOptions.push({
				component: iro.ui.Slider,
				options: {
					sliderType: 'hue',
				},
			})
		}

		if (saturation) {
			layoutOptions.push({
				component: iro.ui.Slider,
				options: {
					sliderType: 'saturation',
				},
			})
		}

		if (value) {
			layoutOptions.push({
				component: iro.ui.Slider,
				options: {
					sliderType: 'value',
				},
			})
		}

		if (alpha) {
			layoutOptions.push({
				component: iro.ui.Slider,
				options: {
					sliderType: 'alpha',
				},
			})
		}
		// @ts-ignore
		const cp = (colorPicker.current = new iro.ColorPicker(ref.current, {
			width: 180,
			color: color,
			margin: 8,
			boxHeight: 140,
			sliderSize: 16,
			layout: layoutOptions,
		}))
		cp.on('color:change', (color: any) => {
			const colorFormat = color.$.a !== 1 ? 'hsla' : 'hex'
			const colorValue = colorFormat === 'hsla' ? color.hslaString : color.hexString
			setColorValue(colord(colorValue).toHex())
		})
	}, [isOpen])

	return (
		<Dropdown
			onClose={onClose}
			onOpen={onOpen}
			tabIndex={0}
			button={
				button ? (
					<label onClick={() => setIsOpen(!isOpen)}>{button}</label>
				) : (
					<button
						className={`btn px-0 mt-1 box ${size} rounded-${rounded} `}
						style={{ backgroundColor: color }}
						onClick={() => setIsOpen(!isOpen)}></button>
				)
			}
			children={
				<div className='shadow-lg p-3 border border-gray-100 bg-white w-max rounded-xl mt-2 flex flex-col gap-y-4'>
					<div
						id='picker'
						ref={ref}
					/>
					{withRandomBtn && (
						<Button
							fullWidth
							size='sm'
							leftIcon='charm:refresh'
							iconColor='text-gray-600'
							iconSize='text-fs-5'
							onClick={() => {
								onChange && onChange(generateRandomColor(1)[0])
								if (colorPicker.current)
									// @ts-ignore
									colorPicker.current.color.hexString = generateRandomColor(1)[0]
							}}
						/>
					)}
				</div>
			}
			directionY='bottom'
			directionX={direction}
		/>
	)
}

export default ColorPicker
