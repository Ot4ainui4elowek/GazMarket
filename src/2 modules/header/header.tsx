import s from './header.module.css'
import { HeaderTop } from './headerTop/headerTop'
type Props = {}
export const Header = ({}: Props) => {
	return (
		<div className={s.headerBackground}>
			<HeaderTop />
			<div className='container'>
				<div className={s.headerContent}>
					<h2>Детали для газовых котлов</h2>
					<input type='text' placeholder='Поиск' />
					<h4>Корзина</h4>
				</div>
			</div>
		</div>
	)
}
