import { colord, random } from 'colord'
import React, { useEffect, useMemo, useState } from 'react'
import { ColorMode } from '../../types/color.type'
import { ColorTonerContext, initialColorTonerState } from './Context'

export const ColorTonerProvider = ({ children }: { children: React.ReactNode }) => {
	const [color, setColor] = useState<string>(initialColorTonerState.color)
	const [bgColor, setBgColor] = useState(initialColorTonerState.bgColor)
	const [quantity, setQuantity] = useState(initialColorTonerState.quantity)
	const [colorMode, setColorMode] = useState<ColorMode>(initialColorTonerState.colorMode)

	const handleBgColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target
		setBgColor(value)
	}

	const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target
		setColor(value)
	}

	const handleDropdownChange = (value: string) => {
		setColorMode(value as ColorMode)
	}

	const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target
		if (parseInt(value) > 100 || parseInt(value) < 2) return
		setQuantity(parseInt(value))
	}

	const handleRandom = () => setColor(random().toHex())

	useEffect(() => {
		document.body.style.backgroundColor = bgColor
		return () => {
			document.body.style.backgroundColor = ''
		}
	}, [bgColor])

	const colorsPalette: any[] = useMemo(() => {
		const baseColor = colord(color)
		if (colorMode === 'tints') return baseColor.tints(quantity)
		if (colorMode === 'shades') return baseColor.shades(quantity)
		return baseColor.tones(quantity)
	}, [color, quantity, colorMode])

	return (
		<ColorTonerContext.Provider
			value={{
				color,
				bgColor,
				quantity,
				colorMode,
				colorsPalette,
				handleBgColorChange,
				handleColorChange,
				handleDropdownChange,
				handleQuantityChange,
				handleRandom,
			}}>
			{children}
		</ColorTonerContext.Provider>
	)
}

export default ColorTonerProvider
