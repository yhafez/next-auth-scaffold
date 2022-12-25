// Path: ./stories/components/Drawers/DashboardDrawer.stories.tsx
import { useCallback, useEffect, useState } from 'react'
import { Meta, Story } from '@storybook/react'
import { ThemeProvider } from '@mui/material/styles'
import { darken, lighten } from 'color2k'

import { Drawer, DashboardDrawer } from '../../../components'
import { useBoundStore } from '../../../store'
import { createCustomTheme } from '../../../theme'
import { getContrastColor, getSecondaryColor } from '../../../utils/helpers'

export default {
	title: 'Components/Drawers/DashboardDrawer',
	component: DashboardDrawer,
	args: {},
	argTypes: {},
} as Meta

export const Default: Story = (args, { globals: { theme } }) => {
	const { customPalette, setDarkMode, setCustomPalette } = useBoundStore()

	const [customTheme, setCustomTheme] = useState(createCustomTheme(customPalette, theme))

	useEffect(() => {
		setCustomTheme(createCustomTheme(customPalette, true))
	}, [customPalette, theme, setDarkMode])

	const handleColorChange = useCallback((color: string) => {
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
	}, [])

	const handleDarkModeChange = useCallback((darkMode: boolean) => {
		localStorage.setItem('darkMode', darkMode.toString())
		setDarkMode(darkMode)
	}, [])

	useEffect(() => {
		const customPalette = localStorage.getItem('customPalette')
		const darkMode = localStorage.getItem('darkMode')
		if (customPalette) {
			handleColorChange(customPalette)
		}
		if (darkMode) {
			handleDarkModeChange(darkMode === 'true')
		}
	}, [handleColorChange, handleDarkModeChange])

	useEffect(() => {
		setDarkMode(theme === 'dark' ? true : false)
	}, [theme, setDarkMode])

	return (
		<ThemeProvider theme={customTheme}>
			<Drawer open={true} handleDrawerClose={() => {}}>
				<DashboardDrawer {...args} />
			</Drawer>
		</ThemeProvider>
	)
}
