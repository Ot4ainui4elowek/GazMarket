import type { AppRootStateType } from '../../store'

export const isLoggedInSelector = (state: AppRootStateType) =>
	state.authorization.isLoggedIn

export const userSelector = (state: AppRootStateType) =>
	state.authorization.user

export const userStatusSelector = (state: AppRootStateType) =>
	state.authorization.status
