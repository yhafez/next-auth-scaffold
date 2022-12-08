// Path: ./stories/components/darkMode/SubmitButton.stories.tsx
import { Meta, Story } from '@storybook/react'
import SubmitButton, { SubmitButtonProps } from '../../../components/SubmitButton'
import Modal from '../../../components/Modal'

import { useBoundStore } from '../../../store'

export default {
	title: 'Components/SubmitButton/DarkMode',
	component: SubmitButton,
	decorators: [
		Story => (
			<Modal name="submit-button-modal" loading={false} error="">
				<Story />
			</Modal>
		),
	],
} as Meta

const Template: Story<SubmitButtonProps> = args => {
	const { darkMode, setDarkMode } = useBoundStore()

	if (!darkMode) setDarkMode(true)

	return <SubmitButton {...args} />
}

const defaultArgs: SubmitButtonProps = {
	name: 'submit-button',
	label: 'Submit Button',
	loading: false,
	handleSubmit: () => {},
	width: '40%',
}

export const Small = Template.bind({})
Small.args = {
	...defaultArgs,
	label: 'sub',
	width: '20%',
}

export const Default = Template.bind({})
Default.args = defaultArgs

export const Large = Template.bind({})
Large.args = {
	...defaultArgs,
	width: '60%',
}

export const Loading = Template.bind({})
Loading.args = {
	...defaultArgs,
	loading: true,
}
