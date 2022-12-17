// Path: ./pages/settings.tsx

import { useState, useEffect } from 'react'
import { useSnackbar } from 'notistack'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { Box, Typography } from '@mui/material'
import { useHydrated } from 'react-hydration-provider'

import Modal from '../../components/Modal'
import { Layout } from '../../components/Layout'
import SettingsDrawer from '../../components/Drawers/SettingsDrawer'
import EditableTextField from '../../components/EditableTextField'

import { useBoundStore } from '../../store'

export default function ProfileSettings() {
	const { user, darkMode, customPalette } = useBoundStore()
	const { data: session, status } = useSession()
	const { enqueueSnackbar } = useSnackbar()
	const router = useRouter()
	const hydrated = useHydrated()

	const [editName, setEditName] = useState(false)
	const [editEmail, setEditEmail] = useState(false)
	const [editPassword, setEditPassword] = useState(false)
	const [name, setName] = useState(user?.name ?? '')
	const [email, setEmail] = useState(user?.email ?? '')
	const [password, setPassword] = useState('')

	useEffect(() => {
		if (status === 'unauthenticated') {
			enqueueSnackbar('You must be signed in to view this page', {
				variant: 'error',
				autoHideDuration: 3000,
			})
			router.push('/login')
		}
	}, [status, enqueueSnackbar, router])

	if (!hydrated) return null

	console.log('user', user)
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
				<Modal name="profile settings" loading={false} error="">
					<Box
						id="profile-settings-content"
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
							height: '100%',
							width: '100%',
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
						</Box>
						<Box
							id="profile-settings-name"
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'center',
								height: '100%',
								width: '100%',
							}}
						>
							<Typography
								variant="h4"
								sx={{
									margin: '1rem',
									color: 'primary.contrastText',
								}}
							>
								{user?.name}
							</Typography>
							<Typography
								variant="h6"
								sx={{
									margin: '1rem',
									color: 'primary.contrastText',
								}}
							>
								{user?.email}
							</Typography>
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
