// Path: ./stories/pages/darkMode/signup.stories.tsx
import { Story, Meta } from '@storybook/react'

import Signup, { SignupProps } from '../../../pages/signup'

import { useBoundStore } from '../../../store'

const SignupStory = {
	title: 'Pages/Signup/DarkMode',
	component: Signup,
} as Meta

export default SignupStory

const initialProps: SignupProps = {
	errorInit: '',
	emailInit: '',
	passwordInit: '',
	confirmPasswordInit: '',
	loadingInit: false,
}

const Template: Story<SignupProps> = args => {
	const { darkMode, setDarkMode } = useBoundStore()

	if (!darkMode) setDarkMode(true)

	return <Signup {...args} />
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

export const WithPasswordHidden = Template.bind({})
WithPasswordHidden.args = {
	...initialProps,
	passwordInit: 'password',
}

export const WithConfirmPasswordHidden = Template.bind({})
WithConfirmPasswordHidden.args = {
	...initialProps,
	confirmPasswordInit: 'password',
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
	passwordInit: 'password',
	confirmPasswordInit: 'password',
	loadingInit: true,
}
