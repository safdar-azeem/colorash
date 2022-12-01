import { Icon } from '@iconify/react'
import { Link, NavLink } from 'react-router-dom'
import Button from '../components/base/form/Button'
import { AppRoutes } from '../constants/routes.constants'
import appNavigation from '../json/appNavigation.json'

const Home = () => {
	return (
		<div className='grid  place-items-center   min-h-screen  bg-[#F5EEE1]'>
			<section className='grid lg:grid-cols-2 gap-24 md:container'>
				<aside>
					<h1 className='text-fs-10 font-black'>
						Generate Color palettes Easily with
						<span className='text-primary ml-2'>Colorash</span>
					</h1>
					<p className='my-4'>
						Create the perfect color palette for your next project with Colorash. Attract your
						audience with a great color design combination and make your website stand out from the
						crowd. Improve your workflow and save time with our color tools.
					</p>
					<section className='mt-12'>
						<ul className='flex gap-10 text-gray-600'>
							{appNavigation.map(
								(item, index) =>
									item.path !== AppRoutes.Collection &&
									item.path !== AppRoutes.ColorConverter && (
										<li
											className='grid place-items-center gap-3'
											key={index}>
											<Icon
												icon={item.icon}
												className='icon lg'
											/>
											<NavLink
												to={item.path}
												className='whitespace-nowrap text-fs-0 '>
												{item.label}
											</NavLink>
										</li>
									)
							)}
						</ul>
					</section>
					<footer className='mt-10'>
						<Link to={AppRoutes.PaletteGenerator}>
							<Button
								text='Start Generating'
								variant='primary'
								size='lg'
								iconSize='md'
								rightIcon='akar-icons:circle-chevron-right'
							/>
						</Link>
					</footer>
				</aside>
				<figure className='hidden lg:flex'>
					<img
						src='/landingPage.svg'
						className='w-full'
					/>
				</figure>
			</section>
		</div>
	)
}

export default Home
