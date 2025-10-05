import { AppLogo } from '../../../4 UI/appLogo/appLogo'
import { useMediaQuery } from '../../../hooks/mediaQueryHook'
import CartDropDown from '../components/cartDropDown/cartDropDown'
import { HeaderSearchInput } from '../components/headerSearchInput/headerSearchInput'
import s from './headerBotom.module.scss'

export const HeaderBottom = () => {
	const minWidth763PX = useMediaQuery('(min-width: 762.89px)')
	return (
		<div className='container'>
			<div className={s.headerContent}>
				{minWidth763PX && <AppLogo />}
				<HeaderSearchInput />
				<CartDropDown />
			</div>
		</div>
	)
}
