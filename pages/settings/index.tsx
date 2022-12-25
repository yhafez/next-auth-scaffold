// Path: ./pages/settings.tsx
import { useState, useEffect } from 'react'
import { useSnackbar } from 'notistack'
import { useRouter } from 'next/router'
import { List, ListItem } from '@mui/material'
import { Accessibility, Person, Security, Settings as SettingsIcon } from '@mui/icons-material'
import { useHydrated } from 'react-hydration-provider'

import { Modal, ModalButton, Layout, SettingsDrawer } from '../../components'
import useToken from '../../hooks/useToken'

export interface SettingsProps {
	hydratedInit?: boolean
}

export default function Settings({ hydratedInit = false }: SettingsProps) {
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
		<Layout name="settings" drawerChildren={<SettingsDrawer />} pageTitle="settings">
			<Modal name="settings" loading={loading} error="">
				<List
					id="settings-content-list"
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						height: '100%',
						width: '100%',
					}}
				>
					<ListItem
						id="settings-content-list-item-profile-settings"
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
							height: '100%',
							width: '100%',
							p: 0,
						}}
					>
						<ModalButton
							name="profile-settings"
							buttonText="Profile"
							icon={<Person />}
							handleClick={() => {
								router.push('/settings/profile')
							}}
						/>
					</ListItem>

					<ListItem
						id="settings-content-list-item-account-settings"
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
							height: '100%',
							width: '100%',
							p: 0,
						}}
					>
						<ModalButton
							name="account-settings"
							buttonText="Account"
							icon={
								<SettingsIcon
									id="settings-content-list-item-account-settings-icon"
									role="img"
									aria-label="settings"
								/>
							}
							handleClick={() => {
								router.push('/settings/account')
							}}
						/>
					</ListItem>

					<ListItem
						id="settings-content-list-item-security-settings"
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
							height: '100%',
							width: '100%',
							p: 0,
						}}
					>
						<ModalButton
							name="security-settings"
							buttonText="Security"
							icon={<Security />}
							handleClick={() => {
								router.push('/settings/security')
							}}
						/>
					</ListItem>

					<ListItem
						id="settings-content-list-item-accessibility-settings"
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
							height: '100%',
							width: '100%',
							p: 0,
						}}
					>
						<ModalButton
							name="accessibility-settings"
							buttonText="Accessibility"
							icon={<Accessibility />}
							handleClick={() => {
								router.push('/settings/accessibility')
							}}
						/>
					</ListItem>
				</List>
			</Modal>
		</Layout>
	)
}
