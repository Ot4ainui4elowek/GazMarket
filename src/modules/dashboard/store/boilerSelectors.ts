import type { AppRootStateType } from '../../../shared/store/store'

export const selectBoilers = (state: AppRootStateType) => state.boilers.boilers
export const selectBoilersStatus = (state: AppRootStateType) =>
	state.boilers.status
export const selectBoilersCount = (state: AppRootStateType) =>
	state.boilers.count
