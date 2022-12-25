import React, { useMemo, useRef } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import Image from 'next/image'
import Head from 'next/head'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { SnackbarProvider } from 'notistack'
import { CssBaseline, IconButton, Box } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { Close } from '@mui/icons-material'

import { worker } from '../mocks/browser'
import { defaultTheme, defaultDarkTheme } from '../theme'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/material-icons'

if (typeof global === 'undefined' || typeof global.process === 'undefined') worker.start()

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

	const snackbarRef = useRef(null)

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
								aria-label="close snackbar"
								color="inherit"
								onClick={() => snackbarRef.current?.closeSnackbar(key)}
							>
								<Close fontSize="small" role="img" />
							</IconButton>
						)}
					>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center',
								height: '100vh',
								width: '100vw',
							}}
						>
							<Story />
						</Box>
					</SnackbarProvider>
				</ThemeProvider>
			</QueryClientProvider>
		</>
	)
}

export const decorators = [withMuiTheme]
