import { colord } from 'colord'
import { lazy, useEffect, useState } from 'react'
import Input from '../components/base/forms/Input'
import AppContent from '../layout/AppContent'
import AppHeader from '../layout/AppHeader'
import InputGroup from '../layout/InputGroup'
import { generateRandomColor } from '../utils/generateRandomColor'
const ColorList = lazy(() => import('../components/base/ColorList'))
const ColorPicker = lazy(() => import('../components/base/ColorPicker'))

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
		return () => {
			document.body.style.backgroundColor = ''
		}
	}, [bgColor])

	useEffect(() => {
		window.addEventListener('scroll', infiniteScroll)
		return () => window.removeEventListener('scroll', infiniteScroll)
	}, [])

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
								box
								value
								saturation
								hue
								size='xs'
								direction='left'
								onChange={(color) => setBgColor(color)}
							/>
						}
					/>
				</InputGroup>
			</AppHeader>
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
