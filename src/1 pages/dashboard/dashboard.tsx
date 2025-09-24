import { Header } from '../../2 modules/header/header'
import { useAppSelector } from '../../store/hooks'
import { selectUser } from '../../store/reducers/authReducer/auth.selectors'

type Props = {}
export const Dashboard = ({}: Props) => {
	const user = useAppSelector(state => selectUser(state))
	return (
		<div>
			<Header />
			<div className='container'></div>
		</div>
	)
}
