import { AppPasswordInput } from '../../../../4 UI/passwordInput/passwordInput'
import InputRHF from '../../../../styles/inputRHF/inputRHF'
import type { IAuthInputProps } from '../../../../types/auth'
export const UserPasswordInput = ({ errors, register }: IAuthInputProps) => {
	return (
		<label className={InputRHF.inputStyle}>
			<AppPasswordInput
				inputProps={{
					placeholder: '**********',
					...register('password', {
						required: 'Введите пароль!',
						minLength: 8,
					}),
				}}
			/>
			{errors.password && (
				<span className={InputRHF.errorSpan}>{errors.password.message}</span>
			)}
			{errors.password && errors.password.type === 'minLength' && (
				<span className={InputRHF.errorSpan}>Минимум 8 символов!</span>
			)}
		</label>
	)
}
