// Path: ./components/SubmitButton.tsx
import { Button, CircularProgress, Typography } from '@mui/material'
import { text } from 'stream/consumers'

import { useBoundStore } from '../store'

export interface SubmitButtonProps {
	name: string
	label: string
	loading: boolean
	handleSubmit: () => void
	width?: string
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
				width: width ? width : '40%',
				height: 35,
				backgroundColor: darkMode ? 'primary.light' : 'primary.dark',
			}}
		>
			{loading ? (
				<CircularProgress
					id={`${name}-submit-button-loading`}
					size={20}
					sx={{
						color: 'primary.contrastText',
					}}
				/>
			) : (
				<Typography
					id={`${name}-submit-button-text`}
					variant="button"
					sx={{
						color: 'primary.contrastText',
					}}
				>
					{label}
				</Typography>
			)}
		</Button>
	)
}
