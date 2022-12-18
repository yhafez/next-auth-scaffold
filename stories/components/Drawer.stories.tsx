// Path: ./stories/components/Drawer.stories.tsx
import { useState, useEffect } from 'react'
import { Meta, Story } from '@storybook/react'

import Drawer from '../../components/Drawer'
import { useBoundStore } from '../../store'
import { Box } from '@mui/material'

export default {
	title: 'Components/Drawer',
	component: Drawer,
	args: {
		open: true,
		handleDrawerClose: () => {},
	},
	argTypes: {
		open: {
			control: {
				type: 'boolean',
			},
		},
		handleDrawerClose: {
			table: {
				disable: true,
			},
		},
	},
} as Meta

export const Default: Story = (args, { globals: { theme } }) => {
	const [open, setOpen] = useState(true)
	const { setDarkMode } = useBoundStore()
	useEffect(() => {
		setDarkMode(theme === 'dark' ? true : false)
	}, [theme])

	useEffect(() => {
		setOpen(args.open)
	}, [args.open])

	return (
		<Drawer {...args} open={open} handleDrawerClose={() => setOpen(false)}>
			<Box
				sx={{
					width: '100%',
					height: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					fontSize: '3rem',
					fontWeight: 'bold',
				}}
			>
				Test
			</Box>
		</Drawer>
	)
}