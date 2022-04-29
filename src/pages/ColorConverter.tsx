import AppHeader from '../layouts/AppHeader'
import React, { lazy, useState } from 'react'
import AppContent from '../layouts/AppContent'
import InputGroup from '../layouts/InputGroup'
import Input from '../components/reusable/forms/Input'

const ColorPicker = lazy(() => import('../components/reusable/ColorPicker'))
const ColorCodeList = lazy(() => import('../components/colorConvert/ColorCodeList'))

const ColorConverter = () => {
   const [color, setColor] = useState<string>('#285245')

   const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target
      setColor(value)
   }

   return (
      <>
         <AppHeader>
            <InputGroup>
               <Input
                  label="Color"
                  value={color}
                  onChange={handleColorChange}
                  rightSlot={
                     <ColorPicker
                        color={color}
                        value
                        saturation
                        box
                        hue
                        size="xs"
                        direction="left"
                        onChange={(color) => setColor(color)}
                     />
                  }
               />
            </InputGroup>
         </AppHeader>
         <AppContent className="flex flex-col md:flex-row gap-x-10">
            <div className="flex-1">
               <ColorCodeList color={color} />
            </div>
            <div
               className="w-[340px] hidden md:flex rounded-lg h-[400px]"
               style={{
                  backgroundColor: color,
               }}
            />
         </AppContent>
      </>
   )
}

export default ColorConverter
