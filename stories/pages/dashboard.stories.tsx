// Path: ./stories/pages/index.stories.tsx
import { useState, useEffect } from 'react'
import { Meta, Story } from '@storybook/react'

import Dashboard from '../../pages'

import { useBoundStore } from '../../store'
import { defaultTheme } from '../../theme'
import { ThemeProvider } from '@mui/material'

export default {
	title: 'Pages/Dashboard',
	component: Dashboard,
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
		<ThemeProvider theme={customTheme}>
			<Dashboard {...args} />
		</ThemeProvider>
	)
}

export const Default = Template.bind({})
