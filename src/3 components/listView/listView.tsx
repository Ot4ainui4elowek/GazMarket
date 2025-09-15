type Props = {
	flexDirection?: 'row' | 'column'
	gap?: string
}
export const ListView = ({ flexDirection, gap }: Props) => {
	const style: React.CSSProperties = {
		display: 'flex',
		flexDirection: flexDirection ?? 'row',
		gap: gap ?? '1rem',
	}
	return <div style={style}></div>
}
