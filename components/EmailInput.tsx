// Path: ./components/EmailInput.tsx
import { Dispatch, SetStateAction, KeyboardEvent, useState, useEffect } from 'react'
import { Box, TextField, Typography } from '@mui/material'
import { ErrorOutline } from '@mui/icons-material'
import { getContrast } from 'color2k'

import { isValidEmail, isMinEmailLength, isMaxEmailLength } from '../utils/helpers'
import { useBoundStore } from '../store'
import { ErrorBase } from '../errors'

export interface EmailInputProps {
	name: string
	value: string
	setValue: Dispatch<SetStateAction<string>>
	disabled?: boolean
	handleEnter?: (e: KeyboardEvent) => void
	required?: boolean
	error?: string
	handleBlur?: () => void
}

type EmailErrorName =
	| 'EmailRequired'
	| 'EmailInvalid'
	| 'EmailTooShort'
	| 'EmailTooLong'
	| 'UnknownError'

export class EmailError extends ErrorBase<EmailErrorName> {}

export default function EmailInput({
	name,
	value,
	setValue,
	handleEnter,
	disabled = false,
	required = false,
	error = '',
	handleBlur = () => {},
}: EmailInputProps) {
	const { darkMode, theme } = useBoundStore()

	return (
		<TextField
			id={`${name}-email-input`}
			label="Email"
			aria-label="Email (required)"
			aria-describedby={`${name}-email-helper-text`}
			autoComplete="email"
			variant="outlined"
			type="email"
			value={value}
			onChange={e => setValue(e.target.value)}
			onKeyDown={handleEnter}
			disabled={disabled}
			required={required}
			error={!!error}
			onBlur={handleBlur}
			helperText={!!error && `Error: ${error}`}
			FormHelperTextProps={{
				id: `${name}-email-helper-text`,
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
		/>
	)
}
