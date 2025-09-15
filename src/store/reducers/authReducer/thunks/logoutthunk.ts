import { createAsyncThunk } from '@reduxjs/toolkit'
import AuthService from '../../../../services/AuthService'
import { showAuthError } from '../../../../utils/requestsErrors'
import { tryCatch } from '../../../../utils/tryCatchForThunk'

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
