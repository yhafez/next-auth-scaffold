// Path: ./stories/components/DrawerButton.stories.tsx
import { useState, useEffect } from 'react'
import { Meta, Story } from '@storybook/react'
import { Menu } from '@mui/icons-material'

import { Drawer, DrawerButton } from '../../components'
import { useBoundStore } from '../../store'

export default {
	title: 'Components/DrawerButton',
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
			<DrawerButton
				name="test"
				label="Test"
				icon={<Menu id="test-menu-icon" role="img" aria-hidden="true" />}
				handleClick={() => {}}
			/>
		</Drawer>
	)
}
