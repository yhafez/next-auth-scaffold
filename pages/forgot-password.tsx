// Path: ./pages/forgot-password.tsx
import { useState, KeyboardEvent } from 'react'
import { useSnackbar } from 'notistack'

import Modal from '../components/Modal'
import SubmitButton from '../components/SubmitButton'
import EmailInput from '../components/EmailInput'
import ActionButtonsContainer from '../components/ActionButtonsContainer'
import ModalNote from '../components/ModalNote'
import { Layout } from '../components/Layout'
import { CircularProgress } from '@mui/material'

export interface ForgotPasswordProps {
	errorInit?: string
	emailInit?: string
	loadingInit?: boolean
}

export default function ForgotPassword({
	errorInit = '',
	emailInit = '',
	loadingInit = false,
}: ForgotPasswordProps) {
	const { enqueueSnackbar } = useSnackbar()

	const [email, setEmail] = useState(emailInit)
	const [loading, setLoading] = useState(loadingInit)
	const [error, setError] = useState(errorInit)

	const handleForgotPassword = () => {
		if (email === '') {
			enqueueSnackbar('Please enter your email', { variant: 'error', autoHideDuration: 3000 })
			return
		}

		setLoading(true)
		try {
			fetch('/api/auth/forgot-password', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email,
				}),
			})
				.then(res => res.json())
				.then(data => {
					if (data.error) {
						setError(data.error)
						enqueueSnackbar(data.error, { variant: 'error', autoHideDuration: 3000 })
					} else {
						enqueueSnackbar(data.message, { variant: 'success', autoHideDuration: 2000 })
					}
				})
		} catch (error) {
			setError(error?.meesage)
			enqueueSnackbar(error.message, { variant: 'error' })
		} finally {
			setLoading(false)
		}
	}

	const handleEnter = (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			handleForgotPassword()
		}
	}

	return (
		<Layout name="forgot-password">
			<Modal name="forgot password" loading={loading} error={error}>
				{loading && <CircularProgress />}
				<EmailInput
					name="forgot-password"
					value={email}
					setValue={setEmail}
					disabled={loading}
					handleEnter={handleEnter}
				/>
				<ActionButtonsContainer name="forgot-password">
					<SubmitButton
						name="forgot-password"
						label="Submit"
						loading={loading}
						handleSubmit={handleForgotPassword}
					/>
				</ActionButtonsContainer>
				<ModalNote name="forgot-password-back" label="Back to Login" href="/login" />
			</Modal>
		</Layout>
	)
}
