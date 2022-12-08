import React, { useEffect, useState } from 'react'
import { generateRandomColor } from '../../utils/generateRandomColor'
import { initialSolidColorsState, SolidColorsContext } from './Context'

export const SolidColorsProvider = ({ children }: { children: React.ReactNode }) => {
	const [colorsPalette, setColorsPalette] = useState<any[]>(generateRandomColor(50, []))
	const [bgColor, setBgColor] = useState(initialSolidColorsState.bgColor)

	const handleBgColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target
		setBgColor(value)
	}

	const infiniteScroll = () => {
		const { scrollHeight, scrollTop, clientHeight } = document.documentElement
		if (scrollTop + clientHeight >= scrollHeight)
			setColorsPalette((prev) => [...prev, ...generateRandomColor(30, prev)])
	}

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
		<SolidColorsContext.Provider
			value={{
				colorsPalette,
				bgColor,
				handleBgColorChange,
			}}>
			{children}
		</SolidColorsContext.Provider>
	)
}

export default SolidColorsProvider
