import { Icon } from '@iconify/react'
import { TButtonVariant, TSize } from '../../../types/tailwind.types'

interface ButtonProps {
   ref?: any
   size?: TSize
   text?: string
   color?: string
   label?: string
   htmlFor?: string
   isBlock?: boolean
   isSuare?: boolean
   isGlass?: boolean
   leftIcon?: string
   iconSize?: string
   isCircle?: boolean
   rightIcon?: string
   iconColor?: string
   className?: string
   disabled?: boolean
   fullWidth?: boolean
   isLoading?: boolean
   isAnimated?: boolean
   onClick?: () => void
   variant?: TButtonVariant
}

const Button = ({
   ref,
   text,
   label,
   color,
   onClick,
   htmlFor,
   leftIcon,
   rightIcon,
   iconColor,
   className,
   size = 'md',
   isBlock = false,
   isSuare = false,
   isGlass = false,
   iconSize = 'md',
   variant = 'outline',
   isCircle = false,
   disabled = false,
   fullWidth = false,
   isLoading = false,
   isAnimated = false,
}: ButtonProps) => {
   return (
      <div>
         {label && (
            <label className="label" ref={ref}>
               {label}
            </label>
         )}
         <label
            ref={ref}
            htmlFor={htmlFor}
            onClick={disabled ? () => {} : onClick}
            style={{ color: color }}
            className={`btn ${disabled && 'btn-disabled'} gap-2
			${(leftIcon || rightIcon) && !text && 'btn-square'} btn-${variant} btn-${size} ${isBlock && 'btn-block'} ${
               isCircle && 'btn-circle'
            } ${isSuare && 'btn-square'} ${isAnimated && 'loading'} ${isLoading && 'btn-loading'} ${
               isGlass && 'btn-glass'
            } ${fullWidth && 'w-full'}  ${className}`}>
            {leftIcon && !isAnimated && (
               <Icon icon={leftIcon} className={`icon ${iconSize || size} ${iconColor} `} />
            )}
            {text && <span className="btn-text  capitalize">{text}</span>}
            {rightIcon && !isAnimated && (
               <Icon icon={rightIcon} className={`icon ${iconSize || size} ${iconColor} `} />
            )}
         </label>
      </div>
   )
}

export default Button
