import type { AxiosResponse } from 'axios'
import $api from '../../../services'
import type { BoilersRequest } from '../types/boilers-requests'
import type { BoilersResponse } from '../types/boilers-response'

export default class BoilersService {
	public static getBoilers = async ({
		limit,
		offset,
	}: BoilersRequest): Promise<AxiosResponse<BoilersResponse>> => {
		return await $api.get(`/boiler-parts?limit=${limit}&offset=${offset}`)
	}
}
