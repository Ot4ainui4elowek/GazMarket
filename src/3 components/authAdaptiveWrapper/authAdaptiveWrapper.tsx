import s from './authAdaptiveWrapper.module.css'

type Props = { children: React.ReactNode }
export const AuthAdaptiveWrapper = ({ children }: Props) => {
	return <div className={s.logInModule}>{children}</div>
}
