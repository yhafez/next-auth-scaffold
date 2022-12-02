// Path: pages/login.tsx

import { useEffect, useState } from 'react'
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
	const {
		settings: { darkMode },
	} = useBoundStore()

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

		if (remember) {
			localStorage.setItem('email', email)
		} else {
			localStorage.removeItem('email')
		}

		try {
			const res = await fetch('/api/auth/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email,
					password,
				}),
			})

			const data = await res.json()

			if (data.error) {
				setError(data.error)
			} else {
				localStorage.setItem('token', data.token)
				router.push('/')
				enqueueSnackbar('Logged in successfully', { variant: 'success', autoHideDuration: 2000 })
			}
		} catch (err) {
			setError(err.message)
			setLoading(false)
		} finally {
			setLoading(false)
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
		<Modal name="login" loading={loading} error={error}>
			<EmailInput name="login" value={email} setValue={setEmail} disabled={loading} />

			<PasswordInput name="login" value={password} setValue={setPassword} disabled={loading} />

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
						color: darkMode ? 'white' : 'black',
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
							color: darkMode ? 'white' : 'black',
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
								color: darkMode ? 'white' : 'black',
							},
						}}
					/>
				</label>
			</Box>
			<ModalNote name="login-forgot-password" label="Forgot password?" href="/forgot-password" />
		</Modal>
	)
}
