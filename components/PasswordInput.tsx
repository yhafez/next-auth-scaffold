// Path: ./components/PasswordInput.tsx
import { useState, Dispatch, SetStateAction, KeyboardEvent } from 'react'
import { Box, TextField, Typography } from '@mui/material'
import { ErrorOutline } from '@mui/icons-material'

import { VisibilityIconButton } from '.'
import { useBoundStore } from '../store'

export interface PasswordInputProps {
	name: string
	value: string
	setValue: Dispatch<SetStateAction<string>>
	disabled: boolean
	error?: boolean
	helperText?: string
	isConfirmPassword?: boolean
	handleEnter?: (e: KeyboardEvent) => void
	required?: boolean
	isNewPassword?: boolean
	handleBlur?: () => void
}

export default function PasswordInput({
	name,
	value,
	setValue,
	disabled,
	handleEnter,
	error = false,
	helperText = '',
	isConfirmPassword = false,
	required = false,
	isNewPassword = false,
	handleBlur = () => {},
}: PasswordInputProps) {
	const formattedName = name.replace(/ /g, '-').toLowerCase()

	const { darkMode } = useBoundStore()
	const [showPassword, setShowPassword] = useState(false)

	return (
		<TextField
			id={`${formattedName}${isConfirmPassword ? '-confirm' : ''}-password-input`}
			label={isConfirmPassword ? 'Confirm Password' : 'Password'}
			aria-label={
				isConfirmPassword
					? required
						? 'Confirm Password (required)'
						: 'Confirm Password'
					: required
					? 'Password (required)'
					: 'Password'
			}
			aria-describedby={
				error
					? `${formattedName}${isConfirmPassword ? '-confirm' : ''}-password-helper-text`
					: undefined
			}
			autoComplete={isNewPassword ? 'new-password' : 'current-password'}
			variant="outlined"
			type={showPassword ? 'text' : 'password'}
			value={value}
			onChange={e => setValue(e.target.value)}
			onKeyDown={handleEnter}
			disabled={disabled}
			required={required}
			error={error}
			onBlur={handleBlur}
			helperText={!!error && `Error: ${helperText}`}
			FormHelperTextProps={{
				id: `${formattedName}${isConfirmPassword ? '-confirm' : ''}-password-helper-text`,
				style: { marginLeft: 0 },
			}}
			sx={{
				color: 'primary.contrastText',
				width: '80%',
				marginBottom: 1,
				cursor: disabled ? 'not-allowed' : 'text',
				'& .MuiOutlinedInput-root': {
					'&.Mui-error': {
						borderColor: darkMode ? 'error.dark' : 'error.light',
					},
					'&.Mui-disabled': {
						borderColor: 'lightGray',
					},
					'&.Mui-focused': {
						borderColor: 'primary.contrastText',
					},
					'&:hover': {
						borderColor: 'primary.contrastText',
					},
					'& fieldset': {
						borderColor: 'primary.contrastText',

						'&.Mui-error': {
							borderColor: darkMode ? 'error.dark' : 'error.light',
						},

						'&.Mui-disabled': {
							borderColor: 'lightGray',
						},

						'&.Mui-focused': {
							borderColor: 'primary.contrastText',
						},

						'&:hover': {
							borderColor: 'primary.contrastText',
						},
					},
				},
				'& .MuiFormLabel-root': {
					color: error ? (darkMode ? 'error.dark' : 'error.light') : 'primary.contrastText',

					'&.Mui-focused': {
						color: error ? (darkMode ? 'error.dark' : 'error.light') : 'primary.contrastText',
					},

					'&.Mui-error': {
						color: darkMode ? 'error.dark' : 'error.light',
					},

					'&.Mui-disabled': {
						color: 'lightGray',
					},
				},
				'& .MuiInputBase-input': {
					color: 'primary.contrastText',
				},
				'&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
					border: '2px solid',
					borderColor: 'primary.contrastText',
				},
				'&.Mui-focused .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
					border: '2px solid',
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

				'& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
					borderColor: darkMode ? 'error.dark' : 'error.light',
				},

				'&:hover .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
					borderColor: darkMode ? 'error.dark' : 'error.light',
				},

				'& .MuiOutlinedInput-root.Mui-error.Mui-focused .MuiOutlinedInput-notchedOutline': {
					borderColor: darkMode ? 'error.dark' : 'error.light',
				},

				'& .MuiFormHelperText-root': {
					color: error ? (darkMode ? 'error.dark' : 'error.light') : 'primary.contrastText',
				},

				'& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline': {
					borderColor: darkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)',
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
