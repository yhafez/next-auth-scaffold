// Path: ./pages/forgot-password.tsx
import { useState, KeyboardEvent } from 'react'
import { useSnackbar } from 'notistack'
import { useHydrated } from 'react-hydration-provider'

import {
	Modal,
	ModalNote,
	EmailInput,
	SubmitButton,
	ActionButtonsContainer,
	Layout,
} from '../components'

export interface ForgotPasswordProps {
	errorInit?: string
	emailInit?: string
	loadingInit?: boolean
	hydratedInit?: boolean
}

export default function ForgotPassword({
	errorInit = '',
	emailInit = '',
	loadingInit = false,
	hydratedInit = false,
}: ForgotPasswordProps) {
	const { enqueueSnackbar } = useSnackbar()
	const hydrated = useHydrated()

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

	if (!hydrated && !hydratedInit) return null

	return (
		<Layout name="forgot-password" pageTitle="forgot password">
			<Modal name="forgot password" onSubmit={handleForgotPassword} loading={loading} error={error}>
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
