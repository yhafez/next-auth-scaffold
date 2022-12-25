// Path: ./jest/__tests__/components/Drawers/DashboardDrawer.test.tsx

import { render, act, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'

import { DashboardDrawer } from '../../../../components'

describe('DashboardDrawer', () => {
	let container: HTMLElement

	beforeEach(() => {
		act(() => {
			container = render(
				<main>
					<DashboardDrawer />
				</main>,
			).container

			return container
		})
	})

	it('Should have no accessibility violations', async () => {
		waitFor(async () => expect(await axe(screen.getByRole('main'))).toHaveNoViolations())
	})

	it('Should have a Box element with id "dashboard-drawer"', () => {
		const test = container.querySelector('#dashboard-drawer')
		expect(test).toBeTruthy()
	})

	it('Should have a Box element with id "dashboard-drawer-header"', () => {
		const test = container.querySelector('#dashboard-drawer-header')
		expect(test).toBeTruthy()
	})

	it('Should have a Box element with id "dashboard-drawer-header-user"', () => {
		const test = container.querySelector('#dashboard-drawer-header-user')
		expect(test).toBeTruthy()
	})

	it('Should have a Button element with id "dashboard-drawer-user-avatar"', () => {
		const test = container.querySelector('#dashboard-drawer-user-avatar')
		expect(test).toBeTruthy()
	})

	it('Should have an Avatar element with id "dashboard-drawer-user-avatar-image"', () => {
		const test = container.querySelector('#dashboard-drawer-user-avatar-image')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with id "dashboard-drawer-user-avatar-name"', () => {
		const test = container.querySelector('#dashboard-drawer-user-avatar-name')
		expect(test).toBeTruthy()
	})

	it('Should have a List element with id "dashboard-drawer-header-actions"', () => {
		const test = container.querySelector('#dashboard-drawer-header-actions')
		expect(test).toBeTruthy()
	})

	it('Should have a ListItem element with id "dashboard-drawer-header-actions-home-list-item"', () => {
		const test = container.querySelector('#dashboard-drawer-header-actions-home-list-item')
		expect(test).toBeTruthy()
	})

	it('Should have a Link element with id "dashboard-home-drawer-link"', () => {
		const test = container.querySelector('#dashboard-home-drawer-link')
		expect(test).toBeTruthy()
	})

	it('Should have an Icon element with id "dashboard-home-drawer-icon"', () => {
		const test = container.querySelector('#dashboard-home-drawer-icon')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with id "dashboard-home-drawer-button-label"', () => {
		const test = container.querySelector('#dashboard-home-drawer-button-label')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with text "Home"', () => {
		const test = container.querySelector('#dashboard-home-drawer-button-label')?.textContent
		expect(test).toBe('Home')
	})

	it('Should have a ListItem element with id "dashboard-drawer-header-actions-profile-list-item"', () => {
		const test = container.querySelector('#dashboard-drawer-header-actions-profile-list-item')
		expect(test).toBeTruthy()
	})

	it('Should have a Link element with id "dashboard-profile-drawer-link"', () => {
		const test = container.querySelector('#dashboard-profile-drawer-link')
		expect(test).toBeTruthy()
	})

	it('Should have an Icon element with id "dashboard-profile-drawer-icon"', () => {
		const test = container.querySelector('#dashboard-profile-drawer-icon')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with id "dashboard-profile-drawer-button-label"', () => {
		const test = container.querySelector('#dashboard-profile-drawer-button-label')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with text "Profile"', () => {
		const test = container.querySelector('#dashboard-profile-drawer-button-label')?.textContent
		expect(test).toBe('Profile')
	})

	it('Should have a ListItem element with id "dashboard-drawer-header-actions-settings-list-item"', () => {
		const test = container.querySelector('#dashboard-drawer-header-actions-settings-list-item')
		expect(test).toBeTruthy()
	})

	it('Should have a Link element with id "dashboard-settings-drawer-link"', () => {
		const test = container.querySelector('#dashboard-settings-drawer-link')
		expect(test).toBeTruthy()
	})

	it('Should have an Icon element with id "dashboard-settings-drawer-icon"', () => {
		const test = container.querySelector('#dashboard-settings-drawer-icon')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with id "dashboard-settings-drawer-button-label"', () => {
		const test = container.querySelector('#dashboard-settings-drawer-button-label')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with text "Settings"', () => {
		const test = container.querySelector('#dashboard-settings-drawer-button-label')?.textContent
		expect(test).toBe('Settings')
	})

	it('Should have a List element with id "dashboard-drawer-footer"', () => {
		const test = container.querySelector('#dashboard-drawer-footer')
		expect(test).toBeTruthy()
	})

	it('Should have a ListItem element with id "dashboard-drawer-footer-color-picker-list-item"', () => {
		const test = container.querySelector('#dashboard-drawer-footer-color-picker-list-item')
		expect(test).toBeTruthy()
	})

	it('Should have an IconButton element with id "dashboard-color-picker-drawer-button"', () => {
		const test = container.querySelector('#dashboard-color-picker-drawer-button')
		expect(test).toBeTruthy()
	})

	it('Should have an Icon element with id "dashboard-color-picker-drawer-icon"', () => {
		const test = container.querySelector('#dashboard-color-picker-drawer-icon')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with id "dashboard-color-picker-drawer-button-label"', () => {
		const test = container.querySelector('#dashboard-color-picker-drawer-button-label')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with text "Theme Color"', () => {
		const test = container.querySelector('#dashboard-color-picker-drawer-button-label')?.textContent
		expect(test).toBe('Theme Color')
	})

	it('Should have a ListItem element with id "dashboard-drawer-footer-dark-mode-list-item"', () => {
		const test = container.querySelector('#dashboard-drawer-footer-dark-mode-list-item')
		expect(test).toBeTruthy()
	})

	it('Should have an IconButton element with id "dashboard-dark-mode-drawer-button"', () => {
		const test = container.querySelector('#dashboard-dark-mode-drawer-button')
		expect(test).toBeTruthy()
	})

	it('Should have an Icon element with id "dashboard-dark-mode-drawer-icon"', () => {
		const test = container.querySelector('#dashboard-dark-mode-drawer-icon')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with id "dashboard-dark-mode-drawer-button-label"', () => {
		const test = container.querySelector('#dashboard-dark-mode-drawer-button-label')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with text "Dark Mode" or "Light Mode"', () => {
		const test = container.querySelector('#dashboard-dark-mode-drawer-button-label')?.textContent
		const options = ['Dark Mode', 'Light Mode']
		expect(options).toContain(test)
	})

	it('Should have a ListItem element with id "dashboard-drawer-footer-log-out-list-item"', () => {
		const test = container.querySelector('#dashboard-drawer-footer-log-out-list-item')
		expect(test).toBeTruthy()
	})

	it('Should have an IconButton element with id "dashboard-log-out-drawer-button"', () => {
		const test = container.querySelector('#dashboard-log-out-drawer-button')
		expect(test).toBeTruthy()
	})

	it('Should have an Icon element with id "dashboard-log-out-drawer-icon"', () => {
		const test = container.querySelector('#dashboard-log-out-drawer-icon')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with id "dashboard-log-out-drawer-button-label"', () => {
		const test = container.querySelector('#dashboard-log-out-drawer-button-label')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with text "Logout"', () => {
		const test = container.querySelector('#dashboard-log-out-drawer-button-label')?.textContent
		expect(test).toBe('Logout')
	})

	it('Should math snapshot', () => {
		expect(container).toMatchSnapshot()
	})
})
