import type React from 'react'
import { useEffect } from 'react'
import s from './authContainer.module.css'

type Props = {
	imageSRC: string
	element: React.JSX.Element
}
export const AuthContainer = ({ imageSRC, element }: Props) => {
	useEffect(() => {
		const preload = (path: string) => {
			const img = new Image()
			img.src = path
		}
		preload(imageSRC)
	}, [])
	return (
		<div>
			<img className={s.backgroundImage} src={imageSRC} />
			<div className={s.loginContainer}>{element}</div>
		</div>
	)
}
