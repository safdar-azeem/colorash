import React from 'react'

interface Props {
	children: React.ReactNode
	className?: string
}

const AppContent = ({ children, className }: Props) => {
	return <div className={`my-10 ${className}`}>{children}</div>
}

export default AppContent
