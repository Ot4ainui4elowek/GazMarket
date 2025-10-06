import { BrowserRouter, Route, Routes } from 'react-router'
import { AuthorizationPage } from '../../modules/authorization/authorization page'
import { Dashboard } from '../../modules/dashboard/inde'

import { AuthCheckAdapterPage } from '../../layouts/check-authorization-wrapper/authCheckAdapterPage'
import { SignUpPage } from '../../modules/authorization/sign-up-page'
import { Page404 } from '../../modules/page404'
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
