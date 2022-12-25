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

export default function Modal({
	children,
	name,
	onSubmit,
	loading = false,
	error = '',
	small = false,
}: ModalProps) {
	const { darkMode, customPalette, theme } = useBoundStore()
	const isSufficientContrast =
		getContrast(
			darkMode ? customPalette.primary.dark : customPalette.primary.light,
			customPalette.error.light,
		) >= 7

	const formattedName = name.replace(/ /g, '-').toLowerCase()

	const isMobile = useMediaQuery(`(max-width:${theme.breakpoints.values.sm}px)`)
	const isDesktop = useMediaQuery(`(max-width:${theme.breakpoints.values.md}px)`)
	const isLargeDesktop = useMediaQuery(`(max-width:${theme.breakpoints.values.lg}px)`)
	const isExtraLargeDesktop = useMediaQuery(`(min-width:${theme.breakpoints.values.lg}px)`)

	const isSmall = useMediaQuery(`(max-height: 400px)`)
	const isMedium = useMediaQuery(`(max-height: 500px)`)
	const isLarge = useMediaQuery(`(max-height: 600px)`)
	const isExtraLarge = useMediaQuery(`(max-height: 600px)`)

	return (
		<Box
			id={`${formattedName}-modal-container`}
			sx={{
				position: 'absolute',
				mx: 'auto',
				top: isMobile
					? '0px'
					: isSmall
					? '90%'
					: isMedium
					? '80%'
					: isLarge
					? '70%'
					: isExtraLarge
					? '60%'
					: '50%',
				left: '50%',
				transform: `translate(-50%, ${isMobile ? '0' : '-50%'})`,
				minHeight: isMobile ? 'calc(100%)' : 'max-content',
				overflowY: 'scroll',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				textAlign: 'center',
				gap: 2,
				px: 2,
				py: 8,
				backgroundColor: darkMode ? 'primary.dark' : 'primary.light',
				borderRadius: isMobile ? '0' : 2,
				boxShadow: 1,
				width: isMobile
					? '100%'
					: isDesktop
					? '90%'
					: isLargeDesktop
					? '65%'
					: isExtraLargeDesktop
					? '50%'
					: '100%',
			}}
		>
			{toTitleCase(name)
				.split(' ')
				.map((word, i) => (
					<Typography
						key={`${formattedName}-modal-title-word-${i}`}
						id={`${formattedName}-modal-title-word-${i}`}
						sx={{
							display: 'block',
							color: 'primary.contrastText',
							fontWeight: 600,
							fontSize: isMobile ? '4rem' : '5rem',
							lineHeight: 1,
							mb: 2,
						}}
					>
						{i === name.split(' ').length - 1 ? `${word}` : `${word} `}
					</Typography>
				))}
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
					marginBottom: 2,
				}}
			>
				{loading ? (
					<CircularProgress
						id={`${formattedName}-modal-loading`}
						sx={{
							color: darkMode ? 'primary.light' : 'primary.dark',
						}}
						role="img"
						aria-label="loading spinner"
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
								width: '75%',
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
								role="img"
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
