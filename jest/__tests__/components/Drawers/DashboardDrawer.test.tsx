// Path: ./jest/__tests__/components/Drawers/DashboardDrawer.test.tsx

import { render, act, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'

import DashboardDrawer from '../../../../components/Drawers/DashboardDrawer'

describe('DashboardDrawer', () => {
	it('Should have no accessibility violations', async () => {
		act(() =>
			render(
				<main>
					<DashboardDrawer />
				</main>,
			),
		)

		waitFor(async () => expect(await axe(screen.getByRole('main'))).toHaveNoViolations())
	})

	it('Should have a Box element with id "dashboard-drawer"', () => {
		const { container } = render(<DashboardDrawer />)

		const test = container.querySelector('#dashboard-drawer')
		expect(test).toBeTruthy()
	})

	it('Should have a Box element with id "dashboard-drawer-header"', () => {
		const { container } = render(<DashboardDrawer />)

		const test = container.querySelector('#dashboard-drawer-header')
		expect(test).toBeTruthy()
	})

	it('Should have a Box element with id "dashboard-drawer-header-user"', () => {
		const { container } = render(<DashboardDrawer />)
		const test = container.querySelector('#dashboard-drawer-header-user')
		expect(test).toBeTruthy()
	})

	it('Should have a Button element with id "dashboard-drawer-user-avatar"', () => {
		const { container } = render(<DashboardDrawer />)
		const test = container.querySelector('#dashboard-drawer-user-avatar')
		expect(test).toBeTruthy()
	})

	it('Should have an Avatar element with id "dashboard-drawer-user-avatar-image"', () => {
		const { container } = render(<DashboardDrawer />)
		const test = container.querySelector('#dashboard-drawer-user-avatar-image')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with id "dashboard-drawer-user-avatar-name-placeholder"', () => {
		const { container } = render(<DashboardDrawer />)
		const test = container.querySelector('#dashboard-drawer-user-avatar-name-placeholder')
		expect(test).toBeTruthy()
	})

	it('Should have a Box element with id "dashboard-drawer-header-actions"', () => {
		const { container } = render(<DashboardDrawer />)
		const test = container.querySelector('#dashboard-drawer-header-actions')
		expect(test).toBeTruthy()
	})

	it('Should have a Button element with id "dashboard-menu-drawer-button"', () => {
		const { container } = render(<DashboardDrawer />)
		const test = container.querySelector('#dashboard-menu-drawer-button')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with id "menu-drawer-button-label"', () => {
		const { container } = render(<DashboardDrawer />)
		const test = container.querySelector('#dashboard-menu-drawer-button-label')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with text "dashboard-menu"', () => {
		const { container } = render(<DashboardDrawer />)
		const test = container.querySelector('#dashboard-menu-drawer-button-label')?.textContent
		expect(test).toBe('Menu')
	})

	it('Should have a Button element with id "dashboard-settings-drawer-button"', () => {
		const { container } = render(<DashboardDrawer />)
		const test = container.querySelector('#dashboard-settings-drawer-button')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with id "dashboard-settings-drawer-button-label"', () => {
		const { container } = render(<DashboardDrawer />)
		const test = container.querySelector('#dashboard-settings-drawer-button-label')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with text "dashboard-settings"', () => {
		const { container } = render(<DashboardDrawer />)
		const test = container.querySelector('#dashboard-settings-drawer-button-label')?.textContent
		expect(test).toBe('Settings')
	})

	it('Should have a Button element with id "dashboard-profile-drawer-button"', () => {
		const { container } = render(<DashboardDrawer />)
		const test = container.querySelector('#dashboard-profile-drawer-button')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with id "dashboard-profile-drawer-button-label"', () => {
		const { container } = render(<DashboardDrawer />)
		const test = container.querySelector('#dashboard-profile-drawer-button-label')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with text "dashboard-profile"', () => {
		const { container } = render(<DashboardDrawer />)
		const test = container.querySelector('#dashboard-profile-drawer-button-label')?.textContent
		expect(test).toBe('Profile')
	})

	it('Should have a Box element with id "dashboard-drawer-footer"', () => {
		const { container } = render(<DashboardDrawer />)
		const test = container.querySelector('#dashboard-drawer-footer')
		expect(test).toBeTruthy()
	})

	it('Should have a Button element with id "dashboard-color-picker-drawer-button"', () => {
		const { container } = render(<DashboardDrawer />)
		const test = container.querySelector('#dashboard-color-picker-drawer-button')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with id "dashboard-color-picker-drawer-button-label"', () => {
		const { container } = render(<DashboardDrawer />)
		const test = container.querySelector('#dashboard-color-picker-drawer-button-label')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with text "Theme Color"', () => {
		const { container } = render(<DashboardDrawer />)
		const test = container.querySelector('#dashboard-color-picker-drawer-button-label')?.textContent
		expect(test).toBe('Theme Color')
	})

	it('Should have a Button element with id "dashboard-dark-mode-drawer-button"', () => {
		const { container } = render(<DashboardDrawer />)
		const test = container.querySelector('#dashboard-dark-mode-drawer-button')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with id "dashboard-dark-mode-drawer-button-label"', () => {
		const { container } = render(<DashboardDrawer />)
		const test = container.querySelector('#dashboard-dark-mode-drawer-button-label')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with text "Dark Mode" or "Light Mode"', () => {
		const { container } = render(<DashboardDrawer />)
		const options = ['Dark Mode', 'Light Mode']
		const test = container.querySelector('#dashboard-dark-mode-drawer-button-label')?.textContent
		expect(options).toContain(test)
	})

	it('Should have a Button element with id "dashboard-logout-drawer-button"', () => {
		const { container } = render(<DashboardDrawer />)
		const test = container.querySelector('#dashboard-logout-drawer-button')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with id "dashboard-logout-drawer-button-label"', () => {
		const { container } = render(<DashboardDrawer />)
		const test = container.querySelector('#dashboard-logout-drawer-button-label')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with text "logout"', () => {
		const { container } = render(<DashboardDrawer />)
		const test = container.querySelector('#dashboard-logout-drawer-button-label')?.textContent
		expect(test).toBe('Logout')
	})

	it('Should math snapshot', () => {
		const { container } = render(<DashboardDrawer />)
		expect(container).toMatchSnapshot()
	})
})
