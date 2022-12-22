// Path: ./components/ColorPicker.tsx
import { useState, MouseEvent, useCallback, useEffect } from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import { ColorLens } from '@mui/icons-material'
import { darken, lighten } from 'color2k'

import { ColorPickerPopover } from '.'
import { useBoundStore } from '../store'
import {
	getContrastColor,
	getSecondaryColor,
	mixColors,
	findOptimalOverlayOpacity,
	isOverlayNecessary,
} from '../utils/helpers'

export interface ColorPickerProps {
	name: string
	selectedInit?: boolean
}

export default function ColorPickerIcon({ name, selectedInit }: ColorPickerProps) {
	const { darkMode, customPalette, setCustomPalette } = useBoundStore()

	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
	const [selected, setSelected] = useState(selectedInit ?? false)

	const handleColorChange = useCallback((color: string) => {
		const contrast = getContrastColor(color)
		let mixedColorPrimaryMain = color
		if (isOverlayNecessary(color, contrast, 7)) {
			const overlayColor = contrast === 'black' ? '#FFF' : '#000'
			const overlayOpacity = findOptimalOverlayOpacity(contrast, overlayColor, color, 7)
			mixedColorPrimaryMain = mixColors(color, overlayColor, overlayOpacity)
		}
		let mixedColorPrimaryLight = lighten(mixedColorPrimaryMain, 0.2)
		if (isOverlayNecessary(mixedColorPrimaryLight, contrast, 7)) {
			const overlayColor = contrast === 'black' ? '#FFF' : '#000'
			const overlayOpacity = findOptimalOverlayOpacity(
				contrast,
				overlayColor,
				mixedColorPrimaryLight,
				7,
			)
			mixedColorPrimaryLight = mixColors(mixedColorPrimaryLight, overlayColor, overlayOpacity)
		}
		let mixedColorPrimaryDark = darken(mixedColorPrimaryMain, 0.2)
		if (isOverlayNecessary(mixedColorPrimaryDark, contrast, 7)) {
			const overlayColor = contrast === 'black' ? '#FFF' : '#000'
			const overlayOpacity = findOptimalOverlayOpacity(
				contrast,
				overlayColor,
				mixedColorPrimaryDark,
				7,
			)
			mixedColorPrimaryDark = mixColors(mixedColorPrimaryDark, overlayColor, overlayOpacity)
		}

		const secondaryColor = getSecondaryColor(mixedColorPrimaryMain)
		const secondaryColorContrast = getContrastColor(secondaryColor)
		let mixedColorSecondaryMain = secondaryColor
		if (isOverlayNecessary(secondaryColor, secondaryColorContrast, 7)) {
			const overlayColor = secondaryColorContrast === 'black' ? '#FFF' : '#000'
			const overlayOpacity = findOptimalOverlayOpacity(
				secondaryColorContrast,
				overlayColor,
				secondaryColor,
				7,
			)
			mixedColorSecondaryMain = mixColors(secondaryColor, overlayColor, overlayOpacity)
		}
		let mixedColorSecondaryLight = lighten(mixedColorSecondaryMain, 0.2)
		if (isOverlayNecessary(mixedColorSecondaryLight, secondaryColorContrast, 7)) {
			const overlayColor = secondaryColorContrast === 'black' ? '#FFF' : '#000'
			const overlayOpacity = findOptimalOverlayOpacity(
				secondaryColorContrast,
				overlayColor,
				mixedColorSecondaryLight,
				7,
			)
			mixedColorSecondaryLight = mixColors(mixedColorSecondaryLight, overlayColor, overlayOpacity)
		}
		let mixedColorSecondaryDark = darken(mixedColorSecondaryMain, 0.2)
		if (isOverlayNecessary(mixedColorSecondaryDark, secondaryColorContrast, 7)) {
			const overlayColor = secondaryColorContrast === 'black' ? '#FFF' : '#000'
			const overlayOpacity = findOptimalOverlayOpacity(
				secondaryColorContrast,
				overlayColor,
				mixedColorSecondaryDark,
				7,
			)
			mixedColorSecondaryDark = mixColors(mixedColorSecondaryDark, overlayColor, overlayOpacity)
		}

		const newPalette = {
			...customPalette,
			primary: {
				main: mixedColorPrimaryMain,
				contrastText: contrast,
				light: mixedColorPrimaryLight,
				dark: mixedColorPrimaryDark,
			},
			secondary: {
				main: mixedColorSecondaryMain,
				contrastText: secondaryColorContrast,
				light: mixedColorSecondaryLight,
				dark: mixedColorSecondaryDark,
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
		<>
			<Box
				id={`${name}-color-picker-container`}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					p: 0,
					height: '100%',
					width: '100%',
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
							textAlign: 'center',
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
		</>
	)
}
