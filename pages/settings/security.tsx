// Path: ./pages/settings.tsx
import { useState, useEffect } from 'react'
import { useSnackbar } from 'notistack'
import { useRouter } from 'next/router'
import { Box } from '@mui/material'
import { useHydrated } from 'react-hydration-provider'

import { Modal, Layout, SettingsDrawer } from '../../components'
import useToken from '../../hooks/useToken'

export interface SecuritySettingsProps {
	hydratedInit?: boolean
}

export default function SecuritySettings({ hydratedInit = false }: SecuritySettingsProps) {
	const { enqueueSnackbar } = useSnackbar()
	const router = useRouter()
	const hydrated = useHydrated()
	const { loading: tokenLoading, error: tokenError } = useToken()

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
			id="security-settings"
			sx={{
				display: 'flex',
				flexDirection: 'column',
				height: '100%',
				width: '100%',
			}}
		>
			<Layout
				name="security-settings"
				drawerChildren={<SettingsDrawer />}
				pageTitle="security settings"
			>
				<Modal name="security settings" loading={loading} error="">
					<Box
						id="security-settings-content"
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
