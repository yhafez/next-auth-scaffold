// Path: ./components/Modal.tsx

import { Box, CircularProgress, Typography, useMediaQuery } from '@mui/material'
import { ErrorOutline } from '@mui/icons-material'
import { getContrast } from 'color2k'

import { useBoundStore } from '../store'
import { toTitleCase } from '../utils/helpers'

export interface ModalProps {
	children: React.ReactNode
	name: string
	onSubmit?: () => void
	loading: boolean
	error: string
	small?: boolean
}

const Modal = ({
	children,
	name,
	onSubmit,
	loading = false,
	error = '',
	small = false,
}: ModalProps) => {
	const { darkMode, customPalette, theme } = useBoundStore()
	const isSufficientContrast =
		getContrast(
			darkMode ? customPalette.primary.dark : customPalette.primary.light,
			customPalette.error.light,
		) >= 4.5

	const formattedName = name.replace(/ /g, '-').toLowerCase()

	const isMobile = useMediaQuery(`(max-width:${theme.breakpoints.values.sm}px)`)
	const isDesktop = useMediaQuery(`(min-width:${theme.breakpoints.values.md}px)`)
	const isLargeDesktop = useMediaQuery(`(min-width:${theme.breakpoints.values.lg}px)`)
	const isExtraLargeDesktop = useMediaQuery(`(min-width:${theme.breakpoints.values.xl}px)`)

	// Create media queries for vertical height of screen
	const isExtraShortScreen = useMediaQuery(`(max-height: 350px)`)
	const isShortScreen = useMediaQuery(`(max-height: 600px)`)
	const isMediumScreen = useMediaQuery(`(max-height: 750px)`)
	const isLargeScreen = useMediaQuery(`(max-height: 850px)`)

	// Calculate top position of modal based on vertical height of screen
	const topPosition = isExtraShortScreen
		? '20%'
		: isShortScreen
		? '15%'
		: isMediumScreen
		? '10%'
		: isLargeScreen
		? '5%'
		: 'auto'

	return (
		<Box
			id={`${formattedName}-modal-container`}
			sx={{
				position: 'absolute',
				top: topPosition,
				my: 2,
				overflow: 'scroll',
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
				width: isMobile
					? '100%'
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
				variant="h1"
				sx={{
					color: 'primary.contrastText',
					fontWeight: 600,
					fontSize: isMobile ? '3rem' : '5rem',
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
						<Box
							id={`${formattedName}-modal-error-container`}
							sx={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								gap: 2,
								width: '100%',
								height: '100%',
							}}
						>
							<ErrorOutline
								id={`${formattedName}-modal-error-icon`}
								sx={{
									color: isSufficientContrast
										? darkMode
											? customPalette.error.main
											: customPalette.error.dark
										: 'primary.contrastText',
								}}
								aria-label="error"
							/>
							<Typography
								id={`${formattedName}-modal-error`}
								variant="body1"
								sx={{
									color: isSufficientContrast
										? darkMode
											? customPalette.error.main
											: customPalette.error.dark
										: 'primary.contrastText',
									fontSize: '1.5rem',
								}}
							>
								{error}
							</Typography>
						</Box>
					)
				)}
			</Box>
			<Box
				id={`${formattedName}-modal-form`}
				component={onSubmit ? 'form' : 'div'}
				onSubmit={onSubmit ? onSubmit : undefined}
				role={onSubmit ? 'form' : undefined}
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
