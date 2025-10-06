import type { FieldErrors, UseFormRegister } from 'react-hook-form'

export interface ILoginInputProps {
	register: UseFormRegister<ILoginRequest>
	errors: FieldErrors<ILoginRequest>
}

export interface ILoginRequest {
	username: string
	password: string
}
