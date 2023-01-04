// Path: ./stories/pages/settings/account.stories.tsx
import { useState, useEffect } from 'react'
import { Meta, Story } from '@storybook/react'
import { ThemeProvider } from '@mui/material/styles'
import { SessionProvider } from 'next-auth/react'

import AccountSettings, { AccountSettingsProps } from '../../../pages/settings/account'
import { useBoundStore } from '../../../store'
import { defaultTheme } from '../../../theme'

export default {
	title: 'Pages/Settings/Account',
	component: AccountSettings,
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

const initialProps: AccountSettingsProps = {}

const Template: Story<AccountSettingsProps> = (args, { globals: { theme } }) => {
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
				<AccountSettings {...args} />
			</SessionProvider>
		</ThemeProvider>
	)
}

export const Account = Template.bind({})
Account.args = initialProps
