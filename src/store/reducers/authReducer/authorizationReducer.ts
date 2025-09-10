import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type {
	ILoginResponse,
	IUser,
} from '../../../models/response/LoginResponse'
import type { IRegistrationResponse } from '../../../models/response/RegistrarionResponse'
import { authLogin } from './thunks/loginThunk'
import { authSignUp } from './thunks/registratinThunk'

export interface IAuthReducer {
	user?: IUser
	isLoggedIn: boolean
}

const userJSON = localStorage.getItem('user')
const user = userJSON ? JSON.parse(userJSON) : null
const initialState: IAuthReducer = {
	user: user,
	isLoggedIn: !!user,
}

export const authorizationReducer = createSlice({
	name: 'user-auth',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(
				authSignUp.fulfilled.type,
				(state, action: PayloadAction<IRegistrationResponse>) => {
					const user = action.payload
					state.isLoggedIn = !!user
					state.user = {
						userId: user.id,
						email: user.email,
						username: user.username,
					}
				}
			)
			.addCase(
				authLogin.fulfilled.type,
				(state, action: PayloadAction<ILoginResponse>) => {
					const user = action.payload.user
					state.user = user
					state.isLoggedIn = !!user
				}
			)
	},
})

export const {} = authorizationReducer.actions

export default authorizationReducer.reducer
