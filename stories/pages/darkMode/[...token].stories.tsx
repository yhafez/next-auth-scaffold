// Path: ./stories/pages/darkMode/[...token].stories.tsx

import { Meta, Story } from '@storybook/react'

import ResetPassword, { ResetPasswordProps } from '../../../pages/reset-password/[id]/[token]'
import { useBoundStore } from '../../../store'

const ResetPasswordStory = {
	title: 'Pages/ResetPassword/DarkMode',
	component: ResetPassword,
} as Meta

export default ResetPasswordStory

const initialProps: ResetPasswordProps = {
	errorInit: '',
	passwordInit: '',
	confirmPasswordInit: '',
	loadingInit: false,
	emailInit: '',
}

const Template: Story<ResetPasswordProps> = args => {
	const { darkMode, setDarkMode } = useBoundStore()

	if (!darkMode) setDarkMode(true)

	return <ResetPassword {...args} />
}

export const Default = Template.bind({})
Default.args = initialProps

export const WithError = Template.bind({})
WithError.args = {
	...initialProps,
	errorInit: 'Invalid email or password',
}

export const WithLoading = Template.bind({})
WithLoading.args = {
	...initialProps,
	loadingInit: true,
}

export const WithPassword = Template.bind({})
WithPassword.args = {
	...initialProps,
	passwordInit: 'password',
}

export const WithPasswordAndConfirmPassword = Template.bind({})
WithPasswordAndConfirmPassword.args = {
	...initialProps,
	passwordInit: 'password',
	confirmPasswordInit: 'password',
}

export const WithEmail = Template.bind({})
WithEmail.args = {
	...initialProps,
	emailInit: 'test@example.com',
}

export const WithAll = Template.bind({})
WithAll.args = {
	...initialProps,
	emailInit: 'test@example.com',
	passwordInit: 'password',
	confirmPasswordInit: 'password',
	loadingInit: true,
}
