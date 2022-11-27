import { colord } from 'colord'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/store'
import colorCodesOptions from '../../json/colorCodes.json'
import colorFormatOptions from '../../json/ColorFormat.json'
import { addToast } from '../../store/slices/toast.slice'
import { ColorFormat } from '../../types/color.type'
import Button from '../base/form/Button'
import Dropdown from '../base/form/Dropdown'

const ExportColorModal = () => {
	const [colorFormat, setColorFormat] = useState(colorFormatOptions[0].value)
	const [colorCode, setColorCode] = useState<ColorFormat>(colorCodesOptions[0].value as ColorFormat)
	const { palette } = useAppSelector((state) => state.colorToner)
	const [colorValue, setColorValue] = useState<string>('')
	const dispatch = useAppDispatch()

	const generateColorValues = () => {
		let colors: any = {}
		palette
			.map((color: any) => {
				const { parsed } = color
				if (colorCode === 'rgb') return colord(parsed).toRgbString()
				if (colorCode === 'hsl') return colord(parsed).toHslString()
				return colord(parsed).toHex()
			})
			.map((color: string, index: number) => {
				if (colorFormat === 'css') return (colors[`--color${index + 1}00`] = color)
				if (colorFormat === 'scss') return (colors[`$${index + 1}00`] = color)
				return (colors[`${index + 1}00`] = color)
			})

		setColorValue(JSON.stringify(colors, null, 2))
	}

	const handleCopy = () => {
		navigator.clipboard.writeText(colorValue)
		dispatch(addToast('Copied to clipboard'))
	}

	useEffect(() => {
		generateColorValues()
	}, [colorFormat, colorCode, palette])

	return (
		<div>
			<input
				type='checkbox'
				id='export-color-modal'
				className='modal-toggle'
			/>
			<label
				htmlFor='export-color-modal'
				className='modal cursor-pointer'>
				<label
					className='modal-box relative min-h-[80vh] min-w-[50vw]'
					htmlFor=''>
					<header className='flex justify-between items-center '>
						<h2 className='text-fs-4 font-bold text-gray-900'>Export your theme</h2>
						<Button
							leftIcon='charm:cross'
							variant='ghost'
							htmlFor='export-color-modal'
							isCircle
						/>
					</header>
					<section className='my-4 flex gap-2'>
						<Button
							text='Copy All'
							onClick={handleCopy}
							leftIcon='material-symbols:content-copy'
						/>
						<Dropdown
							options={colorCodesOptions}
							value={colorCode}
							onChange={setColorCode as any}
						/>
						<Dropdown
							options={colorFormatOptions}
							value={colorFormat}
							onChange={setColorFormat}
						/>
					</section>
					<main>
						<textarea
							className='input h-full input-bordered w-full'
							value={colorFormat !== 'javascript' ? colorValue.replace(/"/g, '') : colorValue}
							style={{ height: 'calc(100vh - 300px)' }}
							rows={30}
							onChange={(event) => setColorValue(event.target.value)}
						/>
					</main>
				</label>
			</label>
		</div>
	)
}

export default ExportColorModal
