import { Icon } from '@iconify/react'
import { NavLink } from 'react-router-dom'
import appNavigation, { INavigationItem } from '../../json/appNavigation.json'
import Logo from './Logo'

const AppSidebar = () => {
	return (
		<aside className='w-[220px] px-3 border border-r-gray-200 min-h-screen flex flex-col py-4 gap-y-8 fixed bg-white left-0 top-0'>
			<header className='px-2'>
				<Logo />
			</header>
			<nav className='flex flex-col gap-y-2'>
				{appNavigation.map((navItem: INavigationItem) => (
					<NavLink
						key={navItem.label}
						to={navItem.path}
						className={({ isActive }) =>
							`flex items-center gap-x-3 py-3 px-3 rounded-md hover:text-primary ${
								isActive
									? 'bg-primary-light text-primary font-medium'
									: ' text-gray-500 font-normal'
							}`
						}>
						<Icon
							icon={navItem.icon}
							className='text-fs-2'
						/>
						{navItem.label}
					</NavLink>
				))}
			</nav>
		</aside>
	)
}

export default AppSidebar
