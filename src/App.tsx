import { extend } from 'colord'
import mixPlugin from 'colord/plugins/mix'
import { RouterProvider } from 'react-router-dom'
import FallBackLoader from './components/base/FallBackLoader'
import ToastProvider from './components/base/ToastProvider'
import { routes } from './routes'

extend([mixPlugin])

const App = () => {
	return (
		<>
			<ToastProvider />
			<RouterProvider
				router={routes}
				fallbackElement={<FallBackLoader />}
			/>
		</>
	)
}

export default App
