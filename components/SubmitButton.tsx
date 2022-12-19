// Path: ./components/SubmitButton.tsx
import { Button, CircularProgress, Typography } from '@mui/material'

import { useBoundStore } from '../store'

export interface SubmitButtonProps {
	name: string
	label: string
	loading: boolean
	handleSubmit: () => void
	width?: number
	disabled?: boolean
}

export default function SubmitButton({
	name,
	label,
	loading,
	handleSubmit,
	width,
	disabled,
}: SubmitButtonProps) {
	const { darkMode } = useBoundStore()

	return (
		<Button
			id={`${name}-submit-button`}
			variant="contained"
			onClick={handleSubmit}
			disabled={disabled ? true : loading}
			sx={{
				color: 'primary.contrastText',
				width: width ? `${width}%` : '40%',
				height: 40,
				lineHeight: 1.5,
				backgroundColor: darkMode ? 'primary.light' : 'primary.dark',
				'&:hover': {
					backgroundColor: 'primary.main',
				},
				'&:disabled': {
					backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)',
					cursor: 'not-allowed',
					color: darkMode ? 'rgba(255, 255, 255, 0.26)' : 'rgba(0, 0, 0, 0.26)',
				},
			}}
		>
			{loading ? (
				<CircularProgress
					id={`${name}-submit-button-loading`}
					size={20}
					sx={{
						color: 'primary.contrastText',
					}}
					role="img"
					aria-label="loading spinner"
				/>
			) : (
				<Typography
					id={`${name}-submit-button-text`}
					variant="button"
					sx={{
						color: disabled
							? darkMode
								? 'rgba(255, 255, 255, 0.26)'
								: 'rgba(0, 0, 0, 0.26)'
							: 'primary.contrastText',
					}}
				>
					{label}
				</Typography>
			)}
		</Button>
	)
}
