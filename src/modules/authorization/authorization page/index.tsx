import { AuthAdaptiveWrapper } from '../components/authAdaptiveWrapper/authAdaptiveWrapper'
import { AuthContainer } from '../components/authContainer/authContainer'
import { LoginModule } from './components/loginModule/loginModule'

export const AuthorizationPage = () => {
	return (
		<AuthContainer
			imageSRC='/images/log-in-background.webp'
			element={
				<AuthAdaptiveWrapper>
					<LoginModule />
				</AuthAdaptiveWrapper>
			}
		/>
	)
}
