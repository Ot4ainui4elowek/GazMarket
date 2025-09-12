import { createAsyncThunk } from '@reduxjs/toolkit'
import type { IUser } from '../../../../models/response/LoginResponse'
import type { ISignUpResponse } from '../../../../models/response/RegistrarionResponse'
import AuthService, {
	type ISignUpRequest,
} from '../../../../services/AuthService'
import { tryCatch } from '../../../../utils/tryCatchForThunk'

export const authSignUp = createAsyncThunk(
	'user/signUp',
	async (newUser: ISignUpRequest, thunkApi) =>
		await tryCatch<ISignUpResponse>({
			thunkApi: thunkApi,
			call: async () => {
				const { data } = await AuthService.signUp(newUser)
				console.log(data)
				const user: IUser = {
					email: data.email,
					userId: data.id,
					username: data.username,
				}
				localStorage.setItem('user', JSON.stringify(user))
				return data
			},
		})
)
