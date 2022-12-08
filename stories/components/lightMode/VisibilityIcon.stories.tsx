// Path: ./stories/components/lightMode/VisibilityIcon.stories.tsx
import { Story, Meta } from '@storybook/react'
import VisibilityIcon, { VisibilityIconProps } from '../../../components/VisibilityIcon'
import Modal from '../../../components/Modal'

import { useBoundStore } from '../../../store'

export default {
	title: 'Components/VisibilityIcon/LightMode',
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
	const { darkMode, setDarkMode } = useBoundStore()

	if (darkMode) setDarkMode(false)

	return <VisibilityIcon {...args} />
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
