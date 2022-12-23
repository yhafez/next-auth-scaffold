// Path: ./pages/forgot-password.tsx
import { useState, useEffect, KeyboardEvent } from 'react'
import { useRouter } from 'next/router'
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
import useToken from '../hooks/useToken'

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
	const router = useRouter()
	const { loading: tokenLoading, error: tokenError } = useToken()

	const [email, setEmail] = useState(emailInit)
	const [loading, setLoading] = useState(loadingInit)
	const [error, setError] = useState(errorInit)

	useEffect(() => {
		if (tokenError) setError(tokenError)
	}, [tokenError])

	useEffect(() => {
		if (tokenLoading) setLoading(true)
		else setLoading(false)
	}, [tokenLoading])

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
						return setLoading(false)
					} else {
						enqueueSnackbar(data.message, { variant: 'success', autoHideDuration: 2000 })
						return setLoading(false)
					}
				})
				.catch(e => {
					setError(e.message)
					return setLoading(false)
				})
		} catch (error) {
			setError(error?.message)
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
