// Path: ./pages/verify-email/[id]/[token].tsx
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSnackbar } from 'notistack'
import { useHydrated } from 'react-hydration-provider'
import { useSession, signOut } from 'next-auth/react'

import { Modal, ActionButtonsContainer, Layout, NavigationButton } from '../../../components'

export interface VerifyEmailProps {
	errorInit?: string
	loadingInit?: boolean
	hydratedInit?: boolean
}

export default function VerifyEmail({
	errorInit = 'Unauthenticated',
	loadingInit = false,
	hydratedInit = false,
}: VerifyEmailProps) {
	const router = useRouter()
	const { id, token } = router.query

	const { enqueueSnackbar } = useSnackbar()
	const hydrated = useHydrated()
	const { data: _session, status } = useSession()

	const [error, setError] = useState(errorInit)
	const [loading, setLoading] = useState(loadingInit)

	useEffect(() => {
		if (hydrated && id && token) {
			setError('')
			setLoading(true)
			fetch('/api/auth/verify-email', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					id,
					token,
				}),
			})
				.then(res => res.json())
				.then(data => {
					if (data.error) {
						setError(data.error)
					} else {
						enqueueSnackbar('Email verified successfully', {
							variant: 'success',
							autoHideDuration: 3000,
						})
						router.push('/login')
					}
				})
				.catch(err => {
					setError(err.message)
				})
				.finally(() => {
					setLoading(false)
				})
		}
	}, [hydrated, id, token, enqueueSnackbar, router])

	useEffect(() => {
		if (!id || !token) return setError('Invalid verification link')
	}, [id, token])

	useEffect(() => {
		if (status === 'loading') return setLoading(true)
		if (status === 'authenticated') signOut({ redirect: false })
		else setLoading(false)
	}, [status])

	if (!hydrated && !hydratedInit) return null

	return (
		<Layout name="verify-email" pageTitle="verify email">
			<Modal name="verify email" loading={loading} error={error} small>
				<ActionButtonsContainer name="verify-email">
					<NavigationButton
						name="verify-email-back-to-login"
						label="Back to Login"
						handleClick={() => router.push('/login')}
					/>
				</ActionButtonsContainer>
			</Modal>
		</Layout>
	)
}
