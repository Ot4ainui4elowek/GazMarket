export interface ILoginResponse {
	msg: string
	user: IUser
}

export interface IUser {
	userId: number
	username: string
	email: string
}
