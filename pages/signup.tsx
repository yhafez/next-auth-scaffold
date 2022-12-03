// Path: pages/login.tsx

import { useState } from 'react'
import { useRouter } from 'next/router'

import Modal from '../components/Modal'
import SubmitButton from '../components/SubmitButton'
import EmailInput from '../components/EmailInput'
import ConfirmPasswordInput from '../components/ConfirmPasswordInput'
import ActionButtonsContainer from '../components/ActionButtonsContainer'
import ModalNote from '../components/ModalNote'

export interface SignupProps {
	errorInit?: string
	emailInit?: string
	passwordInit?: string
	confirmPasswordInit?: string
	loadingInit?: boolean
}

export default function Signup({
	errorInit = '',
	emailInit = '',
	passwordInit = '',
	confirmPasswordInit = '',
	loadingInit = false,
}: SignupProps) {
	const router = useRouter()

	const [email, setEmail] = useState(emailInit)
	const [password, setPassword] = useState(passwordInit)
	const [confirmPassword, setConfirmPassword] = useState(confirmPasswordInit)
	const [loading, setLoading] = useState(loadingInit)
	const [error, setError] = useState(errorInit)

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
				router.push('/')
			}

			setLoading(false)
		} catch (error) {
			setError(error.message)
			setLoading(false)
		}
	}

	return (
		<Modal name="signup" loading={loading} error={error}>
			<EmailInput name="signup" value={email} setValue={setEmail} disabled={loading} />
			<ConfirmPasswordInput
				name="signup"
				password={password}
				setPassword={setPassword}
				confirmPassword={confirmPassword}
				setConfirmPassword={setConfirmPassword}
				disabled={loading}
			/>
			<ActionButtonsContainer name="signup">
				<SubmitButton
					name="signup"
					label="Sign Up"
					loading={loading}
					handleSubmit={handleSignup}
					width="100%"
				/>
			</ActionButtonsContainer>

			<ModalNote name="signup-login" label="Already have an account? Log in" href="/login" />
		</Modal>
	)
}
