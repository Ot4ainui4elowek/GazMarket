import { createAsyncThunk } from '@reduxjs/toolkit'
import AuthService from '../../../../services/AuthService'
import { showAuthError } from '../../../../utils/requestsErrors'
import { tryCatch } from '../../../../utils/tryCatchForThunk'

export const loginCheckThunk = createAsyncThunk(
	'user/login-check',
	async (_, thunkApi) =>
		await tryCatch({
			errorCall: e => {
				showAuthError(e)
			},
			call: async () => {
				return (await AuthService.loginCheck()).data
			},
			thunkApi,
		})
)
