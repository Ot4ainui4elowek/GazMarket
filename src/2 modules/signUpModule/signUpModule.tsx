import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { AuthAdaptiveWrapper } from '../../3 components/authAdaptiveWrapper/authAdaptiveWrapper'
import { TextButton } from '../../4 UI/textButton/textButton'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { userStatusSelector } from '../../store/reducers/authReducer/auth.selectors'
import { authSignUp } from '../../store/reducers/authReducer/thunks/signUpThunk'
import type { ISignUpRequest } from '../../types/auth'
import { Emailinput } from './components/email_Input/email_input'
import { PasswordInput } from './components/paaswordinput/passwordInput'
import { UserNameInput } from './components/userNameInput/userNameInput'
import s from './signUpModule.module.css'

export const SinUpModule = () => {
	const dispatch = useAppDispatch()
	const status = useAppSelector(state => userStatusSelector(state))
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<ISignUpRequest>()

	const navigate = useNavigate()
	const onSubmit = async (data: ISignUpRequest) => {
		const res = await dispatch(authSignUp(data))
		if (res.type == authSignUp.fulfilled.type) {
			navigate('/login')
		}
	}

	const goToLoginPage = () => navigate('/login')
	return (
		<AuthAdaptiveWrapper>
			<form onSubmit={handleSubmit(onSubmit)} className={s.signupModule}>
				<h1 className={s.title}>Регистрация</h1>
				<UserNameInput register={register} errors={errors} />
				<Emailinput errors={errors} register={register} />
				<PasswordInput errors={errors} register={register} />
				<button type='submit'>Зарегистрироваться</button>
				<TextButton onClick={goToLoginPage} type='button'>
					Войти
				</TextButton>
			</form>
		</AuthAdaptiveWrapper>
	)
}
