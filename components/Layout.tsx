// Path: components/Layout.tsx
import { useState, ReactNode } from 'react'
import { AppBar, Box, IconButton, Toolbar, Typography, useMediaQuery } from '@mui/material'
import { ChevronRight } from '@mui/icons-material'

import Drawer from './Drawer'
import DarkModeSwitch from './DarkModeSwitch'
import ColorPickerIcon from './ColorPickerIcon'

import { useBoundStore } from '../store'

export interface LayoutProps {
	name: string
	children: ReactNode
	drawerChildren?: ReactNode
}

export function Layout({ name, children, drawerChildren }: LayoutProps) {
	const { darkMode, customPalette, theme } = useBoundStore()
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

	const [drawerOpen, setDrawerOpen] = useState(false)
	const [selected, setSelected] = useState(false)

	return (
		<>
			{drawerChildren && (
				<Drawer open={drawerOpen} handleDrawerClose={() => setDrawerOpen(false)}>
					{drawerChildren}
				</Drawer>
			)}
			<Box
				id={`${name}-layout-container`}
				sx={{
					display: 'flex',
					'& .MuiDrawer-paper': {
						width: 240,
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
						width: `${isMobile || !drawerChildren ? '100%' : `calc(100% - 240px)`}`,
						ml: `${isMobile || !drawerChildren ? 0 : `240px`}`,
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
						{isMobile && drawerChildren && (
							<Box
								id={`${name}-toolbar-collapse-drawer`}
								onMouseEnter={() => setSelected(true)}
								onMouseLeave={() => setSelected(false)}
								onFocus={() => setSelected(true)}
								onBlur={() => setSelected(false)}
								sx={{
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<IconButton
									id={`${name}-toolbar-collapse-drawer-icon`}
									color="inherit"
									aria-labelledby={`${name}-toolbar-collapse-drawer-text`}
									onClick={() => setDrawerOpen(true)}
									edge="start"
									sx={{
										color: customPalette.primary.contrastText,
										cursor: 'pointer',
										mx: 4,
										...(drawerOpen && { display: 'none' }),
									}}
								>
									<ChevronRight
										id={`${name}-toolbar-collapse-drawer-icon`}
										sx={{
											color: selected
												? darkMode
													? 'primary.light'
													: 'primary.dark'
												: 'primary.contrastText',
										}}
									/>
								</IconButton>
								<label htmlFor={`${name}-toolbar-collapse-drawer-icon`}>
									<Typography
										id={`${name}-toolbar-collapse-drawer-text`}
										variant="body1"
										sx={{
											fontWeight: 500,
											ml: 1,
											cursor: 'pointer',
											color: selected
												? darkMode
													? 'primary.light'
													: 'primary.dark'
												: 'primary.contrastText',
											...(drawerOpen && { display: 'none' }),
										}}
									>
										Open
									</Typography>
								</label>
							</Box>
						)}

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
						marginLeft: '240px',
						width: `${isMobile || !drawerChildren ? '100%' : `calc(100% - 240px)`}`,
						ml: `${isMobile || !drawerChildren ? 0 : `240px`}`,
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
		</>
	)
}
