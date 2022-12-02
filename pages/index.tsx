// Path: pages/index.tsx
// This is the home page of the app.

import { useEffect } from 'react'
import { useSnackbar } from 'notistack'
import { useRouter } from 'next/router'

import { Typography } from '@mui/material'

import NavigationButton from '../components/NavigationButton'

export default function Dashboard() {
	const router = useRouter()

	const { enqueueSnackbar } = useSnackbar()

	useEffect(() => {
		if (!localStorage.getItem('token')) {
			router.push('/login')
			enqueueSnackbar('You are not logged in', { variant: 'error', autoHideDuration: 3000 })
		}
	}, [enqueueSnackbar, router])

	const handleLogout = () => {
		localStorage.removeItem('token')
		router.push('/login')
		enqueueSnackbar('You have been logged out', { variant: 'success', autoHideDuration: 2000 })
	}

	return (
		<>
			<Typography
				id="dashboard-title"
				variant="h1"
				sx={{
					color: 'white',
				}}
			>
				Home
			</Typography>

			<NavigationButton name="logout" label="Logout" handleClick={handleLogout} width="20%" />
		</>
	)
}
