import { lazy } from 'react'
import { Outlet } from 'react-router-dom'
const AppSidebar = lazy(() => import('./components/base/AppSidebar'))
import Button from './components/base/forms/Button'
import Logo from './components/base/Logo'

const Root = () => {
	return (
		<div className='flex'>
			<div className='hidden lg:flex'>
				<AppSidebar />
			</div>
			<div className='lg:pl-[235px] pl-0 w-full min-h-screen'>
				<div className='flex lg:hidden mb-4 justify-between items-center  '>
					<Logo />
					<Button leftIcon='octicon:three-bars-16' />
				</div>
				<Outlet />
			</div>
		</div>
	)
}

export default Root
