import { configureStore } from '@reduxjs/toolkit'
import colorTonerSlice from './slices/colorToner.slice'
import toastSlice from './slices/toast.slice'

export const store = configureStore({
	reducer: {
		colorToner: colorTonerSlice,
		toast: toastSlice,
	},
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
