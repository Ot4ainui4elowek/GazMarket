import { createAsyncThunk } from '@reduxjs/toolkit'
import { tryCatch } from '../../../../shared/utils/tryCatchForThunk'
import AuthService from '../AuthService'

export const loginCheckThunk = createAsyncThunk(
	'user/login-check',
	async (_, thunkApi) =>
		await tryCatch({
			call: async () => {
				return (await AuthService.loginCheck()).data
			},
			thunkApi,
		})
)
