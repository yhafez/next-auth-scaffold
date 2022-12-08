import React from 'react'
import Image from 'next/image'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { ThemeProvider } from '@mui/material'
import { SnackbarProvider } from 'notistack'
import { QueryClient, QueryClientProvider } from 'react-query'
import { SessionProvider } from 'next-auth/react'
import CloseIcon from '@mui/icons-material/Close'

import { defaultTheme, createCustomTheme } from '../theme'
import { IconButton } from '@mui/material'
import Head from 'next/head'
import { Box } from '@mui/material'

export const globalTypes = {
	theme: {
		name: 'Theme',
		description: 'Global theme for components',
		defaultValue: 'light',
		toolbar: {
			icon: 'circlehollow',
			items: ['light', 'dark'],
			showName: true,
		},
	},
}

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
			refetchOnWindowFocus: false,
		},
	},
})

const OriginalNextImage = Image

Object.defineProperty(Image, 'default', {
	configurable: true,
	value: props => <OriginalNextImage {...props} unoptimized />,
})

export const parameters = {
	nextRouter: {
		Provider: RouterContext.Provider,
	},
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	previewTabs: {
		'storybook/docs/panel': { index: -1 },
	},
}

const snackbarRef = React.createRef()
const darkMode = false
const customPalette = defaultTheme.palette

export const decorators = [
	Story => (
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
					<ThemeProvider theme={defaultTheme}>
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
	),
]
