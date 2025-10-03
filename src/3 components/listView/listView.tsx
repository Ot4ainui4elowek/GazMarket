type Props = {
	flexDirection?: 'row' | 'column'
	gap?: string
	children?: React.ReactNode
	wrap?: boolean
}
export const ListView = ({ flexDirection, gap, children, wrap }: Props) => {
	const style: React.CSSProperties = {
		display: 'flex',
		flexDirection: flexDirection ?? 'row',
		gap: gap ?? '1rem',
		flexWrap: wrap ? 'wrap' : 'nowrap',
	}
	return <div style={style}>{children}</div>
}
