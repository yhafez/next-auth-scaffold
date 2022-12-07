// Path: ./stories/components/darkMode/Drawer.stories.tsx

import { Drawer } from '@mui/material'
import { Meta, Story } from '@storybook/react'
import { Menu } from '@mui/icons-material'

import Layout from '../../../components/Modal'
import DrawerButton from '../../../components/DrawerButton'

import { useBoundStore } from '../../../store'

export default {
	title: 'Components/Drawer/DarkMode',
	component: Drawer,
	decorators: [
		Story => (
			<Layout name="drawer-modal" loading={false} error="">
				<Drawer
					anchor="left"
					variant="permanent"
					sx={{
						width: 240,
					}}
					open={true}
					onClose={() => {}}
				>
					<Story />
				</Drawer>
			</Layout>
		),
	],
} as Meta

const Template: Story = args => {
	const { darkMode, setDarkMode } = useBoundStore()

	if (!darkMode) setDarkMode(true)

	return <DrawerButton name="test" label="test" icon={<Menu />} handleClick={() => {}} {...args} />
}

export const Default = Template.bind({})
Default.args = {}
