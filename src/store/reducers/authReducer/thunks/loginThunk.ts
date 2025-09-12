import { createAsyncThunk } from '@reduxjs/toolkit'
import type { AxiosError } from 'axios'
import AuthService, {
	type ILoginRequest,
} from '../../../../services/AuthService'
import USER_LOCAL_STORAGE_API from '../../../../utils/userLocalSGApi'

export const authLogin = createAsyncThunk(
	'user/login',
	async (arg: ILoginRequest, thunkApi) => {
		const { rejectWithValue } = thunkApi

		try {
			const res = await AuthService.login({ ...arg })
			USER_LOCAL_STORAGE_API.setUser(res.data.user)
			return res.data
		} catch (error) {
			const err = error as AxiosError
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
