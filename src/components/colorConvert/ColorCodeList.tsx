import { useMemo } from 'react'
import { useAppDispatch } from '../../hooks/store'
import { addToast } from '../../store/slices/toast.slice'
import { generateColorCodes } from '../../utils/generateColorCodes'
import Button from '../base/form/Button'

interface ColorCodesProps {
	color: string
}
const ColorCodeList = ({ color }: ColorCodesProps) => {
	const dispatch = useAppDispatch()

	const handleCopy = (color: string) => {
		navigator.clipboard.writeText(color)
		dispatch(addToast(`${color} copied to clipboard`))
	}

	const colorCodes = useMemo(() => {
		return generateColorCodes(color)
	}, [color])

	return (
		<ul className='bg-base-100  p-2 rounded-box'>
			{colorCodes.map((colorCode, index) => (
				<li
					key={index}
					className=' flex justify-between py-2 border mb-3 hover:bg-gray-200 rounded-md items-center px-4 '>
					<div className='menu-title'>{colorCode}</div>
					<Button
						text='Copy'
						onClick={() => handleCopy(colorCode)}
					/>
				</li>
			))}
		</ul>
	)
}

export default ColorCodeList
