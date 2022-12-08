// Path: ./pages/_app.tsx
import Head from 'next/head'
import { useState, useEffect, useRef } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { SnackbarProvider } from 'notistack'
import { QueryClient, QueryClientProvider } from 'react-query'
import { SessionProvider } from 'next-auth/react'
import CloseIcon from '@mui/icons-material/Close'

import { useBoundStore } from '../store'
import { createCustomTheme } from '../theme'
import { IconButton } from '@mui/material'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
			refetchOnWindowFocus: false,
		},
	},
})

function MyApp({ Component, pageProps }: AppProps) {
	const { darkMode, customPalette } = useBoundStore()
	const [theme, setTheme] = useState(createCustomTheme(customPalette, darkMode))
	const snackbarRef = useRef<React.ElementRef<typeof SnackbarProvider>>(null)

	useEffect(() => {
		setTheme(createCustomTheme(customPalette, darkMode))
	}, [customPalette, darkMode])

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
				<SessionProvider session={pageProps.session}>
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
							<Component {...pageProps} />
						</SnackbarProvider>
					</ThemeProvider>
				</SessionProvider>
			</QueryClientProvider>
		</>
	)
}

export default MyApp
