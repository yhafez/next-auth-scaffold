// Path: ./components/VisibilityIconButton.tsx
import { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { Box, IconButton, Typography } from '@mui/material'

import { useBoundStore } from '../store'

export interface VisibilityIconButtonProps {
	name: string
	showPassword: boolean
	setShowPassword: (show: boolean) => void
	disabled?: boolean
	isConfirmPassword?: boolean
}

export default function VisibilityIconButton({
	showPassword,
	setShowPassword,
	name,
	disabled = false,
	isConfirmPassword = false,
}: VisibilityIconButtonProps) {
	const { darkMode } = useBoundStore()

	const [hover, setHover] = useState(false)

	return (
		<IconButton
			id={`${name}${isConfirmPassword ? '-confirm' : ''}-password-input-show-hide-button`}
			onClick={() => setShowPassword(!showPassword)}
			sx={{
				color: darkMode ? '#fff' : '#000',
			}}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			disabled={disabled}
		>
			<Box
				id={`${name}${isConfirmPassword ? '-confirm' : ''}-password-box`}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				{showPassword ? (
					<>
						<VisibilityIcon
							id={`${name}${isConfirmPassword ? '-confirm' : ''}-password-input-visibility-on-icon`}
							sx={{
								color: darkMode ? '#fff' : '#000',
								...(disabled && {
									color: 'lightgrey',
									WebkitTextFillColor: 'lightgrey',
								}),
							}}
						/>
						<Typography
							id={`${name}${isConfirmPassword ? '-confirm' : ''}-password-input-hide-password-text`}
							variant="caption"
							sx={{
								color: 'primary.contrastText',
								fontWeight: hover ? 'bold' : 'normal',
								...(disabled && {
									color: 'lightgrey',
									WebkitTextFillColor: 'lightgrey',
								}),
							}}
						>
							Hide
						</Typography>
					</>
				) : (
					<>
						<VisibilityOffIcon
							id={`${name}${
								isConfirmPassword ? '-confirm' : ''
							}-password-input-visibility-off-icon`}
							sx={{
								color: darkMode ? '#fff' : '#000',
								...(disabled && {
									color: 'lightgrey',
									WebkitTextFillColor: 'lightgrey',
								}),
							}}
						/>
						<Typography
							id={`${name}${isConfirmPassword ? '-confirm' : ''}-password-input-show-password-text`}
							variant="caption"
							sx={{
								color: 'primary.contrastText',
								fontWeight: hover ? 'bold' : 'normal',
								...(disabled && {
									color: 'lightgrey',
									WebkitTextFillColor: 'lightgrey',
								}),
							}}
						>
							Show
						</Typography>
					</>
				)}
			</Box>
		</IconButton>
	)
}
