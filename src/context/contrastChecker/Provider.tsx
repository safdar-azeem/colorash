import { colord } from 'colord'
import React, { useMemo, useState } from 'react'
import { ContrastCheckerContext, initialContrastCheckerState } from './Context'

export const ContrastCheckerProvider = ({ children }: { children: React.ReactNode }) => {
	const [color, setColor] = useState<string>(initialContrastCheckerState.color)
	const [bgColor, setBgColor] = useState(initialContrastCheckerState.bgColor)

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

	return (
		<ContrastCheckerContext.Provider
			value={{
				bgColor,
				color,
				largeTextColor,
				normalTextColor,
				iconTextColor,
				handleBgColorChange,
				handleColorChange,
			}}>
			{children}
		</ContrastCheckerContext.Provider>
	)
}

export default ContrastCheckerProvider
