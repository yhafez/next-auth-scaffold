// Path: ./components/ConfirmPasswordInput.tsx
import { Dispatch, SetStateAction } from 'react'
import PasswordInput from './PasswordInput'

export interface ConfirmPasswordInputProps {
	name: string
	password: string
	setPassword: Dispatch<SetStateAction<string>>
	confirmPassword: string
	setConfirmPassword: Dispatch<SetStateAction<string>>
	disabled?: boolean
}

export default function ConfirmPasswordInput({
	name,
	password,
	setPassword,
	confirmPassword,
	setConfirmPassword,
	disabled = false,
}: ConfirmPasswordInputProps) {
	return (
		<>
			<PasswordInput name={name} value={password} setValue={setPassword} disabled={disabled} />
			<PasswordInput
				name={`${name}-confirm`}
				value={confirmPassword}
				setValue={setConfirmPassword}
				disabled={disabled}
				isConfirmPassword={true}
			/>
		</>
	)
}
