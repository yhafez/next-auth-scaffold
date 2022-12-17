// Path: components/Layout.tsx
import { useState, ReactNode } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
	AppBar,
	Box,
	IconButton,
	List,
	ListItem,
	Toolbar,
	Typography,
	useMediaQuery,
	Button,
	Link as MuiLink,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { ChevronRight } from '@mui/icons-material'

import Drawer from './Drawer'
import DarkModeSwitch from './DarkModeSwitch'
import ColorPickerIcon from './ColorPickerIcon'

import { useBoundStore } from '../store'
import { toTitleCase } from '../utils/helpers'
import { bounce } from '../shared/styles'

const loginRedirectLinks = ['/login', '/signup', '/forgot-password', '/reset-password']

export interface LayoutProps {
	pageTitle: string
	name: string
	children: ReactNode
	drawerChildren?: ReactNode
}

export function Layout({ pageTitle, name, children, drawerChildren }: LayoutProps) {
	const { darkMode, customPalette, theme: customTheme } = useBoundStore()
	const theme = useTheme()
	const router = useRouter()

	const isMobile = useMediaQuery(`(max-width:${customTheme.breakpoints.values.sm}px)`)

	const [drawerOpen, setDrawerOpen] = useState(false)
	const [selected, setSelected] = useState(false)

	return (
		<>
			<Head>
				<title>{toTitleCase(pageTitle)} | Next Auth Scaffold</title>
			</Head>
			<Button
				id={`${name}-skip-nav-link`}
				onClick={() => document.getElementById(`${name}-layout-content`)?.focus()}
				onKeyDown={e => {
					if (e.key === 'Enter' || e.key === 'space')
						document.getElementById(`${name}-layout-content`)?.focus()
				}}
				sx={{
					position: 'absolute',
					overflow: 'hidden',
					clip: 'rect(0 0 0 0)',
					height: '1px',
					width: '1px',
					margin: '-1px',
					padding: '0',
					border: '0',
					whiteSpace: 'nowrap',
					backgroundColor: 'transparent',
					color: 'primary.contrastText',

					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					'&:hover': {
						backgroundColor: darkMode ? 'primary.dark' : 'primary.light',
					},
					'&:focus': {
						zIndex: 1300,
						position: 'fixed',
						top: 0,
						left: 10,
						overflow: 'visible',
						clip: 'auto',
						height: '40px',
						width: '10%',
						margin: '0',
						whiteSpace: 'normal',
						backgroundColor: 'primary.main',
						border: '1px solid rgba(0, 0, 0, 0.2)',
						borderRadius: '0 0 10px 10px',
						textDecoration: 'underline',
					},
				}}
			>
				<Typography
					id={`${name}-skip-nav-link-text`}
					variant="body1"
					sx={{
						textDecoration: 'underline',
						color: 'primary.contrastText',

						'&:hover': {
							transform: 'scale(1.05)',
							color: darkMode ? 'primary.light' : 'primary.dark',
						},
					}}
				>
					Skip to main content
				</Typography>
			</Button>
			{drawerChildren && (
				<Drawer open={drawerOpen} handleDrawerClose={() => setDrawerOpen(false)}>
					{drawerChildren}
				</Drawer>
			)}
			<Box
				id={`${name}-layout-container`}
				sx={{
					display: 'flex',
					width: '100%',
					height: '100%',
					zIndex: 1,
				}}
			>
				<AppBar
					id={`${name}-app-bar`}
					position="fixed"
					sx={{
						backgroundColor: darkMode ? 'primary.dark' : 'primary.light',
						color: customPalette.primary.contrastText,
						transition: theme.transitions.create(['margin', 'width'], {
							easing: customTheme.transitions.easing.sharp,
							duration: customTheme.transitions.duration.leavingScreen,
						}),
						width: `${isMobile || !drawerChildren ? '100%' : `calc(100% - 240px)`}`,
						ml: `${isMobile || !drawerChildren ? 0 : `240px`}`,
						height: '80px',
						zIndex: 1000,
					}}
				>
					<Toolbar
						id={`${name}-toolbar`}
						component="nav"
						aria-label="header navigation"
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
								<Typography
									id={`${name}-toolbar-collapse-drawer-text`}
									variant="body1"
									component="label"
									htmlFor={`${name}-toolbar-collapse-drawer-icon`}
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
							</Box>
						)}

						<MuiLink
							id={`${name}-toolbar-title-link`}
							title="Home"
							aria-label="Home"
							href={`${loginRedirectLinks.includes(router.pathname) ? '/login' : '/'}`}
							sx={{
								textDecoration: 'none',
								color: 'primary.contrastText',
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
							component={Link}
						>
							<Typography
								id={`${name}-toolbar-title`}
								variant="h1"
								noWrap
								component="h1"
								sx={{
									color: 'inherit',
									fontWeight: 500,
									cursor: 'pointer',
									fontSize: '4rem',
									ml: 4,
									mt: 2,
								}}
							>
								Next Auth Scaffold
							</Typography>
						</MuiLink>
						<List
							id={`${name}-toolbar-icons`}
							sx={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<ListItem
								id={`${name}-toolbar-icons-color-picker-item`}
								sx={{ p: 0, width: '100%', mr: 4 }}
							>
								<ColorPickerIcon name={`${name}-toolbar`} />
							</ListItem>
							<ListItem
								id={`${name}-toolbar-icons-dark-mode-switch-item`}
								sx={{ p: 0, width: '100%' }}
							>
								<DarkModeSwitch name={`${name}-toolbar`} />
							</ListItem>
						</List>
					</Toolbar>
				</AppBar>
				<Box
					id={`${name}-layout-content`}
					component="main"
					tabIndex={-1}
					sx={{
						position: 'relative',
						flexGrow: 1,
						padding: theme.spacing(3),
						overflow: 'scroll',
						transition: theme.transitions.create(['width', 'margin'], {
							easing: customTheme.transitions.easing.sharp,
							duration: customTheme.transitions.duration.leavingScreen,
						}),
						marginLeft: '224px',
						width: `${isMobile || !drawerChildren ? '100%' : `calc(100% - 224px)`}`,
						ml: `${isMobile || !drawerChildren ? '-16px' : `224px`}`,
						mt: '64px',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						height: 'calc(100vh - 64px)',
						contain: 'layout',
						backgroundColor: darkMode ? 'grey.900' : 'grey.100',
					}}
				>
					{children}
				</Box>
			</Box>
		</>
	)
}
