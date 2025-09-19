import { AppInput } from '../../../../4 UI/appInput/appInput'
import InputRHF from '../../../../styles/inputRHF/inputRHF'
import type { ISignUpProps } from '../../../../types/auth'

export const Emailinput = ({ errors, register }: ISignUpProps) => {
	return (
		<label className={InputRHF.inputStyle}>
			<AppInput
				title='Почта'
				inputProps={{
					placeholder: 'vladimir123@mail.com',

					...register('email', {
						required: 'Введите почту!',
						pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
					}),
				}}
			/>
			{errors.email && (
				<span className={InputRHF.errorSpan}>{errors.email.message}</span>
			)}
		</label>
	)
}
