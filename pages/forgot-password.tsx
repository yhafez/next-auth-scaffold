// Path: ./pages/forgot-password.tsx
import { useState, useEffect, KeyboardEvent } from 'react'
import { useSnackbar } from 'notistack'
import { useHydrated } from 'react-hydration-provider'
import { ErrorBase, FetchError } from '../errors'

type FormErrorName = 'EmailRequired' | 'EmailInvalid' | 'UnknownError'

class FormError extends ErrorBase<FormErrorName> {}

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
		setLoading(true)
		try {
			if (email === '') {
				throw new FormError({
					name: 'EmailRequired',
					message: 'Please enter your email',
					cause: null,
				})
			}

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
						throw new FetchError({
							name: 'FetchError',
							message: 'There was an API error while trying to reset your password',
							cause: data.error,
						})
					} else {
						enqueueSnackbar(data.message, { variant: 'success', autoHideDuration: 2000 })
						return setLoading(false)
					}
				})
				.catch(e => {
					throw new FetchError({
						name: 'ServerError',
						message: 'There was an API error while trying to reset your password',
						cause: e.message,
					})
				})
		} catch (error) {
			if (error instanceof FormError || error instanceof FetchError) {
				enqueueSnackbar(error.message, { variant: 'error', autoHideDuration: 3000 })
				setError(error.message)
			} else {
				enqueueSnackbar('An unknown error occurred', { variant: 'error', autoHideDuration: 3000 })
				setError('An unknown error occurred')
				console.error(error)
			}
			return setLoading(false)
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
					required
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
