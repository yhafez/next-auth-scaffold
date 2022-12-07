// Path: pages/index.tsx
import { useEffect, useState } from 'react'
import { useSnackbar } from 'notistack'
import { useRouter } from 'next/router'

import { Box, Button, CircularProgress, Typography, useMediaQuery } from '@mui/material'

import { Layout } from '../components/Layout'
import Drawer from '../components/Drawer'

import { useBoundStore } from '../store'

export default function Dashboard() {
	const { darkMode, theme, user } = useBoundStore()

	const router = useRouter()

	const { enqueueSnackbar } = useSnackbar()

	const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

	const [loading, setLoading] = useState(false)
	const [open, setOpen] = useState(false)
	const drawerWidth = 240

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
			<Drawer
				open={open}
				handleDrawerClose={() => {
					setOpen(false)
				}}
				drawerWidth={drawerWidth}
			/>
			<Layout drawerWidth={drawerWidth} name="dashboard">
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
						{isMobile && (
							<Button
								id="dashboard-content-button"
								variant="contained"
								onClick={() => {
									setOpen(true)
								}}
								sx={{
									mb: 2,
									color: 'primary.contrastText',
									backgroundColor: darkMode ? 'primary.light' : 'primary.dark',
									'&:hover': {
										backgroundColor: 'primary.main',
									},
								}}
							>
								Open Drawer
							</Button>
						)}
					</Box>
				)}
			</Layout>
		</Box>
	)
}
