import type { AppRootStateType } from '../../../shared/store/store'

export const selectIsLoggedIn = (state: AppRootStateType) =>
	state.authorization.isLoggedIn

export const selectUser = (state: AppRootStateType) => state.authorization.user
