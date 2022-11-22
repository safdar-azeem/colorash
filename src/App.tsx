import { Loader } from '@mantine/core'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'

const App = () => {
	return (
		<>
			<RouterProvider
				router={routes}
				fallbackElement={<Loader />}
			/>
		</>
	)
}

export default App
