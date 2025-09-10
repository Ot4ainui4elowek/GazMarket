import type { AppRootStateType } from '../../store'

export const isLoggedIn = (state: AppRootStateType) =>
	state.authorization.isLoggedIn

export const user = (state: AppRootStateType) => state.authorization.user
