import type React from 'react'
import './container.css'
type Props = {
	children: React.JSX.Element
}
export const Container = ({ children }: Props) => {
	return <div className='appContainer'>{children}</div>
}
