import { AnimatePresence } from 'framer-motion'
import { motion } from 'motion/react'
import { forwardRef } from 'react'
import { ProfileIcon } from '../../4 UI/profileIcon/profileIcon'
import { useAppSelector } from '../../store/hooks'
import { userSelector } from '../../store/reducers/authReducer/auth.selectors'
import type { IWrappedComponentProps } from '../../types/wrappedComponentProps'
import { withClickOutside } from '../../utils/withClickOutside'
import s from './profileDropDown.module.scss'

const ProfileDropDown = forwardRef<HTMLDivElement, IWrappedComponentProps>(
	({ open, setOpen }, ref) => {
		const toggleProfileDropDown = () => {
			setOpen(!open)
		}
		const user = useAppSelector(state => userSelector(state))
		return (
			<div className={s.profileContainer} ref={ref}>
				<button className={s.profileButton} onClick={toggleProfileDropDown}>
					<ProfileIcon />
				</button>
				{open && (
					<AnimatePresence>
						<motion.div
							initial={{
								opacity: 0,
								scale: 0,
							}}
							style={{ transformOrigin: 'right top' }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0 }}
							className={s.profile}
						>
							<h4 className={s.name}>{user?.username}</h4>
							<h4 className={s.email}>{user?.email}</h4>
							<button className={s.logout}>Выйти</button>
						</motion.div>
					</AnimatePresence>
				)}
			</div>
		)
	}
)

ProfileDropDown.displayName = 'ProfileDropDown'

export default withClickOutside(ProfileDropDown)
