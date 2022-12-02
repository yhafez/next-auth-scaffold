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
	const {
		settings: { darkMode },
	} = useBoundStore()

	const formattedName = name.replace(/ /g, '-').toLowerCase()

	const isMobile = useMediaQuery('(max-width: 600px)')
	const isTablet = useMediaQuery('(max-width: 960px)')
	const isDesktop = useMediaQuery('(min-width: 960px)')
	const isLargeDesktop = useMediaQuery('(min-width: 1280px)')
	const isExtraLargeDesktop = useMediaQuery('(min-width: 1920px)')

	return (
		<Box
			id={`${formattedName}-container`}
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				margin: 'auto',
				gap: 2,
				backgroundColor: darkMode ? 'primary.dark' : 'primary.light',
				padding: 2,
				borderRadius: 2,
				boxShadow: 1,
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
				offset: 1,
			}}
		>
			<Typography
				id={`${formattedName}-title`}
				variant="h3"
				sx={{
					color: darkMode ? '#fff' : '#000',
					fontWeight: 600,
					marginBottom: 1,
				}}
			>
				{toTitleCase(name)}
			</Typography>
			<Box
				id={`${formattedName}-notification-container`}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					gap: 1,
					width: '100%',
					height: small ? '15px' : '30px',
					marginBottom: 1,
				}}
			>
				{loading ? (
					<CircularProgress
						id={`${formattedName}-loading`}
						sx={{
							color: darkMode ? 'primary.light' : 'primary.dark',
						}}
					/>
				) : (
					error && (
						<Typography id={`${formattedName}-error`} variant="h6" sx={{ color: 'error.dark' }}>
							{error}
						</Typography>
					)
				)}
			</Box>
			<Box
				id={`${formattedName}-form`}
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
