import { configureStore } from '@reduxjs/toolkit'
import authorizationReducer from '../../modules/authorization/store/authorizationReducer'
import { boilerReducer } from '../../modules/dashboard/store/boilerReducer'
import cartReducer from '../components/header/components/cartDropDown/store/cartReducer'

export const store = configureStore({
	reducer: {
		authorization: authorizationReducer,
		cart: cartReducer,
		boilers: boilerReducer,
	},
})

export type AppRootStateType = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
