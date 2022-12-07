// Path: ./components/ColorPicker.tsx
import { useState, MouseEvent, useCallback, useEffect } from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import ColorLensIcon from '@mui/icons-material/ColorLens'
import { darken, lighten } from 'color2k'

import ColorPickerPopover from './ColorPickerPopover'

import { useBoundStore } from '../store'
import { getContrastColor, getSecondaryColor } from '../utils/helpers'

export interface ColorPickerProps {
	name: string
}

export default function ColorPickerIcon({ name }: ColorPickerProps) {
	const { darkMode, customPalette, setCustomPalette } = useBoundStore()

	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const open = Boolean(anchorEl)
	const id = open ? 'simple-popover' : undefined

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

	useEffect(() => {
		const customPalette = localStorage.getItem('customPalette')

		if (customPalette) {
			handleColorChange(customPalette)
		}
	}, [])

	return (
		<Box
			id={`${name}-color-picker-container`}
			sx={{
				mr: 4,
				height: '100%',
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
				}}
			>
				<IconButton
					id={`${name}-color-picker-button`}
					aria-describedby={id}
					aria-labelledby={`${name}-color-picker-label`}
					onClick={handleClick}
				>
					<ColorLensIcon
						id={`${name}-color-picker-icon`}
						sx={{
							color: 'primary.contrastText',
							fontSize: '1.5rem',
						}}
					/>
				</IconButton>
				<label htmlFor={`${name}-color-picker-button`}>
					<Typography
						id={`${name}-color-picker-label`}
						variant="body2"
						sx={{
							fontWeight: 500,
							color: 'primary.contrastText',
							cursor: 'pointer',
							'&:hover': {
								color: darkMode ? 'primary.light' : 'primary.dark',
							},
						}}
					>
						Theme Color
					</Typography>
				</label>
			</Box>
			<ColorPickerPopover
				name={name}
				open={open}
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
