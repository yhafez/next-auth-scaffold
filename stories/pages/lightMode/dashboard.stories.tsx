// Path: ./stories/pages/lightMode/index.stories.tsx
import { Meta } from '@storybook/react'

import Dashboard from '../../../pages'

import { useBoundStore } from '../../../store'

const DashboardStory = {
	title: 'Pages/Dashboard/LightMode',
	component: Dashboard,
} as Meta

export default DashboardStory

export const Default = () => {
	const { darkMode, setDarkMode } = useBoundStore()

	if (darkMode) setDarkMode(false)

	return <Dashboard />
}

Default.parameters = {
	nextRouter: {
		pathname: '/',
	},
}
