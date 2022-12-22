// Path: ./stories/components/ColorPickerPopover.stories.tsx

import { useCallback, useEffect, useState } from 'react'
import { Meta, Story } from '@storybook/react'
import { ThemeProvider } from '@mui/material/styles'
import { darken, lighten } from 'color2k'

import { Modal, ColorPickerPopover } from '../../components'
import { useBoundStore } from '../../store'
import { createCustomTheme } from '../../theme'
import { getContrastColor, getSecondaryColor } from '../../utils/helpers'

export default {
	title: 'Components/ColorPickerPopover',
	component: ColorPickerPopover,
	args: {
		open: true,
		name: 'test',
		anchorEl: null,
		handleClose: () => {},
		handleColorChange: () => {},
		anchorOrigin: {
			vertical: 'bottom',
			horizontal: 'left',
		},
		transformOrigin: {
			vertical: 'top',
			horizontal: 'left',
		},
	},
	argTypes: {
		open: {
			control: {
				type: 'boolean',
			},
		},
		name: {
			table: {
				disable: true,
			},
		},
		anchorEl: {
			table: {
				disable: true,
			},
		},
		handleClose: {
			table: {
				disable: true,
			},
		},
		handleColorChange: {
			table: {
				disable: true,
			},
		},
		anchorOrigin: {
			control: {
				type: 'inline-radio',
				options: {
					TopLeft: {
						vertical: 'top',
						horizontal: 'left',
					},
					TopCenter: {
						vertical: 'top',
						horizontal: 'center',
					},
					TopRight: {
						vertical: 'top',
						horizontal: 'right',
					},
					BottomLeft: {
						vertical: 'bottom',
						horizontal: 'left',
					},
					BottomCenter: {
						vertical: 'bottom',
						horizontal: 'center',
					},
					BottomRight: {
						vertical: 'bottom',
						horizontal: 'right',
					},
				},
			},
		},
		transformOrigin: {
			control: {
				type: 'inline-radio',
				options: {
					TopLeft: {
						vertical: 'top',
						horizontal: 'left',
					},
					TopCenter: {
						vertical: 'top',
						horizontal: 'center',
					},
					TopRight: {
						vertical: 'top',
						horizontal: 'right',
					},
					BottomLeft: {
						vertical: 'bottom',
						horizontal: 'left',
					},
					BottomCenter: {
						vertical: 'bottom',
						horizontal: 'center',
					},
					BottomRight: {
						vertical: 'bottom',
						horizontal: 'right',
					},
				},
			},
		},
	},
} as Meta

export const Default: Story = (args, { globals: { theme } }) => {
	const { customPalette, setCustomPalette, setDarkMode } = useBoundStore()
	const [customTheme, setCustomTheme] = useState(createCustomTheme(customPalette, theme))

	const handleColorChange = useCallback((color: string) => {
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
	}, [])

	useEffect(() => {
		setCustomTheme(createCustomTheme(customPalette, theme))
	}, [customPalette, theme])

	useEffect(() => {
		const customPalette = localStorage.getItem('customPalette')

		if (customPalette) {
			handleColorChange(customPalette)
		}
	}, [handleColorChange])

	useEffect(() => {
		localStorage.setItem('darkMode', theme === 'dark' ? 'true' : 'false')
		setDarkMode(theme === 'dark' ? true : false)
	}, [theme])

	return (
		<ThemeProvider theme={customTheme}>
			<Modal name="test" loading={false} error="">
				<ColorPickerPopover
					name="test"
					anchorEl={null}
					handleClose={() => {}}
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'center',
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'center',
					}}
					{...args}
					handleColorChange={handleColorChange}
				/>
			</Modal>
		</ThemeProvider>
	)
}
