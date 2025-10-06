import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { AppRequestStatus } from '../../../shared/constants/requestsStatus'
import { getBoilersThunk } from '../services/thunks/get-boilers-thunk'
import type { IBoilerParts } from '../types/boiler-parts'
import type { IBoilersResponse } from '../types/boilers-response'

export interface IBoilerState {
	status: AppRequestStatus
	boilers: IBoilerParts[]
	count: number
	errorMessage?: string
}

const initialState: IBoilerState = {
	boilers: [],
	status: AppRequestStatus.default,
	count: 0,
}

const _boilerReducer = createSlice({
	name: 'boiler',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(
			getBoilersThunk.pending.type,
			(state, action: PayloadAction<IBoilersResponse>) => {
				state.status = 'loading'
			}
		),
			builder.addCase(
				getBoilersThunk.fulfilled.type,
				(state, action: PayloadAction<IBoilersResponse>) => {
					state.status = 'success'
					state.boilers = action.payload.rows
					state.count = action.payload.count
				}
			),
			builder.addCase(
				getBoilersThunk.rejected.type,
				(state, action: PayloadAction<string>) => {
					state.status = 'error'
					state.errorMessage = action.payload
					toast.error(action.payload)
				}
			)
	},
})

export const boilerReducer = _boilerReducer.reducer
