import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { userSelector } from '../../store/reducers/authReducer/auth.selectors'
import { authSignUp } from '../../store/reducers/authReducer/thunks/signUpThunk'

export const SignUpPage = () => {
	const dispatch = useAppDispatch()
	const user = useAppSelector(state => userSelector(state))
	console.log(typeof user)
	return (
		<div className='registration'>
			Регистрация
			{user && user.username}
			<input type='text' />
			<input type='text' />
			<input type='password' />
			<button
				onClick={() =>
					dispatch(
						authSignUp({
							email: 'sssdssds',
							username: 'emssilysssssdsds',
							password: 'emilyspasss',
						})
					)
				}
			>
				Зарегистрироваться
			</button>
		</div>
	)
}
