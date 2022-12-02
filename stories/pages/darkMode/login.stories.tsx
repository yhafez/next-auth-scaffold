// Path: ./stories/pages/darkMode/login.stories.tsx
import { Story, Meta } from '@storybook/react'

import Login, { LoginProps } from '../../../pages/login'

import { useBoundStore } from '../../../store'

const LoginStory = {
	title: 'Pages/Login/DarkMode',
	component: Login,
} as Meta

export default LoginStory

const initialProps: LoginProps = {
	errorInit: '',
	emailInit: '',
	passwordInit: '',
	rememberInit: true,
	loadingInit: false,
}

const Template: Story<LoginProps> = args => {
	const {
		settings: { darkMode },
		setSettings,
	} = useBoundStore()

	if (!darkMode) {
		setSettings({ darkMode: true })
	}

	return <Login {...args} />
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

export const WithPassword = Template.bind({})
WithPassword.args = {
	...initialProps,
	passwordInit: 'password',
}

export const WithoutRemember = Template.bind({})
WithoutRemember.args = {
	...initialProps,
	rememberInit: false,
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
	emailInit: 'email@example.com',
	passwordInit: 'password',
	rememberInit: false,
	loadingInit: true,
}
