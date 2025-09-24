import type { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import { AppHttpStatus } from '../constants/HttpStatus'

export const showAuthError = (error: unknown) => {
	const err = error as AxiosError
	switch (err.response?.status) {
		case AppHttpStatus.UNAUTHORIZED:
			toast.error('Неверное имя пользователя или пароль')
			return
		case AppHttpStatus.CONFLICT:
			toast.error('Пользователь с таким именем или почтой уже существует!')
			return
		case AppHttpStatus.FORBIDDEN:
			toast.error('Вы не авторизированы')
			return
	}
}
