import { useMediaQuery } from '../../hooks/mediaQueryHook'
import { AppLogo } from '../../UI/appLogo/appLogo'
import { CompanyContent } from './components/companyContent/companycontent'
import { ContactsContent } from './components/contactsContent/contactsContent'
import { MarketContent } from './components/marketContent/marketContent'
import s from './footer.module.scss'
import { FooterAccardion } from './UI/footerAccardion/footerAccardion'
export const Footer = () => {
	const maxWidth768 = useMediaQuery('(max-width:767.89px)')
	const maxWidth642 = useMediaQuery('(max-width:641.89px)')
	const maxWidth450 = useMediaQuery('(max-width:449.89px)')
	return (
		<footer className={s.footerBackground}>
			<div className='container'>
				<div className={s.footer}>
					<div className={s.footer__container}>
						<div className={s.footer__containerInfo}>
							<ul className={s.footer__top}>
								{!maxWidth768 && (
									<li className={s.footer__topItem}>
										<AppLogo
											topRectColor='#424242ff'
											middleRectColor='#9e9e9eff'
											bottomRectColor='#e9e9e9ff'
											textColor='#fff'
										/>
									</li>
								)}

								<li className={s.footer__topItem}>
									{maxWidth450 ? (
										<FooterAccardion title='Интернет-магазин'>
											<MarketContent />
										</FooterAccardion>
									) : (
										<>
											<h2>Интернет-магазин</h2>
											<MarketContent />
										</>
									)}

									{maxWidth642 && !maxWidth450 && (
										<div className={s.footer__company}>
											<h2>Компания</h2>
											<CompanyContent />
										</div>
									)}
								</li>

								{(!maxWidth642 || maxWidth450) && (
									<li className={s.footer__topItem}>
										{maxWidth450 ? (
											<FooterAccardion title='Компания'>
												<CompanyContent />
											</FooterAccardion>
										) : (
											<>
												<h2>Компания</h2>
												<CompanyContent />
											</>
										)}
									</li>
								)}

								<li className={`${s.footer__topItem} ${s.footer__contacts}`}>
									<h2>Контакты</h2>
									<ContactsContent />
								</li>
							</ul>
							<div className={s.footer__middle}>
								<div className={s.footer__middlePayment}>
									<h3>Мы принимаем к оплате:</h3>
									<div className={s.footer__middleImageContainer}>
										<img
											className={s.footer__paymentImage}
											src='/payment/apple.png'
											alt='apple pay'
										/>
										<img
											className={s.footer__paymentImage}
											src='/payment/google.png'
											alt='google pay'
										/>
										<img
											className={s.footer__paymentImage}
											src='/payment/mastercard.png'
											alt='mastercard pay'
										/>
										<img
											className={s.footer__paymentImage}
											src='/payment/visa.png'
											alt='visa pay'
										/>
									</div>
								</div>
								<div className={s.footer__middleSocial}>
									<h3>Мы в соцсетях:</h3>
									<div className={s.footer__middleSocialContainer}>
										<img
											className={s.footer__socialImage}
											src='/social/vk.png'
											alt='vk'
										/>
										<img
											className={s.footer__socialImage}
											src='/social/facebook.png'
											alt='facebook'
										/>
										<img
											className={s.footer__socialImage}
											src='/social/instagram.png'
											alt='instagram'
										/>
										<img
											className={s.footer__socialImage}
											src='/social/youtube.png'
											alt='youtube'
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					{maxWidth768 && (
						<div className={s.footer__bottomAppLogo}>
							<AppLogo
								topRectColor='#424242ff'
								middleRectColor='#9e9e9eff'
								bottomRectColor='#e9e9e9ff'
								textColor='#fff'
							/>
						</div>
					)}
					<div className={s.footer__bottom}>
						<p>© «Детали для газовых котлов» 2024.</p>
					</div>
				</div>
			</div>
		</footer>
	)
}
