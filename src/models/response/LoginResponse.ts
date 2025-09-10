export interface ILoginResponse {
	user: IUser
	msg: string
}

export interface IUser {
	userId: number
	username: string
	email: string
}
