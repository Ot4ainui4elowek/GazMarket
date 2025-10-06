import type { FieldErrors, UseFormRegister } from 'react-hook-form'



export interface ISignUpProps {
	register: UseFormRegister<ISignUpRequest>
	errors: FieldErrors<ISignUpRequest>
}

export interface ISignUpRequest {
	username: string
	password: string
	email: string
}
