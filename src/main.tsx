import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/sass/main.scss'
import FallBackLoader from './components/reusable/FallBackLoader'
import { inject } from '@vercel/analytics'
inject()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Suspense fallback={<FallBackLoader />}>
			<App />
		</Suspense>
	</React.StrictMode>
)
