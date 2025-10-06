import type { MultiValue, SingleValue } from 'react-select'

export interface ErrorResponse {
	message: string
	error: string
	statusCode: number
}
export interface IOption {
	label: string | number
	value: string | number
}

export type SelectOptionType = MultiValue<IOption> | SingleValue<IOption> | null

export interface IAccordion {
	children: React.ReactNode
	title: string | false
	titleClass?: string
	arrowOpenClass?: string
}
