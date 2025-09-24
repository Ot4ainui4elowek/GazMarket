export const AppRequestStatus = {
	loading: 'loading',
	success: 'success',
	error: 'error',
	default: 'default',
} as const
export type AppRequestStatus =
	(typeof AppRequestStatus)[keyof typeof AppRequestStatus]
