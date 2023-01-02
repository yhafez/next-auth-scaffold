// Path: ./components/ConfirmPasswordInput.tsx
import { Dispatch, SetStateAction, KeyboardEvent, useState } from 'react'
import {
	passwordContainsLowercase,
	passwordContainsNumber,
	passwordContainsSpecialCharacter,
	passwordContainsUppercase,
	passwordMeetsMaxLengthRequirements,
	passwordMeetsMinLengthRequirements,
} from '../utils/helpers'

import PasswordInput from './PasswordInput'

export interface ConfirmPasswordInputProps {
	name: string
	password: string
	setPassword: Dispatch<SetStateAction<string>>
	confirmPassword: string
	setConfirmPassword: Dispatch<SetStateAction<string>>
	disabled?: boolean
	handleEnter?: (e: KeyboardEvent) => void
	isNewPassword?: boolean
	passwordError?: string
	confirmPasswordError?: string
	handlePasswordBlur?: () => void
	handleConfirmPasswordBlur?: () => void
}

export default function ConfirmPasswordInput({
	name,
	password,
	setPassword,
	confirmPassword,
	setConfirmPassword,
	disabled = false,
	handleEnter = () => {},
	isNewPassword = false,
	passwordError = '',
	confirmPasswordError = '',
	handlePasswordBlur = () => {},
	handleConfirmPasswordBlur = () => {},
}: ConfirmPasswordInputProps) {
	return (
		<>
			<PasswordInput
				name={name}
				value={password}
				setValue={setPassword}
				disabled={disabled}
				handleEnter={handleEnter}
				isNewPassword={isNewPassword}
				error={!!passwordError}
				helperText={passwordError}
				handleBlur={handlePasswordBlur}
				required
			/>
			<PasswordInput
				name={`${name}`}
				value={confirmPassword}
				setValue={setConfirmPassword}
				disabled={disabled}
				isConfirmPassword={true}
				handleEnter={handleEnter}
				isNewPassword={isNewPassword}
				error={!!confirmPasswordError}
				helperText={confirmPasswordError}
				handleBlur={handleConfirmPasswordBlur}
				required
			/>
		</>
	)
}
