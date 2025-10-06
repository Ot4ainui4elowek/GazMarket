import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

import { TextButton } from '../../../../../shared/UI/textButton/textButton'
import { useAppDispatch } from '../../../../../shared/store/hooks'
import { authSignUp } from '../../../services/thunks/signUpThunk'
import type { ISignUpRequest } from '../../types/props'
import { Emailinput } from '../email_Input/email_input'
import { PasswordInput } from '../paaswordinput/passwordInput'
import { UserNameInput } from '../userNameInput/userNameInput'
import s from './signUpModule.module.css'

export const SinUpModule = () => {
	const dispatch = useAppDispatch()
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
		<>
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
		</>
	)
}
