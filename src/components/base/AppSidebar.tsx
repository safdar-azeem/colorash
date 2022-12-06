import appNavigation from '../../json/appNavigation.json'
import Logo from './Logo'
import NavigationMenu from './navigation/NavigationMenu'

const AppSidebar = () => {
	return (
		<aside className='w-[235px] px-3 border border-r-gray-200 min-h-screen  flex flex-col py-4 gap-y-8 fixed  left-0 top-0  bg-base-100'>
			<header className='px-3 pt-2'>
				<Logo />
			</header>
			<NavigationMenu items={appNavigation} />
		</aside>
	)
}

export default AppSidebar
