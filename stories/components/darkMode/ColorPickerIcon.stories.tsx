// Path: ./stories/components/darkMode/ColorPickerIcon.stories.tsx
import { useState, useEffect, useCallback } from 'react'
import { Meta, Story } from '@storybook/react'
import ColorPickerIcon, { ColorPickerProps } from '../../../components/ColorPickerIcon'
import Modal from '../../../components/Modal'
import { ThemeProvider } from '@mui/material'

import { useBoundStore } from '../../../store'
import { createCustomTheme } from '../../../theme'
import { getContrastColor, getSecondaryColor } from '../../../utils/helpers'
import { darken, lighten } from 'color2k'

export default {
	title: 'Components/ColorPickerIcon/DarkMode',
	component: ColorPickerIcon,
} as Meta

const Template: Story = args => {
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

	if (!darkMode) setDarkMode(true)

	return (
		<ThemeProvider theme={theme}>
			<Modal name="test" loading={false} error="">
				<ColorPickerIcon name="test" {...args} />
			</Modal>
		</ThemeProvider>
	)
}

const defaultArgs: ColorPickerProps = {
	name: 'test',
	selectedInit: false,
}

export const Default = Template.bind({})
Default.args = {
	...defaultArgs,
}

export const Selected = Template.bind({})
Selected.args = {
	...defaultArgs,
	selectedInit: true,
}
