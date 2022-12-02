// Path: ./components/EmailInput.tsx

import { Dispatch, SetStateAction } from 'react'
import { TextField } from '@mui/material'

import { useBoundStore } from '../store'

export interface EmailInputProps {
	name: string
	value: string
	setValue: Dispatch<SetStateAction<string>>
	disabled?: boolean
}

export default function EmailInput({ name, value, setValue, disabled = false }: EmailInputProps) {
	const {
		settings: { darkMode },
	} = useBoundStore()

	return (
		<TextField
			id={`${name}-email-input`}
			label="Email"
			variant="outlined"
			type="email"
			value={value}
			onChange={e => setValue(e.target.value)}
			disabled={disabled}
			sx={{
				color: darkMode ? 'white' : 'black',
				width: '80%',
				marginBottom: 1,
				'& .MuiOutlinedInput-root': {
					'& fieldset': {
						borderColor: darkMode ? 'white' : 'black',
					},
				},
				'& .MuiFormLabel-root': {
					color: darkMode ? 'white' : 'black',
				},
				'& .MuiInputBase-input': {
					color: darkMode ? 'white' : 'black',
					'&:disabled': {
						color: 'lightGray',
						WebkitTextFillColor: darkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
					},
				},
				'& .Mui-disabled': {
					color: 'lightGray',
					'& .MuiOutlinedInput-notchedOutline': {
						borderColor: 'darkGray',
					},
				},
			}}
		/>
	)
}
