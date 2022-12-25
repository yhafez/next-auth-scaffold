// Path: ./components/ConfirmPasswordInput.tsx
import { Dispatch, SetStateAction, KeyboardEvent } from 'react'

import PasswordInput from './PasswordInput'

export interface ConfirmPasswordInputProps {
	name: string
	password: string
	setPassword: Dispatch<SetStateAction<string>>
	confirmPassword: string
	setConfirmPassword: Dispatch<SetStateAction<string>>
	disabled?: boolean
	handleEnter?: (e: KeyboardEvent) => void
}

export default function ConfirmPasswordInput({
	name,
	password,
	setPassword,
	confirmPassword,
	setConfirmPassword,
	disabled = false,
	handleEnter,
}: ConfirmPasswordInputProps) {
	return (
		<>
			<PasswordInput
				name={name}
				value={password}
				setValue={setPassword}
				disabled={disabled}
				handleEnter={handleEnter}
			/>
			<PasswordInput
				name={`${name}`}
				value={confirmPassword}
				setValue={setConfirmPassword}
				disabled={disabled}
				isConfirmPassword={true}
				handleEnter={handleEnter}
			/>
		</>
	)
}
