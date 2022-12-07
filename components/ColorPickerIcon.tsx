// Path: ./components/ColorPicker.tsx
import { useState, MouseEvent, useCallback, useEffect } from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import ColorLensIcon from '@mui/icons-material/ColorLens'

import ColorPickerPopover from './ColorPickerPopover'

import { useBoundStore } from '../store'
import { lightenColor, darkenColor, getContrast, getSecondaryColor } from '../utils/helpers'

export interface ColorPickerProps {
	name: string
}

export default function ColorPickerIcon({ name }: ColorPickerProps) {
	const { customPalette, setCustomPalette } = useBoundStore()

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

			const contrast = getContrast(color)
			const secondaryColor = getSecondaryColor(color)
			const secondaryColorContrast = getContrast(secondaryColor)

			const newPalette = {
				...customPalette,
				primary: {
					main: color,
					contrastText: contrast,
					light: lightenColor(color, 25),
					dark: darkenColor(color, 25),
				},
				secondary: {
					main: secondaryColor,
					contrastText: secondaryColorContrast,
					light: lightenColor(secondaryColor, 25),
					dark: darkenColor(secondaryColor, 25),
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
			<IconButton
				id={`${name}-color-picker-button`}
				aria-describedby={id}
				onClick={handleClick}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'space-evenly',
					gap: 1,
					mt: 2,
					p: 0,
					height: '100%',
				}}
			>
				<ColorLensIcon
					id={`${name}-color-picker-icon`}
					sx={{
						color: 'primary.contrastText',
						fontSize: '1.5rem',
					}}
				/>
				<Typography
					id={`${name}-color-picker-label`}
					variant="body2"
					sx={{ fontWeight: 500, color: 'primary.contrastText' }}
				>
					Theme Color
				</Typography>
			</IconButton>
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