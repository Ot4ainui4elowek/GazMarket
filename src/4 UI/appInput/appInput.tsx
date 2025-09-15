import s from './appInput.module.css'

type Props = {
	inputProps?: React.InputHTMLAttributes<HTMLInputElement>
	title?: string
}
export const AppInput = ({ inputProps, title }: Props) => {
	return (
		<div className={s.paswordInput}>
			{title && <h4>{title}</h4>}
			<input
				{...inputProps}
				className={s.formInputs + ' ' + inputProps?.className}
			/>
		</div>
	)
}
