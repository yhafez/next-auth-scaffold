// Path: ./components/ColorPicker.tsx
import { useState, MouseEvent, useCallback, useEffect } from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import { ColorLens } from '@mui/icons-material'
import { darken, lighten } from 'color2k'

import ColorPickerPopover from './Popovers/ColorPickerPopover'

import { useBoundStore } from '../store'
import { getContrastColor, getSecondaryColor } from '../utils/helpers'

export interface ColorPickerProps {
	name: string
	selectedInit?: boolean
}

export default function ColorPickerIcon({ name, selectedInit }: ColorPickerProps) {
	const { darkMode, customPalette, setCustomPalette } = useBoundStore()

	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
	const [selected, setSelected] = useState(selectedInit ?? false)

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

	useEffect(() => {
		const customPalette = localStorage.getItem('customPalette')
		if (customPalette) handleColorChange(customPalette)
	}, [handleColorChange])

	useEffect(() => {
		setSelected(selectedInit ?? false)
	}, [selectedInit])

	const open = Boolean(anchorEl)
	const id = open ? 'simple-popover' : undefined

	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setSelected(false)
		setAnchorEl(null)
	}

	return (
		<Box
			id={`${name}-color-picker-container`}
			onMouseEnter={() => setSelected(true)}
			onMouseLeave={() => setSelected(false)}
			onFocus={() => setSelected(true)}
			onBlur={() => setSelected(false)}
			sx={{
				textAlign: 'center',
				height: '100%',
				width: '100%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Box
				id={`${name}-color-picker-box`}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					mt: 2,
					p: 0,
					height: '100%',
					cursor: 'pointer',
				}}
			>
				<IconButton
					id={`${name}-color-picker-button`}
					aria-describedby={id}
					aria-labelledby={`${name}-color-picker-label`}
					onClick={handleClick}
				>
					<ColorLens
						id={`${name}-color-picker-icon`}
						sx={{
							color: selected
								? darkMode
									? 'primary.light'
									: 'primary.dark'
								: 'primary.contrastText',
							fontSize: '1.5rem',
						}}
						aria-labelledby={`${name}-color-picker-label`}
						role="img"
					/>
				</IconButton>
				<label htmlFor={`${name}-color-picker-button`}>
					<Typography
						id={`${name}-color-picker-label`}
						variant="body2"
						sx={{
							fontWeight: 500,
							cursor: 'pointer',
							color: selected
								? darkMode
									? 'primary.light'
									: 'primary.dark'
								: 'primary.contrastText',
						}}
					>
						Theme Color
					</Typography>
				</label>
			</Box>
			<ColorPickerPopover
				name={name}
				anchorEl={anchorEl}
				handleClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center',
				}}
				handleColorChange={handleColorChange}
			/>
		</Box>
	)
}
