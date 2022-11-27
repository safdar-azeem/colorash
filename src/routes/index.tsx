import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { AppRoutes } from '../constants/routes.constants'

const Root = lazy(() => import('../Root'))
const Home = lazy(() => import('../pages/Home'))
const PaletteGenerator = lazy(() => import('../pages/PaletteGenerator'))
const ColorToner = lazy(() => import('../pages/ColorToner'))
const SolidColors = lazy(() => import('../pages/SolidColors'))

export const routes = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: AppRoutes.Home,
				element: <PaletteGenerator />,
			},
			{
				path: AppRoutes.ColorToner,
				element: <ColorToner />,
			},
			{
				path: AppRoutes.SolidColors,
				element: <SolidColors />,
			},
		],
	},
])
