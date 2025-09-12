import { useAppDispatch } from '../../store/hooks'
import { authSignUp } from '../../store/reducers/authReducer/thunks/signUpThunk'
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
						authSignUp({
							email: 'sssds',
							username: 'emilysssssdss',
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
