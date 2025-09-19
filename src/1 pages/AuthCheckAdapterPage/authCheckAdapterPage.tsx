import { useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router'
import { useAppDispatch } from '../../store/hooks'
import { loginCheckThunk } from '../../store/reducers/authReducer/thunks/loginCheckThunk'
type Props = {
	children: React.ReactNode
}
export const AuthCheckAdapterPage = ({ children }: Props) => {
	const [isAuth, setIsAuth] = useState<boolean>()
	const location = useLocation()
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const checkLogin = async () => {
		const res = await dispatch(loginCheckThunk())
		if (res.type !== loginCheckThunk.fulfilled.type) {
			setIsAuth(false)
		} else if (res.type === loginCheckThunk.fulfilled.type) {
			setIsAuth(true)
		}
	}
	checkLogin()

	const goToPageIfAuth = () => {
		if (
			location.pathname.includes('login') ||
			location.pathname.includes('sign-up')
		) {
			return <Navigate to='/' />
		} else {
			return children
		}
	}
	const goToPageIfNotAuth = () => {
		console.log('isNotAuth')
		if (location.pathname == '/login' || location.pathname == '/sign-up') {
			return children
		} else {
			return <Navigate to='/login' />
		}
	}
	if (isAuth == undefined) return <h1>loading</h1>
	return isAuth ? goToPageIfAuth() : goToPageIfNotAuth()
}
