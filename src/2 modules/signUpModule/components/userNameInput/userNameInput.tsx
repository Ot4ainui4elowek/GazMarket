import { AppInput } from '../../../../4 UI/appInput/appInput'
import InputRHF from '../../../../styles/inputRHF/inputRHF'
import type { ISignUpProps } from '../../../../types/auth'

export const UserNameInput = ({ register, errors }: ISignUpProps) => {
	return (
		<label className={InputRHF.inputStyle}>
			<AppInput
				title='Имя пользователя'
				inputProps={{
					placeholder: 'Vladimir123',

					...register('username', {
						required: 'Неправильное имя пользователя!',
						minLength: 3,
						maxLength: 15,
						pattern: /^(?=(?:.*[A-Za-z]){2,})[A-Za-z][A-Za-z0-9]{2,15}$/,
					}),
				}}
			/>
			{errors.username && (
				<span className={InputRHF.errorSpan}>{errors.username.message}</span>
			)}
			{errors.username && errors.username.type === 'minLength' && (
				<span className={InputRHF.errorSpan}>Минимум 3 символа</span>
			)}
			{errors.username && errors.username.type === 'maxLength' && (
				<span className={InputRHF.errorSpan}>Максимум 15 символов</span>
			)}
		</label>
	)
}
