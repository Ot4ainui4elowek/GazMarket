import { AnimatePresence } from 'framer-motion'
import { motion } from 'motion/react'
import { forwardRef } from 'react'
import { useNavigate } from 'react-router'
import { logoutThunk } from '../../../../../modules/authorization/services/thunks/logoutthunk'
import { selectUser } from '../../../../../modules/authorization/store/auth.selectors'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import type { IWrappedComponentProps } from '../../../../types/wrapped-component-props'
import { ProfileIcon } from '../../../../UI/profileIcon/profileIcon'
import { withClickOutside } from '../../../../utils/withClickOutside'
import s from './profileDropDown.module.scss'

const ProfileDropDown = forwardRef<HTMLDivElement, IWrappedComponentProps>(
	({ open, setOpen }, ref) => {
		const dispatch = useAppDispatch()
		const toggleProfileDropDown = () => {
			setOpen(!open)
		}
		const navigate = useNavigate()
		const logOut = async () => {
			const result = await dispatch(logoutThunk())
			if (logoutThunk.fulfilled.match(result)) {
				setOpen(false)
				navigate('/login')
			}
		}
		const user = useAppSelector(state => selectUser(state))
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
							<button onClick={logOut} className={s.logout}>
								Выйти
							</button>
						</motion.div>
					</AnimatePresence>
				)}
			</div>
		)
	}
)

ProfileDropDown.displayName = 'ProfileDropDown'

export default withClickOutside(ProfileDropDown)
