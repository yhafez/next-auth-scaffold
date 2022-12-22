// Path: ./components/ModalNote.tsx
import { Box, Typography, Link as MuiLink } from '@mui/material'
import Link from 'next/link'

import { useBoundStore } from '../store'

export interface ModalNoteProps {
	name: string
	label: string
	href: string
}

export default function ModalNote({ name, label, href }: ModalNoteProps) {
	const { darkMode } = useBoundStore()

	return (
		<Box
			id={`${name}-modal-note-container`}
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				gap: 2,
			}}
		>
			<MuiLink
				href={href}
				title={label}
				aria-label={label}
				id={`${name}-modal-note-link`}
				sx={{
					'&:hover': {
						color: 'primary.main',
						transform: 'scale(1.05)',
					},

					'&:active': {
						color: 'primary.main',
						transform: 'scale(1.05)',
					},

					'&:focus': {
						color: 'primary.main',
						transform: 'scale(1.05)',
					},
					color: darkMode ? 'primary.light' : 'primary.dark',
					textDecorationColor: darkMode ? 'primary.light' : 'primary.dark',
				}}
				component={Link}
			>
				<Typography
					id={`${name}-modal-note-link-text`}
					variant="body1"
					sx={{
						color: 'inherit',
						fontWeight: 500,
						marginBottom: 2,
						cursor: 'pointer',
					}}
				>
					{label}
				</Typography>
			</MuiLink>
		</Box>
	)
}
