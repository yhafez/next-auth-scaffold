// Path: ./pages/reset-password/[...token].tsx
import { useState, useEffect, KeyboardEvent } from 'react'
import { useHydrated } from 'react-hydration-provider'
import { useRouter } from 'next/router'
import { useSession, signOut } from 'next-auth/react'
import { useSnackbar } from 'notistack'

import {
	Modal,
	ConfirmPasswordInput,
	SubmitButton,
	ActionButtonsContainer,
	Layout,
	NavigationButton,
} from '../../../components'

export interface ResetPasswordProps {
	errorInit?: string
	passwordInit?: string
	confirmPasswordInit?: string
	loadingInit?: boolean
	hydratedInit?: boolean
}

const hideInputsErrorMessages = [
	'Unauthenticated',
	'Invalid token',
	'Missing token or id',
	'User does not exist',
]

export default function ResetPassword({
	errorInit = '',
	passwordInit = '',
	confirmPasswordInit = '',
	loadingInit = false,
	hydratedInit = false,
}: ResetPasswordProps) {
	const router = useRouter()
	const { id, token } = router.query

	const { enqueueSnackbar } = useSnackbar()
	const hydrated = useHydrated()
	const { data: _session, status } = useSession()

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
				.catch(e => {
					throw new Error(e)
				})
		} catch (error) {
			enqueueSnackbar(error.message, { variant: 'error', autoHideDuration: 3000 })
			setLoading(false)
		}
	}

	useEffect(() => {
		if (!id || !token) setError('Unauthenticated')
		else {
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
					if (data.error) setError(data.error)
					else setError('')
				})
		}
	}, [id, token])

	useEffect(() => {
		if (status === 'loading') return setLoading(true)
		if (status === 'authenticated') signOut({ redirect: false })
		else setLoading(false)
	}, [status])

	const handleEnter = (e: KeyboardEvent) => {
		if (e.key === 'Enter') handleResetPassword()
	}

	if (!hydrated && !hydratedInit) return null

	return (
		<Layout name="reset-password" pageTitle="reset password">
			<Modal name="reset password" onSubmit={handleResetPassword} loading={loading} error={error}>
				{hideInputsErrorMessages.includes(error) ? null : (
					<ConfirmPasswordInput
						name="reset-password"
						password={password}
						setPassword={setPassword}
						confirmPassword={confirmPassword}
						setConfirmPassword={setConfirmPassword}
						disabled={loading || error !== ''}
						handleEnter={handleEnter}
					/>
				)}
				<ActionButtonsContainer name="reset-password">
					<NavigationButton
						name="reset-password-back-to-login"
						label="Back to Login"
						handleClick={() => router.push('/login')}
					/>
					{hideInputsErrorMessages.includes(error) ? null : (
						<SubmitButton
							name="reset-password"
							handleSubmit={handleResetPassword}
							loading={loading}
							label="reset"
							disabled={loading || error !== ''}
						/>
					)}
				</ActionButtonsContainer>
			</Modal>
		</Layout>
	)
}
