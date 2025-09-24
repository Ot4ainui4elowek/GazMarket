import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { AppRequestStatus } from '../../../constants/requestsStatus'
import type { IBoilerParts } from '../../../types/boilerParts'

export interface ICartState {
	status: AppRequestStatus
	items: IBoilerParts[]
	totalPrice: number
}

const initialState: ICartState = {
	status: AppRequestStatus.default,
	items: [],
	totalPrice: 0,
}

export const cartReducer = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<IBoilerParts>) => {
			state.items.push(action.payload)
			state.totalPrice += Number(action.payload.price)
		},
		removeFromCart: (state, action: PayloadAction<number>) => {
			const index = state.items.findIndex(item => item.id === action.payload)
			if (index !== -1) {
				state.totalPrice -= Number(state.items[index].price)
				state.items.splice(index, 1)
			}
		},
		clearCart: state => {
			state.items = []
			state.totalPrice = 0
		},
	},
})
export const { addToCart, removeFromCart, clearCart } = cartReducer.actions

export default cartReducer.reducer
