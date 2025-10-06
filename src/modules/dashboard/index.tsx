import React, { useEffect, useRef, useState } from 'react'
import { PageSwitcher } from '../../components/pageSwitcher/pageSwitcher'
import { AppWrapper } from '../../layouts/wrapper/wrapper'
import { useAppDispatch, useAppSelector } from '../../shared/store/hooks'
import { BoilerItem } from './components/boilerItem/boilerItem'
import s from './dashboard.module.scss'
import { getBoilersThunk } from './services/thunks/get-boilers-thunk'
import { selectBoilers, selectBoilersCount } from './store/boilerSelectors'
type Props = {}
const _Dashboard = ({}: Props) => {
	const [curentPage, setCurentPage] = useState(0)
	const boilers = useAppSelector(state => selectBoilers(state))
	const count = useAppSelector(state => selectBoilersCount(state))
	const dispatch = useAppDispatch()

	const _limit = 20

	const getBoilers = () => {
		dispatch(getBoilersThunk({ limit: _limit, offset: curentPage }))
	}
	const _flag = useRef(false)
	useEffect(() => {
		if (_flag.current) {
			window.scrollTo({ top: 0, behavior: 'smooth' })
		}
		_flag.current = true
		getBoilers()
	}, [curentPage])
	return (
		<AppWrapper>
			<h1 className={s.dashboardTitle}>Газовые котлы</h1>
			<div className={s.boilersList}>
				{boilers?.map(e => (
					<BoilerItem key={e.name + e.id} boiler={e} />
				))}
			</div>
			<PageSwitcher
				limit={_limit}
				maxCount={count}
				page={curentPage}
				setPage={setCurentPage}
			/>
		</AppWrapper>
	)
}

export const Dashboard = React.memo(_Dashboard)
