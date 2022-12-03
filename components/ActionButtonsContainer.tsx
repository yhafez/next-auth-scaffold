// Path: ./components/ActionButtonsContainer.tsx
import { ReactNode } from 'react'
import { Box } from '@mui/material'

export interface ActionButtonsContainerProps {
	name: string
	children: ReactNode
}

export default function ActionButtonsContainer({ name, children }: ActionButtonsContainerProps) {
	return (
		<Box
			id={`${name}-buttons-container`}
			sx={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-around',
				alignItems: 'center',
				gap: 2,
				margin: '8px 4px',
				width: '80%',
			}}
		>
			{children}
		</Box>
	)
}
