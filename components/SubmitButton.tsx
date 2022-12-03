// Path: ./components/SubmitButton.tsx
import { Button, CircularProgress, Typography } from '@mui/material'

import { useBoundStore } from '../store'

export interface SubmitButtonProps {
	name: string
	label: string
	loading: boolean
	handleSubmit: () => void
	width?: string
}

export default function SubmitButton({
	name,
	label,
	loading,
	handleSubmit,
	width,
}: SubmitButtonProps) {
	const {
		settings: { darkMode },
	} = useBoundStore()

	return (
		<Button
			id={`${name}-submit-button`}
			variant="contained"
			onClick={handleSubmit}
			disabled={loading}
			sx={{
				color: darkMode ? 'white' : 'black',
				width: width ? width : '40%',
				height: 35,
			}}
		>
			{loading ? (
				<CircularProgress
					id={`${name}-submit-button-loading`}
					size={20}
					sx={{
						color: darkMode ? 'white' : 'black',
					}}
				/>
			) : (
				<Typography
					id={`${name}-submit-button-text`}
					variant="button"
					sx={{
						color: darkMode ? 'white' : 'black',
					}}
				>
					{label}
				</Typography>
			)}
		</Button>
	)
}
