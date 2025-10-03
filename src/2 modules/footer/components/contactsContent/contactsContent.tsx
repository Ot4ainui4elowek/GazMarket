import s from './contactsContent.module.scss'
export const ContactsContent = () => {
	return (
		<div className={s.footer__contacts}>
			<a href='#'>
				<div className={s.footer__contactItem}>
					<p>Телефон:</p>
					<h3>+7 (999) 123-45-67</h3>
				</div>
			</a>
			<a href='#'>
				<div className={s.footer__contactItem}>
					<p>Email:</p>
					<h3>info@example.com</h3>
				</div>
			</a>
			<a href='#'>
				<div className={s.footer__contactItem}>
					<p>Адрес:</p>
					<h3>г. Москва, ул. Примерная, д. 1</h3>
				</div>
			</a>
		</div>
	)
}
