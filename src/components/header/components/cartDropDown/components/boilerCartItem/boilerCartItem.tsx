import type { IBoilerParts } from '../../../../../../modules/dashboard/types/boiler-parts'
import s from './boilerCart.module.scss'
type Props = {
	boiler: IBoilerParts
}
export const BoilerCartItem = ({ boiler }: Props) => {
	return (
		<div className={s.boiler}>
			<img className={s.boiler__image} src={boiler.images} alt={boiler.name} />
			<div className={s.boiler__infoContainer}>
				<div className={s.boiler__info}>
					<h2 className={s.text}>{boiler.name}</h2>
					<h4 className={s.text}>{boiler.description}</h4>
				</div>

				<div className={s.boiler__buy}>
					<h2>{boiler.price} ₽</h2>
					<button>Удалить</button>
				</div>
			</div>
		</div>
	)
}
