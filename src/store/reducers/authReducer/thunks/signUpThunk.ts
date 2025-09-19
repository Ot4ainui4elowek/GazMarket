import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import AuthService from '../../../../services/AuthService'
import type { ISignUpRequest } from '../../../../types/auth'
import type { IUser } from '../../../../types/response/LoginResponse'
import type { ISignUpResponse } from '../../../../types/response/RegistrarionResponse'
import { showAuthError } from '../../../../utils/requestsErrors'
import { tryCatch } from '../../../../utils/tryCatchForThunk'

export const authSignUp = createAsyncThunk(
	'user/signUp',
	async (newUser: ISignUpRequest, thunkApi) =>
		await tryCatch<ISignUpResponse>({
			thunkApi: thunkApi,
			errorCall: e => {
				showAuthError(e)
			},
			call: async () => {
				const { data } = await AuthService.signUp(newUser)
				console.log(data)
				const user: IUser = {
					email: data.email,
					userId: data.id,
					username: data.username,
				}
				toast.success('Пользователь создан!')
				localStorage.setItem('user', JSON.stringify(user))
				return data
			},
		})
)
