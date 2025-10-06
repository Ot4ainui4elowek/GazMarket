import type { AppRootStateType } from '../../../../../shared/store/store'

export const selectCartItems = (state: AppRootStateType) => state.cart.items
export const selectCartTotalPrice = (state: AppRootStateType) =>
	state.cart.totalPrice
export const selectCartStatus = (state: AppRootStateType) => state.cart.status
