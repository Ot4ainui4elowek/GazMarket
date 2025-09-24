import { configureStore } from '@reduxjs/toolkit'
import authorizationReducer from './reducers/authReducer/authorizationReducer'
import cartReducer from './reducers/cartReducer/cartReducer'

export const store = configureStore({
	reducer: {
		authorization: authorizationReducer,
		cart: cartReducer,
	},
})

export type AppRootStateType = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
