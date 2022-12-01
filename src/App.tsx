import { extend } from 'colord'
import a11yPlugin from 'colord/plugins/a11y'
import mixPlugin from 'colord/plugins/mix'
import namesPlugin from 'colord/plugins/names'
import { RouterProvider } from 'react-router-dom'
import FallBackLoader from './Components/Base/FallBackLoader'
import ToastProvider from './Components/Base/ToastProvider'
import { routes } from './Routes'

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
