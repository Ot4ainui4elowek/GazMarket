import {
	useEffect,
	useRef,
	useState,
	type ForwardRefExoticComponent,
	type RefAttributes,
	type RefObject,
} from 'react'
import type { IWrappedComponentProps } from '../types/wrappedComponentProps'

export function withClickOutside(
	WrappedComponent: ForwardRefExoticComponent<
		IWrappedComponentProps & RefAttributes<HTMLDivElement>
	>
) {
	const Component = () => {
		const [open, setOpen] = useState(false)
		const ref = useRef(null) as RefObject<HTMLDivElement | null>
		useEffect(() => {
			const handleClickOutside = (e: MouseEvent) => {
				if (
					ref.current != null &&
					!ref.current.contains(e.target as HTMLDivElement)
				) {
					setOpen(false)
				}
			}
			document.addEventListener('mousedown', handleClickOutside)
			return () => document.removeEventListener('mousedown', handleClickOutside)
		}, [ref])
		return <WrappedComponent open={open} setOpen={setOpen} ref={ref} />
	}
	return Component
}
