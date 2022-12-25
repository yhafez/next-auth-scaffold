// Path: ./stories/components/PasswordInput.stories.tsx
import { useState, useEffect } from 'react'
import { Story, Meta } from '@storybook/react'

import { PasswordInput, Modal } from '../../components'
import { useBoundStore } from '../../store'

export default {
	title: 'Components/PasswordInput',
	component: PasswordInput,
	args: {
		name: 'password-input',
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
			<Modal name="password-input-modal" loading={false} error="">
				<Story />
			</Modal>
		),
	],
} as Meta

export const Default: Story = (args, { globals: { theme } }) => {
	const [value, setValue] = useState('')

	const { setDarkMode } = useBoundStore()

	useEffect(() => {
		setDarkMode(theme === 'dark' ? true : false)
	}, [theme])

	useEffect(() => {
		setValue(args.value)
	}, [args.value])

	return (
		<PasswordInput
			name="password-input"
			disabled={false}
			{...args}
			value={value}
			setValue={setValue}
		/>
	)
}
