// Path: ./stories/components/darkMode/EmailInput.stories.tsx

import { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import EmailInput, { EmailInputProps } from '../../../components/EmailInput'
import Modal from '../../../components/Modal'

import { useBoundStore } from '../../../store'

export default {
	title: 'Components/EmailInput/DarkMode',
	component: EmailInput,
	decorators: [
		Story => (
			<Modal name="email-input-modal" loading={false} error="">
				<Story />
			</Modal>
		),
	],
} as Meta

const Template: Story<EmailInputProps> = args => {
	const [email, setEmail] = useState('')

	const {
		settings: { darkMode },
		setSettings,
	} = useBoundStore()

	if (!darkMode) {
		setSettings({ darkMode: true })
	}

	return <EmailInput {...args} value={email} setValue={setEmail} />
}

const defaultArgs: EmailInputProps = {
	name: 'email',
	value: '',
	setValue: () => {},
	disabled: false,
}

export const Default = Template.bind({})
Default.args = defaultArgs

export const Disabled = Template.bind({})
Disabled.args = {
	...defaultArgs,
	disabled: true,
}
