import { LoginModule } from '../../../2 modules/loginModule/loginModule'
import { AuthContainer } from '../../../3 components/authContainer/authContainer'

export const AuthorizationPage = () => {
	return (
		<AuthContainer
			imageSRC='/images/log-in-background.webp'
			element={<LoginModule />}
		/>
	)
}
