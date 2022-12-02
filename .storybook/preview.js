import React from 'react'
import '../styles/globals.css'
import Image from 'next/image'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import '../styles/globals.css'
import { ThemeProvider } from '@mui/material'

import { SnackbarProvider } from 'notistack'
import { theme } from '../theme'

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

export const decorators = [
	Story => (
		<ThemeProvider theme={theme}>
			<SnackbarProvider maxSnack={3}>
				<Story />
			</SnackbarProvider>
		</ThemeProvider>
	),
]
