// Path: ./stories/components/lightMode/DarkModeSwitch.stories.tsx

import { Meta, Story } from '@storybook/react'
import DarkModeSwitch from '../../../components/DarkModeSwitch'
import Modal from '../../../components/Modal'

import { useBoundStore } from '../../../store'

export default {
	title: 'Components/DarkModeSwitch/LightMode',
	component: DarkModeSwitch,
	decorators: [
		Story => (
			<Modal name="confirm-password-modal" loading={false} error="">
				<Story />
			</Modal>
		),
	],
} as Meta

const Template: Story = args => {
	const { darkMode, setDarkMode } = useBoundStore()

	if (darkMode) setDarkMode(false)

	return <DarkModeSwitch {...args} />
}

export const Default = Template.bind({})
Default.args = {}
