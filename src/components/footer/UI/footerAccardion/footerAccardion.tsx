import type React from 'react'
import { Accordion } from '../../../../shared/UI/accordion/accordion'
import s from './footerAccardion.module.scss'

type Props = { children: React.ReactNode; title: string }
export const FooterAccardion = ({ children, title }: Props) => {
	return (
		<Accordion titleClass={s.titleClass} title={title}>
			<div className={s.children}>{children}</div>
		</Accordion>
	)
}
