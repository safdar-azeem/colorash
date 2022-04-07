import { extend } from 'colord'
import { routes } from './routes'
import { Toaster } from 'react-hot-toast'
import mixPlugin from 'colord/plugins/mix'
import a11yPlugin from 'colord/plugins/a11y'
import namesPlugin from 'colord/plugins/names'
import { RouterProvider } from 'react-router-dom'
import FallBackLoader from './components/reusable/FallBackLoader'

extend([namesPlugin, mixPlugin, a11yPlugin])

const App = () => {
   return (
      <>
         <RouterProvider router={routes} fallbackElement={<FallBackLoader />} />
         <Toaster position="bottom-center" />
      </>
   )
}

export default App
