// Path: ./components/Drawers/DashboardDrawer.tsx

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { signOut } from 'next-auth/react'
import {
	Typography,
	Box,
	Avatar,
	Menu,
	MenuItem,
	Button,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
	DialogActions,
} from '@mui/material'
import {
	ExitToApp,
	Settings,
	Menu as MenuIcon,
	Palette,
	AccountCircle,
	Brightness7,
	Brightness4,
} from '@mui/icons-material'
import { useTheme } from '@mui/material/styles'
import { useSnackbar } from 'notistack'
import { darken, lighten } from 'color2k'

import { useBoundStore } from '../../store'
import { getContrastColor, getSecondaryColor } from '../../utils/helpers'

import ColorPickerPopover from '../ColorPickerPopover'
import DrawerButton from '../DrawerButton'

const DashboardDrawer = () => {
	const { darkMode, customPalette, user, setDarkMode, setCustomPalette } = useBoundStore()
	const { enqueueSnackbar } = useSnackbar()
	const router = useRouter()
	const theme = useTheme()

	const [anchorElMenu, setAnchorElMenu] = useState<null | HTMLElement>(null)
	const [colorPickerAnchorEl, setColorPickerAnchorEl] = useState<null | HTMLButtonElement>(null)
	const [colorPickerOpen, setColorPickerOpen] = useState(false)
	const [signOutOpen, setSignOutOpen] = useState(false)

	useEffect(() => {
		const newMainColor = localStorage.getItem('customPalette')
		if (newMainColor) {
			setCustomPalette({
				...customPalette,
				primary: {
					main: newMainColor,
					light: lighten(newMainColor, 0.1),
					dark: darken(newMainColor, 0.1),
					contrastText: getContrastColor(newMainColor),
				},
				secondary: {
					main: getSecondaryColor(newMainColor),
					light: lighten(getSecondaryColor(newMainColor), 0.1),
					dark: darken(getSecondaryColor(newMainColor), 0.1),
					contrastText: getContrastColor(getSecondaryColor(newMainColor)),
				},
			})
		}
	}, [])

	useEffect(() => {
		const savedDarkMode = localStorage.getItem('darkMode')
		if (savedDarkMode) {
			setDarkMode(JSON.parse(savedDarkMode))
		}
	}, [])

	const handleClickMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorElMenu(event.currentTarget)
	}

	const handleCloseMenu = () => {
		setAnchorElMenu(null)
	}

	const handleClickColorPicker = (event: React.MouseEvent<HTMLButtonElement>) => {
		setColorPickerAnchorEl(event.currentTarget)
		setColorPickerOpen(true)
	}

	const handleClickDarkMode = () => {
		localStorage.setItem('darkMode', JSON.stringify(!darkMode))
		setDarkMode(!darkMode)
	}

	const handleClickLogout = () => {
		handleCloseMenu()
		setSignOutOpen(true)
	}

	const handleSignOut = () => {
		localStorage.removeItem('token')
		enqueueSnackbar('Logged out successfully', { variant: 'success', autoHideDuration: 3000 })
		signOut({ callbackUrl: '/login' })
	}

	const handleCloseSignOut = () => {
		setSignOutOpen(false)
	}

	const handleCloseColorPicker = () => {
		const handleClickOutside = (event: MouseEvent) => {
			if (colorPickerAnchorEl && !colorPickerAnchorEl.contains(event.target as Node)) {
				setColorPickerAnchorEl(null)
				setColorPickerOpen(false)
				document.removeEventListener('click', handleClickOutside)
			}
		}
		document.addEventListener('click', handleClickOutside)

		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				setColorPickerAnchorEl(null)
				setColorPickerOpen(false)
				document.removeEventListener('keydown', handleEscape)
			}
		}
		document.addEventListener('keydown', handleEscape)

		setColorPickerAnchorEl(null)
		setColorPickerOpen(false)
	}

	const handleColorChange = (color: string) => {
		setCustomPalette({
			...customPalette,
			primary: {
				main: color,
				light: lighten(color, 0.1),
				dark: darken(color, 0.1),
				contrastText: getContrastColor(color),
			},
			secondary: {
				main: getSecondaryColor(color),
				light: lighten(getSecondaryColor(color), 0.1),
				dark: darken(getSecondaryColor(color), 0.1),
				contrastText: getContrastColor(getSecondaryColor(color)),
			},
		})

		localStorage.setItem('customPalette', color)
	}

	return (
		<Box
			id="dashboard-drawer"
			component="nav"
			sx={{
				width: { sm: 240 },
				flexShrink: { sm: 0 },
				'& .MuiDrawer-paper': {
					width: 240,
					boxSizing: 'border-box',
					backgroundColor: theme.palette.background.default,
				},
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				height: '100%',
			}}
		>
			<Box
				id="dashboard-drawer-header"
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'flex-end',
					...theme.mixins.toolbar,
				}}
			>
				<Box
					id="dashboard-drawer-header-user"
					sx={{
						display: 'flex',
						alignItems: 'center',
						flexDirection: 'column',
						justifyContent: 'center',
						width: '100%',
					}}
				>
					<label htmlFor="avatar" style={{ width: '100%' }}>
						<Button
							id="dashboard-drawer-user-avatar"
							disableElevation
							sx={{
								padding: 0,
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'center',
								height: '180px',
								width: '100%',
								borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
							}}
							onClick={() => router.push('/profile')}
						>
							<Avatar
								id="dashboard-drawer-user-avatar-image"
								sx={{
									width: '100px',
									height: '100px',
									border: '2px solid',
									mb: 4,
									borderColor: 'primary.contrastText',
									'&:hover': {
										transform: 'scale(1.05)',
										transition: 'transform 0.2s',
									},
									'&:focus': {
										transform: 'scale(1.05)',
										transition: 'transform 0.2s',
									},
									'&:active': {
										transform: 'scale(1.05)',
										transition: 'transform 0.2s',
									},
								}}
								src={user?.image}
								alt={`${user?.name} avatar`}
							/>
							{user?.name ? (
								<Typography
									id="dashboard-drawer-user-avatar-name"
									sx={{
										fontSize: '1.2rem',
										fontWeight: 'bold',
										color: 'primary.contrastText',
										'&:hover': {
											color: darkMode ? 'primary.light' : 'primary.dark',
											transform: 'scale(1.05)',
											transition: 'transform 0.2s',
										},
										'&:focus': {
											color: darkMode ? 'primary.light' : 'primary.dark',
											transform: 'scale(1.05)',
											transition: 'transform 0.2s',
										},
										'&:active': {
											color: darkMode ? 'primary.light' : 'primary.dark',
											transform: 'scale(1.05)',
											transition: 'transform 0.2s',
										},
									}}
								>
									{user.name}
								</Typography>
							) : (
								<Typography
									id="dashboard-drawer-user-avatar-name-placeholder"
									sx={{
										fontSize: '1.2rem',
										fontWeight: 'bold',
										color: 'primary.contrastText',
										'&:hover': {
											color: darkMode ? 'primary.light' : 'primary.dark',
											transform: 'scale(1.05)',
											transition: 'transform 0.2s',
										},
										'&:focus': {
											color: darkMode ? 'primary.light' : 'primary.dark',
											transform: 'scale(1.05)',
											transition: 'transform 0.2s',
										},
										'&:active': {
											color: darkMode ? 'primary.light' : 'primary.dark',
											transform: 'scale(1.05)',
											transition: 'transform 0.2s',
										},
									}}
								>
									User
								</Typography>
							)}
						</Button>
					</label>
				</Box>
				<Box
					id="dashboard-drawer-header-actions"
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						width: '100%',
						padding: 1,
						borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
					}}
				>
					<DrawerButton
						name="dashboard-menu"
						label="Menu"
						icon={<MenuIcon />}
						handleClick={handleClickMenu}
					/>

					<DrawerButton
						name="dashboard-profile"
						label="Profile"
						icon={<AccountCircle />}
						handleClick={() => router.push('/profile')}
					/>

					<DrawerButton
						name="dashboard-settings"
						label="Settings"
						icon={<Settings />}
						handleClick={() => router.push('/settings')}
					/>
				</Box>
			</Box>
			<Box
				id="dashboard-drawer-footer"
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					width: '100%',
					padding: 1,
					borderTop: '1px solid rgba(255, 255, 255, 0.12)',
				}}
			>
				<DrawerButton
					name="dashboard-color-picker"
					label="Theme Color"
					icon={<Palette />}
					handleClick={handleClickColorPicker}
				/>

				<DrawerButton
					name="dashboard-dark-mode"
					label="Dark Mode"
					icon={darkMode ? <Brightness7 /> : <Brightness4 />}
					handleClick={handleClickDarkMode}
				/>

				<DrawerButton
					name="dashboard-logout"
					label="Logout"
					icon={<ExitToApp />}
					handleClick={handleClickLogout}
				/>
			</Box>
			<Menu
				id="dashboard-drawer-header-actions-menu"
				anchorEl={anchorElMenu}
				open={Boolean(anchorElMenu)}
				onClose={handleCloseMenu}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center',
				}}
				MenuListProps={{
					'aria-labelledby': 'drawer-header-actions-menu-button',
				}}
				sx={{
					'& .MuiPaper-root': {
						backgroundColor: 'primary.main',
						color: 'primary.contrastText',
					},
				}}
			>
				<MenuItem id="dashboard-drawer-header-actions-menu-item-1" onClick={() => router.push('/')}>
					Home
				</MenuItem>
				<MenuItem
					id="dashboard-drawer-header-actions-menu-item-2"
					onClick={() => router.push('/about')}
				>
					About
				</MenuItem>
				<MenuItem
					id="dashboard-drawer-header-actions-menu-item-3"
					onClick={() => router.push('/contact')}
				>
					Contact
				</MenuItem>
			</Menu>
			<ColorPickerPopover
				name="dashboard-drawer"
				open={colorPickerOpen}
				anchorEl={colorPickerAnchorEl}
				handleClose={handleCloseColorPicker}
				handleColorChange={handleColorChange}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
			/>
			<Dialog
				open={signOutOpen}
				id="dashboard-sign-out-dialog"
				onClose={handleCloseSignOut}
				aria-labelledby="sign-out-dialog-title"
				aria-describedby="sign-out-dialog-description"
				sx={{
					'& .MuiPaper-root': {
						backgroundColor: 'primary.main',
						color: 'primary.contrastText',
					},
				}}
			>
				<DialogTitle
					id="dashboard-sign-out-dialog-title"
					sx={{
						backgroundColor: 'primary.main',
						color: 'primary.contrastText',
					}}
				>
					{'Sign Out?'}
				</DialogTitle>
				<DialogContent
					id="dashboard-sign-out-dialog-content"
					sx={{
						backgroundColor: 'primary.main',
						color: 'primary.contrastText',
					}}
				>
					<DialogContentText
						id="dashboard-sign-out-dialog-description"
						sx={{
							backgroundColor: 'primary.main',
							color: 'primary.contrastText',
						}}
					>
						Are you sure you want to sign out?
					</DialogContentText>
				</DialogContent>
				<DialogActions
					id="dashboard-sign-out-dialog-actions"
					sx={{
						backgroundColor: 'primary.main',
						color: 'primary.contrastText',
						display: 'flex',
						justifyContent: 'space-evenly',
					}}
				>
					<Button
						id="dashboard-sign-out-dialog-cancel-button"
						onClick={handleCloseSignOut}
						sx={{
							backgroundColor: 'primary.main',
							color: 'primary.contrastText',
							'&:hover': {
								backgroundColor: darkMode ? 'primary.dark' : 'primary.light',
							},
						}}
					>
						Cancel
					</Button>
					<Button
						id="dashboard-sign-out-dialog-confirm-button"
						onClick={handleSignOut}
						autoFocus
						sx={{
							backgroundColor: 'primary.main',
							color: 'primary.contrastText',
							'&:hover': {
								backgroundColor: darkMode ? 'primary.dark' : 'primary.light',
							},
						}}
					>
						Confirm
					</Button>
				</DialogActions>
			</Dialog>
		</Box>
	)
}

export default DashboardDrawer
