import { useCallback, useState } from 'react'
import { TextButton } from '../textButton/textButton'

import { AppInput } from '../appInput/appInput'
import s from './passwordInput.module.css'

type Props = {
	inputProps?: React.InputHTMLAttributes<HTMLInputElement>
	title?: string
}
export const AppPasswordInput = ({ inputProps, title }: Props) => {
	const [isVisible, setIsVisible] = useState(false)
	const getPasswordVisible = useCallback((): string => {
		return !isVisible ? 'password' : 'text'
	}, [isVisible])
	const switchPasswordVisible = () => {
		setIsVisible(value => !value)
	}
	return (
		<div className={s.paswordInput}>
			<AppInput
				inputHeaderActions={
					<TextButton className={s.hideButton} onClick={switchPasswordVisible}>
						{isVisible ? 'Скрыть' : 'Показать'} пароль
					</TextButton>
				}
				title={title ?? 'Пароль'}
				inputProps={{ ...inputProps, type: getPasswordVisible() }}
			/>
		</div>
	)
}
