// Path: ./components/Modal.tsx

import { Box, CircularProgress, Typography, useMediaQuery } from '@mui/material'

import { useBoundStore } from '../store'
import { toTitleCase } from '../utils/helpers'

export interface ModalProps {
	children: React.ReactNode
	name: string
	loading: boolean
	error: string
	small?: boolean
}

const Modal = ({ children, name, loading = false, error = '', small = false }: ModalProps) => {
	const { darkMode } = useBoundStore()

	const formattedName = name.replace(/ /g, '-').toLowerCase()

	const isMobile = useMediaQuery('(max-width: 600px)')
	const isTablet = useMediaQuery('(max-width: 960px)')
	const isDesktop = useMediaQuery('(min-width: 960px)')
	const isLargeDesktop = useMediaQuery('(min-width: 1280px)')
	const isExtraLargeDesktop = useMediaQuery('(min-width: 1920px)')

	return (
		<Box
			id={`${formattedName}-modal-container`}
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				textAlign: 'center',
				gap: 2,
				backgroundColor: darkMode ? 'primary.dark' : 'primary.light',
				padding: 2,
				borderRadius: 2,
				boxShadow: 1,
				offset: 1,
				transform: 'translateY(-15%)',
				width: isMobile
					? '100%'
					: isTablet
					? '50%'
					: isDesktop
					? '30%'
					: isLargeDesktop
					? '20%'
					: isExtraLargeDesktop
					? '10%'
					: '100%',
			}}
		>
			<Typography
				id={`${formattedName}-modal-title`}
				variant="h2"
				sx={{
					color: 'primary.contrastText',
					fontWeight: 600,
					marginBottom: 1,
				}}
			>
				{toTitleCase(name)}
			</Typography>
			<Box
				id={`${formattedName}-modal-notification-container`}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					gap: 1,
					width: '100%',
					height: small ? '15px' : '50px',
					marginBottom: 1,
				}}
			>
				{loading ? (
					<CircularProgress
						id={`${formattedName}-modal-loading`}
						sx={{
							color: darkMode ? 'primary.light' : 'primary.dark',
						}}
					/>
				) : (
					error && (
						<Typography
							id={`${formattedName}-modal-error`}
							variant="body1"
							sx={{
								color: 'error.dark',
								fontSize: '1.5rem',
							}}
						>
							{error}
						</Typography>
					)
				)}
			</Box>
			<Box
				id={`${formattedName}-modal-form`}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					gap: 2,
					width: '100%',
				}}
			>
				{children}
			</Box>
		</Box>
	)
}

export default Modal
