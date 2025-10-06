import { useAppSelector } from '../../../shared/store/hooks'
import type { AppRootStateType } from '../../../shared/store/store'

export const selectBoilers = (state: AppRootStateType) => state.boilers.boilers
export const selectBoilersStatus = (state: AppRootStateType) =>
	state.boilers.status
export const selectBoilersCount = (state: AppRootStateType) =>
	state.boilers.count

export const boilersSelectros = () => {
	const state = useAppSelector(state => state.boilers)
	const { boilers, count, status, errorMessage } = { ...state }
	return { boilers, count, status, errorMessage }
}
