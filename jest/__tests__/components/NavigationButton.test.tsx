// Path: ./jest/__tests__/components/NavigationButton.test.tsx
import { render, findByText, act, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'

import NavigationButton from '../../../components/NavigationButton'

describe('NavigationButton', () => {
	it('Should have no accessibility violations', async () => {
		act(() =>
			render(
				<main>
					<NavigationButton name="test" label="test" handleClick={jest.fn()} />
				</main>,
			),
		)

		waitFor(async () => expect(await axe(screen.getByRole('main'))).toHaveNoViolations())
	})

	it('Should have a Button element with id "test-navigation-button"', async () => {
		const { container } = render(
			<main>
				<NavigationButton name="test" label="test" handleClick={jest.fn()} />
			</main>,
		)

		const test = container.querySelector('#test-navigation-button')
		expect(test).toBeTruthy()
	})

	it('Should have a Button element with text "test"', async () => {
		const { container } = render(
			<main>
				<NavigationButton name="test" label="test" handleClick={jest.fn()} />
			</main>,
		)

		const test = await findByText(container, 'test')
		expect(test).toBeTruthy()
	})

	it('Should have an enabled Button element', async () => {
		const { container } = render(
			<main>
				<NavigationButton name="test" label="test" handleClick={jest.fn()} />
			</main>,
		)

		const test = container.querySelector('#test-navigation-button')
		expect(test).toHaveProperty('disabled', false)
	})

	it('Should match snapshot', () => {
		const { container } = render(
			<main>
				<NavigationButton name="test" label="test" handleClick={jest.fn()} />
			</main>,
		)

		expect(container).toMatchSnapshot()
	})
})
