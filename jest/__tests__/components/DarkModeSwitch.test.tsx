// Path: ./jest/__tests__/components/DarkModeSwitch.test.tsx
import { render, act, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'

import DarkModeSwitch from '../../../components/DarkModeSwitch'

describe('DarkModeSwitch', () => {
	it('Should have no accessibility violations', async () => {
		act(() =>
			render(
				<main>
					<DarkModeSwitch name="test" />
				</main>,
			),
		)
		waitFor(async () => expect(await axe(screen.getByRole('main'))).toHaveNoViolations())
	})

	it('Should have a Box element with id "test-dark-mode-switch-container"', async () => {
		const { container } = render(<DarkModeSwitch name="test" />)
		const test = container.querySelector('#test-dark-mode-switch-container')
		expect(test).toBeTruthy()
	})

	it('Should have a Switch element with id "test-dark-mode-switch"', async () => {
		const { container } = render(<DarkModeSwitch name="test" />)
		const test = container.querySelector('#test-dark-mode-switch')
		expect(test).toBeTruthy()
	})

	it('Should have an Icon element with id "test-dark-mode-switch-icon-unchecked"', async () => {
		const { container } = render(<DarkModeSwitch name="test" />)
		const test = container.querySelector('#test-dark-mode-switch-icon-unchecked')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with id "test-dark-mode-switch-label-light"', async () => {
		const { container } = render(<DarkModeSwitch name="test" />)
		const test = container.querySelector('#test-dark-mode-switch-label-light')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with text "Dark Mode" or "Light Mode"', async () => {
		const { container } = render(<DarkModeSwitch name="test" />)
		const test = container.querySelector('#test-dark-mode-switch-label-light')
		const options = ['Dark Mode', 'Light Mode']
		expect(options).toContain(test?.textContent)
	})

	it('Should match snapshot', () => {
		const { container } = render(<DarkModeSwitch name="test" />)
		expect(container).toMatchSnapshot()
	})
})
