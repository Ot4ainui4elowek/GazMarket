import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import './index.scss'
import { AppRouter } from './infrastructure/router/router.tsx'
import { store } from './shared/store/store.ts'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<AppRouter />
			<ToastContainer position='top-center' />
		</Provider>
	</StrictMode>
)
