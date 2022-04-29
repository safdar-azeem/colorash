import { lazy, useContext } from 'react'
import AppHeader from '../layouts/AppHeader'
import AppContent from '../layouts/AppContent'
import InputGroup from '../layouts/InputGroup'
import Input from '../components/reusable/forms/Input'
import colorModeOptions from '../jsons/colorMode.json'
import Button from '../components/reusable/forms/Button'
import ColorTonerProvider from '../context/colorToner/Provider'
import { ColorTonerContext } from '../context/colorToner/Context'

const ColorList = lazy(() => import('../components/reusable/ColorList'))
const ColorPicker = lazy(() => import('../components/reusable/ColorPicker'))
const Dropdown = lazy(() => import('../components/reusable/forms/Dropdown'))
const ExportColorModal = lazy(() => import('../components/reusable/modals/ExportColorModal'))

const ColorToner = () => {
   const { color, bgColor, quantity, colorMode, colorsPalette, actions } = useContext(ColorTonerContext)

   return (
      <>
         <AppHeader className="static md:sticky">
            <InputGroup minWidth={185}>
               <Input
                  label="Background"
                  value={bgColor}
                  onChange={(e) => actions.handleBgColorChange(e.target.value)}
                  leftSlot={
                     <ColorPicker
                        value
                        box
                        hue
                        size="xs"
                        saturation
                        color={bgColor}
                        direction="none"
                        onChange={actions.handleBgColorChange}
                     />
                  }
               />
               <Input
                  label="Colour"
                  value={color}
                  onChange={(e) => actions.handleColorChange(e.target.value)}
                  leftSlot={
                     <ColorPicker
                        value
                        box
                        hue
                        size="xs"
                        color={color}
                        saturation
                        direction="none"
                        onChange={actions.handleColorChange}
                     />
                  }
                  rightSlot={
                     <Button
                        leftIcon="charm:refresh"
                        variant="ghost"
                        size="sm"
                        onClick={actions.handleRefreshColor}
                     />
                  }
               />
               <Dropdown
                  label="Mode"
                  withIcon
                  value={colorMode}
                  variant="outline"
                  minButtonWidth="100%"
                  options={colorModeOptions}
                  onChange={actions.handleDropdownChange}
               />
               <Input
                  min={2}
                  max={100}
                  type="number"
                  label="Quantity"
                  value={quantity}
                  onChange={actions.handleQuantityChange}
               />
               <Button leftIcon="charm:download" label="Export" htmlFor="export-color-modal" />
            </InputGroup>
         </AppHeader>
         <AppContent>
            <ColorList colorsPalette={colorsPalette} />
            <ExportColorModal colorsPalette={colorsPalette} generateColorFor="tones" />
         </AppContent>
      </>
   )
}

export default () => (
   <ColorTonerProvider>
      <ColorToner />
   </ColorTonerProvider>
)
