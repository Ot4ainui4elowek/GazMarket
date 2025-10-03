import s from './companyContent.module.scss'
export const CompanyContent = () => {
	return (
		<div className={s.footer__company}>
			<a href='#'>
				<h4>Контакты</h4>
			</a>
			<a href='#'>
				<h4>Вакансии</h4>
			</a>
			<a href='#'>
				<h4>Отзывы</h4>
			</a>
			<a href='#'>
				<h4>Сотрудничество</h4>
			</a>
		</div>
	)
}
