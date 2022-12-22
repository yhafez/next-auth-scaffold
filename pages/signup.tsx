// Path: pages/login.tsx
import { useState, KeyboardEvent, useCallback } from 'react'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'
import { useHydrated } from 'react-hydration-provider'
import { useSnackbar } from 'notistack'

import {
	Modal,
	Layout,
	SubmitButton,
	EmailInput,
	ConfirmPasswordInput,
	ActionButtonsContainer,
	ModalNote,
} from '../components'
import { useBoundStore } from '../store'

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
	const { setUser } = useBoundStore()
	const { enqueueSnackbar } = useSnackbar()

	const [email, setEmail] = useState(emailInit)
	const [password, setPassword] = useState(passwordInit)
	const [confirmPassword, setConfirmPassword] = useState(confirmPasswordInit)
	const [loading, setLoading] = useState(loadingInit)
	const [error, setError] = useState(errorInit)

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
			enqueueSnackbar('Logged in successfully', { variant: 'success', autoHideDuration: 3000 })
			setLoading(false)
			return router.push('/')
		} catch (e) {
			setError(`There was an error fetching the token: ${e}`)
			return setLoading(false)
		}
	}, [])

	const handleSignup = async () => {
		setLoading(true)
		try {
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
				setError(data.error)
			} else {
				localStorage.setItem('token', data.token)
				setUser(data.user)
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

			setLoading(false)
		} catch (error) {
			setError(error.message)
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
				/>
				<ConfirmPasswordInput
					name="signup"
					password={password}
					setPassword={setPassword}
					confirmPassword={confirmPassword}
					setConfirmPassword={setConfirmPassword}
					disabled={loading}
					handleEnter={handleEnter}
				/>
				<ActionButtonsContainer name="signup">
					<SubmitButton
						name="signup"
						label="Sign Up"
						loading={loading}
						handleSubmit={handleSignup}
						width={100}
					/>
				</ActionButtonsContainer>

				<ModalNote name="signup-login" label="Already have an account? Log in" href="/login" />
			</Modal>
		</Layout>
	)
}
