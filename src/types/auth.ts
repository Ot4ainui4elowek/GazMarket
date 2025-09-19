import type { FieldErrors, UseFormRegister } from 'react-hook-form'

export interface IAuthInputProps {
	register: UseFormRegister<ILoginRequest>
	errors: FieldErrors<ILoginRequest>
}
export interface ISignUpProps {
	register: UseFormRegister<ISignUpRequest>
	errors: FieldErrors<ISignUpRequest>
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
