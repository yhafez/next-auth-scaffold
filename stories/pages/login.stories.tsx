// Path: ./stories/pages/login.stories.tsx
import { useEffect, useState } from 'react'
import { Story, Meta } from '@storybook/react'
import { ThemeProvider } from '@mui/material'

import Login, { LoginProps } from '../../pages/login'

import { useBoundStore } from '../../store'
import { defaultTheme } from '../../theme'

const LoginStory = {
	title: 'Pages/Login',
	component: Login,
	args: {
		errorInit: '',
		emailInit: '',
		passwordInit: '',
		rememberInit: true,
		loadingInit: false,
	},
	argTypes: {
		errorInit: {
			table: {
				disable: true,
			},
		},
		emailInit: {
			table: {
				disable: true,
			},
		},
		passwordInit: {
			table: {
				disable: true,
			},
		},
		rememberInit: {
			table: {
				disable: true,
			},
		},
		loadingInit: {
			table: {
				disable: true,
			},
		},
	},
} as Meta

export default LoginStory

const initialProps: LoginProps = {
	errorInit: '',
	emailInit: '',
	passwordInit: '',
	rememberInit: true,
	loadingInit: false,
}

const Template: Story<LoginProps> = (args, { globals: { theme } }) => {
	const { setDarkMode, customPalette } = useBoundStore()
	const [customTheme, setCustomTheme] = useState(defaultTheme)

	useEffect(() => {
		setDarkMode(theme === 'dark' ? true : false)
	}, [theme])

	useEffect(() => {
		setCustomTheme({
			...defaultTheme,
			palette: {
				...defaultTheme.palette,
				primary: {
					...defaultTheme.palette.primary,
					...customPalette.primary,
				},
				secondary: {
					...defaultTheme.palette.secondary,
					...customPalette.secondary,
				},
			},
		})
	}, [customPalette])

	return (
		<ThemeProvider theme={customTheme}>
			<Login {...args} />
		</ThemeProvider>
	)
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
