import { SinUpModule } from '../../2 modules/signUpModule/signUpModule'
import { AuthContainer } from '../../3 components/authContainer/authContainer'

export const SignUpPage = () => {
	return (
		<AuthContainer
			imageSRC='/images/registration-background.jpg'
			element={<SinUpModule />}
		/>
	)
}
