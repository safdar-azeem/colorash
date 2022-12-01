import { Outlet } from 'react-router-dom'
import AppSidebar from './Components/Base/AppSidebar'
import Button from './Components/Base/Forms/Button'
import Logo from './Components/Base/Logo'

const Root = () => {
	return (
		<div className='flex'>
			<div className='hidden lg:flex'>
				<AppSidebar />
			</div>
			<div className='lg:pl-[250px] pl-10 pr-10 pt-4 w-full min-h-screen'>
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
