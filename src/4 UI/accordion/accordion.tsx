import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import type { IAccordion } from '../../types/commonTypes'

export const Accordion = ({
	children,
	title,
	titleClass,
	arrowOpenClass,
}: IAccordion) => {
	const [expanded, setExpanded] = useState(false)
	const toggleAccordion = () => {
		setExpanded(!expanded)
	}
	return (
		<>
			<motion.button
				initial={false}
				onClick={toggleAccordion}
				className={`${titleClass} ${arrowOpenClass}`}
			>
				{title}
			</motion.button>
			<AnimatePresence initial={false}>
				{expanded && (
					<motion.div
						key='content'
						initial='collapsed'
						animate='open'
						exit='collapsed'
						style={{ overflow: 'hidden' }}
						variants={{
							open: { opacity: 1, height: 'auto' },
							collapsed: { opacity: 0, height: 0 },
						}}
						transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
					>
						{children}
					</motion.div>
				)}
			</AnimatePresence>
		</>
	)
}
