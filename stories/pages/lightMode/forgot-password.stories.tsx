// Path: ./stories/pages/lightMode/forgot-password.stories.tsx
import { Story, Meta } from '@storybook/react'

import ForgotPassword, { ForgotPasswordProps } from '../../../pages/forgot-password'

import { useBoundStore } from '../../../store'

const ForgotPasswordStory = {
	title: 'Pages/ForgotPassword/LightMode',
	component: ForgotPassword,
} as Meta

export default ForgotPasswordStory

const initialProps: ForgotPasswordProps = {
	errorInit: '',
	emailInit: '',
	loadingInit: false,
}

const Template: Story<ForgotPasswordProps> = args => {
	const { darkMode, setDarkMode } = useBoundStore()

	if (darkMode) setDarkMode(false)

	return <ForgotPassword {...args} />
}

export const Default = Template.bind({})
Default.args = {
	...initialProps,
}

export const WithError = Template.bind({})
WithError.args = {
	...initialProps,
	errorInit: 'Invalid email or password',
}

export const WithEmail = Template.bind({})
WithEmail.args = {
	...initialProps,
	emailInit: 'test@example.com',
}

export const WithLoading = Template.bind({})
WithLoading.args = {
	...initialProps,
	loadingInit: true,
}

export const WithAll = Template.bind({})
WithAll.args = {
	...initialProps,
	errorInit: 'Invalid email or password',
	emailInit: 'test@example.com',
	loadingInit: true,
}
