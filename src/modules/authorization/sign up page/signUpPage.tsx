import { AuthAdaptiveWrapper } from '../components/authAdaptiveWrapper/authAdaptiveWrapper'
import { AuthContainer } from '../components/authContainer/authContainer'
import { SinUpModule } from './components/signUpModule/signUpModule'

export const SignUpPage = () => {
	return (
		<AuthContainer
			imageSRC='/images/registration-background.jpg'
			element={
				<AuthAdaptiveWrapper>
					<SinUpModule />
				</AuthAdaptiveWrapper>
			}
		/>
	)
}
