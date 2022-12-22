// Path: ./stories/components/ColorPickerIcon.stories.tsx
import { useState, useEffect, useCallback } from 'react'
import { Meta, Story } from '@storybook/react'
import { ThemeProvider } from '@mui/material/styles'
import { darken, lighten } from 'color2k'

import { ColorPickerIcon, Modal } from '../../components'
import { useBoundStore } from '../../store'
import { createCustomTheme } from '../../theme'
import { getContrastColor, getSecondaryColor } from '../../utils/helpers'

export default {
	title: 'Components/ColorPickerIcon',
	component: ColorPickerIcon,
	argTypes: {
		selectedInit: {
			control: {
				type: 'boolean',
			},
		},
	},

	args: {
		selectedInit: false,
	},
} as Meta

export const Default: Story = (args, { globals: { theme } }) => {
	const { customPalette, setCustomPalette, setDarkMode } = useBoundStore()
	const [customTheme, setCustomTheme] = useState(createCustomTheme(customPalette, theme))

	useEffect(() => {
		setCustomTheme(createCustomTheme(customPalette, theme))
	}, [customPalette, theme, setCustomTheme])

	useEffect(() => {
		const customPalette = localStorage.getItem('customPalette')

		if (customPalette) {
			handleColorChange(customPalette)
		}
	}, [])

	useEffect(() => {
		setDarkMode(theme === 'dark' ? true : false)
	}, [theme, setDarkMode])

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

	return (
		<ThemeProvider theme={customTheme}>
			<Modal name="test" loading={false} error="">
				<ColorPickerIcon name="test" {...args} />
			</Modal>
		</ThemeProvider>
	)
}
