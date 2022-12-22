// Path: ./stories/components/EmailInput.stories.tsx
import { useState, useEffect } from 'react'
import { Story, Meta } from '@storybook/react'

import { EmailInput, Modal } from '../../components'
import { useBoundStore } from '../../store'

export default {
	title: 'Components/EmailInput',
	component: EmailInput,
	args: {
		name: 'email-input',
		value: '',
		setValue: () => {},
		disabled: false,
		handleEnter: () => {},
	},
	argTypes: {
		name: {
			table: {
				disable: true,
			},
		},
		value: {
			control: {
				type: 'text',
			},
		},
		setValue: {
			table: {
				disable: true,
			},
		},
		disabled: {
			control: {
				type: 'boolean',
			},
		},
		handleEnter: {
			table: {
				disable: true,
			},
		},
	},
	decorators: [
		Story => (
			<Modal name="email-input-modal" loading={false} error="">
				<Story />
			</Modal>
		),
	],
} as Meta

export const Default: Story = (args, { globals: { theme } }) => {
	const [email, setEmail] = useState('')
	const { setDarkMode } = useBoundStore()
	useEffect(() => {
		setDarkMode(theme === 'dark' ? true : false)
	}, [theme])

	useEffect(() => {
		setEmail(args.value)
	}, [args.value])

	return <EmailInput name="test" {...args} value={email} setValue={setEmail} />
}
