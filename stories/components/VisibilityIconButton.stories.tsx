// Path: ./stories/components/VisibilityIconButton.stories.tsx
import { useState, useEffect } from 'react'
import { Story, Meta } from '@storybook/react'

import { VisibilityIconButton, Modal } from '../../components'
import { useBoundStore } from '../../store'

export default {
	title: 'Components/VisibilityIconButton',
	component: VisibilityIconButton,
	args: {
		name: 'visibility-icon-button',
		showPassword: false,
		setShowPassword: () => {},
		disabled: false,
		isConfirmPassword: false,
	},
	argTypes: {
		name: {
			table: {
				disable: true,
			},
		},
		showPassword: {
			control: {
				type: 'boolean',
			},
		},
		setShowPassword: {
			table: {
				disable: true,
			},
		},
		disabled: {
			control: {
				type: 'boolean',
			},
		},
		isConfirmPassword: {
			table: {
				disable: true,
			},
		},
	},
	decorators: [
		Story => (
			<Modal name="visibility-icon-modal" loading={false} error="">
				<Story />
			</Modal>
		),
	],
} as Meta

export const Default: Story = (args, { globals: { theme } }) => {
	const { setDarkMode } = useBoundStore()
	const [showPassword, setShowPassword] = useState(false)

	useEffect(() => {
		setDarkMode(theme === 'dark' ? true : false)
	}, [theme])

	useEffect(() => {
		setShowPassword(args.showPassword)
	}, [args.showPassword])

	return (
		<VisibilityIconButton
			name="visibility-icon"
			disabled={false}
			isConfirmPassword={false}
			{...args}
			showPassword={showPassword}
			setShowPassword={setShowPassword}
		/>
	)
}
