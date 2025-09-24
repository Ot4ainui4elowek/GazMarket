export const AppHttpStatus = {
	UNAUTHORIZED: 401,
	FORBIDDEN: 403,
	CONFLICT: 409,
} as const
export type AppHttpStatus = (typeof AppHttpStatus)[keyof typeof AppHttpStatus]
