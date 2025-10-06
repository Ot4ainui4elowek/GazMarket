import { createSlice } from '@reduxjs/toolkit'
import { AppRequestStatus } from '../../../shared/constants/requestsStatus'
import type { IBoilerParts } from '../types/boiler-parts'

export interface IBoilerState {
	status: AppRequestStatus
	boilers: IBoilerParts[]
}

const initialState: IBoilerState = {
	boilers: [],
	status: AppRequestStatus.default,
}

const _boilerReducer = createSlice({
	name: 'boiler',
	initialState,
	reducers: {},
	extraReducers: builder => {},
})

export const boilerReducer = _boilerReducer.reducer
