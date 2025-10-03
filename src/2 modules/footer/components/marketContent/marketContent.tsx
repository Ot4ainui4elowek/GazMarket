import s from './marketContent.module.scss'
export const MarketContent = () => {
	return (
		<div className={s.marketContent}>
			<a href='#'>
				<h4>Каталог</h4>
			</a>
			<a href='#'>
				<h4>Доставка и оплата</h4>
			</a>
		</div>
	)
}
