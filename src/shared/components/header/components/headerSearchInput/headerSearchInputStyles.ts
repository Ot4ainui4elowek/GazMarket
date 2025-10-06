import type {
	CSSObjectWithLabel,
	GroupBase,
	OptionProps,
	StylesConfig,
} from 'react-select'
import type { IOption } from '../../../../types/common-types'

export const inputStyles: StylesConfig<IOption, boolean, GroupBase<IOption>> = {
	indicatorSeparator: baseStyles => ({
		...baseStyles,
		height: 0,
	}),

	dropdownIndicator: baseStyles => ({
		...baseStyles,
		display: 'none',
	}),
	menuList: baseStyles => ({
		...baseStyles,
		padding: 0,
		paddingBottom: 0,
		isClerable: true,
		openmenuOnclick: false,
	}),
}

export const optionStyles = (
	defaultStyles: CSSObjectWithLabel,
	state: OptionProps<IOption, boolean, GroupBase<IOption>>
) => {
	const backgroundColor = state.isSelected
		? '#3c3c3cff'
		: state.isFocused
		? '#5aa2ffff'
		: '#fff'
	return {
		...defaultStyles,
		cursor: 'pointer',
		backgroundColor: backgroundColor,
		pading: '8px 12px',
		margin: 0,
	}
}
