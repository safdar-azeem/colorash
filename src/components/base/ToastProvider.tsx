import { Icon } from '@iconify/react'
import { useMemo } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/store'
import { removeToast } from '../../store/slices/toast.slice'
import { Toast } from '../../types/toast.type'

const ToastProvider = () => {
	const { toasts } = useAppSelector((state) => state.toast)
	const dispatch = useAppDispatch()

	useMemo(() => {
		toasts.forEach((toast, index) => {
			setTimeout(() => {
				dispatch(removeToast(toast.id))
			}, 1000 * (index + 1))
		})
	}, [toasts])

	return (
		<div className='bottom-center fixed'>
			{toasts.map((toast: Toast) => (
				<div key={toast.id}>
					<ToastWrapper toast={toast} />
				</div>
			))}
		</div>
	)
}

const ToastWrapper = ({ toast }: { toast: Toast }) => {
	const dispatch = useAppDispatch()
	return (
		<div className='bg-primary-light bounceIn text-gray-900 border border-gray-200 rounded-lg text-fs-0 py-3 min-w-[190px] px-3 text-center mb-2 flex justify-between items-center'>
			<p className='text-sm'>{toast.message}</p>
			<Icon
				icon={'mdi:close'}
				className='text-gray-500 icon md   cursor-pointer  '
				onClick={() => dispatch(removeToast(toast.id))}
			/>
		</div>
	)
}

export default ToastProvider
