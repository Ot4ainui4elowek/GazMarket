import { AppInput } from '../../../../../shared/UI/appInput/appInput'
import InputRHF from '../../../../../shared/styles/inputRHF/inputRHF'
import type { ILoginInputProps } from '../../../sign up page/types/props'

export const UserNameInput = ({ errors, register }: ILoginInputProps) => {
	return (
		<label className={InputRHF.inputStyle}>
			<AppInput
				title='Имя пользователя'
				inputProps={{
					placeholder: 'Vladimir123',
					type: 'text',

					...register('username', {
						required: 'Введите имя пользователя!',
						minLength: 3,
						maxLength: 15,
					}),
				}}
			/>
			{errors.username && (
				<span className={InputRHF.errorSpan}>{errors.username.message}</span>
			)}
			{errors.username && errors.username.type === 'minLength' && (
				<span className={InputRHF.errorSpan}>Минимум 3 символа!</span>
			)}
			{errors.username && errors.username.type === 'maxLength' && (
				<span className={InputRHF.errorSpan}>Максимум 15 символов!</span>
			)}
		</label>
	)
}
