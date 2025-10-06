import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { useAppDispatch } from '../../../../../shared/store/hooks'
import { authLoginThunk } from '../../../services/thunks/loginThunk'
import type { ILoginRequest } from '../../types/props'
import { SignAppButton } from '../signUp/signUpButton'
import { UserNameInput } from '../userNameInput/userNameInput'
import { UserPasswordInput } from '../userPasswordInput/userPasswordInput'
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
		<>
			<form className={s.logInModule} onSubmit={handleSubmit(onSubmit)}>
				<h1 className={s.loginHeader}>Войдите в аккаунт</h1>
				<UserNameInput register={register} errors={errors} />

				<UserPasswordInput register={register} errors={errors} />
				<button type='submit' className={s.loginButton}>
					Войти
				</button>
				<SignAppButton />
			</form>
		</>
	)
}
