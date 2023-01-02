// Path: pages/login.tsx
import { useState, useEffect, KeyboardEvent } from 'react'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'
import { useHydrated } from 'react-hydration-provider'
import { useSnackbar } from 'notistack'

import { ErrorBase, SignInError, TokenError, FetchError, handleSignInError } from '../errors'
import { isValidEmail, getErrorMessageForPassword } from '../utils/helpers'
import useToken from '../hooks/useToken'
import {
	Modal,
	Layout,
	SubmitButton,
	EmailInput,
	ConfirmPasswordInput,
	ActionButtonsContainer,
	ModalNote,
} from '../components'

type FormErrorName =
	| 'EmailRequired'
	| 'PasswordRequired'
	| 'ConfirmPasswordRequired'
	| 'EmailInvalid'
	| 'PasswordInvalid'
	| 'ConfirmPasswordInvalid'
	| 'PasswordMismatch'
	| 'UnknownError'

class FormError extends ErrorBase<FormErrorName> {}

const validateForm = (email: string, password: string, confirmPassword: string) => {
	if (!email) {
		return new FormError({
			name: 'EmailRequired',
			message: 'Please enter your email',
			cause: null,
		})
	}
	if (!password) {
		return new FormError({
			name: 'PasswordRequired',
			message: 'Please enter your password',
			cause: null,
		})
	}
	if (!confirmPassword) {
		return new FormError({
			name: 'ConfirmPasswordRequired',
			message: 'Please confirm your password',
			cause: null,
		})
	}
	if (!email.includes('@') || !email.includes('.') || !isValidEmail(email)) {
		return new FormError({
			name: 'EmailInvalid',
			message: 'Please enter a valid email',
			cause: null,
		})
	}
	if (getErrorMessageForPassword(password) !== '') {
		return new FormError({
			name: 'PasswordInvalid',
			message: getErrorMessageForPassword(password),
			cause: null,
		})
	}
	if (password !== confirmPassword) {
		return new FormError({
			name: 'PasswordMismatch',
			message: 'Passwords do not match',
			cause: null,
		})
	}

	return true
}

export interface SignupProps {
	errorInit?: string
	emailInit?: string
	passwordInit?: string
	confirmPasswordInit?: string
	loadingInit?: boolean
	hydratedInit?: boolean
}

export default function Signup({
	errorInit = '',
	emailInit = '',
	passwordInit = '',
	confirmPasswordInit = '',
	loadingInit = false,
	hydratedInit = false,
}: SignupProps) {
	const router = useRouter()
	const hydrated = useHydrated()
	const { enqueueSnackbar } = useSnackbar()
	const { loading: tokenLoading, error: tokenError, getToken } = useToken()

	const [email, setEmail] = useState(emailInit)
	const [password, setPassword] = useState(passwordInit)
	const [confirmPassword, setConfirmPassword] = useState(confirmPasswordInit)
	const [loading, setLoading] = useState(loadingInit)
	const [error, setError] = useState(errorInit)

	const [emailError, setEmailError] = useState('')
	const [passwordError, setPasswordError] = useState('')
	const [confirmPasswordError, setConfirmPasswordError] = useState('')

	const handleEmailBlur = () => {
		if (!email) {
			setEmailError('')
		} else if (!email.includes('@') || !email.includes('.') || !isValidEmail(email)) {
			setEmailError('Please enter a valid email')
		} else {
			setEmailError('')
		}
	}

	const handlePasswordBlur = () => {
		if (!password) {
			setPasswordError('')
		} else {
			setPasswordError(getErrorMessageForPassword(password))
		}
	}

	const handleConfirmPasswordBlur = () => {
		if (!confirmPassword) {
			setConfirmPasswordError('')
		} else if (password !== confirmPassword) {
			setConfirmPasswordError('Passwords do not match')
		} else {
			setConfirmPasswordError('')
		}
	}

	useEffect(() => {
		if (tokenError) setError(tokenError)
	}, [tokenError])

	useEffect(() => {
		if (tokenLoading) setLoading(true)
		else setLoading(false)
	}, [tokenLoading])

	const handleGetToken = async () => {
		try {
			const token = await getToken()
			if (token) {
				enqueueSnackbar('Account created successfully! Welcome!', {
					variant: 'success',
					autoHideDuration: 3000,
				})
				return router.push('/')
			}
			throw new TokenError({
				name: 'TokenError',
				message: 'There was an error getting your token',
				cause: null,
			})
		} catch (error) {
			if (error instanceof TokenError) {
				throw error
			} else {
				console.error(`There was an error getting your token: ${error}`)
				throw new TokenError({
					name: 'TokenError',
					message: 'There was an error getting your token',
					cause: null,
				})
			}
		}
	}

	const handleSignIn = async () => {
		try {
			const res = await signIn('credentials', {
				redirect: false,
				username: email,
				password,
			})
			if (res?.error) return handleSignInError(res.error)
			return handleGetToken()
		} catch (error) {
			if (error instanceof SignInError || error instanceof TokenError) {
				throw error
			} else {
				console.error(`There was an error signing you in: ${error}`)
				throw new SignInError({
					name: 'UnknownError',
					message: 'There was an unknown error signing you in',
					cause: null,
				})
			}
		}
	}

	const handleSignup = async () => {
		setLoading(true)
		try {
			validateForm(email, password, confirmPassword)
			const res = await fetch('/api/auth/signup', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email,
					password,
					confirmPassword,
				}),
			})

			const data = await res.json()

			if (data.error) {
				throw new FetchError({
					name: 'FetchError',
					message: 'There was an error creating your account',
					cause: data.error,
				})
			} else {
				handleSignIn()
			}
		} catch (error) {
			if (error instanceof FetchError) {
				setError(error.cause)
			} else if (
				error instanceof TokenError ||
				error instanceof SignInError ||
				error instanceof FormError
			) {
				setError(error.message)
			} else {
				console.error(`There was an unknown error creating your account: ${error}`)
				setError('There was an unknown error creating your account')
			}
			setLoading(false)
		}
	}

	const handleEnter = (e: KeyboardEvent) => {
		if (e.key === 'Enter') handleSignup()
	}

	if (!hydrated && !hydratedInit) return null

	return (
		<Layout name="signup" pageTitle="sign up">
			<Modal name="signup" onSubmit={handleSignup} loading={loading} error={error}>
				<EmailInput
					name="signup"
					value={email}
					setValue={setEmail}
					disabled={loading}
					handleEnter={handleEnter}
					error={emailError}
					handleBlur={handleEmailBlur}
					required
				/>
				<ConfirmPasswordInput
					name="signup"
					password={password}
					setPassword={setPassword}
					confirmPassword={confirmPassword}
					setConfirmPassword={setConfirmPassword}
					disabled={loading}
					handleEnter={handleEnter}
					passwordError={passwordError}
					confirmPasswordError={confirmPasswordError}
					handlePasswordBlur={handlePasswordBlur}
					handleConfirmPasswordBlur={handleConfirmPasswordBlur}
					isNewPassword
				/>
				<ActionButtonsContainer name="signup">
					<SubmitButton
						name="signup"
						label="Sign Up"
						loading={loading}
						handleSubmit={handleSignup}
						width={100}
						disabled={
							loading || validateForm(email, password, confirmPassword) instanceof FormError
						}
					/>
				</ActionButtonsContainer>

				<ModalNote name="signup-login" label="Already have an account? Log in" href="/login" />
			</Modal>
		</Layout>
	)
}
