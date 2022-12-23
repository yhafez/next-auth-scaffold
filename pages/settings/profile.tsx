// Path: ./pages/settings.tsx
import { useState, useEffect } from 'react'
import { useSnackbar } from 'notistack'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Box, Button } from '@mui/material'
import { useHydrated } from 'react-hydration-provider'

import { Modal, Layout, SettingsDrawer, EditableTextField } from '../../components'
import { useBoundStore } from '../../store'
import useToken from '../../hooks/useToken'

export interface ProfileSettingsProps {
	hydratedInit?: boolean
}

export default function ProfileSettings({ hydratedInit = false }: ProfileSettingsProps) {
	const { user, darkMode } = useBoundStore()
	const { enqueueSnackbar } = useSnackbar()
	const router = useRouter()
	const hydrated = useHydrated()
	const { loading: tokenLoading, error: tokenError } = useToken()

	const [name, setName] = useState(user?.name ?? '')
	const [email, setEmail] = useState(user?.email ?? '')
	const [password, setPassword] = useState('')
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		if (tokenError) enqueueSnackbar(tokenError, { variant: 'error' })
	}, [tokenError])

	useEffect(() => {
		if (tokenLoading) setLoading(true)
		else setLoading(false)
	}, [tokenLoading])

	if (!hydrated && !hydratedInit) return null

	return (
		<Box
			id="profile-settings"
			sx={{
				display: 'flex',
				flexDirection: 'column',
				height: '100%',
				width: '100%',
			}}
		>
			<Layout
				name="profile-settings"
				drawerChildren={<SettingsDrawer />}
				pageTitle="profile settings"
			>
				<Modal name="profile settings" loading={loading} error="">
					<Box
						id="profile-settings-content"
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
							height: '100%',
							width: '100%',
							p: 4,
						}}
					>
						<Box
							id="profile-settings-avatar"
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'center',
								height: '100%',
								width: '100%',
							}}
						>
							<Image
								src={user?.image ?? '/default_profile.svg'}
								alt="avatar"
								width={140}
								height={140}
							/>
							<Button
								variant="contained"
								onClick={() => {}}
								sx={{
									margin: '1rem',
									color: 'primary.contrastText',
									backgroundColor: darkMode ? 'primary.light' : 'primary.dark',
									mb: 0,
									'&:hover': {
										backgroundColor: 'primary.main',
									},
									'&:active': {
										backgroundColor: 'primary.main',
									},
									'&:focus': {
										backgroundColor: 'primary.main',
									},
								}}
							>
								Change Avatar
							</Button>
						</Box>
						<EditableTextField
							name="profile-settings-name"
							label="Name"
							value={name}
							setValue={setName}
						/>
						<EditableTextField
							name="profile-settings-email"
							label="Email"
							value={email}
							setValue={setEmail}
						/>
						<EditableTextField
							name="profile-settings-password"
							label="Password"
							value={password}
							setValue={setPassword}
						/>
					</Box>
				</Modal>
			</Layout>
		</Box>
	)
}
