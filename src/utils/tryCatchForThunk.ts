import type { AsyncThunkConfig, GetThunkAPI } from '@reduxjs/toolkit'
import type { AxiosError } from 'axios'
import type { ErrorResponse } from '../models/commonTypes'

export async function tryCatch<T>({
	call,
	thunkApi,
}: {
	thunkApi: GetThunkAPI<AsyncThunkConfig>
	call: () => Promise<T>
}): Promise<T | ReturnType<typeof thunkApi.rejectWithValue>> {
	try {
		const data = await call()

		return data
	} catch (e) {
		const error = e as AxiosError<ErrorResponse>
		console.error(
			'REQUEST_ERROR: ' + (error.response?.data.message ?? error.message)
		)
		return thunkApi.rejectWithValue(
			error.response?.data.message ?? error.message
		)
	}
}
