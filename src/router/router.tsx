import { BrowserRouter, Route, Routes } from 'react-router'
import { AuthorizationPage } from '../1 pages/authorization page/view/authorizationPage'
import { Dashboard } from '../1 pages/dashboard/dashboard'

import { AuthCheckAdapterPage } from '../1 pages/AuthCheckAdapterPage/authCheckAdapterPage'
import { Page404 } from '../1 pages/page404/page404'
import { SignUpPage } from '../1 pages/sign up page/signUpPage'

type Props = {}
export const AppRouter = ({}: Props) => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/'>
					<Route
						index
						element={
							<AuthCheckAdapterPage>
								<Dashboard />
							</AuthCheckAdapterPage>
						}
					/>
					<Route
						path='login'
						element={
							<AuthCheckAdapterPage>
								<AuthorizationPage />
							</AuthCheckAdapterPage>
						}
					/>
					<Route
						path='sign-up'
						element={
							<AuthCheckAdapterPage>
								<SignUpPage />
							</AuthCheckAdapterPage>
						}
					/>

					<Route path='*' element={<Page404 />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
