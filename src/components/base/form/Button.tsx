import { Icon } from '@iconify/react'

interface ButtonProps {
	variant?:
		| 'primary'
		| 'secondary'
		| 'ghost'
		| 'outline'
		| 'accent'
		| 'warning'
		| 'success'
		| 'error'
		| 'outline'
		| 'disabled'
	size?: 'xs' | 'sm' | 'md' | 'lg'
	color?: string
	isBlock?: boolean
	isCircle?: boolean
	isSuare?: boolean
	isAnimated?: boolean
	isLoading?: boolean
	isGlass?: boolean
	leftIcon?: string
	rightIcon?: string
	iconSize?: string
	text?: string
	onClick?: () => void
	iconColor?: string
}

const Button = ({
	variant = 'primary',
	size = 'md',
	isBlock = false,
	isCircle = false,
	isSuare = false,
	isAnimated = false,
	isLoading = false,
	isGlass = false,
	leftIcon,
	rightIcon,
	iconSize,
	text,
	onClick,
	color,
	iconColor,
}: ButtonProps) => {
	return (
		<button
			onClick={onClick}
			style={{ color: color }}
			className={`btn gap-2
			${(leftIcon || rightIcon) && !text && 'btn-square'} btn-${variant} btn-${size} ${
				isBlock && 'btn-block'
			} ${isCircle && 'btn-circle'} ${isSuare && 'btn-square'} ${isAnimated && 'loading'} ${
				isLoading && 'btn-loading'
			} ${isGlass && 'btn-glass'}`}>
			{leftIcon && !isAnimated && (
				<Icon
					icon={leftIcon}
					className={`${iconSize || 'icon ' + size} ${iconColor} `}
				/>
			)}
			{text && <span className='btn-text'>{text}</span>}
			{rightIcon && !isAnimated && (
				<Icon
					icon={rightIcon}
					className={`${iconSize || 'icon ' + size} ${iconColor} `}
				/>
			)}
		</button>
	)
}

export default Button
