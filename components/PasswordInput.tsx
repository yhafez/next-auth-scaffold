// Path: ./components/PasswordInput.tsx
import { useState, Dispatch, SetStateAction, KeyboardEvent } from 'react'
import { TextField } from '@mui/material'

import { VisibilityIconButton } from '.'
import { useBoundStore } from '../store'

export interface PasswordInputProps {
	name: string
	value: string
	setValue: Dispatch<SetStateAction<string>>
	disabled: boolean
	isConfirmPassword?: boolean
	handleEnter?: (e: KeyboardEvent) => void
}

export default function PasswordInput({
	name,
	value,
	setValue,
	disabled,
	handleEnter,
	isConfirmPassword = false,
}: PasswordInputProps) {
	const formattedName = name.replace(/ /g, '-').toLowerCase()

	const { darkMode } = useBoundStore()
	const [showPassword, setShowPassword] = useState(false)

	return (
		<TextField
			id={`${formattedName}${isConfirmPassword ? '-confirm' : ''}-password-input`}
			label={isConfirmPassword ? 'Confirm Password' : 'Password'}
			variant="outlined"
			type={showPassword ? 'text' : 'password'}
			value={value}
			onChange={e => setValue(e.target.value)}
			onKeyDown={handleEnter}
			disabled={disabled}
			sx={{
				color: 'primary.contrastText',
				width: '80%',
				marginBottom: 1,
				cursor: disabled ? 'not-allowed' : 'text',
				'& .MuiOutlinedInput-root': {
					'& fieldset': {
						borderColor: 'primary.contrastText',
					},
				},
				'& .MuiFormLabel-root': {
					color: 'primary.contrastText',
				},
				'& .MuiInputBase-input': {
					color: 'primary.contrastText',
				},
				'&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
					borderColor: 'primary.contrastText',
				},
				'&.Mui-focused .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
					borderColor: 'primary.contrastText',
				},
				'& .Mui-disabled': {
					color: 'lightGray',
					WebkitTextFillColor: 'lightGray',
					'& .MuiOutlinedInput-notchedOutline': {
						borderColor: darkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)',
					},
					'&:hover .MuiOutlinedInput-notchedOutline': {
						borderColor: darkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)',
					},
				},
			}}
			InputProps={{
				endAdornment: (
					<VisibilityIconButton
						name={`${formattedName}`}
						showPassword={showPassword}
						setShowPassword={setShowPassword}
						isConfirmPassword={isConfirmPassword}
						disabled={disabled}
					/>
				),
			}}
		/>
	)
}
