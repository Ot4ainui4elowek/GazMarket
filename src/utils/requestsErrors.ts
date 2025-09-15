import type { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import { HTTPStatus } from '../constants/HttpStatus'

export const showAuthError = (error: unknown) => {
	const err = error as AxiosError
	switch (err.response?.status) {
		case HTTPStatus.UNAUTHORIZED:
			toast.error('Неверное имя пользователя или пароль')
			return
		case HTTPStatus.CONFLICT:
			toast.error('Пользователь с таким именем или почтой уже существует!')
			return
		case HTTPStatus.FORBIDDEN:
			toast.error('Вы не авторизированы')
			return
	}
}
