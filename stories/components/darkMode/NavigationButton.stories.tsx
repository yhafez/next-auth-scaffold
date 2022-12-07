// Path: ./stories/components/darkMode/NavigationButton.stories.tsx
import { Meta, Story } from '@storybook/react'
import NavigationButton, { NavigationButtonProps } from '../../../components/NavigationButton'
import Modal from '../../../components/Modal'

import { useBoundStore } from '../../../store'

export default {
	title: 'Components/NavigationButton/DarkMode',
	component: NavigationButton,
	decorators: [
		Story => (
			<Modal name="navigation-button-modal" loading={false} error="">
				<Story />
			</Modal>
		),
	],
} as Meta

const Template: Story<NavigationButtonProps> = args => {
	const { darkMode, setDarkMode } = useBoundStore()

	if (!darkMode) setDarkMode(true)

	return <NavigationButton {...args} />
}

const defaultArgs: NavigationButtonProps = {
	name: 'navigation-button',
	label: 'Navigation Button',
	handleClick: () => {},
	width: '40%',
}

export const Small = Template.bind({})
Small.args = {
	...defaultArgs,
	label: 'nav',
	width: '20%',
}

export const Default = Template.bind({})
Default.args = defaultArgs

export const Large = Template.bind({})
Large.args = {
	...defaultArgs,
	width: '60%',
}

export const ExtraLarge = Template.bind({})
ExtraLarge.args = {
	...defaultArgs,
	width: '80%',
}

export const Full = Template.bind({})
Full.args = {
	...defaultArgs,
	width: '100%',
}
