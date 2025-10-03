import React, { useEffect, useRef, useState } from 'react'
import { AppWrapper } from '../../2 layout/wrapper/wrapper'
import { BoilerItem } from '../../3 components/boilerItem/boilerItem'
import { PageSwitcher } from '../../3 components/pageSwitcher/pageSwitcher'
import BoilersService from '../../services/BoilersService'
import { useAppSelector } from '../../store/hooks'
import { selectUser } from '../../store/reducers/authReducer/auth.selectors'
import type { IBoilerParts } from '../../types/boilerParts'
import s from './dashboard.module.scss'
type Props = {}
const _Dashboard = ({}: Props) => {
	const user = useAppSelector(state => selectUser(state))
	const productsCount = useRef(-1)
	let flag = true
	const [curentPage, setCurentPage] = useState(0)
	const [boilers, setBoilers] = useState<IBoilerParts[] | null>(null)

	const getBoilers = async () => {
		const res = await BoilersService.getBoilers({
			limit: 20,
			offset: curentPage,
		})
		if (flag) {
			productsCount.current = res.data.count
			flag = false
		}
		setBoilers(res.data.rows)
	}

	useEffect(() => {
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
				limit={20}
				maxCount={productsCount.current}
				page={curentPage}
				setPage={setCurentPage}
			/>
		</AppWrapper>
	)
}

export const Dashboard = React.memo(_Dashboard)
