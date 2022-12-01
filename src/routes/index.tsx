import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { AppRoutes } from '../Constants/routes.constants'

const Root = lazy(() => import('../Root'))
const Home = lazy(() => import('../Pages/Home'))
const PaletteGenerator = lazy(() => import('../Pages/PaletteGenerator'))
const ColorToner = lazy(() => import('../Pages/ColorToner'))
const SolidColors = lazy(() => import('../Pages/SolidColors'))
const ColorConverter = lazy(() => import('../Pages/ColorConverter'))
const ContrastChecker = lazy(() => import('../Pages/ContrastChecker'))

export const routes = createBrowserRouter([
	{
		path: AppRoutes.Home,
		element: <Home />,
	},
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: AppRoutes.PaletteGenerator,
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
			{
				path: AppRoutes.ColorConverter,
				element: <ColorConverter />,
			},
			{
				path: AppRoutes.ContrastChecker,
				element: <ContrastChecker />,
			},
		],
	},
])
