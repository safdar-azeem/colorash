import { useState } from 'react'
import { TInputVariant, TSize } from '../../../types/tailwind.types'

interface InputProps {
   size?: TSize
   min?: number
   max?: number
   label?: string
   type?: string
   isError?: boolean
   disabled?: boolean
   className?: string
   required?: boolean
   placeholder?: string
   errorMessage?: string
   value?: string | number
   variant?: TInputVariant
   leftSlot?: React.ReactNode
   rightSlot?: React.ReactNode
   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({
   label,
   min,
   max,
   type,
   value,
   isError,
   onChange,
   disabled,
   leftSlot,
   className,
   rightSlot,
   placeholder,
   size = 'md',
   errorMessage,
   required = false,
   variant = 'bordered',
}: InputProps) => {
   const [isFocused, setIsFocused] = useState(false)

   const handleFocus = () => setIsFocused(true)
   const handleBlur = () => setIsFocused(false)

   return (
      <div>
         {label && (
            <label htmlFor={label} className="label justify-start gap-1">
               {label}
               {required && <span className="text-red-500">*</span>}
            </label>
         )}
         <div
            className={`flex items-center input-${variant} px-0 py-0 input
                input-${size}
                ${!isError && isFocused && 'border border-primary'} ${className}
                    ${isError && 'input-error'}
                `}
            onFocus={handleFocus}
            onBlur={handleBlur}>
            {leftSlot && <div className="px-2">{leftSlot}</div>}
            <input
               type={type}
               min={min}
               max={max}
               id={label}
               value={value}
               onChange={onChange}
               disabled={disabled}
               placeholder={placeholder}
               className={`unstyled-input h-full ${leftSlot ? 'pl-1' : 'pl-3'} ${
                  rightSlot ? 'pr-1' : 'pr-3'
               } w-full`}
            />
            {rightSlot && <div className="px-2">{rightSlot}</div>}
         </div>
         {errorMessage && <p className="text-error mt-1">{errorMessage}</p>}
      </div>
   )
}

export default Input
