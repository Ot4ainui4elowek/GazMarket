import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { AppRouter } from './router/router.tsx'
import { store } from './store/store.ts'
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<AppRouter />
			<ToastContainer position='top-center' />
		</Provider>
	</StrictMode>
)
