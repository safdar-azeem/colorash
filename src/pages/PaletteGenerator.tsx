import { lazy, useContext } from 'react'
import AppHeader from '../layouts/AppHeader'
import AppContent from '../layouts/AppContent'
import InputGroup from '../layouts/InputGroup'
import frameOptions from '../jsons/frameOpetions.json'
import Button from '../components/reusable/forms/Button'
import ColorPicker from '../components/reusable/ColorPicker'
import Dropdown from '../components/reusable/forms/Dropdown'
import PaletteGeneratorProvider from '../context/paletteGenerator/Provider'
import { PaletteGeneratorContext } from '../context/paletteGenerator/Context'

const ExportColorModal = lazy(() => import('../components/reusable/modals/ExportColorModal'))

const PaletteGenerator = () => {
   const { palette, frame, frameIndex, template, totalTemplates, isPaletteAlreadySaved, actions } =
      useContext(PaletteGeneratorContext)

   return (
      <div>
         <AppHeader>
            <InputGroup minWidth={palette.length <= 2 ? (palette.length + 1) * 90 : palette.length * 75}>
               <div className="w-full">
                  <label className="label">Color Palette</label>
                  <section className="border-base-300 border flex justify-between items-center px-3 gap-x-3 rounded-md py-2 h-[45px] text-gray-200">
                     <Button
                        size="sm"
                        variant="ghost"
                        leftIcon="charm:refresh"
                        iconColor="text-gray-600"
                        iconSize="text-fs-5"
                        onClick={actions.handleRefreshPalette}
                     />
                     {palette.map((color: string, index: number) => (
                        <ColorPicker
                           value
                           box
                           hue
                           size="xs"
                           withInput
                           saturation
                           withRandomBtn
                           color={color}
                           key={index}
                           direction="none"
                           onChange={(color) => actions.handleChangePaletteColor(index, color)}
                        />
                     ))}
                     <Button
                        size="sm"
                        variant="ghost"
                        leftIcon="charm:download"
                        iconColor="text-gray-600"
                        htmlFor="export-color-modal"
                     />
                     <Button
                        size="sm"
                        variant="ghost"
                        leftIcon={isPaletteAlreadySaved ? 'mdi:cards-heart' : 'mdi:cards-heart-outline'}
                        iconColor="text-gray-600"
                        onClick={actions.handleSavePalette}
                     />
                  </section>
               </div>
               <Dropdown
                  withIcon
                  value={frame}
                  label="Select Frame"
                  variant="outline"
                  minButtonWidth={200}
                  options={frameOptions}
                  onChange={actions.handleChangeFrame as any}
               />
            </InputGroup>
         </AppHeader>
         <AppContent className="mt-0">
            <section className="flex justify-end gap-x-3">
               <Button
                  iconSize="xl"
                  size="sm"
                  isCircle
                  leftIcon="material-symbols:chevron-left-rounded"
                  disabled={frameIndex === 0}
                  onClick={() => actions.handleChangeFrameIndex('decrement')}
               />
               <Button
                  iconSize="xl"
                  size="sm"
                  isCircle
                  leftIcon="material-symbols:chevron-right-rounded"
                  disabled={frameIndex === totalTemplates}
                  onClick={() => actions.handleChangeFrameIndex('increment')}
               />
            </section>
            <AppContent
               className="grid fadeIn mt-3 resize overflow-auto place-items-center sm:px-8 sm:py-10 p-4  border border-gray-100 rounded-lg sm:rounded-[30px]"
               style={{
                  backgroundColor: template?.background,
               }}>
               {template.component({
                  palette,
               })}
            </AppContent>
         </AppContent>
         <ExportColorModal colorsPalette={palette} generateColorFor="palette" />
      </div>
   )
}

export default () => (
   <PaletteGeneratorProvider>
      <PaletteGenerator />
   </PaletteGeneratorProvider>
)
