// Path: ./stories/components/darkMode/ColorPickerPopover.stories.tsx

import { useCallback, useEffect, useState } from 'react'
import { Meta, Story } from '@storybook/react'
import { ThemeProvider } from '@mui/material'
import { darken, lighten } from 'color2k'

import Modal from '../../../components/Modal'
import ColorPickerPopover from '../../../components/ColorPickerPopover'

import { useBoundStore } from '../../../store'
import { createCustomTheme } from '../../../theme'
import { getContrastColor, getSecondaryColor } from '../../../utils/helpers'

export default {
	title: 'Components/ColorPickerPopover/DarkMode',
	component: ColorPickerPopover,
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
					dark: darken(color, 0.2),
					light: lighten(color, 0.2),
					contrastText: contrast,
				},
				secondary: {
					main: secondaryColor,
					dark: darken(secondaryColor, 0.2),
					light: lighten(secondaryColor, 0.2),
					contrastText: secondaryColorContrast,
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
			<Modal name="test" loading={false} error="">
				<ColorPickerPopover
					name="test"
					open={true}
					anchorEl={null}
					handleClose={() => {}}
					handleColorChange={handleColorChange}
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'center',
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'center',
					}}
				/>
			</Modal>
		</ThemeProvider>
	)
}

export const Default = Template.bind({})
Default.args = {}
