import { createAsyncThunk } from '@reduxjs/toolkit'
import { showAuthError } from '../../../../shared/utils/requestsErrors'
import { tryCatch } from '../../../../shared/utils/tryCatchForThunk'
import AuthService from '../AuthService'

export const logoutThunk = createAsyncThunk(
	'user/logout',
	async (_, thunkApi) =>
		await tryCatch({
			thunkApi: thunkApi,
			errorCall: e => {
				showAuthError(e)
			},
			call: async () => {
				const res = await AuthService.logout()
				// await cookieStore.delete('connect.sid')
				return res.data
			},
		})
)
