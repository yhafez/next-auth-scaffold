// Path: ./stories/pages/settings/security.stories.tsx
import { useState, useEffect } from 'react'
import { Meta, Story } from '@storybook/react'
import { ThemeProvider } from '@mui/material/styles'
import { SessionProvider } from 'next-auth/react'

import SecuritySettings, { SecuritySettingsProps } from '../../../pages/settings/security'
import { useBoundStore } from '../../../store'
import { defaultTheme } from '../../../theme'

export default {
	title: 'Pages/Settings/Security',
	component: SecuritySettings,
	args: {
		hydratedInit: true,
	},
	argTypes: {
		hydratedInit: {
			table: {
				disable: true,
			},
		},
	},
} as Meta

const initialProps: SecuritySettingsProps = {}

const Template: Story<SecuritySettingsProps> = (args, { globals: { theme } }) => {
	const { setDarkMode, customPalette } = useBoundStore()
	const [customTheme, setCustomTheme] = useState(defaultTheme)

	useEffect(() => {
		setDarkMode(theme === 'dark')
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
				<SecuritySettings {...args} />
			</SessionProvider>
		</ThemeProvider>
	)
}

export const Security = Template.bind({})
Security.args = initialProps
