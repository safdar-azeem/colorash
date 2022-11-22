import { Outlet } from 'react-router-dom'
import AppSidebar from './components/base/AppSidebar'

const Root = () => {
	return (
		<div className='flex'>
			<AppSidebar />
			<div className='pl-[250px] pr-10 pt-4'>
				<Outlet />
			</div>
		</div>
	)
}

export default Root
