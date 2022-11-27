import { colord } from 'colord'
import { useMemo } from 'react'
import { useAppDispatch } from '../../hooks/store'
import { addToast } from '../../store/slices/toast.slice'
import Button from '../base/form/Button'

interface CardColorProps {
	color: any
}

const ColorTonerCard = ({ color }: CardColorProps) => {
	const dispatch = useAppDispatch()
	const colorValue = useMemo(() => {
		return colord(color.parsed).toHex()
	}, [color])

	const isLight = useMemo(() => {
		return colord(colorValue).isLight()
	}, [colorValue])

	const copyToClipboard = () => {
		navigator.clipboard.writeText(colorValue)
		dispatch(addToast(`${colorValue} copied to clipboard`))
	}

	return (
		<div
			className='p-2 fadeIn -xl h-[125px] flex items-center gap-x-2 justify-center text-nfs-1'
			style={{ backgroundColor: colorValue }}>
			<p className={` ${!isLight ? 'text-white' : 'text-black'}`}>{colorValue}</p>
			<Button
				variant='ghost'
				size='sm'
				iconColor={!isLight ? 'text-gray-300' : 'text-gray-700'}
				rightIcon='material-symbols:content-copy'
				onClick={copyToClipboard}
			/>
		</div>
	)
}

export default ColorTonerCard
