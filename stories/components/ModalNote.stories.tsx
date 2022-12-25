// Path: ./stories/components/ModalNote.stories.tsx
import { useEffect } from 'react'
import { Meta, Story } from '@storybook/react'

import { Modal, ModalNote } from '../../components'
import { useBoundStore } from '../../store'

export default {
	title: 'Components/ModalNote',
	component: ModalNote,
	args: {
		name: 'modal-note',
		label: 'test',
		href: '',
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
		href: {
			table: {
				disable: true,
			},
		},
	},
	decorators: [
		Story => (
			<Modal name="modal-note" loading={false} error="">
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

	return <ModalNote name="modal-note" label="test" href="" {...args} />
}
