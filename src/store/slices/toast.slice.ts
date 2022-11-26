import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Toast } from '../../types/toast.type'

interface IState {
	toasts: Toast[]
}

const initialState: IState = {
	toasts: [],
}

const toastSlice = createSlice({
	name: 'toast',
	initialState,
	reducers: {
		addToast: (state, action: PayloadAction<string>) => {
			const toast: Toast = {
				id: Math.random().toString(),
				message: action.payload,
			}
			state.toasts = [...state.toasts, toast]
		},
		removeToast: (state, action: PayloadAction<string>) => {
			state.toasts = state.toasts.filter((toast) => toast.id !== action.payload)
		},
	},
})

export const { addToast, removeToast } = toastSlice.actions

export default toastSlice.reducer
