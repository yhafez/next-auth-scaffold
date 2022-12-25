// Path: ./components/Drawers/DashboardDrawer.tsx

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Typography, Box, Avatar, Button, List, ListItem } from '@mui/material'
import {
	ExitToApp,
	Settings,
	Palette,
	AccountCircle,
	Brightness7,
	Brightness4,
	Home,
} from '@mui/icons-material'
import { darken, lighten } from 'color2k'

import { DrawerButton, ColorPickerPopover, DrawerSignOutPopover } from '..'
import { useBoundStore } from '../../store'
import { getContrastColor, getSecondaryColor } from '../../utils/helpers'

export default function DashboardDrawer() {
	const { darkMode, customPalette, user, setDarkMode, setCustomPalette } = useBoundStore()
	const router = useRouter()

	const [anchorElSignOut, setAnchorElSignOut] = useState<null | HTMLButtonElement>(null)
	const [anchorElColorPicker, setAnchorElColorPicker] = useState<null | HTMLButtonElement>(null)

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

	const handleClickDarkMode = () => {
		localStorage.setItem('darkMode', JSON.stringify(!darkMode))
		setDarkMode(!darkMode)
	}

	const handleClickLogout = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorElSignOut(event.currentTarget)

		const handleClickOutside = (event: MouseEvent) => {
			if (anchorElSignOut && !anchorElSignOut.contains(event.target as Node)) {
				document.removeEventListener('click', handleClickOutside)
			}
		}
		document.addEventListener('click', handleClickOutside)

		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				document.removeEventListener('keydown', handleEscape)
			}
		}
		document.addEventListener('keydown', handleEscape)

		return () => {
			document.removeEventListener('click', handleClickOutside)
			document.removeEventListener('keydown', handleEscape)
		}
	}

	const handleCloseColorPicker = () => {
		const handleClickOutside = (event: MouseEvent) => {
			if (anchorElColorPicker && !anchorElColorPicker.contains(event.target as Node)) {
				setAnchorElColorPicker(null)
				document.removeEventListener('click', handleClickOutside)
			}
		}
		document.addEventListener('click', handleClickOutside)

		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				setAnchorElColorPicker(null)
				document.removeEventListener('keydown', handleEscape)
			}
		}
		document.addEventListener('keydown', handleEscape)

		setAnchorElColorPicker(null)
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
			aria-label="left-hand drawer dashboard navigation"
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				alignItems: 'center',
				height: '100%',
				width: '100%',
			}}
		>
			<Box
				id="dashboard-drawer-header"
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					width: '100%',
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
								height: '18em',
								width: '100%',
								borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
							}}
							onClick={() => router.push('/profile')}
						>
							<Avatar
								id="dashboard-drawer-user-avatar-image"
								sx={{
									width: '8em',
									height: '8em',
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
								src={user?.image ?? '/default_profile.svg'}
								alt={`${user?.name ?? user?.email ?? 'User'}'s avatar`}
							/>
							<Typography
								id={`dashboard-drawer-user-avatar-name`}
								sx={{
									fontSize: '1.2rem',
									fontWeight: 'bold',
									color: 'primary.contrastText',
									wordBreak: 'break-all',
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
								{user?.name ?? user?.email ?? 'User'}
							</Typography>
						</Button>
					</label>
				</Box>
				<List
					id="dashboard-drawer-header-actions"
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						width: '100%',
						borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
					}}
				>
					<ListItem id="dashboard-drawer-header-actions-home-list-item" sx={{ p: 0 }}>
						<DrawerButton
							name="dashboard-home"
							label="Home"
							icon={<Home id="dashboard-home-drawer-icon" role="img" aria-hidden="true" />}
							href="/"
						/>
					</ListItem>
					<ListItem id="dashboard-drawer-header-actions-profile-list-item" sx={{ p: 0 }}>
						<DrawerButton
							name="dashboard-profile"
							label="Profile"
							icon={
								<AccountCircle id="dashboard-profile-drawer-icon" role="img" aria-hidden="true" />
							}
							href="/profile"
						/>
					</ListItem>

					<ListItem id="dashboard-drawer-header-actions-settings-list-item" sx={{ p: 0 }}>
						<DrawerButton
							name="dashboard-settings"
							label="Settings"
							icon={<Settings id="dashboard-settings-drawer-icon" role="img" aria-hidden="true" />}
							href="/settings"
						/>
					</ListItem>
				</List>
			</Box>
			<List
				id="dashboard-drawer-footer"
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					width: '100%',
					borderTop: '1px solid rgba(255, 255, 255, 0.12)',
				}}
			>
				<ListItem id="dashboard-drawer-footer-color-picker-list-item" sx={{ p: 0 }}>
					<DrawerButton
						name="dashboard-color-picker"
						label="Theme Color"
						icon={<Palette id="dashboard-color-picker-drawer-icon" role="img" aria-hidden="true" />}
						handleClick={e => setAnchorElColorPicker(e.currentTarget)}
					/>
				</ListItem>

				<ListItem id="dashboard-drawer-footer-dark-mode-list-item" sx={{ p: 0 }}>
					<DrawerButton
						name="dashboard-dark-mode"
						label={darkMode ? 'Light Mode' : 'Dark Mode'}
						icon={
							darkMode ? (
								<Brightness7 id="dashboard-light-mode-drawer-icon" role="img" aria-hidden="true" />
							) : (
								<Brightness4 id="dashboard-dark-mode-drawer-icon" role="img" aria-hidden="true" />
							)
						}
						handleClick={handleClickDarkMode}
					/>
				</ListItem>

				<ListItem id="dashboard-drawer-footer-log-out-list-item" sx={{ p: 0 }}>
					<DrawerButton
						name="dashboard-log-out"
						label="Logout"
						icon={<ExitToApp id="dashboard-log-out-drawer-icon" role="img" aria-hidden="true" />}
						handleClick={handleClickLogout}
					/>
				</ListItem>
			</List>
			<ColorPickerPopover
				name="dashboard-drawer"
				anchorEl={anchorElColorPicker}
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
			<DrawerSignOutPopover
				anchorEl={anchorElSignOut}
				handleClose={() => setAnchorElSignOut(null)}
			/>
		</Box>
	)
}
