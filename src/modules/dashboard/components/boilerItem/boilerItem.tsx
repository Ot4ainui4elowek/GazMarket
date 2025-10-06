import type { IBoilerParts } from '../../types/boiler-parts'
import s from './boilerItem.module.scss'

type Props = { boiler: IBoilerParts }
export const BoilerItem = ({ boiler }: Props) => {
	return (
		<div className={s.boilerItem}>
			<img src={boiler.images} alt='' />
			<h3 className={s.text}>{boiler.name}</h3>
			<p>{boiler.vendor_code}</p>
			<h2>{boiler.price} ₽</h2>
		</div>
	)
}
