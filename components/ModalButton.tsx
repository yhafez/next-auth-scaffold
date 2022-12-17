// Path: ./components/ModalButton.tsx
import { ReactNode } from 'react'
import { Button, Typography } from '@mui/material'

import { useBoundStore } from '../store'

export interface ModalButtonProps {
	name: string
	buttonText: string
	handleClick: () => void
	icon?: ReactNode
}

export default function ModalButton({ name, buttonText, handleClick, icon }: ModalButtonProps) {
	const { darkMode } = useBoundStore()

	return (
		<>
			<Button
				id={`${name}-modal-button`}
				variant="outlined"
				onClick={handleClick}
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
					backgroundColor: darkMode ? 'primary.light' : 'primary.dark',
					width: '100%',
					height: '3rem',
					mt: 1,
					mb: 2,
					color: 'primary.contrastText',
					'&:hover': {
						backgroundColor: 'primary.main',
					},
					'&:focus': {
						backgroundColor: 'primary.main',
					},
					'&:active': {
						backgroundColor: 'primary.main',
					},
				}}
			>
				<Typography
					id={`${name}-modal-button-text`}
					variant="body1"
					sx={{
						ml: 1,
						mr: 1,
						fontSize: '1.2rem',
						color: 'primary.contrastText',
					}}
				>
					{buttonText}
				</Typography>
				{icon}
			</Button>
		</>
	)
}
