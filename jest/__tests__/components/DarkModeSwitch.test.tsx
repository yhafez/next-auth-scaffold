// Path: ./jest/__tests__/components/DarkModeSwitch.test.tsx
import { render, act, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'

import DarkModeSwitch from '../../../components/DarkModeSwitch'

describe('DarkModeSwitch', () => {
	it('Should have no accessibility violations', async () => {
		act(() =>
			render(
				<main>
					<DarkModeSwitch />
				</main>,
			),
		)
		await waitFor(async () => expect(await axe(screen.getByRole('main'))).toHaveNoViolations())
	})

	it('Should have a box element with id "dark-mode-switch-container"', async () => {
		const { container } = render(
			<main>
				<DarkModeSwitch />
			</main>,
		)
		const test = container.querySelector('#dark-mode-switch-container')
		expect(test).toBeTruthy()
	})

	it('Should have a Switch element with id "dark-mode-switch"', async () => {
		const { container } = render(
			<main>
				<DarkModeSwitch />
			</main>,
		)
		const test = container.querySelector('#dark-mode-switch')
		expect(test).toBeTruthy()
	})

	it('Should have an Icon element with id "dark-mode-icon"', async () => {
		const { container } = render(
			<main>
				<DarkModeSwitch />
			</main>,
		)
		const test = container.querySelector('#dark-mode-icon')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with id "dark-mode-switch-label"', async () => {
		const { container } = render(
			<main>
				<DarkModeSwitch />
			</main>,
		)
		const test = container.querySelector('#dark-mode-switch-label')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with text "Dark Mode" or "Light Mode"', async () => {
		const { container } = render(
			<main>
				<DarkModeSwitch />
			</main>,
		)
		const test = container.querySelector('#dark-mode-switch-label')
		const options = ['Dark Mode', 'Light Mode']
		expect(options).toContain(test?.textContent)
	})

	it('Should match snapshot', () => {
		const { container } = render(
			<main>
				<DarkModeSwitch />
			</main>,
		)
		expect(container).toMatchSnapshot()
	})
})
