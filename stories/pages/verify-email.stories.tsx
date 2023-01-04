// Path: ./stories/pages/verify-email.stories.tsx
import { useState, useEffect } from 'react'
import { Meta, Story } from '@storybook/react'
import { ThemeProvider } from '@mui/material/styles'
import { SessionProvider } from 'next-auth/react'

import VerifyEmail, { VerifyEmailProps } from '../../pages/verify-email/[id]/[token]'
import { useBoundStore } from '../../store'
import { defaultTheme } from '../../theme'

export default {
	title: 'Pages/VerifyEmail',
	component: VerifyEmail,
	args: {
		errorInit: '',
		loadingInit: false,
		hydratedInit: true,
	},
	argTypes: {
		errorInit: {
			table: {
				disable: true,
			},
		},
		loadingInit: {
			table: {
				disable: true,
			},
		},
		hydratedInit: {
			table: {
				disable: true,
			},
		},
	},
} as Meta

const initialProps: VerifyEmailProps = {
	errorInit: '',
	loadingInit: false,
}

const Template: Story<VerifyEmailProps> = (args, { globals: { theme } }) => {
	const { setDarkMode, customPalette } = useBoundStore()
	const [customTheme, setCustomTheme] = useState(defaultTheme)

	useEffect(() => {
		setDarkMode(theme === 'dark' ? true : false)
	}, [theme])

	useEffect(() => {
		setCustomTheme({
			...defaultTheme,
			palette: {
				...defaultTheme.palette,
				primary: {
					...defaultTheme.palette.primary,
					...customPalette.primary,
				},
				secondary: {
					...defaultTheme.palette.secondary,
					...customPalette.secondary,
				},
			},
		})
	}, [customPalette])

	return (
		<ThemeProvider theme={customTheme}>
			<SessionProvider session={null}>
				<VerifyEmail {...args} />
			</SessionProvider>
		</ThemeProvider>
	)
}

export const Default = Template.bind({})
Default.args = initialProps
