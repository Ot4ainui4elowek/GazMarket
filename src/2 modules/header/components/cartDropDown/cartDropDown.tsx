import { motion } from 'motion/react'
import { forwardRef } from 'react'
import { CartIcon } from '../../../../4 UI/cartLogo/cartLogo'

import { AnimatePresence } from 'framer-motion'
import { ArrowIcon } from '../../../../4 UI/arrowIcon/arrowIcon'
import { TextButton } from '../../../../4 UI/textButton/textButton'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { selectCartItems } from '../../../../store/reducers/cartReducer/cart.selectors'
import type { IWrappedComponentProps } from '../../../../types/wrappedComponentProps'
import { withClickOutside } from '../../../../utils/withClickOutside'
import s from './cartDropDown.module.scss'

const CartDropDown = forwardRef<HTMLDivElement, IWrappedComponentProps>(
	({ open, setOpen }, ref) => {
		const dispatch = useAppDispatch()
		const items = useAppSelector(state => selectCartItems(state.cart))
		const toggleProfileDropDown = () => {
			setOpen(!open)
		}

		return (
			<div className={s.cartContainer} ref={ref}>
				<button className={s.cartButton} onClick={toggleProfileDropDown}>
					<CartIcon />
					<h4>Корзина</h4>
				</button>
				{open && (
					<AnimatePresence>
						<motion.div
							initial={{
								opacity: 0,
								right: '-100%',
							}}
							style={{ transformOrigin: 'right top' }}
							animate={{ opacity: 1, right: 0 }}
							exit={{ opacity: 0, right: 0 }}
							className={s.cart}
						>
							<div className={s.cart__header}>
								<TextButton
									className={s.backButton}
									onClick={toggleProfileDropDown}
								>
									<ArrowIcon />
								</TextButton>
								<h2 className={s.cart__headerTitle}>Корзина</h2>
								<span></span>
							</div>

							{items.length === 0 ? (
								<h4 className={s.empty}>В корзине нет товаров</h4>
							) : (
								<ul className={s.items}>
									{items.map(item => (
										<li key={item.id} className={s.item}>
											<h4 className={s.itemName}>{item.name}</h4>
											<p className={s.itemPrice}>{item.price} ₽</p>
										</li>
									))}
								</ul>
							)}
						</motion.div>
					</AnimatePresence>
				)}
			</div>
		)
	}
)

CartDropDown.displayName = 'CartDropDown'

export default withClickOutside(CartDropDown)
