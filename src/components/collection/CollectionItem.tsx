import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import Button from '../reusable/forms/Button'
import { Palette } from '../../utils/savePalettes'
import templates, { TemplateType } from '../../templates'
import { AppRoutes } from '../../constants/routes.constants'

interface Props {
   collection: Palette
   handleRemovePalette: (palette: Palette) => void
   setSelectedPalette: (palette: string[]) => void
}

const CollectionItem = ({ collection, handleRemovePalette, setSelectedPalette }: Props) => {
   const template: TemplateType = useMemo(() => templates[collection.frame][collection.index], [collection])

   return (
      <div className="h-full">
         <div className="gap-3 grid place-items-center relative z-0 h-full fadeIn">
            <Link
               style={{
                  backgroundColor: template.background,
               }}
               className="w-full p-4 rounded-xl h-full grid place-items-center"
               to={`${AppRoutes.PaletteGenerator}/${collection.frame}/${collection.index}/${collection.colors
                  .join('-')
                  .replaceAll('#', '')}`}>
               {template.component({
                  palette: collection.colors,
               })}
            </Link>
            <div className=" absolute  top-right">
               <Button
                  size="sm"
                  iconSize="xl"
                  variant="ghost"
                  iconColor="text-gray-500"
                  leftIcon={'ion:close-circle'}
                  onClick={() => handleRemovePalette(collection)}
               />
            </div>
            <footer className="w-full flex  items-center gap-x-3">
               {collection.colors.map((color, index) => (
                  <div
                     className="w-7 h-7 rounded-full"
                     style={{
                        backgroundColor: color,
                     }}></div>
               ))}
               <Button
                  size="sm"
                  variant="ghost"
                  leftIcon="charm:download"
                  iconColor="text-gray-600"
                  htmlFor="export-color-modal"
                  onClick={() => setSelectedPalette(collection.colors)}
               />
            </footer>
         </div>
      </div>
   )
}

export default CollectionItem
