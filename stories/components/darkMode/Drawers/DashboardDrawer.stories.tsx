// Path: ./stories/components/darkMode/Drawers/DashboardDrawer.stories.tsx
import { useCallback, useEffect, useState } from 'react'
import { Meta, Story } from '@storybook/react'
import { ThemeProvider } from '@mui/material'
import { darken, lighten } from 'color2k'

import Drawer from '../../../../components/Drawer'
import DashboardDrawer from '../../../../components/Drawers/DashboardDrawer'

import { useBoundStore } from '../../../../store'
import { createCustomTheme } from '../../../../theme'
import { getContrastColor, getSecondaryColor } from '../../../../utils/helpers'

export default {
	title: 'Components/Drawers/DashboardDrawer/DarkMode',
	component: DashboardDrawer,
} as Meta

const Template: Story = () => {
	const { darkMode, customPalette, setDarkMode, setCustomPalette } = useBoundStore()

	const [theme, setTheme] = useState(createCustomTheme(customPalette, darkMode))

	useEffect(() => {
		setTheme(createCustomTheme(customPalette, true))
	}, [customPalette, darkMode, setDarkMode])

	useEffect(() => {
		const customPalette = localStorage.getItem('customPalette')

		if (customPalette) {
			handleColorChange(customPalette)
		}
	}, [])

	useEffect(() => {
		if (!darkMode) {
			handleDarkModeChange(true)
		}
	}, [])

	useEffect(() => {
		const darkMode = localStorage.getItem('darkMode')

		if (darkMode) {
			handleDarkModeChange(darkMode === 'true')
		}
	}, [darkMode])

	const handleColorChange = useCallback(
		(color: string) => {
			localStorage.setItem('customPalette', color)

			const contrast = getContrastColor(color)
			const secondaryColor = getSecondaryColor(color)
			const secondaryColorContrast = getContrastColor(secondaryColor)

			const newPalette = {
				...customPalette,
				primary: {
					main: color,
					contrastText: contrast,
					light: lighten(color, 0.2),
					dark: darken(color, 0.2),
				},
				secondary: {
					main: secondaryColor,
					contrastText: secondaryColorContrast,
					light: lighten(secondaryColor, 0.2),
					dark: darken(secondaryColor, 0.2),
				},
			}

			setCustomPalette(newPalette)
		},
		[customPalette, setCustomPalette],
	)

	const handleDarkModeChange = useCallback(
		(darkMode: boolean) => {
			localStorage.setItem('darkMode', darkMode.toString())
			setDarkMode(darkMode)
		},
		[setDarkMode],
	)

	return (
		<ThemeProvider theme={theme}>
			<Drawer open={true} handleDrawerClose={() => {}}>
				<DashboardDrawer />
			</Drawer>
		</ThemeProvider>
	)
}

export const Default = Template.bind({})
Default.args = {}
