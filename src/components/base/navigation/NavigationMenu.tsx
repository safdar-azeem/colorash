import { INavigationItem } from '../../../json/appNavigation.json'
import NavLink from './NavLink'

interface INavigationMenuProps {
	items: INavigationItem[]
}

const NavigationMenu = ({ items }: INavigationMenuProps) => {
	return (
		<ul className='menu navigation menu-compact w-full gap-y-2 p-2 rounded-box '>
			{items.map((navItem: INavigationItem) => (
				<li>
					<NavLink
						label={navItem.label}
						icon={navItem.icon}
						path={navItem.path}
					/>
				</li>
			))}
		</ul>
	)
}

export default NavigationMenu
