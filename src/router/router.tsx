import { BrowserRouter, Route, Routes } from 'react-router'
import { AuthorizationPage } from '../1 pages/authorization page/view/authorizationPage'
import { SignUpPage } from '../1 pages/sign up page/signUpPage'

type Props = {}
export const AppRouter = ({}: Props) => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/'>
					<Route index element={<AuthorizationPage />} />
					<Route path='sign-up' element={<SignUpPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
