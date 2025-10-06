import { createAsyncThunk } from '@reduxjs/toolkit'
import { tryCatch } from '../../../../shared/utils/tryCatchForThunk'
import type { IBoilerPartsQuery } from '../../types/boilers-requests'
import type { IBoilersResponse } from '../../types/boilers-response'
import BoilersService from '../BoilersService'

export const getBoilersThunk = createAsyncThunk(
	'/boilers',
	async (arg: IBoilerPartsQuery, thunkApi) =>
		await tryCatch<IBoilersResponse>({
			call: async () => {
				return (await BoilersService.getBoilers({ ...arg })).data
			},
			thunkApi,
			errorCall: e => {},
		})
)
