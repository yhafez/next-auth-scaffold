import React, { useMemo, useState, useRef, ElementRef } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import Image from 'next/image'
import Head from 'next/head'
import { SessionProvider } from 'next-auth/react'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { ThemeProvider, CssBaseline, IconButton, Box } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { SnackbarProvider } from 'notistack'

import { defaultTheme, defaultDarkTheme } from '../theme'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/material-icons'
import { useEffect } from 'react'

const THEMES = {
	light: defaultTheme,
	dark: defaultDarkTheme,
}

export const globalTypes = {
	theme: {
		name: 'Theme',
		title: 'Theme',
		description: 'Global theme for components',
		defaultValue: 'dark',
		toolbar: {
			icon: 'paintbrush',
			dynamicTitle: true,
			items: [
				{ value: 'light', left: '☀️', title: 'Light' },
				{ value: 'dark', left: '🌙', title: 'Dark' },
			],
		},
	},
}

export const parameters = {
	nextRouter: {
		Provider: RouterContext.Provider,
	},
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		expanded: true,
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	previewTabs: {
		'storybook/docs/panel': { index: -1 },
	},
}

const OriginalNextImage = Image

Object.defineProperty(Image, 'default', {
	configurable: true,
	value: props => <OriginalNextImage {...props} unoptimized />,
})

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
			refetchOnWindowFocus: false,
		},
	},
})

const withMuiTheme = (Story, context) => {
	const { theme: themeKey } = context.globals
	const theme = useMemo(() => THEMES[themeKey] || THEMES['light'], [themeKey])

	const [isMounted, setIsMounted] = useState(false)
	const snackbarRef = useRef(null)

	useEffect(() => {
		setIsMounted(true)
	}, [])

	return (
		<>
			<Head>
				<title>Next Auth Scaffold</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
				/>
			</Head>
			<QueryClientProvider client={queryClient}>
				<SessionProvider
					session={{
						expires: '2021-09-29T18:00:00.000Z',
						user: {
							email: 'test@example.com',
							image: null,
							name: 'Test User',
						},
					}}
				>
					<ThemeProvider theme={theme}>
						<CssBaseline />
						<SnackbarProvider
							ref={snackbarRef}
							maxSnack={3}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'right',
							}}
							preventDuplicate
							action={key => (
								<IconButton
									id="snackbar-dismiss-button"
									size="small"
									aria-label="close"
									color="inherit"
									onClick={() => snackbarRef.current?.closeSnackbar(key)}
									sx={{
										fontSize: '1rem',
										padding: '0.5rem',
										'&:hover': {
											backgroundColor: 'rgba(0, 0, 0, 0.04)',
											transform: 'scale(1.1)',
										},
									}}
								>
									<CloseIcon
										id="snackbar-dismiss-button-icon"
										fontSize="small"
										sx={{
											fontSize: '1rem',
											color: 'primary.contrastText',
										}}
									/>
								</IconButton>
							)}
						>
							<main>
								<Box
									sx={{
										display: 'flex',
										flexDirection: 'column',
										justifyContent: 'center',
										alignItems: 'center',
										minHeight: '100vh',
										minWidth: '100vw',
									}}
								>
									<Story />
								</Box>
							</main>
						</SnackbarProvider>
					</ThemeProvider>
				</SessionProvider>
			</QueryClientProvider>
		</>
	)
}

export const decorators = [withMuiTheme]
