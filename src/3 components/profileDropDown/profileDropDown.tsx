import { forwardRef } from 'react'
import { useAppSelector } from '../../store/hooks'
import { userSelector } from '../../store/reducers/authReducer/auth.selectors'
import type { IWrappedComponentProps } from '../../types/wrappedComponentProps'
import { withClickOutside } from '../../utils/withClickOutside'

const ProfileDropDown = forwardRef<HTMLDivElement, IWrappedComponentProps>(
	({ open, setOpen }, ref) => {
		const toggleProfileDropDown = () => {
			setOpen(!open)
		}
		const user = useAppSelector(state => userSelector(state))
		return (
			<div ref={ref}>
				<button onClick={toggleProfileDropDown}>open</button>
				{open && (
					<div>
						<ul>
							<li>{user?.email}</li>
							<li>{user?.username}</li>
							<li>Logout</li>
						</ul>
					</div>
				)}
			</div>
		)
	}
)

ProfileDropDown.displayName = 'ProfileDropDown'

export default withClickOutside(ProfileDropDown)
