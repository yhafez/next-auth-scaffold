// Path: ./stories/components/Layout.stories.tsx
import { useState, useEffect } from 'react'
import { Meta, Story } from '@storybook/react'
import { ThemeProvider } from '@mui/material/styles'

import { Layout } from '../../components'

import { defaultTheme } from '../../theme'
import { useBoundStore } from '../../store'

const LayoutStory = {
	title: 'Components/Layout',
	component: Layout,
	args: {
		name: 'layout',
		drawerChildren: null,
	},
	argTypes: {
		name: {
			table: {
				disable: true,
			},
		},
		drawerChildren: {
			table: {
				disable: true,
			},
		},
	},
} as Meta

export default LayoutStory

export const WithoutDrawer: Story = (args, { globals: { theme } }) => {
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
			<Layout {...args} pageTitle="test" name="test" drawerChildren={null}>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						width: '100vw',
					}}
				>
					Children
				</div>
			</Layout>
		</ThemeProvider>
	)
}

export const WithDrawer: Story = (args, { globals: { theme } }) => {
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
			<Layout {...args} pageTitle="test" name="test" drawerChildren={<></>}>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						width: '100%',
						height: 'calc(100% - 64px)',
						overflowY: 'hidden',
					}}
				>
					Children
				</div>
			</Layout>
		</ThemeProvider>
	)
}
