// Path: ./stories/components/lightMode/Modal.stories.tsx
import { Meta, Story } from '@storybook/react'
import Modal, { ModalProps } from '../../../components/Modal'

import { useBoundStore } from '../../../store'

export default {
	title: 'Components/Modal/LightMode',
	component: Modal,
} as Meta

const Template: Story<ModalProps> = args => {
	const {
		settings: { darkMode },
		setSettings,
	} = useBoundStore()

	if (darkMode) {
		setSettings({ darkMode: false })
	}

	return <Modal {...args} />
}

const defaultArgs: ModalProps = {
	children: <div>Modal Content</div>,
	name: 'modal',
	loading: false,
	error: '',
	small: false,
}

export const Default = Template.bind({})
Default.args = defaultArgs

export const Loading = Template.bind({})
Loading.args = {
	...defaultArgs,
	loading: true,
}

export const Error = Template.bind({})
Error.args = {
	...defaultArgs,
	error: 'Error Message',
}

export const Small = Template.bind({})
Small.args = {
	...defaultArgs,
	small: true,
}

export const SmallLoading = Template.bind({})
SmallLoading.args = {
	...defaultArgs,
	small: true,
	loading: true,
}

export const SmallError = Template.bind({})
SmallError.args = {
	...defaultArgs,
	small: true,
	error: 'Error Message',
}

export const All = Template.bind({})
All.args = {
	...defaultArgs,
	loading: true,
	error: 'Error Message',
	small: true,
}
