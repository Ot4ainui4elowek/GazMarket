import type { ICartState } from './cartReducer'

export const selectCartItems = (state: ICartState) => state.items
export const selectCartTotalPrice = (state: ICartState) => state.totalPrice
export const selectCartStatus = (state: ICartState) => state.status
