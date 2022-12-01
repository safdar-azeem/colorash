import { extend } from 'colord'
import a11yPlugin from 'colord/plugins/a11y'
import mixPlugin from 'colord/plugins/mix'
import namesPlugin from 'colord/plugins/names'
import { RouterProvider } from 'react-router-dom'
import FallBackLoader from './Components/Base/FallBackLoader'
import { routes } from './Routes'
import { Toaster } from 'react-hot-toast'

extend([namesPlugin, mixPlugin, a11yPlugin])

const App = () => {
	return (
		<>
			<RouterProvider
				router={routes}
				fallbackElement={<FallBackLoader />}
			/>
			<Toaster position='bottom-center' />
		</>
	)
}

export default App
