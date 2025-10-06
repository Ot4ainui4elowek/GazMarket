import { useNavigate } from 'react-router'
import { TextButton } from '../../../../../shared/UI/textButton/textButton'
import s from './signUp.module.css'
export const SignAppButton = () => {
	const navigate = useNavigate()
	const goToSignUp = () => {
		navigate('/sign-up')
	}
	return (
		<h4 className={s.signUpText}>
			Ещё нет аккаунта?{' '}
			<TextButton className={s.signUpButton} onClick={goToSignUp}>
				Зарегистрироваться
			</TextButton>
		</h4>
	)
}
