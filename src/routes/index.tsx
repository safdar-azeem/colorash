import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { AppRoutes } from '../constants/routes.constants'

const Home = lazy(() => import('../pages/Home'))
const Components = lazy(() => import('../pages/Components'))

export const routes = createBrowserRouter([
	{
		path: AppRoutes.Home,
		element: <Home />,
	},
	{
		path: AppRoutes.Components,
		element: <Components />,
	},
])
