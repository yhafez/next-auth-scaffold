// Path: ./components/Drawers/SettingsDrawer.tsx
import { useState } from 'react'
import { useRouter } from 'next/router'
import { Box, Typography, List, ListItem } from '@mui/material'
import {
	Security,
	Settings,
	Accessibility,
	Person,
	ArrowBack,
	ExitToApp,
} from '@mui/icons-material'

import DrawerButton from '../DrawerButton'
import DrawerSignOutPopover from '../Popovers/DrawerSignOutPopover'

const SettingsDrawer = () => {
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
				alignItems: 'center',
				justifyContent: 'space-between',
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
				<Typography
					variant="h1"
					sx={{
						marginBottom: '1rem',
						color: 'primary.contrastText',
						fontSize: '3rem',
						fontWeight: 700,
						width: '100%',
						height: '72px',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
						my: 2,
					}}
				>
					Settings
				</Typography>
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
							icon={<Person />}
							href="/settings/profile"
						/>
					</ListItem>
					<ListItem id="settings-drawer-content-account-settings-list-item" sx={{ p: 0 }}>
						<DrawerButton
							name="account-settings"
							label="Account"
							icon={<Settings />}
							href="/settings/account"
						/>
					</ListItem>
					<ListItem id="settings-drawer-content-security-settings-list-item" sx={{ p: 0 }}>
						<DrawerButton
							name="security-settings"
							label="Security"
							icon={<Security />}
							href="/settings/security"
						/>
					</ListItem>
					<ListItem id="settings-drawer-content-accessibility-settings-list-item" sx={{ p: 0 }}>
						<DrawerButton
							name="accessibility-settings"
							label="Accessibility"
							icon={<Accessibility />}
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
							icon={<ArrowBack id="settings-drawer-footer-arrow-back-to-settings-icon" />}
							href="/settings"
						/>
					</ListItem>
				)}

				<ListItem id="settings-drawer-footer-arrow-back-to-dashboard-icon" sx={{ p: 0 }}>
					<DrawerButton
						name="dashboard"
						label="Dashboard"
						icon={<ArrowBack id="settings-drawer-footer-arrow-back-to-dashboard-icon" />}
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
						icon={<ExitToApp id="settings-drawer-footer-log-out-icon" />}
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

export default SettingsDrawer
