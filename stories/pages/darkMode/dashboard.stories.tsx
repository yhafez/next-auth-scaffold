// Path: ./stories/pages/darkMode/index.stories.tsx
import { Meta } from '@storybook/react'

import Dashboard from '../../../pages'
import { SessionProvider } from 'next-auth/react'

import { useBoundStore } from '../../../store'

const DashboardStory = {
	title: 'Pages/Dashboard/DarkMode',
	component: Dashboard,
	decorators: [
		Story => {
			const { darkMode, setDarkMode } = useBoundStore()

			if (!darkMode) setDarkMode(true)

			return <Story />
		},
		Story => {
			return (
				<SessionProvider
					session={{
						user: {
							firstName: 'John',
							lastName: 'Doe',
							email: 'test@example.com',
						},
						expires: '1',
					}}
				>
					<Story />
				</SessionProvider>
			)
		},
	],
} as Meta

export default DashboardStory

export const Default = () => <Dashboard />

Default.parameters = {
	nextRouter: {
		pathname: '/',
	},
}
