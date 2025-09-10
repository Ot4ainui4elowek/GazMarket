import { useAppDispatch } from '../../store/hooks'
import { authLogin } from '../../store/reducers/authReducer/thunks/loginThunk'
import './authorizationPage.css'

function App() {
	const dispatch = useAppDispatch()

	return (
		<div className='registration'>
			Регистрация
			<input type='text' />
			<input type='password' />
			<button
				onClick={() =>
					dispatch(
						authLogin({
							username: 'emilys',
							password: 'emilyspass',
						})
					)
				}
			>
				Зарегистрироваться
			</button>
		</div>
	)
}

export default App
