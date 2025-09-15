import { useCallback, useState } from 'react'
import { TextButton } from '../textButton/textButton'

import s from './passwordInput.module.css'

type Props = {
	inputProps?: React.InputHTMLAttributes<HTMLInputElement>
	title?: string
}
export const PasswordInput = ({ inputProps, title }: Props) => {
	const [isVisible, setIsVisible] = useState(false)
	const getPasswordVisible = useCallback((): string => {
		return !isVisible ? 'password' : 'text'
	}, [isVisible])
	const switchPasswordVisible = () => {
		setIsVisible(value => !value)
	}
	return (
		<div className={s.paswordInput}>
			<div className={s.passwordHeader}>
				<h4>{title ?? 'Пароль'}</h4>
				<TextButton className={s.hideButton} onClick={switchPasswordVisible}>
					{isVisible ? 'Скрыть' : 'Показать'} пароль
				</TextButton>
			</div>
			<input
				{...inputProps}
				className={s.formInputs}
				type={getPasswordVisible()}
			/>
		</div>
	)
}
