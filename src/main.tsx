import { MantineProvider } from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/css/main.css'
import './assets/css/theme.css'
import FallBackLoader from './components/base/FallBackLoader'
import theme from './theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Suspense fallback={<FallBackLoader />}>
			<MantineProvider
				withGlobalStyles
				withNormalizeCSS
				theme={theme}>
				<NotificationsProvider
					position='top-right'
					autoClose={2000}>
					<App />
				</NotificationsProvider>
			</MantineProvider>
		</Suspense>
	</React.StrictMode>
)
