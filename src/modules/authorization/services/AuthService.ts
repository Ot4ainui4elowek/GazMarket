import type { AxiosResponse } from 'axios'
import $api from '../../../shared/services'
import type {
	ILoginResponse,
	IUser,
} from '../../../shared/types/response/LoginResponse'
import type { ISignUpResponse } from '../../../shared/types/response/RegistrarionResponse'
import type { ILoginRequest } from '../authorization page/types/props'
import type { ISignUpRequest } from '../sign up page/types/props'

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
