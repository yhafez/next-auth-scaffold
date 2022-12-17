// Path: ./components/EditableTextField.tsx
import { useState } from 'react'
import { Done, Edit } from '@mui/icons-material'
import { InputAdornment, TextField } from '@mui/material'

import { useBoundStore } from '../store'

export interface EditableTextFieldProps {
	name: string
	label: string
	value: string
	setValue: (value: string) => void
	isPassword?: boolean
}

const EditableTextField = ({
	name,
	label,
	value,
	setValue,
	isPassword = false,
}: EditableTextFieldProps) => {
	const { darkMode, customPalette } = useBoundStore()
	const [edit, setEdit] = useState(false)

	return (
		<TextField
			id={`${name}-input`}
			label={label}
			variant="standard"
			type={isPassword ? 'password' : 'text'}
			sx={{
				width: '100%',
				maxWidth: '400px',
				margin: '1rem',

				'& .MuiInputBase-input': {
					color: 'primary.contrastText',
					WebkitTextFillColor: darkMode ? 'white' : 'black',
				},

				'& .MuiInputBase-input:disabled': {
					color: darkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)',
					WebkitTextFillColor: darkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)',
				},

				'& .MuiFormLabel-root': {
					color: 'primary.contrastText',

					'&:disabled': {
						color: 'primary.contrastText',
					},
				},

				'& .MuiInput-underline:before': {
					borderBottomColor: 'primary.contrastText',
				},

				'& .MuiInput-underline:after': {
					borderBottomColor: 'primary.contrastText',
				},

				'& .MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled):before': {
					borderBottom: `2px solid ${
						darkMode ? customPalette?.primary?.light : customPalette?.primary?.dark
					}`,
				},
			}}
			InputProps={{
				endAdornment: (
					<InputAdornment
						id={`${name}-input-adornment`}
						position="end"
						onClick={() => setEdit(!edit)}
						sx={{
							cursor: 'pointer',
							color: 'primary.contrastText',
						}}
					>
						{edit ? (
							<Done id={`${name}-input-done-icon`} />
						) : (
							<Edit id={`${name}-input-edit-icon`} />
						)}
					</InputAdornment>
				),
			}}
			value={value}
			disabled={!edit}
			onChange={e => setValue(e.target.value)}
		/>
	)
}

export default EditableTextField
