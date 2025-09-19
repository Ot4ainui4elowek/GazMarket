import s from './appInput.module.css'

type Props = {
	inputProps?: React.InputHTMLAttributes<HTMLInputElement>
	title?: string
	inputHeaderActions?: React.JSX.Element
}
export const AppInput = ({ inputProps, title, inputHeaderActions }: Props) => {
	return (
		<div className={s.appInput}>
			<div className={s.appHeader}>
				{title && <h4 className={s.active}>{title}</h4>}
				{inputHeaderActions}
			</div>

			<input
				{...inputProps}
				className={s.formInputs ?? '' + ' ' + (inputProps?.className ?? '')}
			/>
		</div>
	)
}
