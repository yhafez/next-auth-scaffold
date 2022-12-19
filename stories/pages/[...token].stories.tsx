// Path: ./stories/pages/[...token].stories.tsx
import { useState, useEffect } from 'react'
import { Meta, Story } from '@storybook/react'
import { ThemeProvider } from '@mui/material/styles'
import { SessionProvider } from 'next-auth/react'

import ResetPassword, { ResetPasswordProps } from '../../pages/reset-password/[id]/[token]'
import { useBoundStore } from '../../store'
import { defaultTheme } from '../../theme'

export default {
	title: 'Pages/ResetPassword',
	component: ResetPassword,
	args: {
		errorInit: '',
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

const initialProps: ResetPasswordProps = {
	errorInit: '',
	passwordInit: '',
	confirmPasswordInit: '',
	loadingInit: false,
}

const Template: Story<ResetPasswordProps> = (args, { globals: { theme } }) => {
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
				<ResetPassword {...args} />
			</ThemeProvider>
		</SessionProvider>
	)
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

export const WithAll = Template.bind({})
WithAll.args = {
	...initialProps,
	passwordInit: 'password',
	confirmPasswordInit: 'password',
	loadingInit: true,
}
