// Path: ./jest/__tests__/components/DarkModeSwitch.test.tsx
import { render, act, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'

import { DarkModeSwitch } from '../../../components'

describe('DarkModeSwitch', () => {
	let container: HTMLElement
	beforeEach(() => {
		act(() => {
			container = render(
				<main>
					<DarkModeSwitch name="test" />
				</main>,
			).container

			return container
		})
	})

	it('Should have no accessibility violations', async () => {
		waitFor(async () => expect(await axe(screen.getByRole('main'))).toHaveNoViolations())
	})

	it('Should have a Box element with id "test-dark-mode-switch-container"', async () => {
		const test = container.querySelector('#test-dark-mode-switch-container')
		expect(test).toBeTruthy()
	})

	it('Should have a Switch element with id "test-dark-mode-switch"', async () => {
		const test = container.querySelector('#test-dark-mode-switch')
		expect(test).toBeTruthy()
	})

	it('Should have an Icon element with id "test-dark-mode-switch-icon-unchecked"', async () => {
		const test = container.querySelector('#test-dark-mode-switch-icon-unchecked')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with id "test-dark-mode-switch-label-light"', async () => {
		const test = container.querySelector('#test-dark-mode-switch-label-light')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with text "Dark Mode" or "Light Mode"', async () => {
		const test = container.querySelector('#test-dark-mode-switch-label-light')?.textContent
		const options = ['Dark Mode', 'Light Mode']
		expect(options).toContain(test)
	})

	it('Should match snapshot', () => {
		expect(container).toMatchSnapshot()
	})
})
