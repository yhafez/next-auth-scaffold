// Path: pages/index.tsx
import { useEffect, useState } from 'react'
import { useSnackbar } from 'notistack'
import { useRouter } from 'next/router'

import { Box, CircularProgress, Typography } from '@mui/material'

import { Layout } from '../components/Layout'
import DashboardDrawer from '../components/Drawers/DashboardDrawer'

import { useBoundStore } from '../store'

export default function Dashboard() {
	const { darkMode, user } = useBoundStore()

	const router = useRouter()

	const { enqueueSnackbar } = useSnackbar()

	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		if (!localStorage.getItem('token')) {
			enqueueSnackbar('You are not logged in', { variant: 'error', autoHideDuration: 3000 })
			router.push('/login')
		}
		setLoading(false)
	}, [router, enqueueSnackbar])

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
			<Layout name="dashboard" drawerChildren={<DashboardDrawer />}>
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
							variant="h2"
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
							Welcome {user?.name ?? 'User'}!
						</Typography>
					</Box>
				)}
			</Layout>
		</Box>
	)
}
