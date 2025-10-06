import { BrowserRouter, Route, Routes } from 'react-router'
import { AuthorizationPage } from '../../modules/authorization/authorization page'
import { Dashboard } from '../../modules/dashboard/dashboard'

import { SignUpPage } from '../../modules/authorization/sign up page/signUpPage'
import { Page404 } from '../../modules/page404/page404'
import { AuthCheckAdapterPage } from '../../shared/layouts/check-authorization-wrapper/authCheckAdapterPage'
import { AppRoutes } from './routes'

type Props = {}
export const AppRouter = ({}: Props) => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={AppRoutes.dashboard}>
					<Route
						index
						element={
							<AuthCheckAdapterPage>
								<Dashboard />
							</AuthCheckAdapterPage>
						}
					/>
					<Route
						path={AppRoutes.login}
						element={
							<AuthCheckAdapterPage>
								<AuthorizationPage />
							</AuthCheckAdapterPage>
						}
					/>
					<Route
						path={AppRoutes.signUp}
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
