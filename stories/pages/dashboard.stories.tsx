// Path: ./stories/pages/index.stories.tsx
import { useState, useEffect } from 'react'
import { Meta, Story } from '@storybook/react'
import { ThemeProvider } from '@mui/material/styles'
import { SessionProvider } from 'next-auth/react'

import Dashboard from '../../pages'

import { useBoundStore } from '../../store'
import { defaultTheme } from '../../theme'

export default {
	title: 'Pages/Dashboard',
	component: Dashboard,
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

const Template: Story = (args, { globals: { theme } }) => {
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
			<ThemeProvider theme={customTheme}>
				<Dashboard {...args} />
			</ThemeProvider>
		</SessionProvider>
	)
}

export const Default = Template.bind({})
