import { createAsyncThunk } from '@reduxjs/toolkit'
import type { IUser } from '../../../../models/response/LoginResponse'
import AuthService from '../../../../services/AuthService'

export const authSignUp = createAsyncThunk(
	'user/signUp',
	async ({
		username,
		password,
		email,
	}: {
		username: string
		password: string
		email: string
	}) => {
		try {
			const { data } = await AuthService.signUp(username, password, email)
			const user: IUser = {
				email: data.email,
				userId: data.id,
				username: data.username,
			}
			localStorage.setItem('user', JSON.stringify(user))
		} catch (e) {
			return e
		} finally {
		}
	}
)
