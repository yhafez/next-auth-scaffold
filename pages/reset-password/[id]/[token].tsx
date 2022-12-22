// Path: ./pages/reset-password/[...token].tsx
import { useState, useEffect, KeyboardEvent } from 'react'
import { useSnackbar } from 'notistack'
import { useRouter } from 'next/router'
import { useHydrated } from 'react-hydration-provider'

import {
	Modal,
	ConfirmPasswordInput,
	SubmitButton,
	ActionButtonsContainer,
	Layout,
} from '../../../components'

export interface ResetPasswordProps {
	errorInit?: string
	passwordInit?: string
	confirmPasswordInit?: string
	loadingInit?: boolean
	hydratedInit?: boolean
}

export default function ResetPassword({
	errorInit = 'Unauthenticated',
	passwordInit = '',
	confirmPasswordInit = '',
	loadingInit = false,
	hydratedInit = false,
}: ResetPasswordProps) {
	const router = useRouter()
	const { id, token } = router.query

	const { enqueueSnackbar } = useSnackbar()
	const hydrated = useHydrated()

	const [password, setPassword] = useState(passwordInit)
	const [confirmPassword, setConfirmPassword] = useState(confirmPasswordInit)
	const [error, setError] = useState(errorInit)
	const [loading, setLoading] = useState(loadingInit)

	const handleResetPassword = () => {
		if (password === '' || confirmPassword === '') {
			enqueueSnackbar('Please enter your password', { variant: 'error', autoHideDuration: 3000 })
			return
		}

		if (password !== confirmPassword) {
			enqueueSnackbar('Passwords do not match', { variant: 'error', autoHideDuration: 3000 })
			return
		}

		setLoading(true)

		try {
			fetch('/api/auth/reset-password', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					password,
					id,
				}),
			})
				.then(res => res.json())
				.then(data => {
					if (data.error) {
						enqueueSnackbar(data.error, { variant: 'error', autoHideDuration: 3000 })
						setLoading(false)
					} else {
						enqueueSnackbar(data.message, { variant: 'success', autoHideDuration: 2000 })
						setLoading(false)
						router.push('/login')
					}
				})
		} catch (error) {
			enqueueSnackbar(error.message, { variant: 'error', autoHideDuration: 3000 })
			setLoading(false)
		}
	}

	useEffect(() => {
		if (token) {
			fetch('/api/auth/verify-token', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					id: router.query.id,
					token: router.query.token,
				}),
			})
				.then(res => res.json())
				.then(data => {
					if (data.error) {
						setError(data.error)
					} else {
						setError('')
					}
				})
		}
	}, [token])

	useEffect(() => {
		if (!id || !token) {
			setError('Unauthenticated')
		}
	}, [id, token])

	const handleEnter = (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			handleResetPassword()
		}
	}

	if (!hydrated && !hydratedInit) return null

	return (
		<Layout name="reset-password" pageTitle="reset password">
			<Modal name="reset password" onSubmit={handleResetPassword} loading={loading} error={error}>
				<ConfirmPasswordInput
					name="reset-password"
					password={password}
					setPassword={setPassword}
					confirmPassword={confirmPassword}
					setConfirmPassword={setConfirmPassword}
					disabled={loading || error !== ''}
					handleEnter={handleEnter}
				/>

				<ActionButtonsContainer name="reset-password">
					<SubmitButton
						name="reset-password"
						handleSubmit={handleResetPassword}
						loading={loading}
						label="reset"
						disabled={loading || error !== ''}
					/>
				</ActionButtonsContainer>
			</Modal>
		</Layout>
	)
}
