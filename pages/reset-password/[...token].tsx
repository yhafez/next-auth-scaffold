// Path: ./pages/reset-password/[...token].tsx
import { useState, useEffect } from 'react'
import { useSnackbar } from 'notistack'
import { useRouter } from 'next/router'

import Modal from '../../components/Modal'
import ConfirmPasswordInput from '../../components/ConfirmPasswordInput'
import SubmitButton from '../../components/SubmitButton'
import ActionButtonsContainer from '../../components/ActionButtonsContainer'

export interface ResetPasswordProps {
	errorInit?: string
	passwordInit?: string
	confirmPasswordInit?: string
	loadingInit?: boolean
	emailInit?: string
}

export default function ResetPassword({
	errorInit = '',
	passwordInit = '',
	confirmPasswordInit = '',
	loadingInit = false,
	emailInit = '',
}: ResetPasswordProps) {
	const router = useRouter()

	const { enqueueSnackbar } = useSnackbar()

	const [password, setPassword] = useState(passwordInit)
	const [confirmPassword, setConfirmPassword] = useState(confirmPasswordInit)
	const [email, setEmail] = useState(emailInit)
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
					email,
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
		if (router.query.token) {
			fetch('/api/auth/verify-token', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					token: router.query.token,
				}),
			})
				.then(res => res.json())
				.then(data => {
					if (data.error) {
						setError(data.error)
					} else {
						setEmail(data.email)
					}
				})
		}
	}, [router.query])

	useEffect(() => {
		if (!email) {
			setError('Invalid token')
		}
	}, [email])

	return (
		<Modal name="reset password" loading={loading} error={error} small>
			<ConfirmPasswordInput
				name="reset-password"
				password={password}
				setPassword={setPassword}
				confirmPassword={confirmPassword}
				setConfirmPassword={setConfirmPassword}
				disabled={loading || !email}
			/>

			<ActionButtonsContainer name="reset-password">
				<SubmitButton
					name="reset-password"
					handleSubmit={handleResetPassword}
					loading={loading}
					label="reset"
					disabled={!email}
				/>
			</ActionButtonsContainer>
		</Modal>
	)
}
