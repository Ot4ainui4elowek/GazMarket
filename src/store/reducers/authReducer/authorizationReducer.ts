import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type {
	ILoginResponse,
	IUser,
} from '../../../types/response/LoginResponse'
import type { ISignUpResponse } from '../../../types/response/RegistrarionResponse'
import { loginCheckThunk } from './thunks/loginCheckThunk'
import { authLoginThunk } from './thunks/loginThunk'
import { logoutThunk } from './thunks/logoutthunk'
import { authSignUp } from './thunks/signUpThunk'

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
			.addCase(authSignUp.rejected.type, (state, action: PayloadAction) => {})

			.addCase(
				authSignUp.fulfilled.type,
				(state, action: PayloadAction<ISignUpResponse>) => {
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
				authLoginThunk.rejected.type,
				(state, action: PayloadAction) => {}
			)
			.addCase(
				authLoginThunk.fulfilled.type,
				(state, action: PayloadAction<ILoginResponse>) => {
					state.user = user
					state.isLoggedIn = !!user
				}
			)
			.addCase(
				loginCheckThunk.fulfilled.type,
				(state, action: PayloadAction<IUser>) => {
					state.isLoggedIn = !!action.payload
					state.user = action.payload
				}
			)
			.addCase(logoutThunk.fulfilled.type, (_, action) => {})
	},
})

export const {} = authorizationReducer.actions

export default authorizationReducer.reducer
