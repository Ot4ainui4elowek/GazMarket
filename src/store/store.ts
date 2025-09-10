import { configureStore } from '@reduxjs/toolkit'
import authorizationReducer from './reducers/authReducer/authorizationReducer'

export const store = configureStore({
	reducer: {
		authorization: authorizationReducer,
	},
})

export type AppRootStateType = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
