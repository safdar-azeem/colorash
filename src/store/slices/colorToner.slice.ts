import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { colord, Colord } from 'colord'
import { ColorFormat, ColorMode } from '../../types/color.type'

interface IState {
	color: string
	backgroundColor: string
	format: ColorFormat
	quantity: number
	mode: ColorMode
	palette: Colord[]
}

const initialState: IState = {
	color: '#f3f5f7',
	format: 'hex',
	backgroundColor: '#FCFCFD',
	quantity: 20,
	palette: [],
	mode: 'shades' as ColorMode,
}

const colorTonerSlice = createSlice({
	name: 'color',
	initialState,
	reducers: {
		setColor: (state, action: PayloadAction<string>) => {
			state.color = action.payload
		},
		setBackgroundColor: (state, action: PayloadAction<string>) => {
			state.backgroundColor = action.payload
		},
		setQuantity: (state, action: PayloadAction<number>) => {
			state.quantity = action.payload
		},
		setMode: (state, action: PayloadAction<ColorMode>) => {
			state.mode = action.payload
		},
		setFormat: (state, action: PayloadAction<ColorFormat>) => {
			state.format = action.payload
		},
		setPalette: (
			state,
			action: PayloadAction<{ color: string; quantity: number; mode: ColorMode }>
		) => {
			const { color, quantity, mode } = action.payload
			const baseColor = colord(color)
			if (mode === 'tints') {
				state.palette = baseColor.tints(quantity)
			} else if (mode === 'shades') {
				state.palette = baseColor.shades(quantity)
			} else if (mode === 'tones') {
				state.palette = baseColor.tones(quantity)
			}
		},
	},
})

export const { setColor, setBackgroundColor, setQuantity, setMode, setPalette, setFormat } =
	colorTonerSlice.actions

export default colorTonerSlice.reducer
