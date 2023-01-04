// Path: ./stories/components/EditableTextField.stories.tsx
import { useState, useEffect } from 'react'
import { Story, Meta } from '@storybook/react'

import { EditableTextField, Modal } from '../../components'
import { useBoundStore } from '../../store'

export default {
	title: 'Components/EditableTextField',
	component: EditableTextField,
	args: {
		name: '',
		label: '',
		value: '',
		setValue: () => {},
		isPassword: false,
		autoComplete: 'off',
	},
	argTypes: {
		name: {
			table: {
				disable: true,
			},
		},
		label: {
			control: {
				type: 'text',
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
		isPassword: {
			control: {
				type: 'boolean',
			},
		},
		autoComplete: {
			table: {
				disable: true,
			},
		},
	},
	decorators: [
		Story => (
			<Modal name="editable-text-field-modal" loading={false} error="">
				<Story />
			</Modal>
		),
	],
} as Meta

export const Default: Story = (args, { globals: { theme } }) => {
	const [value, setValue] = useState('')

	return (
		<EditableTextField
			label="Editable Text Field"
			name="editable-text-field"
			{...args}
			value={value}
			setValue={setValue}
			isPassword={false}
			autoComplete="off"
		/>
	)
}
