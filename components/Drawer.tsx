// Path: ./components/Drawer.tsx

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { signOut } from 'next-auth/react'
import {
	Drawer,
	IconButton,
	Typography,
	Box,
	Avatar,
	Menu,
	MenuItem,
	useMediaQuery,
	Button,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
	DialogActions,
} from '@mui/material'
import {
	ChevronLeft,
	ChevronRight,
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

import { useBoundStore } from '../store'
import { lightenColor, darkenColor, getContrast, getSecondaryColor } from '../utils/helpers'

import ColorPickerPopover from './ColorPickerPopover'
import DrawerButton from './DrawerButton'

export interface DrawerProps {
	open: boolean
	handleDrawerClose: () => void
	drawerWidth: number
}

export default function DrawerComponent({
	open,
	handleDrawerClose,
	drawerWidth = 240,
}: DrawerProps) {
	const { darkMode, customPalette, user, setDarkMode, setCustomPalette } = useBoundStore()
	const { enqueueSnackbar } = useSnackbar()
	const router = useRouter()
	const theme = useTheme()

	const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
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
					light: lightenColor(newMainColor, 25),
					dark: darkenColor(newMainColor, 25),
					contrastText: getContrast(newMainColor),
				},
				secondary: {
					main: getSecondaryColor(newMainColor),
					light: lightenColor(getSecondaryColor(newMainColor), 25),
					dark: darkenColor(getSecondaryColor(newMainColor), 25),
					contrastText: getContrast(getSecondaryColor(newMainColor)),
				},
			})
		}
	}, [])

	useEffect(() => {
		const savedDarkMode = localStorage.getItem('darkMode')
		if (savedDarkMode) {
			setDarkMode(JSON.parse(savedDarkMode))
		}
	}, [darkMode, setDarkMode])

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
				light: lightenColor(color, 25),
				dark: darkenColor(color, 25),
				contrastText: getContrast(color),
			},
			secondary: {
				main: getSecondaryColor(color),
				light: lightenColor(getSecondaryColor(color), 25),
				dark: darkenColor(getSecondaryColor(color), 25),
				contrastText: getContrast(getSecondaryColor(color)),
			},
		})

		localStorage.setItem('customPalette', color)
	}

	return (
		<Drawer
			id="drawer"
			sx={{
				width: drawerWidth,
				flexShrink: 0,
				'& .MuiDrawer-paper': {
					width: drawerWidth,
					boxSizing: 'border-box',
					backgroundColor: darkMode ? 'primary.dark' : 'primary.light',
					color: 'primary.contrastText',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
				},
			}}
			variant={isMobile ? 'temporary' : 'permanent'}
			open={open}
			anchor="left"
			onClose={handleDrawerClose}
		>
			<Box
				id="drawer-header"
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'flex-end',
					...theme.mixins.toolbar,
				}}
			>
				<Box
					id="drawer-header-user"
					sx={{
						display: 'flex',
						alignItems: 'center',
						flexDirection: 'column',
						justifyContent: 'center',
						width: '100%',
					}}
				>
					{isMobile && (
						<Box
							id="drawer-header-avatar"
							sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								padding: 1,
								...theme.mixins.toolbar,
								borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
								width: '100%',
							}}
						>
							<IconButton
								id="drawer-close-button"
								onClick={handleDrawerClose}
								sx={{
									color: 'primary.contrastText',
									width: '100%',
									height: '100%',
									borderRadius: 0,
									'&:hover': {
										backgroundColor: 'primary.main',
									},
									'&:focus': {
										backgroundColor: 'primary.main',
									},
									'&:active': {
										backgroundColor: 'primary.main',
									},
								}}
							>
								{theme.direction === 'ltr' ? (
									<ChevronLeft id="drawer-close-icon" sx={{ fontSize: 40 }} />
								) : (
									<ChevronRight id="drawer-close-icon" sx={{ fontSize: 40 }} />
								)}
							</IconButton>
						</Box>
					)}
					<label htmlFor="avatar" style={{ width: '100%' }}>
						<Button
							id="drawer-user-avatar"
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
								id="drawer-user-avatar-image"
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
									id="drawer-user-avatar-name"
									sx={{
										fontSize: '1.2rem',
										fontWeight: 'bold',
										color: 'primary.contrastText',
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
								>
									{user.name}
								</Typography>
							) : (
								<Typography
									id="drawer-user-avatar-name-placeholder"
									sx={{
										fontSize: '1.2rem',
										fontWeight: 'bold',
										color: 'primary.contrastText',
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
								>
									User
								</Typography>
							)}
						</Button>
					</label>
				</Box>
				<Box
					id="drawer-header-actions"
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
						name="menu"
						label="Menu"
						icon={<MenuIcon />}
						handleClick={handleClickMenu}
					/>

					<DrawerButton
						name="profile"
						label="Profile"
						icon={<AccountCircle />}
						handleClick={() => router.push('/profile')}
					/>

					<DrawerButton
						name="settings"
						label="Settings"
						icon={<Settings />}
						handleClick={() => router.push('/settings')}
					/>
				</Box>
			</Box>
			<Box
				id="drawer-footer"
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
					name="color-picker"
					label="Theme Color"
					icon={<Palette />}
					handleClick={handleClickColorPicker}
				/>

				<DrawerButton
					name="dark-mode"
					label="Dark Mode"
					icon={darkMode ? <Brightness7 /> : <Brightness4 />}
					handleClick={handleClickDarkMode}
				/>

				<DrawerButton
					name="logout"
					label="Logout"
					icon={<ExitToApp />}
					handleClick={handleClickLogout}
				/>
			</Box>
			<Menu
				id="drawer-header-actions-menu"
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
				<MenuItem id="drawer-header-actions-menu-item-1" onClick={() => router.push('/')}>
					Home
				</MenuItem>
				<MenuItem id="drawer-header-actions-menu-item-2" onClick={() => router.push('/about')}>
					About
				</MenuItem>
				<MenuItem id="drawer-header-actions-menu-item-3" onClick={() => router.push('/contact')}>
					Contact
				</MenuItem>
			</Menu>
			<ColorPickerPopover
				name="drawer"
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
					id="sign-out-dialog-title"
					sx={{
						backgroundColor: 'primary.main',
						color: 'primary.contrastText',
					}}
				>
					{'Sign Out?'}
				</DialogTitle>
				<DialogContent
					sx={{
						backgroundColor: 'primary.main',
						color: 'primary.contrastText',
					}}
				>
					<DialogContentText
						id="sign-out-dialog-description"
						sx={{
							backgroundColor: 'primary.main',
							color: 'primary.contrastText',
						}}
					>
						Are you sure you want to sign out?
					</DialogContentText>
				</DialogContent>
				<DialogActions
					sx={{
						backgroundColor: 'primary.main',
						color: 'primary.contrastText',
						display: 'flex',
						justifyContent: 'space-evenly',
					}}
				>
					<Button
						id="sign-out-dialog-cancel-button"
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
						id="sign-out-dialog-confirm-button"
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
		</Drawer>
	)
}
