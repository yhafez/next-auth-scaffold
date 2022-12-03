// Path: ./components/NavigationButton.tsx

import { Button } from '@mui/material'

import { useBoundStore } from '../store'

export interface NavigationButtonProps {
	name: string
	label: string
	handleClick: () => void
	width?: string
}

export default function NavigationButton({
	name,
	label,
	handleClick,
	width,
}: NavigationButtonProps) {
	const {
		settings: { darkMode },
	} = useBoundStore()

	return (
		<Button
			id={`${name}-navigation-button`}
			variant="contained"
			onClick={handleClick}
			sx={{
				color: darkMode ? 'white' : 'black',
				width: width ? width : '40%',
				height: 35,
			}}
		>
			{label}
		</Button>
	)
}
