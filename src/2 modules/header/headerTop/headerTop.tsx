import { Link } from 'react-router'
import ProfileDropDown from '../../../3 components/profileDropDown/profileDropDown'
import s from './headerTop.module.css'

type Props = {}
export const HeaderTop = ({}: Props) => {
	return (
		<div className={s.headerTop}>
			<div className='container'>
				<div className={s.headerTopContent}>
					<h4>Москва</h4>
					<nav className={s.navigation}>
						<ul className={s.navigationList}>
							<li>
								<Link to='/'>
									<a href=''>lorem</a>
								</Link>
							</li>
							<li>
								<Link to='/'>
									<a href=''>lorem</a>
								</Link>
							</li>
							<li>
								<Link to='/'>
									<a href=''>lorem</a>
								</Link>
							</li>
							<li>
								<Link to='/'>
									<a href=''>lorem</a>
								</Link>
							</li>
							<li>
								<Link to='/'>
									<a href=''>lorem</a>
								</Link>
							</li>
							<li>
								<Link to='/'>
									<a href=''>lorem</a>
								</Link>
							</li>
						</ul>
					</nav>
					<ProfileDropDown />
				</div>
			</div>
		</div>
	)
}
