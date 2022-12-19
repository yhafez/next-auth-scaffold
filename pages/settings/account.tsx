// Path: ./pages/settings.tsx

import { useEffect } from 'react'
import { useSnackbar } from 'notistack'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { Box } from '@mui/material'
import { useHydrated } from 'react-hydration-provider'

import Modal from '../../components/Modal'
import { Layout } from '../../components/Layout'
import SettingsDrawer from '../../components/Drawers/SettingsDrawer'

export interface AccountSettingsProps {
	hydratedInit?: boolean
}

export default function AccountSettings({ hydratedInit = false }: AccountSettingsProps) {
	const { data: session, status } = useSession()
	const { enqueueSnackbar } = useSnackbar()
	const router = useRouter()
	const hydrated = useHydrated()

	useEffect(() => {
		if (status === 'unauthenticated') {
			enqueueSnackbar('You must be signed in to view this page', {
				variant: 'error',
				autoHideDuration: 3000,
			})
			router.push('/login')
		}
	}, [status])

	if (!hydrated && !hydratedInit) return null

	return (
		<Box
			id="account-settings"
			sx={{
				display: 'flex',
				flexDirection: 'column',
				height: '100%',
				width: '100%',
			}}
		>
			<Layout
				name="account-settings"
				drawerChildren={<SettingsDrawer />}
				pageTitle="account settings"
			>
				<Modal name="account settings" loading={false} error="">
					<Box
						id="account-settings-content"
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
							height: '100%',
							width: '100%',
						}}
					></Box>
				</Modal>
			</Layout>
		</Box>
	)
}
