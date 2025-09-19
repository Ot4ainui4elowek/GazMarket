import s from './page404.module.css'

export const Page404 = () => {
	return (
		<div className={s.page404}>
			<div className={s.container}>
				<h1>404 - Page Not Found</h1>
				<h3>The page you are looking for does not exist.</h3>
			</div>
		</div>
	)
}
