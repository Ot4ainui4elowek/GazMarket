import React, { useEffect, useRef, useState } from 'react'
import { PageSwitcher } from '../../components/pageSwitcher/pageSwitcher'
import { AppWrapper } from '../../layouts/wrapper/wrapper'
import { useAppDispatch } from '../../shared/store/hooks'
import { BoilerItem } from './components/boilerItem/boilerItem'
import s from './dashboard.module.scss'
import { getBoilersThunk } from './services/thunks/get-boilers-thunk'
import { boilersSelectros } from './store/boilerSelectors'
type Props = {}
const _Dashboard = ({}: Props) => {
	const [curentPage, setCurentPage] = useState(0)
	const dispatch = useAppDispatch()
	const { boilers, count, errorMessage, status } = boilersSelectros()
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
			<div className={s.dashboard}>
				<h1 className={s.dashboardTitle}>Газовые котлы</h1>
				{status == 'error' && (
					<div className={s.dashboard__errorBlock}>
						<h2>Упс! Произошла ошибка.</h2>
						<h3>{errorMessage}</h3>
					</div>
				)}
				{status == 'loading' && (
					<div className={s.dashboard__errorBlock}>
						<h2>Загрузка</h2>
					</div>
				)}
				{status != 'error' && status != 'loading' && (
					<div className={s.boilersList}>
						{boilers?.map(e => (
							<BoilerItem key={e.name + e.id} boiler={e} />
						))}
					</div>
				)}
				<PageSwitcher
					limit={_limit}
					maxCount={count}
					page={curentPage}
					setPage={setCurentPage}
				/>
			</div>
		</AppWrapper>
	)
}

export const Dashboard = React.memo(_Dashboard)
