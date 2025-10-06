import React, { useEffect, useRef, useState } from 'react'
import { PageSwitcher } from '../../shared/components/pageSwitcher/pageSwitcher'
import { AppWrapper } from '../../shared/layouts/wrapper/wrapper'
import { useAppSelector } from '../../shared/store/hooks'
import { selectUser } from '../authorization/store/auth.selectors'
import { BoilerItem } from './components/boilerItem/boilerItem'
import s from './dashboard.module.scss'
import BoilersService from './services/BoilersService'
import type { IBoilerParts } from './types/boiler-parts'
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
