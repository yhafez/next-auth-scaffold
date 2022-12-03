// Path: ./stories/components/darkMode/VisibilityIcon.stories.tsx

import { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import VisibilityIcon, { VisibilityIconProps } from '../../../components/VisibilityIcon'
import Modal from '../../../components/Modal'

import { useBoundStore } from '../../../store'

export default {
	title: 'Components/VisibilityIcon/DarkMode',
	component: VisibilityIcon,
	decorators: [
		Story => (
			<Modal name="visibility-icon-modal" loading={false} error="">
				<Story />
			</Modal>
		),
	],
} as Meta

const Template: Story<VisibilityIconProps> = args => {
	const [value, setValue] = useState('')

	const {
		settings: { darkMode },
		setSettings,
	} = useBoundStore()

	if (!darkMode) {
		setSettings({ darkMode: true })
	}

	return <VisibilityIcon {...args} value={value} setValue={setValue} />
}

const defaultArgs: VisibilityIconProps = {
	name: 'visibility-icon',
	showPassword: false,
	hover: false,
	isConfirmPassword: false,
}

export const Default = Template.bind({})
Default.args = defaultArgs

export const ShowPassword = Template.bind({})
ShowPassword.args = {
	...defaultArgs,
	showPassword: true,
}

export const Hover = Template.bind({})
Hover.args = {
	...defaultArgs,
	hover: true,
}

export const ConfirmPassword = Template.bind({})
ConfirmPassword.args = {
	...defaultArgs,
	isConfirmPassword: true,
}

export const ConfirmPasswordShowPassword = Template.bind({})
ConfirmPasswordShowPassword.args = {
	...defaultArgs,
	showPassword: true,
	isConfirmPassword: true,
}

export const ConfirmPasswordHover = Template.bind({})
ConfirmPasswordHover.args = {
	...defaultArgs,
	hover: true,
	isConfirmPassword: true,
}

export const ConfirmPasswordShowPasswordHover = Template.bind({})
ConfirmPasswordShowPasswordHover.args = {
	...defaultArgs,
	showPassword: true,
	hover: true,
	isConfirmPassword: true,
}