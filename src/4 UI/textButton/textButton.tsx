import type { ButtonHTMLAttributes } from 'react'
import s from './textButton.module.css'
export const TextButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
	return (
		<button {...props} className={s.textButton + ' ' + props.className}>
			{props.children}
		</button>
	)
}
