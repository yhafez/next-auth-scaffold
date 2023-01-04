// Path: ./stories/pages/settings/accessibility.stories.tsx
import { useState, useEffect } from 'react'
import { Meta, Story } from '@storybook/react'
import { ThemeProvider } from '@mui/material/styles'
import { SessionProvider } from 'next-auth/react'

import AccessibilitySettings, {
	AccessibilitySettingsProps,
} from '../../../pages/settings/accessibility'
import { useBoundStore } from '../../../store'
import { defaultTheme } from '../../../theme'

export default {
	title: 'Pages/Settings/Accessibility',
	component: AccessibilitySettings,
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

const initialProps: AccessibilitySettingsProps = {}

const Template: Story<AccessibilitySettingsProps> = (args, { globals: { theme } }) => {
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
				<AccessibilitySettings {...args} />
			</SessionProvider>
		</ThemeProvider>
	)
}

export const Accessibility = Template.bind({})
Accessibility.args = initialProps
