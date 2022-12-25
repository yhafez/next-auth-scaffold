import React from 'react'
import { Box, Button, Popover, Typography } from '@mui/material'
import { signOut } from 'next-auth/react'
import { useSnackbar } from 'notistack'

import { useBoundStore } from '../../store'

export interface DrawerSignOutPopoverProps {
	anchorEl: HTMLButtonElement | null
	handleClose: () => void
}

export default function DrawerSignOutPopover({ anchorEl, handleClose }: DrawerSignOutPopoverProps) {
	const { darkMode } = useBoundStore()
	const { enqueueSnackbar } = useSnackbar()

	const handleSignOut = () => {
		localStorage.removeItem('token')
		enqueueSnackbar('Logged out successfully', { variant: 'success', autoHideDuration: 3000 })
		signOut({ callbackUrl: '/login' })
	}

	return (
		<Popover
			id="drawer-sign-out-popover"
			aria-labelledby="dashboard-sign-out-popover-content-title"
			aria-describedby="dashboard-sign-out-popover-content-description"
			open={!!anchorEl}
			anchorEl={anchorEl}
			onClose={handleClose}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'right',
			}}
			transformOrigin={{
				vertical: 'top',
				horizontal: 'center',
			}}
			BackdropProps={{
				sx: {
					backgroundColor: 'rgba(0, 0, 0, 0.5)',
				},
			}}
			sx={{
				'& .MuiPopover-paper': {
					backgroundColor: 'transparent',
				},
			}}
		>
			<Box
				id="drawer-sign-out-popover-content"
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					width: 200,
					height: 100,
					padding: 1,
					borderRadius: 1,
					backgroundColor: 'primary.main',
					color: 'primary.contrastText',

					'& .MuiTypography-root': {
						textAlign: 'center',
					},

					'& .MuiBox-root': {
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'center',
						width: '100%',
						marginTop: 1,
					},

					'& .MuiButton-root': {
						margin: 0.5,
					},

					'& .MuiButton-root:first-of-type': {
						marginRight: 1,
					},

					'& .MuiButton-root:last-of-type': {
						marginLeft: 1,
					},
				}}
			>
				<Typography
					id="drawer-sign-out-popover-content-title"
					variant="h1"
					sx={{
						my: 1,
						fontSize: '1.5rem',
						fontWeight: 'bold',
					}}
				>
					Log Out
				</Typography>
				<Typography id="drawer-sign-out-popover-content-description" variant="body2">
					Are you sure you want to sign out?
				</Typography>
				<Box
					id="drawer-sign-out-popover-content-actions"
					sx={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'center',
						width: '100%',
						height: '100%',
						padding: 1,
						borderRadius: 1,
						backgroundColor: 'primary.main',
						color: 'primary.contrastText',
					}}
				>
					<Button
						id="drawer-sign-out-popover-content-actions-cancel"
						variant="contained"
						onClick={handleClose}
						sx={{
							backgroundColor: darkMode ? 'primary.dark' : 'primary.light',
							color: 'primary.contrastText',

							'&:hover': {
								backgroundColor: darkMode ? 'primary.light' : 'primary.dark',
							},

							'&:active': {
								backgroundColor: darkMode ? 'primary.dark' : 'primary.light',
							},

							'&:focus': {
								backgroundColor: darkMode ? 'primary.light' : 'primary.dark',
							},
						}}
					>
						Cancel
					</Button>
					<Button
						id="drawer-sign-out-popover-content-actions-sign-out"
						variant="contained"
						onClick={handleSignOut}
						sx={{
							backgroundColor: darkMode ? 'primary.dark' : 'primary.light',
							color: 'primary.contrastText',

							'&:hover': {
								backgroundColor: darkMode ? 'primary.light' : 'primary.dark',
							},

							'&:active': {
								backgroundColor: darkMode ? 'primary.dark' : 'primary.light',
							},

							'&:focus': {
								backgroundColor: darkMode ? 'primary.light' : 'primary.dark',
							},
						}}
					>
						Sign Out
					</Button>
				</Box>
			</Box>
		</Popover>
	)
}
