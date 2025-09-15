export const HTTPStatus = {
	UNAUTHORIZED: 401,
	FORBIDDEN: 403,
	CONFLICT: 409,
} as const
export type HTTPStatus = (typeof HTTPStatus)[keyof typeof HTTPStatus]
