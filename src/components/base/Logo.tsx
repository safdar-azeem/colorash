import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import { AppRoutes } from '../../constants/routes.constants'

const Logo = () => {
	return (
		<Link
			to={AppRoutes.Home}
			className='flex items-center gap-x-2 text-primary'>
			<Icon
				icon='ph:paint-brush-fill'
				className='text-fs-5'
			/>
			<span className='text-fs-5 font-bold'>Colorash</span>
		</Link>
	)
}

export default Logo
