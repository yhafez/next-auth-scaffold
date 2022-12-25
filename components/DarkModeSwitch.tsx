// Path: ./components/DarkModeSwitch.tsx
import { useEffect, useState } from 'react'
import { Box, Switch, Typography } from '@mui/material'
import { WbSunny, Brightness2 } from '@mui/icons-material'

import { useBoundStore } from '../store'

export interface DarkModeSwitchProps {
	name: string
}

export default function DarkModeSwitch({ name }: DarkModeSwitchProps) {
	const { darkMode, setDarkMode } = useBoundStore()
	const [selected, setSelected] = useState(false)

	const handleDarkMode = () => {
		localStorage.setItem('darkMode', JSON.stringify(!darkMode))
		setDarkMode(!darkMode)
	}

	useEffect(() => {
		const darkMode = localStorage.getItem('darkMode') === 'true'
		setDarkMode(darkMode)
	}, [])

	const handleEnter = (e: React.KeyboardEvent<HTMLButtonElement>) => {
		if (e.key === 'Enter') {
			handleDarkMode()
		}
	}

	return (
		<Box
			id={`${name}-dark-mode-switch-container`}
			onMouseEnter={() => setSelected(true)}
			onMouseLeave={() => setSelected(false)}
			onFocus={() => setSelected(true)}
			onBlur={() => setSelected(false)}
			sx={{
				textAlign: 'center',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100%',
				width: '100%',
			}}
		>
			<Switch
				id={`${name}-dark-mode-switch`}
				checked={darkMode}
				onChange={handleDarkMode}
				onKeyDown={handleEnter}
				inputProps={{
					'aria-checked': darkMode,
					'aria-labelledby': `${name}-dark-mode-switch-label-${darkMode ? 'dark' : 'light'}`,
					role: 'switch',
				}}
				sx={{
					fontSize: '1.5rem',
					color: selected ? (darkMode ? 'primary.light' : 'primary.dark') : 'primary.contrastText',
					'& .MuiSwitch-switchBase': {
						color: 'primary.contrastText',
						'&.Mui-checked': {
							color: 'primary.contrastText',
						},
						'&.Mui-checked + .MuiSwitch-track': {
							backgroundColor: 'secondary.main',
						},
					},
				}}
				checkedIcon={
					<Brightness2
						id={`${name}-dark-mode-switch-icon-checked`}
						aria-hidden={darkMode ? 'false' : 'true'}
						aria-labelledby={`${name}-dark-mode-switch-label-dark`}
						role="img"
						sx={{
							fontSize: '1.5rem',
							color: selected
								? darkMode
									? 'primary.light'
									: 'primary.dark'
								: 'primary.contrastText',
						}}
					/>
				}
				icon={
					<WbSunny
						id={`${name}-dark-mode-switch-icon-unchecked`}
						aria-hidden={darkMode ? 'true' : 'false'}
						aria-labelledby={`${name}-dark-mode-switch-label-light`}
						role="img"
						sx={{
							fontSize: '1.5rem',
							color: selected
								? darkMode
									? 'primary.light'
									: 'primary.dark'
								: 'primary.contrastText',
						}}
					/>
				}
			/>
			<label htmlFor={`${name}-dark-mode-switch`}>
				<Typography
					id={`${name}-dark-mode-switch-label-${darkMode ? 'dark' : 'light'}`}
					variant="body2"
					sx={{
						fontWeight: 500,
						color: selected
							? darkMode
								? 'primary.light'
								: 'primary.dark'
							: 'primary.contrastText',
						cursor: 'pointer',
					}}
				>
					{darkMode ? 'Dark' : 'Light'}
					<br /> Mode
				</Typography>
			</label>
		</Box>
	)
}
