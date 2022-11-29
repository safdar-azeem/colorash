import { colord } from 'colord'
import { useEffect, useState } from 'react'
import ColorPicker from '../components/base/color-picker/ColorPicker'
import ColorList from '../components/base/ColorList'
import Input from '../components/base/form/Input'
import { generateRandomColor } from '../utils/generateRandomColor'

const ColorToner = () => {
	const [colorsPalette, setColorsPalette] = useState<any[]>(generateRandomColor(50, []))
	const [bgColor, setBgColor] = useState('#FCFCFD')

	const handleBgColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target
		setBgColor(value)
	}

	const isLight = colord(bgColor).isLight()

	useEffect(() => {
		document.body.style.backgroundColor = bgColor
		document.body.style.color = isLight || bgColor === 'transparent' ? '#000' : '#fff'
		return () => {
			document.body.style.backgroundColor = ''
			document.body.style.color = ''
		}
	}, [bgColor])

	const infiniteScroll = () => {
		const { scrollHeight, scrollTop, clientHeight } = document.documentElement
		if (scrollTop + clientHeight >= scrollHeight) {
			setColorsPalette((prev) => [...prev, ...generateRandomColor(30, prev)])
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', infiniteScroll)
		return () => window.removeEventListener('scroll', infiniteScroll)
	}, [])

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
							box
							value
							saturation
							hue
							onChange={(color) => setBgColor(color)}
							size='xs'
						/>
					}
				/>
			</div>
			<ColorList
				rowGap={16}
				colGap={16}
				parentRadius='none'
				childRadius='lg'
				colorsPalette={colorsPalette}
			/>
		</div>
	)
}

export default ColorToner
