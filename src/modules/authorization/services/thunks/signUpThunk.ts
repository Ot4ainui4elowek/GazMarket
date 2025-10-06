import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import type { IUser } from '../../../../shared/types/response/LoginResponse'
import type { ISignUpResponse } from '../../../../shared/types/response/RegistrarionResponse'
import { showAuthError } from '../../../../shared/utils/requestsErrors'
import { tryCatch } from '../../../../shared/utils/tryCatchForThunk'
import type { ISignUpRequest } from '../../sign-up-page/types/props'
import AuthService from '../AuthService'

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
