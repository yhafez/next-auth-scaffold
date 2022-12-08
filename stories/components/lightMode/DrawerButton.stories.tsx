// Path: ./stories/components/lightMode/DrawerButton.stories.tsx
import { useState } from 'react'
import { Meta, Story } from '@storybook/react'
import Menu from '@mui/icons-material/Menu'

import Drawer from '../../../components/Drawer'
import DrawerButton from '../../../components/DrawerButton'

import { useBoundStore } from '../../../store'

export default {
	title: 'Components/DrawerButton/LightMode',
	component: Drawer,
} as Meta

const Template: Story = args => {
	const [open, setOpen] = useState(true)
	const { darkMode, setDarkMode } = useBoundStore()
	if (darkMode) setDarkMode(false)

	return (
		<Drawer open={open} handleDrawerClose={() => setOpen(false)} {...args}>
			<DrawerButton name="test" label="Test" icon={<Menu />} handleClick={() => {}} />
		</Drawer>
	)
}

export const Default = Template.bind({})
Default.args = {}
