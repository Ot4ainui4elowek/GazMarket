export const RequestStatus = {
	loading: 'loading',
	success: 'success',
	error: 'error',
	default: 'default',
} as const
export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus]
