// Path: ./stories/components/darkMode/Drawer.stories.tsx
import { useState } from 'react'
import { Meta, Story } from '@storybook/react'

import Drawer from '../../../components/Drawer'
import { useBoundStore } from '../../../store'
import { Box } from '@mui/material'

export default {
	title: 'Components/Drawer/DarkMode',
	component: Drawer,
} as Meta

const Template: Story = args => {
	const [open, setOpen] = useState(true)
	const { darkMode, setDarkMode } = useBoundStore()
	if (!darkMode) setDarkMode(true)

	return (
		<Drawer open={open} handleDrawerClose={() => setOpen(false)} {...args}>
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

export const Default = Template.bind({})
Default.args = {}
