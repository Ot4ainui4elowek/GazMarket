import { useState } from 'react'
import Select from 'react-select'
import type { SelectOptionType } from '../../../../types/commonTypes'
import s from './headerSearchInput.module.scss'
import { inputStyles, optionStyles } from './headerSearchInputStyles'
export const HeaderSearchInput = () => {
	const [selectedOption, setSelectedOption] = useState<SelectOptionType>(null)
	const changeSelectedOption = (newValue: SelectOptionType) => {
		setSelectedOption(newValue)
	}

	return (
		<Select
			className={s.headerBottomInput}
			placeholder='Я ищу...'
			value={selectedOption}
			onChange={changeSelectedOption}
			options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => ({
				label: num,
				value: num,
			}))}
			isClearable
			isSearchable
			styles={{
				...inputStyles,
				option: (baseStyles, state) => ({
					...baseStyles,
					...optionStyles(baseStyles, state),
				}),
			}}
		/>
	)
}
