import { RouterProvider } from 'react-router-dom'
import FallBackLoader from './components/base/FallBackLoader'
import { routes } from './routes'

const App = () => {
	return (
		<>
			<RouterProvider
				router={routes}
				fallbackElement={<FallBackLoader />}
			/>
		</>
	)
}

export default App
