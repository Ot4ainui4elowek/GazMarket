import { useState } from 'react'
import { Link } from 'react-router'
import ProfileDropDown from '../../../3 components/profileDropDown/profileDropDown'
import { AppLogo } from '../../../4 UI/appLogo/appLogo'
import { NavIcon } from '../../../4 UI/navIcon/navIcon'
import { TextButton } from '../../../4 UI/textButton/textButton'
import { useMediaQuery } from '../../../hooks/mediaQueryHook'
import s from './headerTop.module.scss'

type Props = {}
export const HeaderTop = ({}: Props) => {
	const maxWidth763PX = useMediaQuery('(max-width: 762.89px)')
	const [burgerMenuIsOpen, setBurgerMenuIsOpen] = useState(false)

	return (
		<div className={s.headerTop}>
			<div className='container'>
				<div className={s.headerTopContent}>
					{maxWidth763PX && (
						<TextButton
							onClick={() => setBurgerMenuIsOpen(!burgerMenuIsOpen)}
							className={burgerMenuIsOpen ? s.active : s.burgerButton}
						></TextButton>
					)}
					{maxWidth763PX && <AppLogo textClassName={s.headerLogo} />}
					<nav className={burgerMenuIsOpen ? s.navActive : s.navigation}>
						<button className={s.location}>
							<NavIcon />
							<h4 className={s.locationName}>Москва</h4>
						</button>
						<ul className={s.navigationList}>
							<li className={s.navLinkActive}>
								<Link to='/'>Доставка и оплата</Link>
							</li>
							<li className={s.navLink}>
								<Link to='/'>О компании</Link>
							</li>
							<li className={s.navLink}>
								<Link to='/'>Контакты</Link>
							</li>
							<li className={s.navLink}>
								<Link to='/'>Оптовым покупателям</Link>
							</li>
						</ul>
						{!maxWidth763PX && <span />}
					</nav>
					<ProfileDropDown />
				</div>
			</div>
		</div>
	)
}
