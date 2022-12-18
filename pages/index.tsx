// Path: pages/index.tsx
import { useEffect, useState } from 'react'
import { useSnackbar } from 'notistack'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { useHydrated } from 'react-hydration-provider'

import { Box, CircularProgress, Typography } from '@mui/material'

import { Layout } from '../components/Layout'
import DashboardDrawer from '../components/Drawers/DashboardDrawer'

import { useBoundStore } from '../store'

export default function Dashboard() {
	const { darkMode, user, setUser } = useBoundStore()
	const router = useRouter()
	const { enqueueSnackbar } = useSnackbar()
	const { data: session, status } = useSession()
	const hydrated = useHydrated()

	const [loading, setLoading] = useState(false)

	const textColor = hydrated ? (darkMode ? 'white' : 'black') : 'black'
	const userName = (hydrated && user?.name) || (hydrated && user?.email) || 'User'

	const getToken = async () => {
		setLoading(true)
		try {
			const res = await fetch('/api/auth/token')
			const data = await res.json()

			if (data.error) return setLoading(false)

			setUser(data.user)
			enqueueSnackbar('Logged in successfully', { variant: 'success', autoHideDuration: 3000 })
			setLoading(false)
			return router.push('/')
		} catch (e) {
			return setLoading(false)
		}
	}

	useEffect(() => {
		if (status === 'loading') return setLoading(true)
		setLoading(true)
		if (status === 'unauthenticated') {
			enqueueSnackbar('You are not authorized to access this page', {
				variant: 'error',
				autoHideDuration: 3000,
			})
			setLoading(false)
			router.push('/login')
		}
		if (user?.role === 'ADMIN') {
			setLoading(false)
			router.push('/admin')
		}
		setLoading(false)
	}, [status, user, enqueueSnackbar, router])

	useEffect(() => {
		if (status === 'authenticated' && !user) {
			setLoading(true)
			getToken()
		}
	}, [status])

	if (!hydrated) return null

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
								color: textColor,
							}}
						>
							Dashboard
						</Typography>
						<Typography
							id="dashboard-content-subtitle"
							variant="body1"
							sx={{
								color: textColor,
								fontSize: '1.5rem',
								mb: 12,
							}}
						>
							Welcome {userName}!
						</Typography>
					</Box>
				)}
			</Layout>
		</Box>
	)
}
