// Path: ./jest/__tests__/components/Drawer.test.tsx

import { render, act, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'

import Drawer from '../../../components/Drawer'

describe('Drawer', () => {
	it('Should have no accessibility violations', async () => {
		act(() =>
			render(
				<main>
					<Drawer open={true} handleDrawerClose={() => jest.fn()} drawerWidth={240} />
				</main>,
			),
		)

		await waitFor(async () => expect(await axe(screen.getByRole('main'))).toHaveNoViolations())
	})

	it('Should have a Drawer element with id "drawer"', () => {
		const { container } = render(
			<Drawer open={true} handleDrawerClose={() => jest.fn()} drawerWidth={240} />,
		)
		const test = container.querySelector('#drawer')
		expect(test).toBeTruthy()
	})

	it('Should have a Box element with id "drawer-header"', () => {
		const { container } = render(
			<Drawer open={true} handleDrawerClose={() => jest.fn()} drawerWidth={240} />,
		)
		const test = container.querySelector('#drawer-header')
		expect(test).toBeTruthy()
	})

	it('Should have a Box element with id "drawer-header-user"', () => {
		const { container } = render(
			<Drawer open={true} handleDrawerClose={() => jest.fn()} drawerWidth={240} />,
		)
		const test = container.querySelector('#drawer-header-user')
		expect(test).toBeTruthy()
	})

	it('Should have a Button element with id "drawer-user-avatar"', () => {
		const { container } = render(
			<Drawer open={true} handleDrawerClose={() => jest.fn()} drawerWidth={240} />,
		)
		const test = container.querySelector('#drawer-user-avatar')
		expect(test).toBeTruthy()
	})

	it('Should have an Avatar element with id "drawer-user-avatar-image"', () => {
		const { container } = render(
			<Drawer open={true} handleDrawerClose={() => jest.fn()} drawerWidth={240} />,
		)
		const test = container.querySelector('#drawer-user-avatar-image')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with id "drawer-user-avatar-name-placeholder"', () => {
		const { container } = render(
			<Drawer open={true} handleDrawerClose={() => jest.fn()} drawerWidth={240} />,
		)
		const test = container.querySelector('#drawer-user-avatar-name-placeholder')
		expect(test).toBeTruthy()
	})

	it('Should have a Box element with id "drawer-header-actions"', () => {
		const { container } = render(
			<Drawer open={true} handleDrawerClose={() => jest.fn()} drawerWidth={240} />,
		)
		const test = container.querySelector('#drawer-header-actions')
		expect(test).toBeTruthy()
	})

	it('Should have a Button element with id "menu-drawer-button"', () => {
		const { container } = render(
			<Drawer open={true} handleDrawerClose={() => jest.fn()} drawerWidth={240} />,
		)
		const test = container.querySelector('#menu-drawer-button')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with id "menu-drawer-button-label"', () => {
		const { container } = render(
			<Drawer open={true} handleDrawerClose={() => jest.fn()} drawerWidth={240} />,
		)
		const test = container.querySelector('#menu-drawer-button-label')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with text "menu"', () => {
		const { container } = render(
			<Drawer open={true} handleDrawerClose={() => jest.fn()} drawerWidth={240} />,
		)
		const test = container.querySelector('#menu-drawer-button-label')?.textContent
		expect(test).toBe('Menu')
	})

	it('Should have a Button element with id "settings-drawer-button"', () => {
		const { container } = render(
			<Drawer open={true} handleDrawerClose={() => jest.fn()} drawerWidth={240} />,
		)
		const test = container.querySelector('#settings-drawer-button')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with id "settings-drawer-button-label"', () => {
		const { container } = render(
			<Drawer open={true} handleDrawerClose={() => jest.fn()} drawerWidth={240} />,
		)
		const test = container.querySelector('#settings-drawer-button-label')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with text "settings"', () => {
		const { container } = render(
			<Drawer open={true} handleDrawerClose={() => jest.fn()} drawerWidth={240} />,
		)
		const test = container.querySelector('#settings-drawer-button-label')?.textContent
		expect(test).toBe('Settings')
	})

	it('Should have a Button element with id "profile-drawer-button"', () => {
		const { container } = render(
			<Drawer open={true} handleDrawerClose={() => jest.fn()} drawerWidth={240} />,
		)
		const test = container.querySelector('#profile-drawer-button')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with id "profile-drawer-button-label"', () => {
		const { container } = render(
			<Drawer open={true} handleDrawerClose={() => jest.fn()} drawerWidth={240} />,
		)
		const test = container.querySelector('#profile-drawer-button-label')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with text "profile"', () => {
		const { container } = render(
			<Drawer open={true} handleDrawerClose={() => jest.fn()} drawerWidth={240} />,
		)
		const test = container.querySelector('#profile-drawer-button-label')?.textContent
		expect(test).toBe('Profile')
	})

	it('Should have a Box element with id "drawer-footer"', () => {
		const { container } = render(
			<Drawer open={true} handleDrawerClose={() => jest.fn()} drawerWidth={240} />,
		)
		const test = container.querySelector('#drawer-footer')
		expect(test).toBeTruthy()
	})

	it('Should have a Button element with id "color-picker-drawer-button"', () => {
		const { container } = render(
			<Drawer open={true} handleDrawerClose={() => jest.fn()} drawerWidth={240} />,
		)
		const test = container.querySelector('#color-picker-drawer-button')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with id "color-picker-drawer-button-label"', () => {
		const { container } = render(
			<Drawer open={true} handleDrawerClose={() => jest.fn()} drawerWidth={240} />,
		)
		const test = container.querySelector('#color-picker-drawer-button-label')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with text "color picker"', () => {
		const { container } = render(
			<Drawer open={true} handleDrawerClose={() => jest.fn()} drawerWidth={240} />,
		)
		const test = container.querySelector('#color-picker-drawer-button-label')?.textContent
		expect(test).toBe('Theme Color')
	})

	it('Should have a Button element with id "dark-mode-drawer-button"', () => {
		const { container } = render(
			<Drawer open={true} handleDrawerClose={() => jest.fn()} drawerWidth={240} />,
		)
		const test = container.querySelector('#dark-mode-drawer-button')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with id "dark-mode-drawer-button-label"', () => {
		const { container } = render(
			<Drawer open={true} handleDrawerClose={() => jest.fn()} drawerWidth={240} />,
		)
		const test = container.querySelector('#dark-mode-drawer-button-label')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with text "Dark Mode" or "Light Mode"', () => {
		const { container } = render(
			<Drawer open={true} handleDrawerClose={() => jest.fn()} drawerWidth={240} />,
		)
		const options = ['Dark Mode', 'Light Mode']
		const test = container.querySelector('#dark-mode-drawer-button-label')?.textContent
		expect(options).toContain(test)
	})

	it('Should have a Button element with id "logout-drawer-button"', () => {
		const { container } = render(
			<Drawer open={true} handleDrawerClose={() => jest.fn()} drawerWidth={240} />,
		)
		const test = container.querySelector('#logout-drawer-button')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with id "logout-drawer-button-label"', () => {
		const { container } = render(
			<Drawer open={true} handleDrawerClose={() => jest.fn()} drawerWidth={240} />,
		)
		const test = container.querySelector('#logout-drawer-button-label')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with text "logout"', () => {
		const { container } = render(
			<Drawer open={true} handleDrawerClose={() => jest.fn()} drawerWidth={240} />,
		)
		const test = container.querySelector('#logout-drawer-button-label')?.textContent
		expect(test).toBe('Logout')
	})

	it('Should math snapshot', () => {
		const { container } = render(
			<Drawer open={true} handleDrawerClose={() => jest.fn()} drawerWidth={240} />,
		)
		expect(container).toMatchSnapshot()
	})
})
