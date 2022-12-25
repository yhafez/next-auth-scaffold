// Path: ./stories/components/Modal.stories.tsx
import { useEffect } from 'react'
import { Meta, Story } from '@storybook/react'

import { Modal } from '../../components'
import { useBoundStore } from '../../store'

export default {
	title: 'Components/Modal',
	component: Modal,
	args: {
		children: <div>Modal Content</div>,
		name: 'modal',
		loading: false,
		error: '',
		small: false,
	},
	argTypes: {
		children: {
			table: {
				disable: true,
			},
		},
		name: {
			table: {
				disable: true,
			},
		},
		loading: {
			control: {
				type: 'boolean',
			},
		},
		error: {
			control: {
				type: 'text',
			},
		},
		small: {
			control: {
				type: 'boolean',
			},
		},
	},
} as Meta

export const Default: Story = (args, { globals: { theme } }) => {
	const { darkMode, setDarkMode } = useBoundStore()

	useEffect(() => {
		setDarkMode(theme === 'dark' ? true : false)
	}, [theme])

	return (
		<Modal name="test" loading={false} error="" {...args}>
			<div
				style={{
					width: '100%',
					height: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					color: darkMode ? 'white' : 'black',
				}}
			>
				Modal Content
			</div>
		</Modal>
	)
}
