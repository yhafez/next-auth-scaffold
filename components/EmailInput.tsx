// Path: ./components/EmailInput.tsx
import { Dispatch, SetStateAction, KeyboardEvent } from 'react'
import { TextField } from '@mui/material'

import { useBoundStore } from '../store'

export interface EmailInputProps {
	name: string
	value: string
	setValue: Dispatch<SetStateAction<string>>
	disabled?: boolean
	handleEnter?: (e: KeyboardEvent) => void
}

export default function EmailInput({
	name,
	value,
	setValue,
	handleEnter,
	disabled = false,
}: EmailInputProps) {
	const { darkMode } = useBoundStore()

	return (
		<TextField
			id={`${name}-email-input`}
			label="Email"
			variant="outlined"
			type="email"
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
		/>
	)
}
