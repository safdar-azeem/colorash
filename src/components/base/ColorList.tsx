import { TRadius } from '../../types/tailwind.types'
import ColorItem from './ColorItem'

interface ColorListProps {
	colorsPalette: any[]
	rowGap?: number
	colGap?: number
	parentRadius?: TRadius
	childRadius?: TRadius
}

const ColorList = ({
	colorsPalette,
	rowGap = 0,
	colGap = 0,
	parentRadius = 'xl',
	childRadius = 'none',
}: ColorListProps) => {
	return (
		<div
			className={`grid grid-cols-6 mt-10 rounded-${parentRadius} overflow-hidden`}
			style={{ gridRowGap: rowGap, gridColumnGap: colGap }}>
			{colorsPalette.map((color, index) => (
				<ColorItem
					key={index}
					color={color}
					radius={childRadius}
				/>
			))}
		</div>
	)
}

export default ColorList
