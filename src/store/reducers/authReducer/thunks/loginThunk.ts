import { createAsyncThunk } from '@reduxjs/toolkit'
import type { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import AuthService from '../../../../services/AuthService'
import type { ILoginRequest } from '../../../../types/auth'
import { showAuthError } from '../../../../utils/requestsErrors'
import USER_LOCAL_STORAGE_API from '../../../../utils/userLocalSGApi'

export const authLoginThunk = createAsyncThunk(
	'user/login',
	async (arg: ILoginRequest, thunkApi) => {
		const { rejectWithValue } = thunkApi

		try {
			const res = await AuthService.login({ ...arg })
			USER_LOCAL_STORAGE_API.setUser(res.data.user)
			toast.success('Вход выполнен успешно')
			return res.data
		} catch (error) {
			const err = error as AxiosError
			showAuthError(error)
			return rejectWithValue(
				`  ${JSON.stringify(
					err.response?.data
				)}  Ошибка входа в аккаунт! Неверные Данные login:${
					arg.username
				}password:${arg.password}`
			)
		}
	}
)
