import type { AxiosResponse } from 'axios'
import $api from '../http'
import type { ILoginResponse } from '../models/response/LoginResponse'
import type { ISignUpResponse } from '../models/response/RegistrarionResponse'

export default class AuthService {
	static async signUp(
		newUser: ISignUpRequest
	): Promise<AxiosResponse<ISignUpResponse>> {
		return $api.post('/users/signup', newUser)
	}

	static async login(
		user: ILoginRequest
	): Promise<AxiosResponse<ILoginResponse>> {
		return $api.post('/users/login', user)
	}
}

export interface ILoginRequest {
	username: string
	password: string
}

export interface ISignUpRequest {
	username: string
	password: string
	email: string
}
