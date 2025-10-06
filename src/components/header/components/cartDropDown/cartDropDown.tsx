import { motion } from 'motion/react'
import { forwardRef, useEffect } from 'react'

import { AnimatePresence } from 'framer-motion'
import { useMediaQuery } from '../../../../shared/hooks/mediaQueryHook'
import { useAppDispatch, useAppSelector } from '../../../../shared/store/hooks'
import type { IWrappedComponentProps } from '../../../../shared/types/wrapped-component-props'
import { ArrowIcon } from '../../../../shared/UI/arrowIcon/arrowIcon'
import { CartIcon } from '../../../../shared/UI/cartLogo/cartLogo'
import { TextButton } from '../../../../shared/UI/textButton/textButton'
import { withClickOutside } from '../../../../shared/utils/withClickOutside'
import s from './cartDropDown.module.scss'
import { BoilerCartItem } from './components/boilerCartItem/boilerCartItem'
import { selectCartItems, selectCartTotalPrice } from './store/cart.selectors'
import { calculateTtotalPrice } from './store/cartReducer'

const CartDropDown = forwardRef<HTMLDivElement, IWrappedComponentProps>(
	({ open, setOpen }, ref) => {
		const maxWidth763PX = useMediaQuery('(max-width: 762.89px)')
		const dispatch = useAppDispatch()
		const totalPrice = useAppSelector(state => selectCartTotalPrice(state))
		const items = useAppSelector(state => selectCartItems(state))
		const toggleProfileDropDown = () => {
			setOpen(!open)
		}
		useEffect(() => {
			dispatch(calculateTtotalPrice())
		}, [items, dispatch])

		return (
			<div className={s.cartContainer} ref={ref}>
				<button className={s.cartButton} onClick={toggleProfileDropDown}>
					<CartIcon />
					{!maxWidth763PX && <h4>Корзина</h4>}
					<p className={s.cartItemsCount}>{items.length}</p>
				</button>
				{open && (
					<div
						onClick={toggleProfileDropDown}
						className={s.cartBackground}
					></div>
				)}
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
										<BoilerCartItem key={item.id} boiler={item} />
									))}
								</ul>
							)}
							<div className={s.cart__footer}>
								<h2>
									Итого: <span>{totalPrice} ₽</span>
								</h2>
								<button>Оформить заказ</button>
							</div>
						</motion.div>
					</AnimatePresence>
				)}
			</div>
		)
	}
)

CartDropDown.displayName = 'CartDropDown'

export default withClickOutside(CartDropDown)
