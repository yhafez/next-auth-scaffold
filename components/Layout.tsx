// Path: components/Layout.tsx

import { ReactNode } from 'react'
import { AppBar, Box, Toolbar, Typography, useMediaQuery } from '@mui/material'

import DarkModeSwitch from './DarkModeSwitch'
import ColorPickerIcon from './ColorPickerIcon'

import { useBoundStore } from '../store'

export interface LayoutProps {
	children: ReactNode
	name: string
	drawerWidth?: number
}

export function Layout({ children, name, drawerWidth }: LayoutProps) {
	const { darkMode, customPalette, theme } = useBoundStore()
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

	return (
		<Box
			id={`${name}-layout-container`}
			sx={{
				display: 'flex',
				'& .MuiDrawer-paper': {
					width: drawerWidth,
					boxSizing: 'border-box',
				},
			}}
		>
			<AppBar
				id={`${name}-app-bar`}
				position="fixed"
				sx={{
					backgroundColor: darkMode ? 'primary.dark' : 'primary.light',
					color: customPalette.primary.contrastText,
					transition: theme.transitions.create(['width', 'margin'], {
						easing: theme.transitions.easing.sharp,
						duration: theme.transitions.duration.leavingScreen,
					}),
					width: `${isMobile ? '100%' : `calc(100% - ${drawerWidth}px)`}`,
					ml: `${isMobile ? 0 : `${drawerWidth}px`}`,
					height: '64px',
				}}
			>
				<Toolbar
					id={`${name}-toolbar`}
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<Typography
						id={`${name}-toolbar-title`}
						variant="h6"
						noWrap
						component="h1"
						sx={{
							flexGrow: 1,
							color: 'primary.contrastText',
						}}
					>
						Next Auth Scaffold
					</Typography>
					<ColorPickerIcon name={`${name}-toolbar`} />
					<DarkModeSwitch name={`${name}-toolbar`} />
				</Toolbar>
			</AppBar>
			<Box
				id={`${name}-layout-content`}
				sx={{
					flexGrow: 1,
					padding: theme.spacing(3),
					transition: theme.transitions.create(['width', 'margin'], {
						easing: theme.transitions.easing.sharp,
						duration: theme.transitions.duration.leavingScreen,
					}),
					marginLeft: drawerWidth,
					width: `${isMobile ? '100%' : `calc(100% - ${drawerWidth}px)`}`,
					ml: `${isMobile ? 0 : `${drawerWidth}px`}`,
					mt: '64px',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					height: 'calc(100vh - 64px)',
					backgroundColor: darkMode ? 'grey.900' : 'grey.100',
				}}
			>
				{children}
			</Box>
		</Box>
	)
}
