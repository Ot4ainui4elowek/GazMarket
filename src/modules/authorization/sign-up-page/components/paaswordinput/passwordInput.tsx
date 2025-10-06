import { AppPasswordInput } from '../../../../../shared/UI/passwordInput/passwordInput'
import InputRHF from '../../../../../shared/styles/inputRHF/inputRHF'
import type { ISignUpProps } from '../../types/props'

export const PasswordInput = ({ errors, register }: ISignUpProps) => {
	return (
		<label className={InputRHF.inputStyle}>
			<AppPasswordInput
				inputProps={{
					placeholder: '**************',
					...register('password', {
						required: 'Пароль должен содержать одну заглавную и одну цифру!',
						minLength: 8,
						pattern: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
					}),
				}}
			/>
			{errors.password && (
				<span className={InputRHF.errorSpan}>{errors.password.message}</span>
			)}
			{errors.password && errors.password.type === 'minLength' && (
				<span className={InputRHF.errorSpan}>
					Пароль должен быть не меньше 8 символов!
				</span>
			)}
		</label>
	)
}
