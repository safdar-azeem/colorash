import { extend } from 'colord'
import a11yPlugin from 'colord/plugins/a11y'
import mixPlugin from 'colord/plugins/mix'
import namesPlugin from 'colord/plugins/names'
import { RouterProvider } from 'react-router-dom'
import FallBackLoader from './components/base/FallBackLoader'
import ToastProvider from './components/base/ToastProvider'
import { routes } from './routes'

extend([namesPlugin, mixPlugin, a11yPlugin])

const App = () => {
	return (
		<>
			<RouterProvider
				router={routes}
				fallbackElement={<FallBackLoader />}
			/>
			<ToastProvider />
		</>
	)
}

export default App
