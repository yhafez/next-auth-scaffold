// Path: ./components/DrawerButton.tsx
import { ReactNode, MouseEvent } from 'react'
import { IconButton, Typography } from '@mui/material'

export interface DrawerButtonProps {
	name: string
	label: string
	icon: ReactNode
	handleClick: (e: MouseEvent<HTMLButtonElement>) => void
}

const DrawerButton = ({ name, label, icon, handleClick }: DrawerButtonProps) => {
	return (
		<IconButton
			id={`${name}-drawer-button`}
			onClick={handleClick}
			sx={{
				color: 'primary.contrastText',
				padding: 0,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				width: '100%',
				borderRadius: 0,
				p: 4,
				'&:hover': {
					backgroundColor: 'primary.main',
					color: 'primary.contrastText',
				},
				'&:focus': {
					backgroundColor: 'primary.main',
					color: 'primary.contrastText',
				},
				'&:active': {
					backgroundColor: 'primary.main',
					color: 'primary.contrastText',
				},
			}}
		>
			<Typography
				id={`${name}-drawer-button-label`}
				variant="body1"
				sx={{
					fontSize: '1.2rem',
					fontWeight: 'bold',
				}}
			>
				{label}
			</Typography>
			{icon}
		</IconButton>
	)
}

export default DrawerButton
