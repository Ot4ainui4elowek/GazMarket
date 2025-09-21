import s from './header.module.css'
import { HeaderBottom } from './headerBottom/headerBottom'
import { HeaderTop } from './headerTop/headerTop'
type Props = {}
export const Header = ({}: Props) => {
	return (
		<div className={s.headerBackground}>
			<HeaderTop />
			<HeaderBottom />
		</div>
	)
}
