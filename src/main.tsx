import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import './assets/sass/main.scss'
import FallBackLoader from './components/base/FallBackLoader'
import { store } from './store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Suspense fallback={<FallBackLoader />}>
			<Provider store={store}>
				<App />
			</Provider>
		</Suspense>
	</React.StrictMode>
)
