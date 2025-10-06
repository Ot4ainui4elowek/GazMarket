import { Footer } from '../../components/footer/footer'
import { Header } from '../../components/header/header'
import s from './wrapper.module.scss'
type Props = {
	children?: React.ReactNode
}
export const AppWrapper = ({ children }: Props) => {
	return (
		<div className={s.wrapper}>
			<Header />
			<div className={`${s.content} `}>{children}</div>
			<Footer />
		</div>
	)
}
