// Path: pages/login.tsx
import { useEffect, useState, useCallback, use } from 'react'
import { useHydrated } from 'react-hydration-provider'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useSnackbar } from 'notistack'
import { Box, Checkbox, Typography } from '@mui/material'

import { ErrorBase, handleSignInError, SignInError, TokenError } from '../errors'
import { isValidEmail } from '../utils/helpers'

type FormErrorName =
	| 'EmailRequired'
	| 'PasswordRequired'
	| 'EmailAndPasswordRequired'
	| 'EmailInvalid'
	| 'PasswordInvalid'
	| 'EmailNotFound'
	| 'PasswordIncorrect'
	| 'Unknown'

class FormError extends ErrorBase<FormErrorName> {}

import {
	Modal,
	Layout,
	NavigationButton,
	SubmitButton,
	EmailInput,
	PasswordInput,
	ActionButtonsContainer,
	ModalNote,
} from '../components'
import { useBoundStore } from '../store'
import useToken from '../hooks/useToken'

export interface LoginProps {
	errorInit?: string
	emailInit?: string
	passwordInit?: string
	rememberInit?: boolean
	loadingInit?: boolean
	hydratedInit?: boolean
}

export default function Login({
	errorInit = '',
	emailInit = '',
	passwordInit = '',
	rememberInit = true,
	loadingInit = false,
	hydratedInit = false,
}: LoginProps) {
	const { darkMode, customPalette } = useBoundStore()
	const router = useRouter()
	const { enqueueSnackbar } = useSnackbar()
	const hydrated = useHydrated()
	const { loading: tokenLoading, error: tokenError, getToken } = useToken()

	const [email, setEmail] = useState(emailInit)
	const [password, setPassword] = useState(passwordInit)
	const [remember, setRemember] = useState(rememberInit)
	const [loading, setLoading] = useState(loadingInit)
	const [error, setError] = useState(errorInit)
	const [emailError, setEmailError] = useState('')

	const handleEmailBlur = useCallback(() => {
		if (email === '') setEmailError('')
		else if (!email.includes('@') || !email.includes('.') || !isValidEmail(email))
			setEmailError('Please enter a valid email')
		else setEmailError('')
	}, [email])

	useEffect(() => {
		if (localStorage.getItem('email')) setEmail(localStorage.getItem('email') as string)
	}, [])

	useEffect(() => {
		if (tokenError) setError(tokenError)
	}, [tokenError])

	useEffect(() => {
		if (tokenLoading) setLoading(true)
		else setLoading(false)
	}, [tokenLoading])

	const handleLogin = async () => {
		setError('')
		setLoading(true)

		if (remember) localStorage.setItem('email', email)
		else localStorage.removeItem('email')

		try {
			if (email === '' && password === '') {
				throw new FormError({
					name: 'EmailAndPasswordRequired',
					message: 'Please fill in email and password fields',
					cause: null,
				})
			} else if (email === '') {
				throw new FormError({
					name: 'EmailRequired',
					message: 'Please fill in email field',
					cause: null,
				})
			} else if (password === '') {
				throw new FormError({
					name: 'PasswordRequired',
					message: 'Please fill in password field',
					cause: null,
				})
			}

			const res = await signIn('credentials', {
				redirect: false,
				username: email,
				password,
			})
			if (res?.error) handleSignInError(res.error)

			const token = await getToken()
			if (token) {
				enqueueSnackbar('Logged in successfully', { variant: 'success', autoHideDuration: 3000 })
				return router.push('/')
			}
			throw new TokenError({
				name: 'TokenError',
				message: 'There was an error getting your token',
				cause: null,
			})
		} catch (error) {
			if (error instanceof FormError || error instanceof SignInError) {
				setError(error.message)
			} else {
				setError('There was an unknown error logging in. Please try again later.')
				console.error(error)
			}
			return setLoading(false)
		}
	}

	if (!hydrated && !hydratedInit) return null

	return (
		<Layout name="login" pageTitle="login">
			<Modal name="login" onSubmit={handleLogin} loading={loading} error={error}>
				<EmailInput
					name="login"
					value={email}
					setValue={setEmail}
					disabled={loading}
					handleEnter={e => {
						if (
							e.key === 'Enter' &&
							!loading &&
							emailError === '' &&
							email !== '' &&
							password !== ''
						)
							handleLogin()
					}}
					required
					error={emailError}
					handleBlur={handleEmailBlur}
				/>

				<PasswordInput
					name="login"
					value={password}
					setValue={setPassword}
					disabled={loading}
					handleEnter={e => {
						if (
							e.key === 'Enter' &&
							!loading &&
							emailError === '' &&
							email !== '' &&
							password !== ''
						)
							handleLogin()
					}}
					required
				/>

				<ActionButtonsContainer name="login">
					<NavigationButton
						name="login-signup"
						label="Sign up"
						handleClick={() => router.push('/signup')}
					/>

					<SubmitButton
						name="login"
						label="Log in"
						loading={loading}
						handleSubmit={handleLogin}
						disabled={loading || emailError !== '' || email === '' || password === ''}
					/>
				</ActionButtonsContainer>
				<Box
					id="login-forgot-password-container"
					sx={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'end',
						alignItems: 'center',
						gap: 1,
					}}
				>
					<label
						id="login-forgot-password-label"
						htmlFor="remember-me-checkbox"
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'center',
							alignItems: 'center',
							gap: 1,
							color: customPalette.primary.contrastText,
							cursor: 'pointer',
							fontWeight: 600,
						}}
					>
						<Typography
							id="login-forgot-password-text"
							variant="body1"
							sx={{
								color: 'primary.contrastText',
								fontWeight: 600,

								'&:hover': {
									color: darkMode ? 'primary.light' : 'primary.dark',
									transform: 'scale(1.05)',
								},

								'&:active': {
									color: darkMode ? 'primary.light' : 'primary.dark',
									transform: 'scale(1.05)',
								},

								'&:focus': {
									color: darkMode ? 'primary.light' : 'primary.dark',
									transform: 'scale(1.05)',
								},
							}}
						>
							Remember Me
						</Typography>
						<Checkbox
							id="remember-me-checkbox"
							inputProps={{
								'aria-checked': remember,
								role: 'checkbox',
							}}
							checked={remember}
							onChange={() => setRemember(remember => !remember)}
							onKeyDown={e => {
								if (e.key === 'Enter') setRemember(remember => !remember)
							}}
							sx={{
								width: '48px',
								height: '48px',
								color: 'primary.contrastText',
								'&.Mui-checked': {
									color: darkMode ? 'primary.light' : 'primary.dark',
								},

								'&.MuiIconButton-colorPrimary:hover': {
									backgroundColor: 'transparent',
								},

								'&.MuiIconButton-colorPrimary:active': {
									backgroundColor: 'transparent',
								},

								'&.MuiIconButton-colorPrimary:focus': {
									backgroundColor: 'transparent',
								},

								'&.MuiIconButton-colorPrimary.Mui-disabled': {
									color: 'primary.contrastText',
								},
							}}
						/>
					</label>
				</Box>
				<ModalNote name="login-forgot-password" label="Forgot password?" href="/forgot-password" />
			</Modal>
		</Layout>
	)
}
