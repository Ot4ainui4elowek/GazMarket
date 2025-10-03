import type { AxiosResponse } from 'axios'
import $api from '../http'
import type { BoilersRequest } from '../types/requests/Boilersrequests'
import type { BoilersResponse } from '../types/response/BoilersResponse'

export default class BoilersService {
	public static getBoilers = async ({
		limit,
		offset,
	}: BoilersRequest): Promise<AxiosResponse<BoilersResponse>> => {
		return await $api.get(`/boiler-parts?limit=${limit}&offset=${offset}`)
	}
}
