// Path: ./components/Drawer.tsx
import { Drawer, IconButton, Box, Typography, useMediaQuery } from '@mui/material'
import { ChevronLeft } from '@mui/icons-material'

import { useBoundStore } from '../store'

export interface DrawerProps {
	open: boolean
	handleDrawerClose: () => void
	children: React.ReactNode
}

export default function DrawerComponent({ open, handleDrawerClose, children }: DrawerProps) {
	const { darkMode, theme } = useBoundStore()
	const isMobile = useMediaQuery(`(max-width:${theme.breakpoints.values.sm}px)`)

	return (
		<Drawer
			id="drawer"
			sx={{
				width: '18em',
				flexShrink: 0,
				overflowY: 'scroll',
				'& .MuiDrawer-paper': {
					width: '18em',
					boxSizing: 'border-box',
					backgroundColor: darkMode ? 'primary.dark' : 'primary.light',
					color: 'primary.contrastText',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'flex-start',
				},
			}}
			variant={isMobile ? 'temporary' : 'permanent'}
			open={open}
			anchor="left"
			onClose={handleDrawerClose}
		>
			<>
				{isMobile && (
					<Box
						id="drawer-close-button-container"
						onClick={handleDrawerClose}
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							padding: 1,
							...theme.mixins.toolbar,
							borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
							pt: 2,
							pb: 2,
							px: 0,
							width: '100%',
							height: '2em',
							cursor: 'pointer',
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
						<IconButton
							id="drawer-close-button"
							sx={{
								color: 'primary.contrastText',
								height: '100%',
								borderRadius: 0,
								'&:hover': {
									backgroundColor: 'transparent',
								},
							}}
						>
							<ChevronLeft
								id="drawer-close-button-icon"
								sx={{ fontSize: 40 }}
								role="img"
								aria-labelledby="drawer-close-button-label-text"
							/>
						</IconButton>
						<label id="drawer-close-button-label" htmlFor="drawer-close-button">
							<Typography
								id="drawer-close-button-label-text"
								sx={{
									fontWeight: 500,
									pr: 2,
									color: 'primary.contrastText',
									ml: 1,
									cursor: 'pointer',
									'&:hover': {
										color: darkMode ? 'primary.light' : 'primary.dark',
										transform: 'scale(1.1)',
									},
									'&:focus': {
										color: darkMode ? 'primary.light' : 'primary.dark',
										transform: 'scale(1.1)',
									},
									'&:active': {
										color: darkMode ? 'primary.light' : 'primary.dark',
										transform: 'scale(1.1)',
									},
								}}
							>
								Close
							</Typography>
						</label>
					</Box>
				)}
				{children}
			</>
		</Drawer>
	)
}
