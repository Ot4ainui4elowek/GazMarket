import type { AsyncThunkConfig, GetThunkAPI } from '@reduxjs/toolkit'
import type { AxiosError } from 'axios'
import type { ErrorResponse } from '../types/common-types'

export async function tryCatch<T>({
	call,
	thunkApi,
	errorCall,
}: {
	thunkApi: GetThunkAPI<AsyncThunkConfig>
	call: () => Promise<T>
	errorCall?: (E: unknown) => void
}): Promise<T | ReturnType<typeof thunkApi.rejectWithValue>> {
	try {
		const data = await call()

		return data
	} catch (e) {
		const error = e as AxiosError<ErrorResponse>
		console.error(
			'REQUEST_ERROR: ' + (error.response?.data.message ?? error.message)
		)
		errorCall && errorCall(e)
		return thunkApi.rejectWithValue(
			error.response?.data.message ?? error.message
		)
	}
}
