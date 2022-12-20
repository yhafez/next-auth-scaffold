// Path: ./pages/_app.tsx
import { useState, useEffect, useRef, ElementRef } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { HydrationProvider } from 'react-hydration-provider'
import Head from 'next/head'
import { SessionProvider } from 'next-auth/react'
import { SnackbarProvider } from 'notistack'
import { IconButton, CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { Close } from '@mui/icons-material'

import { globalStyles } from '../shared/styles'
import { useBoundStore } from '../store'
import { createCustomTheme } from '../theme'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
			refetchOnWindowFocus: false,
		},
	},
})

export default function MyApp(props: { Component: React.ElementType; pageProps: any }) {
	const { Component, pageProps } = props

	const { darkMode, customPalette } = useBoundStore()
	const [theme, setTheme] = useState(createCustomTheme(customPalette, darkMode))
	const snackbarRef = useRef<ElementRef<typeof SnackbarProvider>>(null)

	useEffect(() => {
		setTheme(createCustomTheme(customPalette, darkMode))
	}, [customPalette, darkMode])

	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
				/>
			</Head>
			<QueryClientProvider client={queryClient}>
				<HydrationProvider>
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
										aria-label="close snackbar"
										color="inherit"
										onClick={() => snackbarRef.current?.closeSnackbar(key)}
									>
										<Close
											fontSize="small"
											id="snackbar-dismiss-icon"
											role="button"
											aria-label="close snackbar"
										/>
									</IconButton>
								)}
							>
								{globalStyles}
								<Component {...pageProps} />
							</SnackbarProvider>
						</ThemeProvider>
					</SessionProvider>
				</HydrationProvider>
			</QueryClientProvider>
		</>
	)
}
