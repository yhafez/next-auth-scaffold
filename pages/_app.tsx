// Path: ./pages/_app.tsx
import { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import { SnackbarProvider } from 'notistack'
import { QueryClient, QueryClientProvider } from 'react-query'
import { SessionProvider } from 'next-auth/react'

import { Layout } from '../components/Layout'

import { theme } from '../theme'

import '../styles/globals.css'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
			refetchOnWindowFocus: false,
		},
	},
})

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<SessionProvider session={pageProps.session}>
				<ThemeProvider theme={theme}>
					<SnackbarProvider maxSnack={3}>
						<Layout>
							<Component {...pageProps} />
						</Layout>
					</SnackbarProvider>
				</ThemeProvider>
			</SessionProvider>
		</QueryClientProvider>
	)
}

export default MyApp

// Set up Zustand store for user
// Path: ./store/user.ts
