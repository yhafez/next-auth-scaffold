// Path: ./stories/components/NavigationButton.stories.tsx
import { useEffect } from 'react'
import { Meta, Story } from '@storybook/react'

import { NavigationButton, Modal } from '../../components'
import { useBoundStore } from '../../store'

export default {
	title: 'Components/NavigationButton',
	component: NavigationButton,
	args: {
		name: 'navigation-button',
		label: 'Navigation Button',
		handleClick: () => {},
		width: 40,
	},
	argTypes: {
		name: {
			table: {
				disable: true,
			},
		},
		label: {
			control: {
				type: 'text',
			},
		},
		handleClick: {
			table: {
				disable: true,
			},
		},
		width: {
			control: {
				type: 'range',
				min: 0,
				max: 100,
			},
		},
	},
	decorators: [
		Story => (
			<Modal name="navigation-button-modal" loading={false} error="">
				<Story />
			</Modal>
		),
	],
} as Meta

export const Default: Story = (args, { globals: { theme } }) => {
	const { setDarkMode } = useBoundStore()

	useEffect(() => {
		setDarkMode(theme === 'dark' ? true : false)
	}, [theme])

	return (
		<NavigationButton
			name="navigation-button"
			label="Navigation Button"
			handleClick={() => {}}
			width={40}
			{...args}
		/>
	)
}
