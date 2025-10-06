export const AppRoutes = {
	dashboard: '/',
	login: 'login',
	signUp: 'sign-up',
} as const
export type AppRoutesType = (typeof AppRoutes)[keyof typeof AppRoutes]
