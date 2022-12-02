// Path: components/Layout.tsx

import { ReactNode } from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'

import DarkModeSwitch from './DarkModeSwitch'

import { useBoundStore } from '../store'

export interface LayoutProps {
	children: ReactNode
}

export function Layout({ children }: LayoutProps) {
	const {
		settings: { darkMode },
	} = useBoundStore()

	return (
		<>
			<AppBar
				position="static"
				id="layout-appbar"
				sx={{
					backgroundColor: darkMode ? 'primary.dark' : 'primary.light',
					color: darkMode ? 'white' : 'black',
					'& .MuiToolbar-root': {
						justifyContent: 'space-between',
					},
					'& .MuiTypography-root': {
						fontWeight: 'bold',
					},
				}}
				aria-label="appbar"
			>
				<Toolbar
					id="layout-toolbar"
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
					}}
					aria-label="toolbar"
				>
					<Typography
						id="layout-title"
						variant="h6"
						component="div"
						sx={{ flexGrow: 1 }}
						aria-label="title"
					>
						Next Auth Scaffold
					</Typography>
					<DarkModeSwitch />
				</Toolbar>
			</AppBar>
			{children}
		</>
	)
}
