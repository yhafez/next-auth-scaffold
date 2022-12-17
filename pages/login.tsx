// Path: pages/login.tsx

import { useEffect, useState, useCallback } from 'react'
import { useHydrated } from 'react-hydration-provider'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useSnackbar } from 'notistack'
import { Box, Checkbox, Typography } from '@mui/material'

import Modal from '../components/Modal'
import NavigationButton from '../components/NavigationButton'
import SubmitButton from '../components/SubmitButton'
import EmailInput from '../components/EmailInput'
import PasswordInput from '../components/PasswordInput'
import ActionButtonsContainer from '../components/ActionButtonsContainer'
import ModalNote from '../components/ModalNote'
import { Layout } from '../components/Layout'

import { useBoundStore } from '../store'

export interface LoginProps {
	errorInit?: string
	emailInit?: string
	passwordInit?: string
	rememberInit?: boolean
	loadingInit?: boolean
}

export default function Login({
	errorInit = '',
	emailInit = '',
	passwordInit = '',
	rememberInit = true,
	loadingInit = false,
}: LoginProps) {
	const { darkMode, customPalette, setUser } = useBoundStore()
	const router = useRouter()
	const { enqueueSnackbar } = useSnackbar()
	const { data: session, status } = useSession()
	const hydrated = useHydrated()

	const [email, setEmail] = useState(emailInit)
	const [password, setPassword] = useState(passwordInit)
	const [remember, setRemember] = useState(rememberInit)
	const [loading, setLoading] = useState(loadingInit)
	const [error, setError] = useState(errorInit)

	useEffect(() => {
		if (localStorage.getItem('email')) setEmail(localStorage.getItem('email') as string)
	}, [])

	const getToken = useCallback(async () => {
		setError('')
		setLoading(true)
		try {
			const res = await fetch('/api/auth/token')
			const data = await res.json()

			if (data.error) {
				setError(data.error)
				return setLoading(false)
			}

			setUser(data.user)
			enqueueSnackbar('Logged in successfully', { variant: 'success', autoHideDuration: 3000 })
			setLoading(false)
			return router.push('/')
		} catch (e) {
			setError(`There was an error fetching the token: ${e}`)
			return setLoading(false)
		}
	}, [enqueueSnackbar, router])

	useEffect(() => {
		if (status === 'authenticated') getToken()
	}, [status, getToken])

	const handleLogin = async () => {
		setError('')
		setLoading(true)

		if (email === '' || password === '') {
			setError('Please fill in all fields')
			return setLoading(false)
		}

		if (remember) localStorage.setItem('email', email)
		else localStorage.removeItem('email')

		try {
			const res = await signIn('credentials', {
				redirect: false,
				username: email,
				password,
			})
			if (res?.error) {
				setError(res.error)
				return setLoading(false)
			}
			getToken()
		} catch (err) {
			setError(`There was an error signing in: ${err}`)
			return setLoading(false)
		}
	}

	if (!hydrated) return null

	return (
		<Layout name="login" pageTitle="login">
			<Modal name="login" onSubmit={handleLogin} loading={loading} error={error}>
				<EmailInput
					name="login"
					value={email}
					setValue={setEmail}
					disabled={loading}
					handleEnter={e => {
						if (e.key === 'Enter') handleLogin()
					}}
				/>

				<PasswordInput
					name="login"
					value={password}
					setValue={setPassword}
					disabled={loading}
					handleEnter={e => {
						if (e.key === 'Enter') handleLogin()
					}}
				/>

				<ActionButtonsContainer name="login">
					<NavigationButton
						name="login-signup"
						label="Sign up"
						handleClick={() => router.push('/signup')}
					/>

					<SubmitButton name="login" label="Log in" loading={loading} handleSubmit={handleLogin} />
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
							checked={remember}
							onChange={() => setRemember(remember => !remember)}
							onKeyDown={e => {
								if (e.key === 'Enter') setRemember(remember => !remember)
							}}
							sx={{
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
