// Path: ./stories/pages/signup.stories.tsx
import { useEffect, useState } from 'react'
import { Story, Meta } from '@storybook/react'
import { ThemeProvider } from '@mui/material/styles'
import { SessionProvider } from 'next-auth/react'

import Signup, { SignupProps } from '../../pages/signup'

import { useBoundStore } from '../../store'
import { defaultTheme } from '../../theme'

const SignupStory = {
	title: 'Pages/Signup',
	component: Signup,
	args: {
		errorInit: '',
		emailInit: '',
		passwordInit: '',
		confirmPasswordInit: '',
		loadingInit: false,
		hydratedInit: true,
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
		confirmPasswordInit: {
			table: {
				disable: true,
			},
		},
		loadingInit: {
			table: {
				disable: true,
			},
		},
		hydratedInit: {
			table: {
				disable: true,
			},
		},
	},
} as Meta

export default SignupStory

const initialProps: SignupProps = {
	errorInit: '',
	emailInit: '',
	passwordInit: '',
	confirmPasswordInit: '',
	loadingInit: false,
}

const Template: Story<SignupProps> = (args, { globals: { theme } }) => {
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
		<SessionProvider session={null}>
			<ThemeProvider theme={customTheme}>
				<Signup {...args} />
			</ThemeProvider>
		</SessionProvider>
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
