// Path: ./stories/components/DarkModeSwitch.stories.tsx
import { useEffect } from 'react'
import { Meta, Story } from '@storybook/react'

import { DarkModeSwitch, Modal } from '../../components'

import { useBoundStore } from '../../store'

export default {
	title: 'Components/DarkModeSwitch',
	component: DarkModeSwitch,
	decorators: [
		Story => (
			<Modal name="dark-mode-switch-modal" loading={false} error="">
				<Story />
			</Modal>
		),
	],
	args: {
		name: 'dark-mode-switch',
	},
	argTypes: {
		name: {
			table: {
				disable: true,
			},
		},
	},
} as Meta

export const Default: Story = (args, { globals: { theme } }) => {
	const { setDarkMode } = useBoundStore()
	useEffect(() => {
		setDarkMode(theme === 'dark' ? true : false)
	}, [theme])

	return <DarkModeSwitch name="test" {...args} />
}
