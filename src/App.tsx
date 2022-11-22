import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'

const App = () => {
	return (
		<>
			<RouterProvider
				router={routes}
				fallbackElement={<div />}
			/>
		</>
	)
}

export default App
