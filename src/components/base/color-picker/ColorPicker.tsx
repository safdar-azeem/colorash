import { useCallback, useMemo, useRef, useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import useClickOutside from '../../../hooks/useClickOutSide'

interface ColorPickerProps {
	color: string
	handleChange?: (color: string) => void
	rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
	size?: 'xs' | 'sm' | 'md' | 'lg'
}

const ColorPicker = ({ color, handleChange, rounded = 'full', size = 'md' }: ColorPickerProps) => {
	const [colorValue, setColorValue] = useState('#e5efee')
	const popover = useRef(null)
	const [isOpen, toggle] = useState(false)

	const close = useCallback(() => toggle(false), [])
	useClickOutside(popover, close)

	useMemo(() => {
		handleChange && handleChange(colorValue)
	}, [colorValue])

	return (
		<div className='relative'>
			<button
				className={`btn px-0 mt-1 box ${size} rounded-${rounded} `}
				style={{ backgroundColor: color }}
				onClick={() => toggle(!isOpen)}></button>
			{isOpen && (
				<div
					className='absolute z-10 bottom-100 left-0 mt-2'
					ref={popover}>
					<HexColorPicker
						color={colorValue}
						onChange={setColorValue}
					/>
				</div>
			)}
		</div>
	)
}

export default ColorPicker
