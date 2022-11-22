import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { AppRoutes } from '../constants/routes.constants'

const Root = lazy(() => import('../Root'))
const Home = lazy(() => import('../pages/Home'))
const PaletteGenerator = lazy(() => import('../pages/PaletteGenerator'))

export const routes = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: AppRoutes.Home,
				element: <PaletteGenerator />,
			},
		],
	},
])
