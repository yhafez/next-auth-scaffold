// Path: ./stories/components/lightMode/PasswordInput.stories.tsx
import { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import PasswordInput, { PasswordInputProps } from '../../../components/PasswordInput'
import Modal from '../../../components/Modal'

import { useBoundStore } from '../../../store'

export default {
	title: 'Components/PasswordInput/LightMode',
	component: PasswordInput,
	decorators: [
		Story => (
			<Modal name="password-input-modal" loading={false} error="">
				<Story />
			</Modal>
		),
	],
} as Meta

const Template: Story<PasswordInputProps> = args => {
	const [value, setValue] = useState('')

	const {
		settings: { darkMode },
		setSettings,
	} = useBoundStore()

	if (darkMode) {
		setSettings({ darkMode: false })
	}

	return <PasswordInput {...args} value={value} setValue={setValue} />
}

const defaultArgs: PasswordInputProps = {
	name: 'password-input',
	value: '',
	setValue: () => {},
	disabled: false,
	isConfirmPassword: false,
}

export const Default = Template.bind({})
Default.args = defaultArgs

export const Disabled = Template.bind({})
Disabled.args = {
	...defaultArgs,
	disabled: true,
}

export const ConfirmPassword = Template.bind({})
ConfirmPassword.args = {
	...defaultArgs,
	isConfirmPassword: true,
}

export const ConfirmPasswordDisabled = Template.bind({})
ConfirmPasswordDisabled.args = {
	...defaultArgs,
	isConfirmPassword: true,
	disabled: true,
}
