import { Icon } from '@iconify/react'
import { colord, random } from 'colord'
import { useEffect, useMemo, useState } from 'react'
import ColorPicker from '../components/base/color-picker/ColorPicker'
import Button from '../components/base/form/Button'
import Dropdown from '../components/base/form/Dropdown'
import Input from '../components/base/form/Input'
import colorModeOptions from '../json/colorMode.json'
import { ColorMode } from '../types/color.type'

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

	const isLargeTextReadable = useMemo(
		() => colord(largeTextColor).contrast(colord(bgColor)) > 1.5,
		[largeTextColor, bgColor]
	)

	const isNormalTextReadable = useMemo(
		() => colord(normalTextColor).contrast(colord(bgColor)) > 4.5,
		[normalTextColor, bgColor]
	)

	const isIconReadable = useMemo(
		() => colord(iconTextColor).contrast(colord(bgColor)) > 3,
		[iconTextColor, bgColor]
	)

	return (
		<div>
			<div className='mb-10 flex gap-x-4'>
				<Input
					label='Background'
					value={bgColor}
					className='w-[170px]'
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
					className='w-[270px]'
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

			<section className='grid grid-cols-1 md:grid-cols-2 gap-10'>
				<div className='bg-gray-200 p-4 px-6 rounded-md'>
					<header className='font-bold text-fs-7 mb-5'>Ratio 15.45:1</header>
					<ul className='md:w-1/2 flex flex-col gap-5'>
						<li className='flex justify-between'>
							<h4 className='font-bold'>Large text</h4>
							<span>{isLargeTextReadable ? 'Readable' : 'Not readable'}</span>
						</li>
						<li className='flex justify-between'>
							<h4 className='font-bold'>Normal Text</h4>
							<span>{isNormalTextReadable ? 'Readable' : 'Not readable'}</span>
						</li>
						<li className='flex justify-between'>
							<h4 className='font-bold'>Graphics</h4>
							<span>{isIconReadable ? 'Readable' : 'Not readable'}</span>
						</li>
					</ul>
				</div>
				<div
					className='bg-[#F1EEE5] p-4 px-6 rounded-md flex flex-col gap-3'
					style={{ color: color, backgroundColor: bgColor }}>
					<header
						className='text-fs-10 font-bold'
						style={{
							color: largeTextColor,
						}}>
						Example
					</header>
					<p
						style={{
							color: normalTextColor,
						}}>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui obcaecati assumenda velit
						nam natus, quis voluptate neque blanditiis, possimus porro error! Sint libero doloribus
						eveniet voluptatibus deserunt maxime
					</p>
					<footer
						className='flex gap-4 mt-5'
						style={{
							color: iconTextColor,
						}}>
						<Icon
							icon='ph:dice-six-fill'
							className='icon xl'
						/>
						<Icon
							icon='ph:divide-bold'
							className='icon xl'
						/>
						<Icon
							icon='fluent:sport-american-football-24-filled'
							className='icon xl'
						/>
						<Icon
							icon='material-symbols:headphones'
							className='icon xl'
						/>
						<Icon
							icon='ic:round-image'
							className='icon xl'
						/>
						<Icon
							icon='bi:lightning-charge-fill'
							className='icon xl'
						/>
					</footer>
				</div>
			</section>
		</div>
	)
}

export default ContrastChecker
