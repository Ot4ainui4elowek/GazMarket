import { createAsyncThunk } from '@reduxjs/toolkit'
import AuthService from '../../../../services/AuthService'

export const authLogin = createAsyncThunk(
	'user/login',
	async ({ username, password }: { username: string; password: string }) => {
		try {
			const { data } = await AuthService.login(username, password)
			console.log(data)

			localStorage.setItem('user', JSON.stringify(data))
		} catch (e) {
			return e
		} finally {
		}
	}
)
