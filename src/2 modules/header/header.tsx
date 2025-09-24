import s from './header.module.scss'
import { HeaderBottom } from './headerBottom/headerBottom'
import { HeaderTop } from './headerTop/headerTop'

export const Header = () => {
	return (
		<div className={s.headerBackground}>
			<HeaderTop />
			<HeaderBottom />
		</div>
	)
}
