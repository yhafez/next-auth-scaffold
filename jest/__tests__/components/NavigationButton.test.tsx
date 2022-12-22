// Path: ./jest/__tests__/components/NavigationButton.test.tsx
import { render, findByText, act, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'

import { NavigationButton } from '../../../components'

describe('NavigationButton', () => {
	let container: HTMLElement
	beforeEach(() => {
		act(() => {
			container = render(
				<main>
					<NavigationButton name="test" label="test" handleClick={jest.fn()} />
				</main>,
			).container

			return container
		})
	})

	it('Should have no accessibility violations', async () => {
		waitFor(async () => expect(await axe(screen.getByRole('main'))).toHaveNoViolations())
	})

	it('Should have a Button element with id "test-navigation-button"', async () => {
		const test = container.querySelector('#test-navigation-button')
		expect(test).toBeTruthy()
	})

	it('Should have a Button element with text "test"', async () => {
		const test = await findByText(container, 'test')
		expect(test).toBeTruthy()
	})

	it('Should have an enabled Button element', async () => {
		const test = container.querySelector('#test-navigation-button')
		expect(test).toHaveProperty('disabled', false)
	})

	it('Should match snapshot', () => {
		expect(container).toMatchSnapshot()
	})
})
