import { AppPasswordInput } from '../../../../../shared/UI/passwordInput/passwordInput'
import InputRHF from '../../../../../shared/styles/inputRHF/inputRHF'
import type { ILoginInputProps } from '../../../sign up page/types/props'
export const UserPasswordInput = ({ errors, register }: ILoginInputProps) => {
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
