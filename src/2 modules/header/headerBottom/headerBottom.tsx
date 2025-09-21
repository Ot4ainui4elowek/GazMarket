import { AppLogo } from '../../../4 UI/appLogo/appLogo'
import { useMediaQuery } from '../../../hooks/mediaQueryHook'
import s from './headerBotom.module.css'

type Props = {}
export const HeaderBottom = ({}: Props) => {
	const minWidth763PX = useMediaQuery('(min-width: 762.89px)')
	return (
		<div className='container'>
			<div className={s.headerContent}>
				{minWidth763PX && <AppLogo />}
				<input className={s.searchInput} type='text' placeholder='Поиск' />
				<h4>Корзина</h4>
			</div>
		</div>
	)
}
