// Path: ./components/NavigationButton.tsx
import { Button } from '@mui/material'

import { useBoundStore } from '../store'

export interface NavigationButtonProps {
	name: string
	label: string
	handleClick: () => void
	width?: number
}

export default function NavigationButton({
	name,
	label,
	handleClick,
	width,
}: NavigationButtonProps) {
	const { darkMode } = useBoundStore()

	return (
		<Button
			id={`${name}-navigation-button`}
			variant="contained"
			onClick={handleClick}
			sx={{
				color: 'primary.contrastText',
				width: width ? `${width}%` : '40%',
				height: 40,
				lineHeight: 1.5,
				backgroundColor: darkMode ? 'primary.light' : 'primary.dark',
				'&:hover': {
					backgroundColor: 'primary.main',
				},
			}}
		>
			{label}
		</Button>
	)
}
