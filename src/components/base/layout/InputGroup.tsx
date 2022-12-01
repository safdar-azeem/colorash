import React from 'react'

interface Props {
	children: React.ReactNode
	className?: string
	colsLg?: number
	colsMd?: number
	colsSm?: number
	cols?: number
}

const InputGroup = ({
	children,
	className,
	colsLg = 5,
	colsMd = 4,
	colsSm = 3,
	cols = 2,
}: Props) => {
	return (
		<div
			className={`grid grid-cols-${cols}  sm:grid-cols-${colsSm} md:grid-cols-${colsMd} lg:grid-cols-${colsLg}  gap-4 ${className} `}>
			{children}
		</div>
	)
}

export default InputGroup
