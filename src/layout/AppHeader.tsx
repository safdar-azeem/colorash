import React from 'react'

interface Props {
	children: React.ReactNode
	className?: string
}

const AppHeader = ({ children, className }: Props) => {
	return <div className={`px-6 py-3 ${className} sticky top-0 bg-base-100 z-50 `}>{children}</div>
}

export default AppHeader
