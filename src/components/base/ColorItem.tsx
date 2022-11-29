import { Icon } from '@iconify/react'
import { colord } from 'colord'
import { useEffect, useMemo, useState } from 'react'
import { useAppDispatch } from '../../hooks/store'
import { addToast } from '../../store/slices/toast.slice'
import { TRadius } from '../../types/tailwind.types'
import ColorPicker from './color-picker/ColorPicker'
import Button from './form/Button'
import Dropdown from './form/Dropdown'

interface ColorItemProps {
	color: any
	radius?: TRadius
}

const ColorItem = ({ color, radius }: ColorItemProps) => {
	const dispatch = useAppDispatch()

	const parsedColor = useMemo(() => {
		const isObj = typeof color === 'object'
		let colorValue = isObj ? color.parsed : color
		return colord(colorValue).toHex()
	}, [color])

	const [colorValue, setColorValue] = useState(parsedColor)
	const [selectedColorCode, setSelectedColorCode] = useState('')
	const [isDropdownOpen, setIsDropdownOpen] = useState(false)
	const [isHover, setIsHover] = useState(false)

	const isColorLight = useMemo(() => colord(colorValue).isLight(), [colorValue])

	const copyToClipboard = (value?: string) => {
		navigator.clipboard.writeText(value || colorValue)
		dispatch(addToast(`${value || colorValue} copied to clipboard`))
	}

	const colorCodes = useMemo((): string[] => {
		const hex = colord(colorValue).toHex()
		const rgb = colord(colorValue).toRgbString()
		const hsl = colord(colorValue).toHslString()
		const hsv = colord(colorValue).toHsv()
		const name = colord(colorValue).toName({ closest: true }) || 'N/A'
		return [hex, rgb, hsl, `hsv(${hsv.h}, ${hsv.s}%, ${hsv.v}%)`, name]
	}, [colorValue])

	useEffect(() => {
		selectedColorCode && copyToClipboard(selectedColorCode)
	}, [selectedColorCode])

	return (
		<div
			className={`rounded-${radius} p-2 fadeIn h-[125px] text-nfs-1}`}
			style={{
				backgroundColor: colorValue,
				zIndex: isDropdownOpen ? 10 : 0,
			}}
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}>
			<div
				className={`h-full w-full ${
					!isHover && ' invisible'
				} flex  justify-center items-center gap-2  `}>
				<ColorPicker
					color={colorValue}
					value
					saturation
					onChange={(color) => setColorValue(color)}
					setIsDropdownOpen={setIsDropdownOpen}
					button={
						<Icon
							icon='codicon:color-mode'
							className={`text-${isColorLight ? 'black' : 'white'} text-fs-5 mt-1 cursor-pointer `}
							width={20}
							height={20}
						/>
					}
				/>
				<Button
					variant='ghost'
					iconColor={`text-${isColorLight ? 'black' : 'white'}`}
					rightIcon='material-symbols:content-copy'
					onClick={copyToClipboard}
					iconSize='text-fs-5'
				/>
				<Dropdown
					children={
						<ColorCodes
							colorCodes={colorCodes}
							setSelectedColorCode={setSelectedColorCode}
						/>
					}
					setIsDropdownOpen={setIsDropdownOpen}
					button={
						<Icon
							icon='charm:code'
							className={`icon lg mt-1 cursor-pointer  text-${isColorLight ? 'black' : 'white'}`}
							width={20}
							height={20}
						/>
					}
				/>
			</div>
		</div>
	)
}

const ColorCodes = ({
	colorCodes,
	setSelectedColorCode,
}: {
	colorCodes: string[]
	setSelectedColorCode: (color: string) => void
}) => {
	return (
		<ul
			className='dropdown-content menu bg-white rounded-lg p-2'
			style={{ width: 'max-content' }}>
			{colorCodes.map((option, index) => (
				<li key={index}>
					<a className=' flex justify-between gap-x-5 '>
						{option}
						<Icon
							icon='material-symbols:content-copy'
							className='icon icon-lg text-gray-600 '
							onClick={() => setSelectedColorCode(option)}
						/>
					</a>
				</li>
			))}
		</ul>
	)
}

export default ColorItem
