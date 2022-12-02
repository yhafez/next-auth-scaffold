// Path: ./components/DarkModeSwitch.tsx
import { useEffect } from 'react'
import { Box, Switch, Typography } from '@mui/material'
import WbSunnyIcon from '@mui/icons-material/WbSunny'
import Brightness2Icon from '@mui/icons-material/Brightness2'

import { useBoundStore } from '../store'

export interface DarkModeSwitchProps {
	label?: string
}

export default function DarkModeSwitch() {
	const {
		settings: { darkMode },
		setSettings,
	} = useBoundStore()

	const handleDarkMode = () => {
		localStorage.setItem('darkMode', !darkMode ? 'true' : 'false')
		setSettings({ darkMode: !darkMode })
	}

	useEffect(() => {
		const darkMode = localStorage.getItem('darkMode') === 'true'
		setSettings({ darkMode })
	}, [setSettings])

	return (
		<Box
			id="dark-mode-switch-container"
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				gap: 1,
				mt: 1,
			}}
		>
			<Switch
				id="dark-mode-switch"
				checked={darkMode}
				onChange={handleDarkMode}
				inputProps={{ 'aria-label': 'dark mode switch' }}
				sx={{
					'& .MuiSwitch-track': {
						backgroundColor: darkMode ? 'primary.light' : 'primary.dark',
					},
					'& .MuiSwitch-thumb': {
						backgroundColor: darkMode ? 'primary.dark' : 'primary.light',
					},
				}}
				checkedIcon={<Brightness2Icon id="light-mode-icon" />}
				icon={<WbSunnyIcon id="dark-mode-icon" />}
			/>
			<Typography
				id="layout-dark-mode-switch-label"
				variant="body2"
				sx={{ fontWeight: 500, mb: 1, color: darkMode ? 'white' : 'black' }}
				aria-label="dark mode switch label"
			>
				{darkMode ? 'Dark' : 'Light'} Mode
			</Typography>
		</Box>
	)
}
