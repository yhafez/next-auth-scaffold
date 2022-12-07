// Path: ./stories/components/lightMode/ConfirmPasswordInput.stories.tsx
import { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import ConfirmPasswordInput, {
	ConfirmPasswordInputProps,
} from '../../../components/ConfirmPasswordInput'
import Modal from '../../../components/Modal'

import { useBoundStore } from '../../../store'

export default {
	title: 'Components/ConfirmPasswordInput/LightMode',
	component: ConfirmPasswordInput,
	decorators: [
		Story => (
			<Modal name="confirm-password-modal" loading={false} error="">
				<Story />
			</Modal>
		),
	],
} as Meta

const Template: Story<ConfirmPasswordInputProps> = args => {
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	const { darkMode, setDarkMode } = useBoundStore()

	if (darkMode) setDarkMode(false)

	return (
		<ConfirmPasswordInput
			{...args}
			password={password}
			setPassword={setPassword}
			confirmPassword={confirmPassword}
			setConfirmPassword={setConfirmPassword}
		/>
	)
}

const defaultArgs: ConfirmPasswordInputProps = {
	name: 'password',
	password: '',
	setPassword: () => {},
	confirmPassword: '',
	setConfirmPassword: () => {},
	disabled: false,
}

export const Default = Template.bind({})
Default.args = defaultArgs

export const Disabled = Template.bind({})
Disabled.args = {
	...defaultArgs,
	disabled: true,
}

export const WithPassword = Template.bind({})
WithPassword.args = {
	...defaultArgs,
	password: 'password',
}

export const WithConfirmPassword = Template.bind({})
WithConfirmPassword.args = {
	...defaultArgs,
	confirmPassword: 'password',
}

export const WithPasswordAndConfirmPassword = Template.bind({})
WithPasswordAndConfirmPassword.args = {
	...defaultArgs,
	password: 'password',
	confirmPassword: 'password',
}

export const WithPasswordAndConfirmPasswordMismatch = Template.bind({})
WithPasswordAndConfirmPasswordMismatch.args = {
	...defaultArgs,
	password: 'password',
	confirmPassword: 'password1',
}

export const WithPasswordAndConfirmPasswordMismatchAndDisabled = Template.bind({})
WithPasswordAndConfirmPasswordMismatchAndDisabled.args = {
	...defaultArgs,
	password: 'password',
	confirmPassword: 'password1',
	disabled: true,
}

export const WithPasswordAndConfirmPasswordAndDisabled = Template.bind({})
WithPasswordAndConfirmPasswordAndDisabled.args = {
	...defaultArgs,
	password: 'password',
	confirmPassword: 'password',
	disabled: true,
}

export const WithPasswordAndDisabled = Template.bind({})
WithPasswordAndDisabled.args = {
	...defaultArgs,
	password: 'password',
	disabled: true,
}

export const WithConfirmPasswordAndDisabled = Template.bind({})
WithConfirmPasswordAndDisabled.args = {
	...defaultArgs,
	confirmPassword: 'password',
	disabled: true,
}

export const WithAll = Template.bind({})
WithAll.args = {
	...defaultArgs,
	password: 'password',
	confirmPassword: 'password',
	disabled: true,
}
