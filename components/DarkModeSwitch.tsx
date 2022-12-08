// Path: ./components/DarkModeSwitch.tsx
import { useEffect, useState } from 'react'
import { Box, Switch, Typography } from '@mui/material'
import WbSunnyIcon from '@mui/icons-material/WbSunny'
import Brightness2Icon from '@mui/icons-material/Brightness2'

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
		const darkMode = JSON.parse(localStorage.getItem('darkMode') || 'false')
		setDarkMode(darkMode)
	}, [darkMode, setDarkMode])

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
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-around',
				alignItems: 'center',
				height: '100%',
				mt: 1,
			}}
		>
			<Switch
				id={`${name}-dark-mode-switch`}
				checked={darkMode}
				onChange={handleDarkMode}
				onKeyDown={handleEnter}
				aria-labelledby={`${name}-dark-mode-switch-label-${darkMode ? 'dark' : 'light'}`}
				sx={{
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
					<Brightness2Icon
						id={`${name}-dark-mode-switch-icon-checked`}
						sx={{
							color: selected
								? darkMode
									? 'primary.light'
									: 'primary.dark'
								: 'primary.contrastText',
						}}
					/>
				}
				icon={
					<WbSunnyIcon
						id={`${name}-dark-mode-switch-icon-unchecked`}
						sx={{
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
					{darkMode ? 'Dark Mode' : 'Light Mode'}
				</Typography>
			</label>
		</Box>
	)
}
