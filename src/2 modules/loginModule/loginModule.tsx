import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { AuthAdaptiveWrapper } from '../../3 components/authAdaptiveWrapper/authAdaptiveWrapper'
import { useAppDispatch } from '../../store/hooks'
import { authLoginThunk } from '../../store/reducers/authReducer/thunks/loginThunk'
import type { ILoginRequest } from '../../types/auth'
import { SignAppButton } from './components/signUp/signUpButton'
import { UserNameInput } from './components/userNameInput/userNameInput'
import { UserPasswordInput } from './components/userPasswordInput/userPasswordInput'
import s from './loginModule.module.css'

export const LoginModule = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<ILoginRequest>()

	const onSubmit = async (data: ILoginRequest) => {
		const res = await dispatch(authLoginThunk(data))
		if (res.type == authLoginThunk.fulfilled.type) {
			navigate('/')
		}
	}

	return (
		<AuthAdaptiveWrapper>
			<form className={s.logInModule} onSubmit={handleSubmit(onSubmit)}>
				<h1 className={s.loginHeader}>Войдите в аккаунт</h1>
				<UserNameInput register={register} errors={errors} />

				<UserPasswordInput register={register} errors={errors} />
				<button type='submit' className={s.loginButton}>
					Войти
				</button>
				<SignAppButton />
			</form>
		</AuthAdaptiveWrapper>
	)
}
