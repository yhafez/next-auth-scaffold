// Path: ./components/DarkModeSwitch.tsx
import { useEffect } from 'react'
import { Box, Switch, Typography } from '@mui/material'
import WbSunnyIcon from '@mui/icons-material/WbSunny'
import Brightness2Icon from '@mui/icons-material/Brightness2'

import { useBoundStore } from '../store'

export interface DarkModeSwitchProps {
	name: string
}

export default function DarkModeSwitch({ name }: DarkModeSwitchProps) {
	const { darkMode, setDarkMode } = useBoundStore()

	const handleDarkMode = () => {
		localStorage.setItem('darkMode', JSON.stringify(!darkMode))
		setDarkMode(!darkMode)
	}

	useEffect(() => {
		const darkMode = JSON.parse(localStorage.getItem('darkMode') || 'false')
		setDarkMode(darkMode)
	}, [darkMode, setDarkMode])

	return (
		<Box
			id={`${name}-dark-mode-switch-container`}
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
				aria-labelledby={`${name}-dark-mode-switch-label-${darkMode ? 'dark' : 'light'}`}
				sx={{
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
				checkedIcon={<Brightness2Icon id={`${name}-dark-mode-switch-icon-checked`} />}
				icon={<WbSunnyIcon id={`${name}-dark-mode-switch-icon-unchecked`} />}
			/>
			<label htmlFor={`${name}-dark-mode-switch`}>
				<Typography
					id={`${name}-dark-mode-switch-label-${darkMode ? 'dark' : 'light'}`}
					variant="body2"
					sx={{
						fontWeight: 500,
						color: 'primary.contrastText',
						cursor: 'pointer',
						'&:hover': {
							color: darkMode ? 'primary.light' : 'primary.dark',
						},
					}}
				>
					{darkMode ? 'Dark Mode' : 'Light Mode'}
				</Typography>
			</label>
		</Box>
	)
}
