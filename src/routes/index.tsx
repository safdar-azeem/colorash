import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { AppRoutes } from '../constants/routes.constants'

const Home = lazy(() => import('../pages/Home'))

export const routes = createBrowserRouter([
	{
		path: AppRoutes.Home,
		element: <Home />,
	},
])
