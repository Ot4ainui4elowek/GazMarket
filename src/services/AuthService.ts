import type { AxiosResponse } from 'axios'
import $api from '../http'
import type { ILoginResponse } from '../models/response/LoginResponse'
import type { IRegistrationResponse } from '../models/response/RegistrarionResponse'

export default class AuthService {
	static async signUp(
		username: string,
		password: string,
		email: string
	): Promise<AxiosResponse<IRegistrationResponse>> {
		return $api.post('/users/signup', { username, password, email })
	}

	static async login(
		username: string,
		password: string
	): Promise<AxiosResponse<ILoginResponse>> {
		return $api.post('/users/login', { username, password })
	}
}
