// Path: ./components/DrawerButton.tsx
import { ReactNode, MouseEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Link as MuiLink, IconButton, Typography } from '@mui/material'

export interface DrawerButtonProps {
	name: string
	label: string
	icon: ReactNode
	handleClick?: (e: MouseEvent<HTMLButtonElement>) => void
	reverse?: boolean
	href?: string
}

export default function DrawerButton({
	name,
	label,
	icon,
	handleClick,
	reverse,
	href,
}: DrawerButtonProps) {
	const router = useRouter()
	const isSelected = router.pathname === href ? true : false

	if (href) {
		return (
			<MuiLink
				id={`${name}-drawer-link`}
				component={Link}
				href={href}
				aria-current={isSelected ? 'page' : undefined}
				title={label}
				aria-labelledby={`${name}-drawer-button-label`}
				sx={{
					textDecoration: 'none',
					color: 'primary.contrastText',
					padding: 0,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					width: '100%',
					borderRadius: 0,
					backgroundColor: isSelected ? 'primary.main' : 'transparent',
					p: 4,
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
				{reverse && icon}
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
				{!reverse && icon}
			</MuiLink>
		)
	}

	return (
		<IconButton
			id={`${name}-drawer-button`}
			onClick={handleClick}
			disableRipple
			sx={{
				color: 'primary.contrastText',
				padding: 0,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				width: '100%',
				borderRadius: 0,
				backgroundColor: isSelected ? 'primary.main' : 'transparent',
				p: 4,
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
			{reverse && icon}
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
			{!reverse && icon}
		</IconButton>
	)
}
