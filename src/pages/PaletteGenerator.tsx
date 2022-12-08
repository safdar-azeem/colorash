import { lazy, useContext } from 'react'
import ColorPicker from '../components/reusable/ColorPicker'
import Button from '../components/reusable/forms/Button'
import Dropdown from '../components/reusable/forms/Dropdown'
import { PaletteGeneratorContext } from '../context/paletteGenerator/Context'
import PaletteGeneratorProvider from '../context/paletteGenerator/Provider'
import frameOptions from '../jsons/frameOpetions.json'
import AppContent from '../layouts/AppContent'
import AppHeader from '../layouts/AppHeader'
import InputGroup from '../layouts/InputGroup'
const ExportColorModal = lazy(() => import('../components/reusable/modals/ExportColorModal'))

const PaletteGenerator = () => {
	const {
		currentFrame,
		currentFrameIndex,
		colors,
		template,
		totalTemplates,
		handleFrameIndexChange,
		handleColorChange,
		refreshColors,
		handleFrameChange,
		handleSave,
		isAlreadySaved,
	} = useContext(PaletteGeneratorContext)

	return (
		<div>
			<AppHeader>
				<InputGroup minWidth={colors.length <= 2 ? (colors.length + 1) * 90 : colors.length * 75}>
					<div className='w-full'>
						<label className='label'>Color Palette</label>
						<section className='border-base-300 border flex justify-between items-center px-3 gap-x-3 rounded-md py-2 h-[45px] text-gray-200'>
							<Button
								variant='ghost'
								size='sm'
								leftIcon='charm:refresh'
								iconColor='text-gray-600'
								onClick={refreshColors}
								iconSize='text-fs-5'
							/>
							{colors.map((color: string, index: number) => (
								<ColorPicker
									key={index}
									color={color}
									size='xs'
									value
									saturation
									box
									hue
									withRandomBtn
									direction='none'
									onChange={(color) => handleColorChange(color, index)}
								/>
							))}
							<Button
								variant='ghost'
								size='sm'
								leftIcon='charm:download'
								iconColor='text-gray-600'
								htmlFor='export-color-modal'
							/>
							<Button
								variant='ghost'
								size='sm'
								leftIcon={isAlreadySaved ? 'mdi:cards-heart' : 'mdi:cards-heart-outline'}
								iconColor='text-gray-600'
								onClick={handleSave}
							/>
						</section>
					</div>
					<Dropdown
						label='Select Frame'
						withIcon
						variant='outline'
						options={frameOptions}
						value={currentFrame}
						onChange={handleFrameChange as any}
						minButtonWidth={200}
					/>
				</InputGroup>
			</AppHeader>
			<AppContent className='mt-0'>
				<section className='flex justify-end gap-x-3'>
					<Button
						leftIcon='material-symbols:chevron-left-rounded'
						iconSize='xl'
						size='sm'
						isCircle
						disabled={currentFrameIndex === 0}
						onClick={() => handleFrameIndexChange(currentFrameIndex - 1)}
					/>
					<Button
						leftIcon='material-symbols:chevron-right-rounded'
						iconSize='xl'
						size='sm'
						isCircle
						disabled={currentFrameIndex === totalTemplates - 1}
						onClick={() => handleFrameIndexChange(currentFrameIndex + 1)}
					/>
				</section>
				<AppContent
					className='grid fadeIn mt-3 resize overflow-auto place-items-center px-8 py-10  border border-gray-100 rounded-[30px]'
					style={{
						backgroundColor: template.backDropColor,
					}}>
					{template.component({
						colors,
					})}
				</AppContent>
			</AppContent>
			<ExportColorModal
				colorsPalette={colors}
				generateColorFor='palette'
			/>
		</div>
	)
}

export default () => (
	<PaletteGeneratorProvider>
		<PaletteGenerator />
	</PaletteGeneratorProvider>
)
