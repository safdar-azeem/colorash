import { MantineProvider } from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/css/main.css'
import './assets/css/theme.css'
import FallBackLoader from './components/base/FallBackLoader'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Suspense fallback={<FallBackLoader />}>
			<App />
		</Suspense>
	</React.StrictMode>
)
