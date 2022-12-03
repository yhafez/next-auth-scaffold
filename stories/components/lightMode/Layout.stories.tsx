// Path: ./stories/components/lightMode/Layout.stories.tsx
import { Meta, Story } from '@storybook/react'
import { Layout, LayoutProps } from '../../../components/Layout'

import { useBoundStore } from '../../../store'

const LayoutStory = {
	title: 'Components/Layout/LightMode',
	component: Layout,
} as Meta

export default LayoutStory

const Template: Story<LayoutProps> = args => {
	const {
		settings: { darkMode },
		setSettings,
	} = useBoundStore()

	if (darkMode) {
		setSettings({ darkMode: false })
	}

	return <Layout {...args} />
}

export const Default = Template.bind({})
Default.args = {
	children: <div>Children</div>,
}