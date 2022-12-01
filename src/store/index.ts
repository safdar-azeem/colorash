import { configureStore } from '@reduxjs/toolkit'
import colorTonerSlice from './Slices/colorToner.slice'
import toastSlice from './Slices/toast.slice'

export const store = configureStore({
	reducer: {
		colorToner: colorTonerSlice,
		toast: toastSlice,
	},
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
