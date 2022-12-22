// Path: ./stories/components/ConfirmPasswordInput.stories.tsx
import { useState, useEffect } from 'react'
import { Story, Meta } from '@storybook/react'

import { ConfirmPasswordInput, Modal } from '../../components'

import { useBoundStore } from '../../store'

export default {
	title: 'Components/ConfirmPasswordInput',
	component: ConfirmPasswordInput,
	args: {
		name: 'password',
		password: '',
		setPassword: () => {},
		confirmPassword: '',
		setConfirmPassword: () => {},
		disabled: false,
		handleEnter: () => {},
	},
	argTypes: {
		name: {
			table: {
				disable: true,
			},
		},
		password: {
			table: {
				disable: true,
			},
		},
		setPassword: {
			table: {
				disable: true,
			},
		},
		confirmPassword: {
			table: {
				disable: true,
			},
		},
		setConfirmPassword: {
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
			<Modal name="confirm-password-modal" loading={false} error="">
				<Story />
			</Modal>
		),
	],
} as Meta

export const Default: Story = (args, { globals: { theme } }) => {
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	const { setDarkMode } = useBoundStore()

	useEffect(() => {
		setDarkMode(theme === 'dark' ? true : false)
	}, [theme])

	return (
		<ConfirmPasswordInput
			{...args}
			name="test"
			password={password}
			setPassword={setPassword}
			confirmPassword={confirmPassword}
			setConfirmPassword={setConfirmPassword}
		/>
	)
}
