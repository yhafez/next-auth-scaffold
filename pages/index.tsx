// Path: pages/index.tsx
import { useEffect, useState } from 'react'
import { useSnackbar } from 'notistack'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { useHydrated } from 'react-hydration-provider'
import { Box, CircularProgress, Typography } from '@mui/material'

import { Layout, DashboardDrawer } from '../components'
import { useBoundStore } from '../store'
import useToken from '../hooks/useToken'

export interface DashboardProps {
	hydratedInit?: boolean
}

export default function Dashboard({ hydratedInit = false }: DashboardProps) {
	const { darkMode, user } = useBoundStore()
	const router = useRouter()
	const { enqueueSnackbar } = useSnackbar()
	const { data: _session, status } = useSession()
	const hydrated = useHydrated()
	const { loading: tokenLoading, error: tokenError } = useToken()

	const [loading, setLoading] = useState(false)

	useEffect(() => {
		if (user?.role === 'ADMIN') router.push('/admin')
	}, [user, router])

	useEffect(() => {
		if (tokenError) enqueueSnackbar(tokenError, { variant: 'error' })
	}, [tokenError])

	useEffect(() => {
		if (tokenLoading) setLoading(true)
		else setLoading(false)
	}, [tokenLoading])

	if (!hydrated && !hydratedInit) return null

	return (
		<Box
			id="dashboard"
			sx={{
				display: 'flex',
				flexDirection: 'column',
				height: '100%',
				width: '100%',
			}}
		>
			<Layout name="dashboard" drawerChildren={<DashboardDrawer />} pageTitle="dashboard">
				{loading ? (
					<Box
						id="dashboard-loading"
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							height: '100%',
							width: '100%',
						}}
					>
						<CircularProgress
							id="dashboard-loading-spinner"
							sx={{
								color: 'primary.contrastText',
							}}
							role="img"
							aria-label="loading spinner"
						/>
					</Box>
				) : (
					<Box
						id="dashboard-content"
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							height: '100%',
							width: '100%',
						}}
					>
						<Typography
							id="dashboard-content-title"
							variant="h1"
							sx={{
								mb: 2,
								color: darkMode ? 'white' : 'black',
							}}
						>
							Dashboard
						</Typography>
						<Typography
							id="dashboard-content-subtitle"
							variant="body1"
							sx={{
								color: darkMode ? 'white' : 'black',
								fontSize: '1.5rem',
								mb: 12,
							}}
						>
							Welcome {user?.name ?? user?.email ?? 'User'}!
						</Typography>
					</Box>
				)}
			</Layout>
		</Box>
	)
}
