import type { AxiosResponse } from 'axios'
import $api from '../../../services'
import type { IBoilerPartsQuery } from '../types/boilers-requests'
import type { IBoilersResponse } from '../types/boilers-response'

export default class BoilersService {
	public static getBoilers = async ({
		limit,
		offset,
	}: IBoilerPartsQuery): Promise<AxiosResponse<IBoilersResponse>> => {
		return await $api.get(`/boiler-parts?limit=${limit}&offset=${offset}`)
	}
}
