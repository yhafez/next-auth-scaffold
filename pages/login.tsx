// Path: pages/login.tsx

import { useEffect, useState, KeyboardEvent } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useSnackbar } from 'notistack'
import { useBoundStore } from '../store'

import { Box, Checkbox } from '@mui/material'

import Modal from '../components/Modal'
import NavigationButton from '../components/NavigationButton'
import SubmitButton from '../components/SubmitButton'
import EmailInput from '../components/EmailInput'
import PasswordInput from '../components/PasswordInput'
import ActionButtonsContainer from '../components/ActionButtonsContainer'
import ModalNote from '../components/ModalNote'
import { Layout } from '../components/Layout'

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

	const [email, setEmail] = useState(emailInit)
	const [password, setPassword] = useState(passwordInit)
	const [remember, setRemember] = useState(rememberInit)
	const [loading, setLoading] = useState(loadingInit)
	const [error, setError] = useState(errorInit)

	const handleLogin = async () => {
		setLoading(true)
		setError('')

		if (email === '' || password === '') {
			setError('Please fill in all fields')
			setLoading(false)
			return
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
				setLoading(false)
				return
			}

			try {
				const res = await fetch('/api/auth/token', {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
					},
				})

				const data = await res.json()

				if (data.error) {
					setError(data.error)
					setLoading(false)
					return
				}

				localStorage.setItem('token', JSON.stringify(data.token))
				setUser(data.token.user.user)
				enqueueSnackbar('Logged in successfully', { variant: 'success', autoHideDuration: 3000 })
				setLoading(false)
				router.push('/')
			} catch (err) {
				setError(`There was an error fetching the token: ${err}`)
				setLoading(false)
				return
			}
		} catch (err) {
			setError(`There was an error signing in: ${err}`)
			setLoading(false)
		}
	}

	const handleEnter = (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			handleLogin()
		}
	}

	useEffect(() => {
		if (localStorage.getItem('token')) {
			router.push('/')
		}

		if (localStorage.getItem('email')) {
			setEmail(localStorage.getItem('email')!)
		}
	}, [router])

	return (
		<Layout name="login">
			<Modal name="login" loading={loading} error={error}>
				<EmailInput
					name="login"
					value={email}
					setValue={setEmail}
					disabled={loading}
					handleEnter={handleEnter}
				/>

				<PasswordInput
					name="login"
					value={password}
					setValue={setPassword}
					disabled={loading}
					handleEnter={handleEnter}
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
						Remember Me
						<Checkbox
							id="remember-me-checkbox"
							checked={remember}
							onChange={() => setRemember(remember => !remember)}
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
