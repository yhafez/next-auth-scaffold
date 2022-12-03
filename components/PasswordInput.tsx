// Path: ./components/PasswordInput.tsx

import { useState, Dispatch, SetStateAction } from 'react'
import { IconButton, TextField } from '@mui/material'

import VisibilityIcon from './VisibilityIcon'

import { useBoundStore } from '../store'

export interface PasswordInputProps {
	name: string
	value: string
	setValue: Dispatch<SetStateAction<string>>
	disabled: boolean
	isConfirmPassword?: boolean
}

export default function PasswordInput({
	name,
	value,
	setValue,
	disabled,
	isConfirmPassword = false,
}: PasswordInputProps) {
	const formattedName = name.replace(/ /g, '-').toLowerCase()

	const {
		settings: { darkMode },
	} = useBoundStore()

	const [showPassword, setShowPassword] = useState(false)
	const [hover, setHover] = useState(false)

	return (
		<TextField
			id={`${formattedName}${isConfirmPassword ? '-confirm' : ''}-password-input`}
			label={isConfirmPassword ? 'Confirm Password' : 'Password'}
			variant="outlined"
			type={showPassword ? 'text' : 'password'}
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
			InputProps={{
				endAdornment: (
					<IconButton
						id={`${formattedName}${
							isConfirmPassword ? '-confirm' : ''
						}-password-input-show-hide-button`}
						onClick={() => setShowPassword(show => !show)}
						sx={{
							color: darkMode ? '#fff' : '#000',
						}}
						onMouseEnter={() => setHover(true)}
						onMouseLeave={() => setHover(false)}
					>
						<VisibilityIcon
							name={`${formattedName}`}
							showPassword={showPassword}
							hover={hover}
							isConfirmPassword={isConfirmPassword}
						/>
					</IconButton>
				),
			}}
		/>
	)
}
