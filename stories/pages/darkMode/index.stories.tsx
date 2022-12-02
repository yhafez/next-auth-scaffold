// Path: ./stories/pages/darkMode/index.stories.tsx
import { Meta } from '@storybook/react'

import Dashboard from '../../../pages'

import { useBoundStore } from '../../../store'

const DashboardStory = {
	title: 'Pages/Dashboard/DarkMode',
	component: Dashboard,
} as Meta

export default DashboardStory

export const Default = () => {
	const {
		settings: { darkMode },
		setSettings,
	} = useBoundStore()

	if (!darkMode) {
		setSettings({ darkMode: true })
	}

	return <Dashboard />
}

Default.parameters = {
	nextRouter: {
		pathname: '/',
	},
}
