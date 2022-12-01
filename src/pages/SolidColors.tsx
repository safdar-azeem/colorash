import { colord } from 'colord'
import { useEffect, useState } from 'react'
import ColorPicker from '../Components/Base/ColorPicker'
import ColorList from '../Components/Base/ColorList'
import Input from '../Components/Base/Forms/Input'
import AppContent from '../Layout/AppContent'
import InputGroup from '../Layout/InputGroup'
import { generateRandomColor } from '../Utils/generateRandomColor'

const ColorToner = () => {
	const [colorsPalette, setColorsPalette] = useState<any[]>(generateRandomColor(50, []))
	const [bgColor, setBgColor] = useState('#FCFCFD')

	const handleBgColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target
		setBgColor(value)
	}

	const infiniteScroll = () => {
		const { scrollHeight, scrollTop, clientHeight } = document.documentElement
		if (scrollTop + clientHeight >= scrollHeight)
			setColorsPalette((prev) => [...prev, ...generateRandomColor(30, prev)])
	}

	const isLight = colord(bgColor).isLight()

	useEffect(() => {
		document.body.style.backgroundColor = bgColor
		document.body.style.color = isLight ? '#000' : '#fff'
		return () => {
			document.body.style.backgroundColor = ''
			document.body.style.color = ''
		}
	}, [bgColor])

	useEffect(() => {
		window.addEventListener('scroll', infiniteScroll)
		return () => window.removeEventListener('scroll', infiniteScroll)
	}, [])

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
							box
							value
							saturation
							hue
							onChange={(color) => setBgColor(color)}
							size='xs'
						/>
					}
				/>
			</InputGroup>
			<AppContent>
				<ColorList
					rowGap={16}
					colGap={16}
					parentRadius='none'
					childRadius='lg'
					colorsPalette={colorsPalette}
				/>
			</AppContent>
		</>
	)
}

export default ColorToner
