import type { IUser } from '../models/response/LoginResponse'

export default class USER_LOCAL_STORAGE_API {
	public static getUser(): IUser {
		return JSON.parse(localStorage.getItem('user') ?? '')
	}
	public static setUser(user: IUser): void {
		localStorage.setItem('user', JSON.stringify(user))
	}
}
