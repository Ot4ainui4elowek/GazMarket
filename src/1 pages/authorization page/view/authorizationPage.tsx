import { useState } from 'react'
import { AppInput } from '../../../4 UI/appInput/appInput'
import { PasswordInput } from '../../../4 UI/passwordInput/passwordInput'
import { SignAppButton } from '../components/signUp/signUpButton'
import s from './authorizationPage.module.css'

export const AuthorizationPage = () => {
	const [userName, setUserName] = useState('')
	const [userPassword, setUserPassword] = useState('')

	const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserName(e.target.value)
	}

	const handleUserPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserPassword(e.target.value)
	}

	return (
		<div className={s.loginPage}>
			<img
				className={s.backgroundImage}
				src='/images/log-in-background.jpg'
				alt=''
			/>
			<div className={s.loginContainer}>
				<div className={s.logInModule}>
					<h1 className={s.loginHeader}>Войдите в аккаунт</h1>
					<AppInput
						title='Имя пользователя'
						inputProps={{
							placeholder: 'Vladimir123',
							value: userName,
							onChange: handleUserNameChange,
							type: 'text',
						}}
					/>
					<PasswordInput
						inputProps={{
							placeholder: '**********',
							value: userPassword,
							onChange: handleUserPasswordChange,
						}}
					/>
					<button className={s.loginButton}>Войти</button>
					<SignAppButton />
				</div>
			</div>
		</div>
	)
}
