import type { AxiosResponse } from 'axios'
import $api from '../http'
import type { ILoginRequest, ISignUpRequest } from '../types/auth'
import type { ILoginResponse, IUser } from '../types/response/LoginResponse'
import type { ISignUpResponse } from '../types/response/RegistrarionResponse'

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

	static async loginCheck(): Promise<AxiosResponse<IUser>> {
		return $api.get('/users/login-check')
	}

	static async logout(): Promise<AxiosResponse> {
		return $api.get('/users/logout')
	}
}
