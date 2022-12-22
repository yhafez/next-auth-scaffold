// Path: ./stories/components/SubmitButton.stories.tsx
import { useEffect } from 'react'
import { Meta, Story } from '@storybook/react'

import { SubmitButton, Modal } from '../../components'
import { useBoundStore } from '../../store'

export default {
	title: 'Components/SubmitButton',
	component: SubmitButton,
	args: {
		name: 'submit-button',
		label: 'Submit Button',
		handleSubmit: () => {},
		loading: false,
		width: 40,
		disabled: false,
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
		handleSubmit: {
			table: {
				disable: true,
			},
		},
		loading: {
			control: {
				type: 'boolean',
			},
		},
		width: {
			control: {
				type: 'range',
				min: 0,
				max: 100,
			},
		},
		disabled: {
			control: {
				type: 'boolean',
			},
		},
	},
	decorators: [
		Story => (
			<Modal name="submit-button-modal" loading={false} error="">
				<Story />
			</Modal>
		),
	],
} as Meta

export const Default: Story = (args, { globals: { theme } }) => {
	const { setDarkMode } = useBoundStore()

	useEffect(() => {
		setDarkMode(theme === 'dark' ? true : false)
	}, [theme])

	return (
		<SubmitButton
			name="submit-button"
			label="Submit Button"
			handleSubmit={() => {}}
			loading={false}
			width={40}
			disabled={false}
			{...args}
		/>
	)
}
