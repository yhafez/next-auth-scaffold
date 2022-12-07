// Path: ./stories/components/darkMode/Drawer.stories.tsx
import { useState } from 'react'
import { Meta, Story } from '@storybook/react'
import Drawer from '../../../components/Drawer'
import Layout from '../../../components/Modal'

import { useBoundStore } from '../../../store'

export default {
	title: 'Components/Drawer/DarkMode',
	component: Drawer,
	decorators: [
		Story => (
			<Layout name="drawer-modal" loading={false} error="">
				<Story />
			</Layout>
		),
	],
} as Meta

const Template: Story = args => {
	const [open, setOpen] = useState(true)

	const { darkMode, setDarkMode } = useBoundStore()

	if (!darkMode) setDarkMode(true)

	return <Drawer open={open} handleDrawerClose={() => setOpen(false)} drawerWidth={240} {...args} />
}

export const Default = Template.bind({})
Default.args = {}
