// Path: ./components/Drawers/SettingsDrawer.tsx
import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Box, Link as MuiLink, List, ListItem } from '@mui/material'
import {
	Security,
	Settings,
	Accessibility,
	Person,
	ArrowBack,
	ExitToApp,
} from '@mui/icons-material'

import { DrawerButton, DrawerSignOutPopover } from '..'
import { useBoundStore } from '../../store'
import { bounce } from '../../shared/styles'

export default function SettingsDrawer() {
	const { darkMode } = useBoundStore()
	const router = useRouter()

	const [anchorElSignOut, setAnchorElSignOut] = useState<null | HTMLButtonElement>(null)

	return (
		<Box
			id="settings-drawer"
			component="nav"
			aria-label="left-hand drawer settings navigation"
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
				id="settings-drawer-header"
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					width: '100%',
					borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
				}}
			>
				<MuiLink
					id="settings-drawer-header-title"
					component={Link}
					href="/settings"
					title="General Settings"
					aria-label="General Settings"
					sx={{
						textDecoration: 'none',
						color: 'primary.contrastText',
						fontSize: '3rem',
						fontWeight: 700,
						width: '100%',
						height: '112px',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
						my: 2,

						'&:hover': {
							color: darkMode ? 'primary.light' : 'primary.dark',
							animation: `${bounce} 2s ease-in-out infinite alternate`,
						},

						'&:active': {
							color: darkMode ? 'primary.light' : 'primary.dark',
							animation: `${bounce} 2s ease-in-out infinite alternate`,
						},

						'&:focus': {
							color: darkMode ? 'primary.light' : 'primary.dark',
							animation: `${bounce} 2s ease-in-out infinite alternate`,
						},
					}}
				>
					Settings
				</MuiLink>
				<List
					id="settings-drawer-content"
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'flex-start',
						width: '100%',
					}}
				>
					<ListItem id="settings-drawer-content-profile-settings-list-item" sx={{ p: 0 }}>
						<DrawerButton
							name="profile-settings"
							label="Profile"
							icon={
								<Person
									id="settings-drawer-content-profile-settings-icon"
									role="img"
									aria-hidden="true"
								/>
							}
							href="/settings/profile"
						/>
					</ListItem>
					<ListItem id="settings-drawer-content-account-settings-list-item" sx={{ p: 0 }}>
						<DrawerButton
							name="account-settings"
							label="Account"
							icon={
								<Settings
									id="settings-drawer-content-account-settings-icon"
									role="img"
									aria-hidden="true"
								/>
							}
							href="/settings/account"
						/>
					</ListItem>
					<ListItem id="settings-drawer-content-security-settings-list-item" sx={{ p: 0 }}>
						<DrawerButton
							name="security-settings"
							label="Security"
							icon={
								<Security
									id="settings-drawer-content-security-settings-icon"
									role="img"
									aria-hidden="true"
								/>
							}
							href="/settings/security"
						/>
					</ListItem>
					<ListItem id="settings-drawer-content-accessibility-settings-list-item" sx={{ p: 0 }}>
						<DrawerButton
							name="accessibility-settings"
							label="Accessibility"
							icon={
								<Accessibility
									id="settings-drawer-content-accessibility-settings-icon"
									role="img"
									aria-hidden="true"
								/>
							}
							href="/settings/accessibility"
						/>
					</ListItem>
				</List>
			</Box>

			<List
				id="settings-drawer-footer"
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					width: '100%',
					borderTop: '1px solid rgba(255, 255, 255, 0.12)',
				}}
			>
				{router.pathname !== '/settings' && (
					<ListItem id="settings-drawer-footer-arrow-back-to-settings-icon" sx={{ p: 0 }}>
						<DrawerButton
							name="settings"
							label="General Settings"
							icon={
								<ArrowBack
									id="settings-drawer-footer-arrow-back-to-settings-icon"
									role="img"
									aria-hidden="true"
								/>
							}
							href="/settings"
						/>
					</ListItem>
				)}

				<ListItem id="settings-drawer-footer-arrow-back-to-dashboard-icon" sx={{ p: 0 }}>
					<DrawerButton
						name="dashboard"
						label="Dashboard"
						icon={
							<ArrowBack
								id="settings-drawer-footer-arrow-back-to-dashboard-icon"
								role="img"
								aria-hidden="true"
							/>
						}
						href="/"
					/>
				</ListItem>

				<ListItem
					id="settings-drawer-footer-log-out-list-item"
					sx={{
						p: 0,
					}}
				>
					<DrawerButton
						name="logout"
						label="Logout"
						icon={
							<ExitToApp id="settings-drawer-footer-log-out-icon" role="img" aria-hidden="true" />
						}
						handleClick={e => {
							setAnchorElSignOut(e.currentTarget)
						}}
					/>
				</ListItem>
			</List>
			<DrawerSignOutPopover
				anchorEl={anchorElSignOut}
				handleClose={() => setAnchorElSignOut(null)}
			/>
		</Box>
	)
}
