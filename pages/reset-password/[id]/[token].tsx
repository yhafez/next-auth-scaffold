// Path: ./pages/reset-password/[...token].tsx
import { useState, useEffect, KeyboardEvent } from 'react'
import { useHydrated } from 'react-hydration-provider'
import { useRouter } from 'next/router'
import { useSession, signOut } from 'next-auth/react'
import { useSnackbar } from 'notistack'

import { ErrorBase, FetchError } from '../../../errors'
import {
	passwordContainsNumber,
	passwordContainsSpecialCharacter,
	passwordContainsUppercase,
	passwordContainsLowercase,
	passwordMeetsMaxLengthRequirements,
	passwordMeetsMinLengthRequirements,
} from '../../../utils/helpers'

type FormErrorName =
	| 'MissingPassword'
	| 'MissingConfirmPassword'
	| 'PasswordsDoNotMatch'
	| 'InvalidPassword'

class FormError extends ErrorBase<FormErrorName> {}

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
	const [showInputs, setShowInputs] = useState(false)

	const handleResetPassword = async () => {
		setLoading(true)
		try {
			if (password === '') {
				throw new FormError({
					name: 'MissingPassword',
					message: 'Please enter your password',
					cause: null,
				})
			} else if (confirmPassword === '') {
				throw new FormError({
					name: 'MissingConfirmPassword',
					message: 'Please confirm your password',
					cause: null,
				})
			} else if (password !== confirmPassword) {
				throw new FormError({
					name: 'PasswordsDoNotMatch',
					message: 'Passwords do not match',
					cause: null,
				})
			} else if (!passwordMeetsMinLengthRequirements(password)) {
				throw new FormError({
					name: 'InvalidPassword',
					message: 'Password must be at least 8 characters long',
					cause: null,
				})
			} else if (!passwordMeetsMaxLengthRequirements(password)) {
				throw new FormError({
					name: 'InvalidPassword',
					message: 'Password must be at most 48 characters long',
					cause: null,
				})
			} else if (!passwordContainsNumber(password)) {
				throw new FormError({
					name: 'InvalidPassword',
					message: 'Password must contain at least one number',
					cause: null,
				})
			} else if (!passwordContainsSpecialCharacter(password)) {
				throw new FormError({
					name: 'InvalidPassword',
					message: 'Password must contain at least one special character',
					cause: null,
				})
			} else if (!passwordContainsUppercase(password)) {
				throw new FormError({
					name: 'InvalidPassword',
					message: 'Password must contain at least one uppercase letter',
					cause: null,
				})
			} else if (!passwordContainsLowercase(password)) {
				throw new FormError({
					name: 'InvalidPassword',
					message: 'Password must contain at least one lowercase letter',
					cause: null,
				})
			}

			const res = await fetch('/api/auth/reset-password', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					password,
					id,
				}),
			})

			const data = await res.json()
			if (data.error) {
				throw new FetchError({
					name: 'FetchError',
					message: 'An API error occurred while resetting your password',
					cause: data.error,
				})
			} else {
				enqueueSnackbar(data.message, { variant: 'success', autoHideDuration: 2000 })
				setLoading(false)
				router.push('/login')
			}
		} catch (error) {
			if (error instanceof FormError || error instanceof FetchError) {
				setError(error.message)
			} else {
				setError('An unexpected error occurred while resetting your password')
				console.error(error)
			}
			setLoading(false)
		}
	}

	useEffect(() => {
		if (!id || !token) {
			setError('Unauthenticated')
			setShowInputs(false)
		} else {
			setLoading(true)
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
						throw new FetchError({
							name: 'FetchError',
							message: 'An API error occurred while verifying your token',
							cause: data.error,
						})
					} else {
						setError('')
						setLoading(false)
						setShowInputs(true)
					}
				})
				.catch(error => {
					if (error instanceof FetchError) {
						setError(error.message)
					} else {
						console.error(error)
						setError('An unexpected error occurred while verifying your token')
					}
					setShowInputs(false)
					setLoading(false)
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
				{showInputs && (
					<ConfirmPasswordInput
						name="reset-password"
						password={password}
						setPassword={setPassword}
						confirmPassword={confirmPassword}
						setConfirmPassword={setConfirmPassword}
						disabled={loading || error !== ''}
						handleEnter={handleEnter}
						isNewPassword
					/>
				)}
				<ActionButtonsContainer name="reset-password">
					<NavigationButton
						name="reset-password-back-to-login"
						label="Back to Login"
						handleClick={() => router.push('/login')}
					/>
					{showInputs && (
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
