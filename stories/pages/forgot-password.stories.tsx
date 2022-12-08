// Path: ./stories/pages/forgot-password.stories.tsx
import { useEffect, useState } from 'react'
import { ThemeProvider } from '@mui/material'
import { Story, Meta } from '@storybook/react'

import ForgotPassword, { ForgotPasswordProps } from '../../pages/forgot-password'

import { useBoundStore } from '../../store'
import { defaultTheme } from '../../theme'

const ForgotPasswordStory = {
	title: 'Pages/ForgotPassword',
	component: ForgotPassword,
	args: {
		errorInit: '',
		emailInit: '',
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
		loadingInit: {
			table: {
				disable: true,
			},
		},
	},
} as Meta

export default ForgotPasswordStory

const initialProps: ForgotPasswordProps = {
	errorInit: '',
	emailInit: '',
	loadingInit: false,
}

const Template: Story<ForgotPasswordProps> = (args, { globals: { theme } }) => {
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
			<ForgotPassword {...args} />
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
