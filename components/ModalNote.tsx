// Path: ./components/ModalNote.tsx

import { Box, Typography } from '@mui/material'
import Link from 'next/link'

import { useBoundStore } from '../store'

export interface ModalNoteProps {
	name: string
	label: string
	href: string
}

export default function ModalNote({ name, label, href }: ModalNoteProps) {
	const {
		settings: { darkMode },
	} = useBoundStore()

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
			<Link href={href} id={`${name}-modal-note-link`}>
				<Typography
					id={`${name}-modal-note-link-text`}
					variant="body1"
					sx={{
						color: darkMode ? 'white' : 'black',
						fontWeight: 500,
						marginBottom: 2,
						cursor: 'pointer',
						'&:hover': {
							color: darkMode ? 'primary.light' : 'primary.dark',
						},
					}}
				>
					{label}
				</Typography>
			</Link>
		</Box>
	)
}
