import React, { useCallback } from 'react'
import s from './pageSwitcher.module.scss'

type Props = {
	page: number
	setPage: React.Dispatch<React.SetStateAction<number>>
	limit: number
	maxCount: number
}
const _PageSwitcher = ({ page, setPage, limit, maxCount }: Props) => {
	const maxPagesCount = () => Math.ceil(maxCount / limit) - 1
	const setNewPageNumber = (newNum: number) => {
		if (newNum < 0 || newNum > maxPagesCount()) {
			return
		}
		setPage(newNum)
	}

	const getActiveClass = useCallback(
		(num: number): string => {
			if (num == page) {
				return s.active
			} else return ''
		},
		[page]
	)
	return (
		<div className={s.pageSwitcher}>
			{page == maxPagesCount() && (
				<button
					className={`${s.pageSwitcher__button} ${getActiveClass(page + 1)}`}
					onClick={() => setNewPageNumber(page - 2)}
				>
					{page - 1}
				</button>
			)}
			{page !== 0 && (
				<button
					className={`${s.pageSwitcher__button} ${getActiveClass(page - 1)}`}
					onClick={() => setNewPageNumber(page - 1)}
				>
					{page}
				</button>
			)}

			<button className={`${s.pageSwitcher__button} ${getActiveClass(page)}`}>
				{page + 1}
			</button>
			{page !== maxPagesCount() && (
				<button
					className={`${s.pageSwitcher__button} ${getActiveClass(page + 1)}`}
					onClick={() => setNewPageNumber(page + 1)}
				>
					{page + 2}
				</button>
			)}
			{page === 0 && (
				<button
					className={`${s.pageSwitcher__button} ${getActiveClass(page + 2)}`}
					onClick={() => setNewPageNumber(page + 2)}
				>
					{page + 3}
				</button>
			)}
		</div>
	)
}

export const PageSwitcher = React.memo(_PageSwitcher)
