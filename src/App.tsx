import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'

const App = () => {
	return (
		<div>
			<RouterProvider
				router={routes}
				fallbackElement={<div />}
			/>
		</div>
	)
}

export default App
