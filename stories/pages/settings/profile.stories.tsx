// Path: ./stories/pages/settings/profile.stories.tsx
import { useState, useEffect } from 'react'
import { Meta, Story } from '@storybook/react'
import { ThemeProvider } from '@mui/material/styles'
import { SessionProvider } from 'next-auth/react'

import ProfileSettings, { ProfileSettingsProps } from '../../../pages/settings/profile'
import { useBoundStore } from '../../../store'
import { defaultTheme } from '../../../theme'

export default {
	title: 'Pages/Settings/Profile',
	component: ProfileSettings,
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

const initialProps: ProfileSettingsProps = {}

const Template: Story<ProfileSettingsProps> = (args, { globals: { theme } }) => {
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
				<ProfileSettings {...args} />
			</SessionProvider>
		</ThemeProvider>
	)
}

export const Profile = Template.bind({})
Profile.args = initialProps
