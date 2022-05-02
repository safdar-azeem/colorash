import { lazy, useContext } from 'react'
import AppHeader from '../layouts/AppHeader'
import AppContent from '../layouts/AppContent'
import InputGroup from '../layouts/InputGroup'
import Input from '../components/reusable/forms/Input'
import SolidColorsProvider from '../context/solidColors/Provider'
import { SolidColorsContext } from '../context/solidColors/Context'

const ColorList = lazy(() => import('../components/reusable/ColorList'))
const ColorPicker = lazy(() => import('../components/reusable/ColorPicker'))

const SolidColors = () => {
   const { colorsPalette, bgColor, actions } = useContext(SolidColorsContext)
   return (
      <>
         <AppHeader>
            <InputGroup>
               <Input
                  label="Background"
                  value={bgColor}
                  onChange={(e) => actions.handleBgColorChange(e.target.value)}
                  rightSlot={
                     <ColorPicker
                        box
                        value
                        hue
                        size="xs"
                        saturation
                        color={bgColor}
                        direction="left"
                        onChange={actions.handleBgColorChange}
                     />
                  }
               />
            </InputGroup>
         </AppHeader>
         <AppContent>
            <ColorList
               rowGap={16}
               colGap={16}
               childRadius="lg"
               parentRadius="none"
               colorsPalette={colorsPalette}
            />
         </AppContent>
      </>
   )
}

export default () => (
   <SolidColorsProvider>
      <SolidColors />
   </SolidColorsProvider>
)
