import React, { useMemo } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/store'
import { setPalette } from '../../store/slices/colorToner.slice'
import ColorTonerCard from './ColorTonerCard'

const ColorTones = () => {
	const dispatch = useAppDispatch()
	const { palette, color, quantity, mode } = useAppSelector((state) => state.colorToner)

	useMemo(() => {
		dispatch(setPalette({ color, quantity, mode }))
	}, [color, quantity, mode])

	return (
		<div className='grid grid-cols-6 gap-x-0 gap-y-0 mt-10 rounded-xl overflow-hidden'>
			{palette.map((color, index) => (
				<ColorTonerCard
					key={index}
					color={color}
				/>
			))}
		</div>
	)
}

export default ColorTones
