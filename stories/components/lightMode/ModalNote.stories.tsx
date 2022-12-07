// Path: ./stories/components/lightMode/ModalNote.stories.tsx
import { Meta, Story } from '@storybook/react'
import Modal, { ModalProps } from '../../../components/Modal'

import ModalNote from '../../../components/ModalNote'

import { useBoundStore } from '../../../store'

export default {
	title: 'Components/ModalNote/LightMode',
	component: ModalNote,
	decorators: [
		Story => (
			<Modal name="modal-note" loading={false} error="">
				<Story />
			</Modal>
		),
	],
} as Meta

const Template: Story<ModalProps> = args => {
	const { darkMode, setDarkMode } = useBoundStore()

	if (darkMode) setDarkMode(false)

	return <ModalNote label="test" href="" {...args} />
}

export const Default = Template.bind({})
Default.args = {}
