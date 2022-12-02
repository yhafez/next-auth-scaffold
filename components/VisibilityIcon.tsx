// Path: ./components/VisibilityIcon.tsx
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { Box, Typography } from '@mui/material'

import { useBoundStore } from '../store'

export interface VisibilityIconProps {
	name: string
	showPassword: boolean
	hover: boolean
	isConfirmPassword?: boolean
}

export default function VisibilityIconComponent({
	showPassword,
	name,
	hover,
	isConfirmPassword = false,
}: VisibilityIconProps) {
	const {
		settings: { darkMode },
	} = useBoundStore()

	return (
		<>
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
							}}
						/>
						<Typography
							id={`${name}${isConfirmPassword ? '-confirm' : ''}-password-input-hide-password-text`}
							variant="caption"
							sx={{
								color: darkMode ? '#fff' : '#000',
								fontWeight: hover ? 'bold' : 'normal',
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
							}}
						/>
						<Typography
							id={`${name}${isConfirmPassword ? '-confirm' : ''}-password-input-show-password-text`}
							variant="caption"
							sx={{
								color: darkMode ? '#fff' : '#000',
								fontWeight: hover ? 'bold' : 'normal',
							}}
						>
							Show
						</Typography>
					</>
				)}
			</Box>
		</>
	)
}
