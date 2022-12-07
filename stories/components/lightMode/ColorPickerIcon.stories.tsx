// Path: ./stories/components/lightMode/ColorPickerIcon.stories.tsx

import { Meta, Story } from '@storybook/react'
import ColorPickerIcon from '../../../components/ColorPickerIcon'
import Modal from '../../../components/Modal'

import { useBoundStore } from '../../../store'

export default {
	title: 'Components/ColorPickerIcon/LightMode',
	component: ColorPickerIcon,
	decorators: [
		Story => (
			<Modal name="color-picker-icon-modal" loading={false} error="">
				<Story />
			</Modal>
		),
	],
} as Meta

const Template: Story = args => {
	const { darkMode, setDarkMode } = useBoundStore()

	if (darkMode) setDarkMode(false)

	return <ColorPickerIcon name="test" {...args} />
}

export const Default = Template.bind({})
Default.args = {}
